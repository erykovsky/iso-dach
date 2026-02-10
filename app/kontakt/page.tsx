import { ContactForm } from "./contact-form";
import { Building, Mail, Phone, AlertTriangle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | ISO-DACH - Bezpłatna wycena izolacji",
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
    canonical: "https://www.iso-dach.eu/kontakt",
  },
  openGraph: {
    title: "Kontakt | ISO-DACH - Bezpłatna wycena",
    description: "Skontaktuj się z nami. Bezpłatna wycena w 24h. Tel: +48 660 441 941",
    url: "https://www.iso-dach.eu/kontakt",
    type: "website",
    images: [
      {
        url: "/img/9.jpg",
        width: 1200,
        height: 630,
        alt: "Kontakt z ISO-DACH - profesjonalne izolacje",
      },
    ],
  },
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen marketing-page">
      <section className="marketing-hero py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white">Skontaktuj się z nami</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Odpowiadamy szybko i konkretnie. Napisz lub zadzwoń, a przygotujemy
            ofertę dopasowaną do Twojego budynku.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-6 md:col-span-2">
            <h2 className="text-3xl font-bold text-[#800020]">
              Formularz kontaktowy
            </h2>
            <ContactForm />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Dane kontaktowe
            </h2>
            <section className="soft-card rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-primary">Bezpośredni kontakt</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-center space-x-2">
                  <Phone className="text-primary" />
                  <a
                    href="tel:+48660441941"
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    +48 660 441 941
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="text-primary" />
                  <a
                    href="mailto:zudarek@interia.eu"
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    zudarek@interia.eu
                  </a>
                </div>
              </div>
            </section>

            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                <div>
                    <p className="text-sm font-medium text-amber-800">
                      Ważna informacja
                    </p>
                    <p className="mt-1 text-sm text-amber-700">
                      Ze względu na migrację serwera pocztowego, wiadomości wysyłane bezpośrednio na adres <strong>info@iso-dach.eu</strong> mogą nie dochodzić. Formularz kontaktowy działa prawidłowo i wysyła wiadomości jednocześnie na dwa adresy, więc możesz z niego śmiało korzystać.
                    </p>
                    <p className="mt-2 text-xs text-amber-600">
                      Przepraszamy za utrudnienia.
                    </p>
                </div>
              </div>
            </div>
            <section className="soft-card mt-8 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-primary">Adres</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-start space-x-2">
                  <Building className="text-primary mt-1 shrink-0" />
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
              Jeśli wolisz bezpośredni kontakt, możesz skorzystać z podanych
              powyżej danych. Odpowiemy na Twoje pytania tak szybko, jak to
              możliwe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
