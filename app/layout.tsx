import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookiePolicy } from "@/components/cookie-policy";
import { GTMWithConsent } from "@/components/gtm-with-consent";
import { Toaster } from "@/components/ui/sonner";
import { OrganizationSchema } from "@/components/schema/organization-schema";
import { LocalBusinessSchema } from "@/components/schema/local-business-schema";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iso-dach.eu"),
  title: {
    default: "Izolacje dachów, stropów i piwnic – firma ISO-DACH",
    template: "%s | ISO-DACH",
  },
  description:
    "Profesjonalne ocieplanie budynków wełną celulozową. Izolacja poddaszy, ścian, stropów i piwnic. Oszczędność energii do 40%. Bezpłatna wycena. Działamy na terenie woj. zachodniopomorskiego.",
  keywords: [
    "izolacja poddasza",
    "ocieplanie ścian",
    "wełna celulozowa",
    "izolacja stropów",
    "termomodernizacja",
    "ocieplanie piwnic",
    "izolacja celulozowa",
    "ocieplanie domu",
    "firma ociepleniowa",
    "Szczecin",
    "zachodniopomorskie",
  ],
  authors: [{ name: "ISO-DACH" }],
  creator: "ISO-DACH",
  publisher: "ISO-DACH",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://www.iso-dach.eu",
    siteName: "ISO-DACH",
    title: "Izolacje dachów, stropów i piwnic – firma ISO-DACH",
    description:
      "Profesjonalne ocieplanie budynków wełną celulozową. Izolacja poddaszy, ścian, stropów i piwnic. Oszczędność energii do 40%.",
    images: [
      {
        url: "/img/9.jpg",
        width: 1200,
        height: 630,
        alt: "ISO-DACH - profesjonalne izolacje budynków",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Izolacje dachów, stropów i piwnic – firma ISO-DACH",
    description:
      "Profesjonalne ocieplanie budynków wełną celulozową. Izolacja poddaszy, ścian, stropów i piwnic.",
    images: ["/img/9.jpg"],
  },
  category: "business",
  classification: "Construction Services",
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
        <OrganizationSchema />
        <LocalBusinessSchema />
        <GTMWithConsent gtmId="GTM-XYZ" />
        <Header />
        <main id="main-content">
          {children}
        </main>
        {modal}
        <Footer />
        <CookiePolicy />
        <Toaster position="bottom-right" closeButton />
      </body>
    </html>
  );
}
