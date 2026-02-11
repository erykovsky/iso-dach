"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

export type ContactFormState = {
    status: "idle" | "success" | "error";
    message: string;
    name?: string;
    phone?: string;
    email?: string;
    consentPrivacy?: boolean;
};

const getFormValue = (value: FormDataEntryValue | null): string =>
    typeof value === "string" ? value.trim() : "";

const isSmtpAuthError = (error: unknown): boolean => {
    if (!error || typeof error !== "object") return false;
    const candidate = error as { code?: string; responseCode?: number };
    return candidate.code === "EAUTH" || candidate.responseCode === 535;
};

const maskEmail = (email: string): string => {
    const [name, domain] = email.split("@");
    if (!domain) return "***";
    return `${(name || "").slice(0, 2)}***@${domain}`;
};

// Schema walidacji Zod
const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, "Imię i nazwisko musi mieć co najmniej 2 znaki")
        .max(100, "Imię i nazwisko nie może przekraczać 100 znaków"),
    email: z
        .string()
        .email("Podaj prawidłowy adres e-mail")
        .max(100, "Adres e-mail nie może przekraczać 100 znaków"),
    phone: z
        .string()
        .max(30, "Numer telefonu nie może przekraczać 30 znaków")
        .refine((value) => value === "" || /^[\d\s\+\-\(\)]+$/.test(value), {
            message: "Podaj prawidłowy numer telefonu",
        })
        .refine((value) => value === "" || value.replace(/\D/g, "").length >= 7, {
            message: "Numer telefonu musi mieć co najmniej 7 cyfr",
        }),
    message: z
        .string()
        .trim()
        .min(1, "Treść wiadomości jest wymagana")
        .max(2000, "Wiadomość nie może przekraczać 2000 znaków"),
    consentPrivacy: z.boolean().refine((val) => val === true, {
        message: "Wymagana zgoda na przetwarzanie danych",
    }),
});

export async function sendWycenaAction(
    _prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    // Przygotowanie danych do walidacji
    const rawData = {
        name: getFormValue(formData.get("name")),
        email: getFormValue(formData.get("email")),
        phone: getFormValue(formData.get("phone")),
        message: getFormValue(formData.get("message")),
        consentPrivacy: formData.get("consentPrivacy") === "on",
    };

    // Walidacja Zod
    const validationResult = contactFormSchema.safeParse(rawData);

    if (!validationResult.success) {
        // Pobierz pierwszy błąd walidacji
        const firstError = validationResult.error.issues[0];
        return {
            status: "error",
            message: firstError.message,
        };
    }

    const { name, email, phone, message } = validationResult.data;

    // Sprawdź czy zmienne środowiskowe są ustawione
    if (
        !process.env.EMAIL_HOST ||
        !process.env.EMAIL_USER ||
        !process.env.EMAIL_PASS ||
        !process.env.EMAIL_TO
    ) {
        console.error("Brak zmiennych środowiskowych dla SMTP");
        return {
            status: "error",
            message: "Błąd konfiguracji serwera. Skontaktuj się z administratorem.",
        };
    }

    const primaryPort = Number.parseInt(process.env.EMAIL_PORT || "465", 10);
    const primarySecure = primaryPort === 465;

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: primaryPort,
        secure: primarySecure,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false, // Akceptuj self-signed certyfikaty
        },
    });

    const senderAddress = process.env.EMAIL_USER || "noreply@iso-dach.eu";

    // Przygotuj zawartość emaila
    const emailText = `
Nowe zapytanie o wycenę:
Imię i nazwisko: ${name}
Email: ${email}
Telefon: ${phone || "Nie podano"}
Treść wiadomości: ${message}
    `.trim();

    const emailHtml = `
<h2>Nowe zapytanie o wycenę</h2>
<p><strong>Imię i nazwisko:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Telefon:</strong> ${phone || "Nie podano"}</p>
<p><strong>Treść wiadomości:</strong> ${message}</p>
    `.trim();

    let primaryError: unknown = null;
    let sentPrimary = false;

    try {
        console.log("[kontakt] SMTP send attempt", {
            host: process.env.EMAIL_HOST,
            port: primaryPort,
            secure: primarySecure,
            user: maskEmail(process.env.EMAIL_USER),
            to: maskEmail(process.env.EMAIL_TO),
        });

        const info = await transporter.sendMail({
            from: `Formularz ISO-DACH <${senderAddress}>`,
            ...(email ? { replyTo: email } : {}),
            to: process.env.EMAIL_TO,
            subject: `Wycena ${name}`,
            text: emailText,
            html: emailHtml,
        });

        console.log("[kontakt] SMTP send result", {
            messageId: info.messageId,
            accepted: info.accepted,
            rejected: info.rejected,
            response: info.response,
        });

        if ((info.accepted?.length ?? 0) === 0) {
            throw new Error("SMTP accepted list is empty");
        }

        sentPrimary = true;
    } catch (error) {
        primaryError = error;
        console.error("Błąd wysyłania emaila (SMTP główny):", error);
    }

    if (sentPrimary) {
        return {
            status: "success",
            message: "Dziękujemy za wysłanie formularza! Skontaktujemy się wkrótce.",
        };
    }

    if (isSmtpAuthError(primaryError)) {
        return {
            status: "error",
            message:
                "Błąd autoryzacji SMTP (login/hasło). Sprawdź konfigurację skrzynki nadawczej.",
        };
    }

    return {
        status: "error",
        message: "Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie później.",
    };
}
