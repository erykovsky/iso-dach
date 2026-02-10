import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookiePolicy } from "@/components/cookie-policy";
import { GTMWithConsent } from "@/components/gtm-with-consent";
import { Toaster } from "@/components/ui/sonner";
import { OrganizationSchema } from "@/components/schema/organization-schema";
import { LocalBusinessSchema } from "@/components/schema/local-business-schema";
import { COOKIE_CONSENT_VERSION } from "@/lib/cookie-consent";
import type { Metadata, Viewport } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://iso-dach.eu"),
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
    url: "https://iso-dach.eu",
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
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://iso-dach.eu" />
        <link rel="dns-prefetch" href="https://iso-dach.eu" />
        <Script
          id="google-consent-mode"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'personalization_storage': 'denied',
                'analytics_storage': 'denied',
                'functionality_storage': 'granted',
                'security_storage': 'granted',
                'wait_for_update': 500
              });
              
              // Check for stored consent and update if exists
              try {
                const consent = localStorage.getItem('cookieConsent');
                if (consent) {
                  const parsed = JSON.parse(consent);
                  if (
                    parsed &&
                    parsed.version === ${COOKIE_CONSENT_VERSION} &&
                    parsed.necessary === true &&
                    typeof parsed.analytics === 'boolean' &&
                    typeof parsed.marketing === 'boolean'
                  ) {
                    gtag('consent', 'update', {
                      'ad_storage': parsed.marketing ? 'granted' : 'denied',
                      'ad_user_data': parsed.marketing ? 'granted' : 'denied',
                      'ad_personalization': parsed.marketing ? 'granted' : 'denied',
                      'personalization_storage': parsed.marketing ? 'granted' : 'denied',
                      'analytics_storage': parsed.analytics ? 'granted' : 'denied'
                    });
                  }
                }
              } catch (e) {
                // Silent fail if localStorage not available
              }
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <OrganizationSchema />
        <LocalBusinessSchema />
        {gtmId ? <GTMWithConsent gtmId={gtmId} /> : null}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Przejdź do treści
        </a>
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
