import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookiePolicy } from "@/components/cookie-policy";
import { GTMWithConsent } from "@/components/gtm-with-consent";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Izolacje dachów, stropów i piwnic – firma ISO-DACH",
  description:
    "Zajmujemy się ocieplaniem budynków mieszkalnych, przemysłowych i firmowych. Wykorzystujemy w tym celu wełnę celulozową. Zapoznaj się z naszą ofertą na stronie.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="antialiased">
        <GTMWithConsent gtmId="GTM-XYZ" />
        <Header />
        {children}
        {modal}
        <Footer />
        <CookiePolicy />
        <Toaster position="bottom-right" closeButton />
      </body>
    </html>
  );
}
