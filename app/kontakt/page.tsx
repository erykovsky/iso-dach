import { ContactForm } from "./contact-form";
import { Building, Mail, Phone } from "lucide-react";
import { Metadata } from "next";
import { WebPageSchema } from "@/components/schema/webpage-schema";

export const metadata: Metadata = {
  title: "Kontakt i bezpłatna wycena izolacji",
  description:
    "Skontaktuj się z ISO-DACH i zamów bezpłatną wycenę izolacji poddasza, ścian lub stropów. Działamy głównie w woj. zachodniopomorskim i dojeżdżamy do klientów.",
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
    title: "Kontakt i bezpłatna wycena izolacji",
    description: "Skontaktuj się z nami. Bezpłatna wycena w 24h. Tel: +48 660 441 941",
    url: "https://iso-dach.eu/kontakt",
    type: "website",
    images: [
      {
        url: "/img/o-nas/hero.jpg",
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
        <section className="marketing-hero py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
<h1 className="text-4xl font-bold text-white md:text-5xl">Skontaktuj się z nami</h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/85">
              Odpowiadamy szybko i konkretnie. Napisz lub zadzwoń, a przygotujemy
              ofertę dopasowaną do Twojego budynku.
            </p>
          </div>
        </section>

        <section className="section-shell py-10 md:py-14">
          <div className="section-inner container mx-auto px-4">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary">Formularz kontaktowy</h2>
                <ContactForm />
              </div>

              <aside className="space-y-6">
                <article className="soft-card rounded-2xl p-5 sm:p-6">
                  <h2 className="text-xl font-semibold text-primary">Bezpośredni kontakt</h2>
                  <div className="mt-4 space-y-4 text-sm md:text-base">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <a
                        href="tel:+48660441941"
                        className="text-primary transition-colors hover:text-secondary"
                      >
                        +48 660 441 941
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <a
                        href="mailto:info@iso-dach.eu"
                        className="text-primary transition-colors hover:text-secondary"
                      >
                        info@iso-dach.eu
                      </a>
                    </div>
                  </div>
                </article>

                <article className="soft-card rounded-2xl p-5 sm:p-6">
                  <h2 className="text-xl font-semibold text-primary">Adres</h2>
                  <div className="mt-4 space-y-4 text-sm md:text-base">
                    <div className="flex items-start space-x-2">
                      <Building className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <address className="not-italic leading-relaxed">
                        ISO DACH Dariusz Jagodziński
                        <br />
                        ul. Jana Pawła II 34
                        <br />
                        73-130 Dobrzany
                      </address>
                    </div>
                    <div className="text-foreground/85">
                      <p>
                        <strong>NIP:</strong> 8541386908
                      </p>
                      <p>
                        <strong>REGON:</strong> 811791710
                      </p>
                    </div>
                  </div>
                </article>

                <p className="px-1 text-sm text-muted-foreground md:text-base">
                  Jeśli wolisz bezpośredni kontakt, skorzystaj z danych powyżej.
                  Odpowiemy na Twoje pytania możliwie najszybciej.
                </p>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
