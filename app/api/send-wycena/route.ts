import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { z } from "zod";

const payloadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Imię i nazwisko musi mieć co najmniej 2 znaki")
    .max(100, "Imię i nazwisko nie może przekraczać 100 znaków"),
  email: z
    .string()
    .trim()
    .email("Podaj prawidłowy adres e-mail")
    .max(100, "Adres e-mail nie może przekraczać 100 znaków"),
  phone: z
    .string()
    .trim()
    .min(9, "Numer telefonu musi mieć co najmniej 9 cyfr")
    .max(20, "Numer telefonu nie może przekraczać 20 znaków")
    .regex(/^[\d\s\+\-\(\)]+$/, "Podaj prawidłowy numer telefonu"),
  message: z
    .string()
    .trim()
    .max(2000, "Wiadomość nie może przekraczać 2000 znaków")
    .optional()
    .default("-"),
  consentPrivacy: z.boolean().refine((value) => value === true, {
    message: "Wymagana zgoda na przetwarzanie danych",
  }),
  consentMarketing: z.boolean().optional().default(false),
});

const isSmtpAuthError = (error: unknown): boolean => {
  if (!error || typeof error !== "object") return false;
  const candidate = error as { code?: string; responseCode?: number };
  return candidate.code === "EAUTH" || candidate.responseCode === 535;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = payloadSchema.safeParse(body);

    if (!parsed.success) {
      const issue = parsed.error.issues[0];
      return NextResponse.json(
        { success: false, message: issue.message },
        { status: 400 }
      );
    }

    const { name, email, phone, message, consentMarketing } = parsed.data;

    if (
      !process.env.EMAIL_HOST ||
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.EMAIL_TO
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Błąd konfiguracji serwera. Skontaktuj się z administratorem.",
        },
        { status: 500 }
      );
    }

    const smtpPort = Number.parseInt(process.env.EMAIL_PORT || "465", 10);
    const smtpSecure =
      process.env.EMAIL_SECURE != null
        ? process.env.EMAIL_SECURE === "true"
        : smtpPort === 465;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const senderAddress = process.env.EMAIL_USER || "noreply@iso-dach.eu";

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

    await transporter.sendMail({
      from: `Formularz ISO-DACH <${senderAddress}>`,
      replyTo: email,
      to: process.env.EMAIL_TO,
      subject: `Wycena ${name}`,
      text: emailText,
      html: emailHtml,
    });

    return NextResponse.json({
      success: true,
      message: "Dziękujemy za wysłanie formularza! Skontaktujemy się wkrótce.",
    });
  } catch (error) {
    console.error("Błąd /api/send-wycena:", error);

    if (isSmtpAuthError(error)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Błąd autoryzacji SMTP (login/hasło). Sprawdź konfigurację skrzynki nadawczej.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie później.",
      },
      { status: 500 }
    );
  }
}
