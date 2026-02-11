import { ContactForm } from "./contact-form";
import { Building, Mail, Phone } from "lucide-react";
import { Metadata } from "next";
import { WebPageSchema } from "@/components/schema/webpage-schema";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Skontaktuj się z ISO-DACH. Tel: +48 660 441 941. Bezpłatna wycena izolacji poddasza, ścian i stropów w 24h. Działamy na terenie woj. zachodniopomorskiego. Siedziba: Dobrzany k. Szczecina.",
  keywords: [
    "kontakt ISO-DACH",
    "wycena izolacji",
    "ocieplanie Szczecin",
    "izolacja poddasza wycena",
    "firma ociepleniowa kontakt",
  ],
  alternates: {
    canonical: "https://iso-dach.eu/kontakt",
  },
  openGraph: {
    title: "Kontakt",
    description: "Skontaktuj się z nami. Bezpłatna wycena w 24h. Tel: +48 660 441 941",
    url: "https://iso-dach.eu/kontakt",
    type: "website",
    images: [
      {
        url: "/img/izolacje-budynkow-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Kontakt z ISO-DACH - profesjonalne izolacje",
      },
    ],
  },
};

export default function KontaktPage() {
    return (
        <>
            <WebPageSchema
                title="Kontakt"
                description="Skontaktuj się z ISO-DACH i zamów bezpłatną wycenę izolacji."
                url="https://iso-dach.eu/kontakt"
                breadcrumbs={[
                    { name: "Strona główna", url: "https://iso-dach.eu" },
                    { name: "Kontakt", url: "https://iso-dach.eu/kontakt" },
                ]}
            />
            <div className="min-h-screen marketing-page">
                <section className="marketing-hero py-14">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl font-bold text-white">Skontaktuj się z nami</h1>
                        <p className="mx-auto mt-4 max-w-2xl text-white/80">
                            Odpowiadamy szybko i konkretnie. Napisz lub zadzwoń, a
                            przygotujemy ofertę dopasowaną do Twojego budynku.
                        </p>
                    </div>
                </section>

                <div className="container mx-auto px-4 py-8 md:py-12">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="flex flex-col gap-6 md:col-span-2">
                            <h2 className="text-3xl font-bold text-[#800020]">
                                Formularz kontaktowy
                            </h2>
                            <ContactForm />
                        </div>
                        <div>
                            <h2 className="mb-4 text-2xl font-semibold text-primary">
                                Dane kontaktowe
                            </h2>
                            <section className="soft-card rounded-2xl p-5 sm:p-6">
                                <h3 className="text-xl font-semibold text-primary">
                                    Bezpośredni kontakt
                                </h3>
                                <div className="mt-4 space-y-4">
                                    <div className="flex items-center space-x-2">
                                        <Phone className="text-primary" />
                                        <a
                                            href="tel:+48660441941"
                                            className="text-primary transition-colors hover:text-secondary"
                                        >
                                            +48 660 441 941
                                        </a>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Mail className="text-primary" />
                                        <a
                                            href="mailto:info@iso-dach.eu"
                                            className="text-primary transition-colors hover:text-secondary"
                                        >
                                            info@iso-dach.eu
                                        </a>
                                    </div>
                                </div>
                            </section>
                            <section className="soft-card mt-8 rounded-2xl p-5 sm:p-6">
                                <h3 className="text-xl font-semibold text-primary">Adres</h3>
                                <div className="mt-4 space-y-4">
                                    <div className="flex items-start space-x-2">
                                        <Building className="mt-1 shrink-0 text-primary" />
                                        <address className="not-italic">
                                            ISO DACH Dariusz Jagodziński
                                            <br />
                                            ul. Jana Pawła II 34
                                            <br />
                                            73-130 Dobrzany
                                        </address>
                                    </div>
                                    <div>
                                        <p>
                                            <strong>NIP:</strong> 8541386908
                                        </p>
                                        <p>
                                            <strong>REGON:</strong> 811791710
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <p className="mt-8 text-muted-foreground">
                                Jeśli wolisz bezpośredni kontakt, możesz skorzystać z
                                podanych powyżej danych. Odpowiemy na Twoje pytania tak
                                szybko, jak to możliwe.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
