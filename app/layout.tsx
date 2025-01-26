import type { Metadata, Viewport } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";
import { Header } from "@/components/header";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/footer";

const manrope = Manrope({
  subsets: ["latin"],
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
      <GoogleTagManager gtmId="GTM-XYZ" />
      <body className={`${manrope.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
