import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FAQPageSchema } from "@/components/schema/faq-schema";
import { ServiceSchema } from "@/components/schema/service-schema";
import { ServiceIntentSection } from "@/components/service-intent-section";
import { GeoAnswerSection } from "@/components/geo-answer-section";
import { CheckCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Badania termowizyjne budynków",
  description:
    "Badania termowizyjne budynków: wykrywanie mostków termicznych, strat ciepła i ocena jakości izolacji poddasza, ścian oraz stropodachu.",
  keywords: [
    "termowizja budynku",
    "badania termowizyjne",
    "kamera termowizyjna dom",
    "wykrywanie mostków termicznych",
    "termowizja poddasza",
    "termowizja Szczecin",
  ],
  alternates: {
    canonical: "https://iso-dach.eu/termowizja",
  },
  openGraph: {
    title: "Badania termowizyjne budynków",
    description:
      "Profesjonalna diagnostyka termowizyjna i wsparcie w naprawie izolacji budynku.",
    url: "https://iso-dach.eu/termowizja",
    type: "article",
    images: [
      {
        url: "/img/termowizja/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Badania termowizyjne - ISO-DACH",
      },
    ],
  },
};

const thermographyFaqSchema = [
  {
    question: "Kiedy najlepiej wykonać badanie termowizyjne?",
    answer:
      "Najlepiej w sezonie grzewczym, przy wyraźnej różnicy temperatur pomiędzy wnętrzem budynku a otoczeniem.",
  },
  {
    question: "Czy termowizja pokaże miejsca zniszczenia izolacji na poddaszu?",
    answer:
      "Tak, badanie termowizyjne pozwala wykryć punkty strat ciepła i obszary, które wymagają naprawy lub uzupełnienia izolacji.",
  },
  {
    question: "Co dzieje się po badaniu?",
    answer:
      "Na podstawie wyników dobieramy zakres prac i materiał, a następnie wykonujemy naprawę lub docieplenie przegrody.",
  },
];

