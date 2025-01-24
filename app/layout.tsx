import type { Metadata, Viewport } from "next";

import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Izolacje dachów, stropów i piwnic – firma ISO-DACH",
  description:
    "Zajmujemy się ocieplaniem budynków mieszkalnych, przemysłowych i firmowych. Wykorzystujemy w tym celu wełnę celulozową. Zapoznaj się z naszą ofertą na stronie.",
};

export const viewport: Viewport = {
  userScalable: false,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
