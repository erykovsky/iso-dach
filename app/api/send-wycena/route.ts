import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const data = await request.json();

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || "587"),
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Compose the email message
  const mailOptions = {
    from: `${data.name} <${data.email}>`,
    to: process.env.EMAIL_TO,
    subject: "Nowe zapytanie o wycenę",
    text: `
      Nowe zapytanie o wycenę:
      Imię i Nazwisko: ${data.name}
      Email: ${data.email}
      Telefon: ${data.phone}
      Adres inwestycji: ${data.address}
      Rodzaj projektu: ${data.projectType}
      Dodatkowe informacje: ${data.message}
    `,
    html: `
      <h2>Nowe zapytanie o wycenę</h2>
      <p><strong>Imię i Nazwisko:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Telefon:</strong> ${data.phone}</p>
      <p><strong>Adres inwestycji:</strong> ${data.address}</p>
      <p><strong>Rodzaj projektu:</strong> ${data.projectType}</p>
      <p><strong>Dodatkowe informacje:</strong> ${data.message}</p>
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Formularz wysłany pomyślnie" });
  } catch (error) {
    console.error("Błąd wysyłania emaila:", error);
    return NextResponse.json(
      { message: "Wystąpił błąd podczas wysyłania formularza" },
      { status: 500 }
    );
  }
}