export default function TermowizjaPage() {
  return (
    <>
      <ServiceSchema
        name="Badania termowizyjne"
        description="Profesjonalne badania termowizyjne budynków i diagnostyka miejsc strat ciepła."
        url="https://iso-dach.eu/termowizja"
        image="https://iso-dach.eu/img/termowizja/hero.jpg"
      />
      <FAQPageSchema faqs={thermographyFaqSchema} />

      <div className="min-h-screen marketing-page">
        <section className="marketing-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
<h1 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                  Termowizja
                </h1>
                <p className="mb-8 text-lg text-white/90">
                  Diagnostyka termowizyjna pozwala precyzyjnie wykryć miejsca
                  strat ciepła i zaplanować skuteczną naprawę izolacji dachu,
                  poddasza, ścian oraz stropodachu.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    asChild
                    className="bg-white text-primary hover:bg-gray-100"
                  >
                    <Link href="/kontakt">Zamów badanie</Link>
                  </Button>
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="#poddasze">Dlaczego poddasze traci ciepło?</Link>
                  </Button>
                </div>
              </div>

              <div className="relative h-64 marketing-image-frame md:h-96">
                <Image
                  src="/img/termowizja/hero.jpg"
                  alt="Badanie termowizyjne budynku"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  quality={70}
                />
              </div>
            </div>
          </div>
        </section>

        <GeoAnswerSection
          title="Termowizja pozwala szybko wskazać, gdzie budynek traci ciepło i które miejsca wymagają naprawy izolacji."
          answer="Badanie kamerą termowizyjną to najprostszy sposób na wykrycie mostków termicznych bez kucia i odkrywek. Na podstawie obrazu cieplnego można precyzyjnie zaplanować docieplenie lub naprawę istniejącej warstwy."
          bullets={[
            "Bez-inwazyjna diagnoza strat ciepła w dachu, ścianach i stropach.",
            "Precyzyjne wskazanie zakresu naprawy przed rozpoczęciem prac.",
            "Lepsza kontrola jakości po zakończeniu realizacji.",
          ]}
          qa={[
            {
              question: "Kiedy najlepiej wykonać termowizję?",
              answer:
                "Najlepiej przy wyraźnej różnicy temperatur między wnętrzem a otoczeniem, najczęściej w sezonie grzewczym.",
            },
            {
              question: "Czy termowizja wystarczy do wyceny prac?",
              answer:
                "To kluczowy etap diagnostyczny. Łączymy go z oględzinami technicznymi, żeby dobrać właściwy zakres i materiał.",
            },
            {
              question: "Czy badanie ma sens w starszym budynku?",
              answer:
                "Tak, szczególnie tam, gdzie izolacja była wykonywana wiele lat temu i podejrzewasz jej osiadanie lub ubytki.",
            },
          ]}
          localNote="Badania termowizyjne najczęściej wykonujemy w województwie zachodniopomorskim, ale obsługujemy również klientów z innych regionów."
          relatedLinks={[
            { href: "/izolacja-poddaszy", label: "Izolacja poddaszy" },
            { href: "/naprawa-ocieplenia-poddasza", label: "Naprawa ocieplenia poddasza" },
            { href: "/ocieplenie-scian-z-pustka-powietrzna", label: "Ocieplenie ścian z pustką powietrzną" },
          ]}
        />

        <section id="poddasze" className="section-shell py-16 md:py-20">
          <div className="section-inner container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="soft-card reveal-up rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-bold text-primary">Poddasze i straty ciepła</h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Poddasze to część budynku, która szczególnie sprzyja stratom
                  ciepła. W wielu obiektach podczas budowy poświęca się mu mniej
                  uwagi, zwłaszcza gdy pomieszczenie ma charakter gospodarczy.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Przy przeznaczeniu mieszkalnym ocieplenie poddasza jest kluczowe
                  dla komfortu termicznego. Termowizja pozwala dokładnie wskazać
                  miejsca, w których izolacja nie działa prawidłowo.
                </p>
              </article>

              <aside className="soft-card reveal-up reveal-delay-1 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-primary">Co daje termowizja</h3>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>Wykrycie mostków termicznych i nieszczelności.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>Ocena stanu izolacji bez ingerencji w przegrodę.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>Podstawa do precyzyjnego planu naprawy/docieplenia.</span>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="marketing-section py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl rounded-2xl border border-primary/10 bg-white/90 p-6 shadow-[0_20px_40px_-30px_rgba(75,0,18,0.5)] md:p-8">
              <h2 className="text-3xl font-bold text-primary">
                Wdmuchiwanie celulozy po diagnostyce
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                Wdmuchiwanie wełny celulozowej lub innych granulatów daje
                gwarancję trwałej warstwy izolacji bez mostków termicznych i
                kondensacyjnych. To skuteczna metoda ograniczania kosztów
                ogrzewania i przyszłych napraw izolacji.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                Materiał o gęstości około 30 kg/m3 tworzy szczelną warstwę, która
                dobrze chroni poddasze nawet przy silnych podmuchach wiatru.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                Gdy skosy sufitu mają więcej niż 10°, stosujemy materiał o
                większej gęstości - do 55 kg/m3. Dzięki temu napowietrzona
                celuloza nie opada i zachowuje swoje właściwości izolacyjne.
              </p>
            </div>
          </div>
        </section>

        <section className="marketing-section-alt py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <article className="soft-card rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-bold text-primary">Jak przebiega usługa</h2>
                <ol className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  <li>1. Oględziny i wykonanie badania kamerą termowizyjną.</li>
                  <li>2. Analiza miejsc strat ciepła i przygotowanie zaleceń.</li>
                  <li>3. Dobór metody naprawy lub docieplenia przegrody.</li>
                  <li>4. Realizacja prac i kontrola efektu po wykonaniu izolacji.</li>
                </ol>
              </article>

              <article className="soft-card rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-bold text-primary">Gdzie realizujemy zlecenia</h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Najczęściej pracujemy w Szczecinie, Gorzowie Wielkopolskim,
                  Stargardzie i okolicach, ale przyjmujemy zlecenia z całej
                  Polski.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Jeśli chcesz sprawdzić stan izolacji Twojego budynku,
                  skontaktuj się z nami i umów termin diagnostyki.
                </p>
              </article>
            </div>
          </div>
        </section>

        <ServiceIntentSection
          title="Czy badanie termowizyjne jest dla Ciebie?"
          points={[
            "Podejrzewasz straty ciepła na poddaszu lub w stropodachu.",
            "Chcesz sprawdzić jakość obecnej izolacji przed kolejnym sezonem.",
            "Planujesz docieplenie i chcesz oprzeć decyzję na konkretnych danych.",
          ]}
        />

        <section className="marketing-section py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Najczęściej zadawane pytania
            </h2>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {thermographyFaqSchema.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-start gap-2">
                        <HelpCircle className="mt-1 shrink-0 text-primary" size={18} />
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-7">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="marketing-cta-band py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-5 text-3xl font-bold">Umów badanie termowizyjne</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
              Przygotujemy ocenę stanu izolacji i zaproponujemy skuteczne
              działania naprawcze dopasowane do Twojego budynku.
            </p>
            <Button size="lg" asChild>
              <Link href="/kontakt">Skontaktuj się z nami</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
