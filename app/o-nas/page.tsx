import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WebPageSchema } from "@/components/schema/webpage-schema";
import { CheckCircle, Award, Users, Clock, MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "O nas i doświadczenie zespołu",
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
    title: "O nas i doświadczenie zespołu",
    description: "Poznaj ISO-DACH - firmę z wieloletnim doświadczeniem w izolacjach budynków.",
    url: "https://iso-dach.eu/o-nas",
    type: "website",
    images: [
      {
        url: "/img/o-nas/hero.jpg",
        width: 1200,
        height: 630,
        alt: "ISO-DACH - O nas",
      },
    ],
  },
};

const values = [
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
];

const reasons = [
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
      "Oferujemy pełen zakres usług: od doradztwa i wyceny, przez wykonanie, po serwis gwarancyjny.",
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
];

const coverageCities = [
  "Szczecin",
  "Stargard",
  "Koszalin",
  "Kołobrzeg",
  "Świnoujście",
  "Police",
  "Goleniów",
  "Gryfino",
];

export default function AboutPage() {
  return (
    <>
      <WebPageSchema
        title="O nas"
        description="Poznaj ISO-DACH - firmę z wieloletnim doświadczeniem w izolacjach budynków."
        url="https://iso-dach.eu/o-nas"
        breadcrumbs={[
          { name: "Strona główna", url: "https://iso-dach.eu" },
          { name: "O nas", url: "https://iso-dach.eu/o-nas" },
        ]}
      />
      <div className="min-h-screen marketing-page">
        <section className="marketing-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div>
<h1 className="text-4xl font-bold text-white md:text-5xl">O nas</h1>
                <p className="mt-6 max-w-2xl text-lg text-white/90">
                  ISO-DACH to zespół doświadczonych specjalistów, którzy od lat pomagają klientom
                  osiągnąć komfort cieplny i oszczędności energii.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100">
                    <Link href="/kontakt">Bezpłatna wycena</Link>
                  </Button>
                  <Button size="lg" variant="secondary" asChild>
                    <a href="#dlaczego-my">Dlaczego my</a>
                  </Button>
                </div>
              </div>
              <div className="relative h-72 marketing-image-frame md:h-[420px]">
                <Image
                  src="/img/o-nas/hero.jpg"
                  alt="Zespół ISO-DACH przy pracy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  loading="eager"
                  fetchPriority="high"
                  quality={70}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell py-16 md:py-20">
          <div className="section-inner container mx-auto px-4">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <article className="soft-card rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-bold text-primary">Nasza historia</h2>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                  <p>
                    Firma ISO-DACH została założona przez Dariusza Jagodzińskiego z pasji do
                    budownictwa i troski o efektywność energetyczną budynków. Od ponad dekady
                    specjalizujemy się w profesjonalnych izolacjach termicznych i akustycznych.
                  </p>
                  <p>
                    Przez lata działalności zrealizowaliśmy setki projektów dla klientów
                    indywidualnych, firm oraz instytucji publicznych. Nasze doświadczenie obejmuje
                    izolację poddaszy, ścian, stropów, piwnic oraz kompleksową termomodernizację
                    budynków.
                  </p>
                  <p>
                    Stawiamy na nowoczesne technologie, w tym ekologiczną wełnę celulozową, która
                    zapewnia doskonałe parametry izolacyjne przy jednoczesnej dbałości o środowisko
                    naturalne.
                  </p>
                  <p>
                    Jako firma z wieloletnim doświadczeniem realizujemy usługi remontowo-budowlane
                    na terenie Polski i Niemiec.
                  </p>
                  <p>
                    Wykorzystujemy nowoczesne technologie, takie jak wdmuchiwanie dociepleń oraz
                    natrysk izolacji termicznej, aby uzyskać trwały i szczelny efekt.
                  </p>
                  <p>
                    Oprócz prac izolacyjnych prowadzimy także kompleksowe remonty, wykończenia
                    wnętrz oraz adaptacje pomieszczeń.
                  </p>
                </div>
              </article>

              <aside className="soft-card rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-primary">Dane firmy</h2>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                  <p className="text-lg font-semibold text-foreground">ISO DACH Dariusz Jagodziński</p>
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span>ul. Jana Pawła II 34, 73-130 Dobrzany</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 shrink-0 text-primary" />
                    <a href="tel:+48660441941" className="hover:text-primary">
                      +48 660 441 941
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 shrink-0 text-primary" />
                    <a href="mailto:info@iso-dach.eu" className="hover:text-primary">
                      info@iso-dach.eu
                    </a>
                  </div>
                  <p>
                    <strong>NIP:</strong> 8541386908
                    <br />
                    <strong>REGON:</strong> 811791710
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="marketing-section-alt py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-10 text-center text-3xl font-bold">Nasze wartości</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <article key={value.title} className="soft-card rounded-2xl p-5 text-center md:p-6">
                  <value.icon className="mx-auto h-10 w-10 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="dlaczego-my" className="marketing-section py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="soft-card rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-bold text-primary">Dlaczego warto wybrać ISO-DACH?</h2>
                <div className="mt-6 space-y-4">
                  {reasons.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article className="soft-card rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-bold text-primary">Obszar działania</h2>
                <p className="mt-5 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Działamy na terenie całej Polski, jednak nasz główny obszar realizacji koncentruje
                  się na województwie zachodniopomorskim i okolicach naszej siedziby w Dobrzanach.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-foreground/85">
                  {coverageCities.map((city) => (
                    <p key={city} className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
                      <span>{city}</span>
                    </p>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Realizujemy również projekty poza tym obszarem. Jeśli dany zakres prac lub
                  lokalizacja wykracza poza nasze możliwości terminowe, kierujemy klientów do
                  sprawdzonych firm współpracujących.
                </p>
                <div className="relative mt-6 h-56 overflow-hidden rounded-xl border border-primary/10 bg-primary/5 sm:h-64">
                  <Image
                    src="/img/o-nas/1.png"
                    alt="Mapa województwa zachodniopomorskiego - obszar działania ISO-DACH"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="marketing-section-alt py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-10 text-center text-3xl font-bold">Certyfikaty i współpraca</h2>
              <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-foreground/80 md:text-base">
                Współpracujemy z renomowanymi producentami materiałów izolacyjnych i posiadamy
                niezbędne certyfikaty oraz ubezpieczenie OC.
              </p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  "Certyfikat ISO",
                  "Ubezpieczenie OC",
                  "System Białe Ciepło",
                  "Wełna Termex",
                ].map((cert) => (
                  <div
                    key={cert}
                    className="marketing-surface flex min-h-24 items-center justify-center px-4 py-5 text-center text-sm font-semibold text-foreground/85 md:text-base"
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="marketing-cta-band py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Skontaktuj się z nami</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
              Masz pytania lub chcesz uzyskać bezpłatną wycenę? Skontaktuj się z nami.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/kontakt">Bezpłatna wycena</Link>
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
    </>
  );
}
