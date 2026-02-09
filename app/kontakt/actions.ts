"use server";

import nodemailer from "nodemailer";

export type ContactFormState = {
    status: "idle" | "success" | "error";
    message: string;
};

const getFormValue = (value: FormDataEntryValue | null): string =>
    typeof value === "string" ? value.trim() : "";

export async function sendWycenaAction(
    _prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    const name = getFormValue(formData.get("name"));
    const email = getFormValue(formData.get("email"));
    const phone = getFormValue(formData.get("phone"));
    const message = getFormValue(formData.get("message")) || "-";
    const consentPrivacy = formData.get("consentPrivacy") === "on";
    const consentMarketing = formData.get("consentMarketing") === "on";

    if (!name) {
        return {
            status: "error",
            message: "Imię i nazwisko jest wymagane.",
        };
    }

    if (!phone) {
        return {
            status: "error",
            message: "Numer telefonu jest wymagany.",
        };
    }

    if (!email) {
        return {
            status: "error",
            message: "Adres e-mail jest wymagany.",
        };
    }

    if (!consentPrivacy) {
        return {
            status: "error",
            message: "Brak wymaganej zgody na przetwarzanie danych.",
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
    });

    const senderAddress = process.env.EMAIL_USER || "noreply@iso-dach.eu";

    try {
        await transporter.sendMail({
            from: `Formularz ISO-DACH <${senderAddress}>`,
            ...(email ? { replyTo: email } : {}),
            to: process.env.EMAIL_TO,
            subject: `Wycena ${name}`,
            text: `
Nowe zapytanie o wycenę:
Imię i nazwisko: ${name}
Email: ${email}
Telefon: ${phone}
Treść wiadomości: ${message}
Zgoda marketingowa: ${consentMarketing ? "TAK" : "NIE"}
            `.trim(),
            html: `
<h2>Nowe zapytanie o wycenę</h2>
<p><strong>Imię i nazwisko:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Telefon:</strong> ${phone}</p>
<p><strong>Treść wiadomości:</strong> ${message}</p>
<p><strong>Zgoda marketingowa:</strong> ${consentMarketing ? "TAK" : "NIE"}</p>
            `.trim(),
        });

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
