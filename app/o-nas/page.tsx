import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Clock, MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "O nas | ISO-DACH - Profesjonalne Izolacje",
  description:
    "Poznaj ISO-DACH - firmę z wieloletnim doświadczeniem w izolacjach budynków. Profesjonalne ocieplanie wełną celulozową. Szczecin i okolice.",
  keywords: [
    "ISO-DACH o nas",
    "firma ociepleniowa",
    "doświadczenie w izolacjach",
    "wełna celulozowa",
    "ocieplanie Szczecin",
  ],
  alternates: {
    canonical: "https://iso-dach.eu/o-nas",
  },
  openGraph: {
    title: "O nas | ISO-DACH - Profesjonalne Izolacje",
    description: "Poznaj ISO-DACH - firmę z wieloletnim doświadczeniem w izolacjach budynków.",
    url: "https://iso-dach.eu/o-nas",
    type: "website",
    images: [
      {
        url: "/img/9.jpg",
        width: 1200,
        height: 630,
        alt: "ISO-DACH - O nas",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen marketing-page">
      {/* Hero Section */}
      <section className="marketing-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              O nas
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90">
              ISO-DACH to zespół doświadczonych specjalistów, którzy od lat
              pomagają klientom osiągnąć komfort cieplny i oszczędności energii.
            </p>
          </div>
        </div>
      </section>

      {/* Historia i Misja */}
      <section className="marketing-section py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Nasza historia
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Firma ISO-DACH została założona przez Dariusza Jagodzińskiego
                  z pasji do budownictwa i troski o efektywność energetyczną budynków.
                  Od ponad dekady specjalizujemy się w profesjonalnych izolacjach
                  termicznych i akustycznych.
                </p>
                <p>
                  Przez lata działalności zrealizowaliśmy setki projektów dla klientów
                  indywidualnych, firm oraz instytucji publicznych. Nasze doświadczenie
                  obejmuje izolację poddaszy, ścian, stropów, piwnic oraz kompleksową
                  termomodernizację budynków.
                </p>
                <p>
                  Stawiamy na nowoczesne technologie, w tym ekologiczną wełnę celulozową,
                  która zapewnia doskonałe parametry izolacyjne przy jednoczesnej
                  dbałości o środowisko naturalne.
                </p>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src="/img/o-nas.jpg"
                alt="Zespół ISO-DACH przy pracy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wartości */}
      <section className="marketing-section-alt py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nasze wartości
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Jakość",
                description:
                  "Używamy wyłącznie sprawdzonych materiałów najwyższej jakości i dbamy o każdy szczegół wykonania.",
              },
              {
                icon: Users,
                title: "Profesjonalizm",
                description:
                  "Nasz zespół to wykwalifikowani specjaliści z wieloletnim doświadczeniem w branży izolacyjnej.",
              },
              {
                icon: Clock,
                title: "Terminowość",
                description:
                  "Szanujemy czas naszych klientów i realizujemy projekty zgodnie z ustalonym harmonogramem.",
              },
              {
                icon: CheckCircle,
                title: "Zaufanie",
                description:
                  "Budujemy długotrwałe relacje oparte na uczciwości, rzetelności i transparentności działania.",
              },
            ].map((value, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <value.icon className="mx-auto h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dlaczego My */}
      <section className="marketing-section py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Dlaczego warto wybrać ISO-DACH?
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Wieloletnie doświadczenie",
                  description:
                    "Ponad 10 lat działalności i setki zrealizowanych projektów to gwarancja wysokiej jakości usług.",
                },
                {
                  title: "Nowoczesne technologie",
                  description:
                    "Stosujemy innowacyjne metody izolacji, w tym wełnę celulozową i systemy natryskowe.",
                },
                {
                  title: "Kompleksowa obsługa",
                  description:
                    "Oferujemy pełen zakres usług - doradztwa i wyceny, przez wykonanie, po serwis gwarancyjny.",
                },
                {
                  title: "Ekologiczne rozwiązania",
                  description:
                    "Specjalizujemy się w materiałach przyjaznych środowisku, takich jak wełna celulozowa z recyklingu.",
                },
                {
                  title: "Gwarancja jakości",
                  description:
                    "Udzielamy gwarancji na wykonane prace i korzystamy tylko z certyfikowanych materiałów.",
                },
                {
                  title: "Konkurencyjne ceny",
                  description:
                    "Oferujemy atrakcyjne ceny przy zachowaniu najwyższych standardów jakości.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="text-secondary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Obszar Działania */}
      <section className="marketing-section-alt py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-auto min-h-[300px] md:min-h-[400px] lg:min-h-[450px] w-full rounded-2xl bg-linear-to-br from-primary/5 to-primary/10 p-4 md:p-6 flex items-center justify-center">
                <div className="relative w-full h-full min-h-[250px] md:min-h-[350px]">
                  <Image
                    src="/img/mapa-dzialania.png"
                    alt="Mapa województwa zachodniopomorskiego - obszar działania ISO-DACH"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Obszar działania
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Działamy na terenie całej Polski, jednak nasz główny obszar
                  realizacji koncentruje się na województwie zachodniopomorskim
                  i okolicach naszej siedziby w Dobrzanach.
                </p>
                <p>
                  <strong>Główne miasta w naszym zasięgu:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Szczecin</li>
                  <li>Stargard</li>
                  <li>Koszalin</li>
                  <li>Kołobrzeg</li>
                  <li>Świnoujście</li>
                  <li>Police</li>
                  <li>Goleniów</li>
                  <li>Gryfino</li>
                </ul>
                <p className="mt-4">
                  Realizujemy również projekty poza tym obszarem. Jeśli dany
                  zakres prac lub lokalizacja wykracza poza nasze możliwości
                  terminowe, kierujemy klientów do sprawdzonych firm
                  współpracujących.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certyfikaty i Partnerzy */}
      <section className="marketing-section py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Certyfikaty i współpraca
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-gray-700 mb-8">
              Współpracujemy z renomowanymi producentami materiałów izolacyjnych
              i posiadamy niezbędne certyfikaty oraz ubezpieczenie OC.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {["Certyfikat ISO", "Ubezpieczenie OC", "System Białe Ciepło", "Wełna Termex"].map(
                (cert, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                  >
                    <span className="text-center font-medium text-gray-700">
                      {cert}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Dane Firmy */}
      <section className="marketing-section-alt py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Dane Firmy</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-xl font-semibold">ISO DACH Dariusz Jagodziński</p>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="text-primary" />
                <span>ul. Jana Pawła II 34, 73-130 Dobrzany</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="text-primary" />
                <a href="tel:+48660441941" className="hover:text-primary">
                  +48 660 441 941
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="text-primary" />
                <a href="mailto:info@iso-dach.eu" className="hover:text-primary">
                  info@iso-dach.eu
                </a>
              </div>
              <p>
                <strong>NIP:</strong> 8541386908 | <strong>REGON:</strong> 811791710
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="marketing-cta-band py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Skontaktuj się z nami
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Masz pytania lub chcesz uzyskać bezpłatną wycenę?
            Skontaktuj się z nami - chętnie pomożemy!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/kontakt">
                Bezpłatna wycena
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+48660441941">
                <Phone className="mr-2 h-5 w-5" />
                +48 660 441 941
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
