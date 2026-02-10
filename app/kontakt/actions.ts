"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

// Sprawdź czy jesteśmy w trybie deweloperskim
const isDevelopment = process.env.NODE_ENV === "development";

export type ContactFormState = {
    status: "idle" | "success" | "error";
    message: string;
};

const getFormValue = (value: FormDataEntryValue | null): string =>
    typeof value === "string" ? value.trim() : "";

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
        .min(9, "Numer telefonu musi mieć co najmniej 9 cyfr")
        .max(20, "Numer telefonu nie może przekraczać 20 znaków")
        .regex(/^[\d\s\+\-\(\)]+$/, "Podaj prawidłowy numer telefonu"),
    message: z
        .string()
        .max(2000, "Wiadomość nie może przekraczać 2000 znaków")
        .optional()
        .default("-"),
    consentPrivacy: z.boolean().refine((val) => val === true, {
        message: "Wymagana zgoda na przetwarzanie danych",
    }),
    consentMarketing: z.boolean().optional().default(false),
});

export async function sendWycenaAction(
    _prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    // Honeypot - sprawdzenie czy pole website jest wypełnione (boty wypełniają wszystkie pola)
    const honeypot = getFormValue(formData.get("website"));
    if (honeypot) {
        // Symulacja sukcesu - bot myśli że formularz został wysłany
        return {
            status: "success",
            message: "Dziękujemy za wysłanie formularza! Skontaktujemy się wkrótce.",
        };
    }

    // Przygotowanie danych do walidacji
    const rawData = {
        name: getFormValue(formData.get("name")),
        email: getFormValue(formData.get("email")),
        phone: getFormValue(formData.get("phone")),
        message: getFormValue(formData.get("message")) || "-",
        consentPrivacy: formData.get("consentPrivacy") === "on",
        consentMarketing: formData.get("consentMarketing") === "on",
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

    const { name, email, phone, message, consentMarketing } = validationResult.data;

    // Sprawdź czy zmienne środowiskowe są ustawione
    if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error("Brak zmiennych środowiskowych dla SMTP");
        return {
            status: "error",
            message: "Błąd konfiguracji serwera. Skontaktuj się z administratorem.",
        };
    }

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number.parseInt(process.env.EMAIL_PORT || "587"),
        secure: true,
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
Telefon: ${phone}
Treść wiadomości: ${message}
Zgoda marketingowa: ${consentMarketing ? "TAK" : "NIE"}
    `.trim();

    const emailHtml = `
<h2>Nowe zapytanie o wycenę</h2>
<p><strong>Imię i nazwisko:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Telefon:</strong> ${phone}</p>
<p><strong>Treść wiadomości:</strong> ${message}</p>
<p><strong>Zgoda marketingowa:</strong> ${consentMarketing ? "TAK" : "NIE"}</p>
    `.trim();

    // W trybie deweloperskim - logowanie zamiast wysyłania
    if (isDevelopment) {
        console.log("\n=== TRYB DEWELOPERSKI - EMAIL NIE ZOSTAŁ WYSŁANY ===");
        console.log("Do (główny):", process.env.EMAIL_TO);
        console.log("Do (zapasowy):", process.env.EMAIL_SECONDARY_TO);
        console.log("Temat:", `Wycena ${name}`);
        console.log("Dane formularza:");
        console.log("  Imię:", name);
        console.log("  Email:", email);
        console.log("  Telefon:", phone);
        console.log("=== KONIEC LOGU ===\n");

        return {
            status: "success",
            message: "[DEV] Formularz przetworzony (sprawdź konsolę serwera)",
        };
    }

    try {
        // Wyślij na główny serwer (e-kei)
        await transporter.sendMail({
            from: `Formularz ISO-DACH <${senderAddress}>`,
            ...(email ? { replyTo: email } : {}),
            to: process.env.EMAIL_TO,
            subject: `Wycena ${name}`,
            text: emailText,
            html: emailHtml,
        });

        // Wyślij na zapasowy serwer (Interia) jeśli skonfigurowany
        if (process.env.EMAIL_SECONDARY_HOST && process.env.EMAIL_SECONDARY_USER) {
            const secondaryTransporter = nodemailer.createTransport({
                host: process.env.EMAIL_SECONDARY_HOST,
                port: Number.parseInt(process.env.EMAIL_SECONDARY_PORT || "587"),
                secure: false, // STARTTLS
                auth: {
                    user: process.env.EMAIL_SECONDARY_USER,
                    pass: process.env.EMAIL_SECONDARY_PASS,
                },
                tls: {
                    ciphers: 'SSLv3',
                    rejectUnauthorized: false
                }
            });

            await secondaryTransporter.sendMail({
                from: `Formularz ISO-DACH <${process.env.EMAIL_SECONDARY_USER}>`,
                ...(email ? { replyTo: email } : {}),
                to: process.env.EMAIL_SECONDARY_TO,
                subject: `Wycena ${name}`,
                text: emailText,
                html: emailHtml,
            });
        }

        return {
            status: "success",
            message: "Dziękujemy za wysłanie formularza! Skontaktujemy się wkrótce.",
        };
    } catch (error) {
        console.error("Błąd wysyłania emaila:", error);
        return {
            status: "error",
            message: "Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie później.",
        };
    }
}
