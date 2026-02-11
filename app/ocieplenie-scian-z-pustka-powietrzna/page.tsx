import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQPageSchema } from "@/components/schema/faq-schema";
import { ServiceSchema } from "@/components/schema/service-schema";
import { ServiceIntentSection } from "@/components/service-intent-section";
import { GeoAnswerSection } from "@/components/geo-answer-section";

export const metadata: Metadata = {
  title: "Ocieplenie ścian z pustką powietrzną",
  description:
    "Termoizolacja ścian z pustką powietrzną metodą wdmuchiwania wełny celulozowej. Szczelne wypełnienie pustki, bez zmiany grubości ścian.",
  keywords: [
    "ocieplenie ścian z pustką powietrzną",
    "termoizolacja ścian dwuwarstwowych",
    "wdmuchiwanie celulozy w ściany",
    "docieplanie pustki w ścianie",
    "ocieplanie ścian szczelinowych",
    "ocieplenie ścian Szczecin",
  ],
  alternates: {
    canonical: "https://iso-dach.eu/ocieplenie-scian-z-pustka-powietrzna",
  },
  openGraph: {
    title: "Ocieplenie ścian z pustką powietrzną",
    description:
      "Skuteczna termoizolacja ścian dwuwarstwowych przez wdmuchiwanie celulozy. Szybko, czysto i bez ingerencji od środka.",
    url: "https://iso-dach.eu/ocieplenie-scian-z-pustka-powietrzna",
    type: "article",
    images: [
      {
        url: "/img/ocieplenie-scian-z-pustka-powietrzna/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ocieplenie ścian z pustką powietrzną - ISO-DACH",
      },
    ],
  },
};

const cavityWallBenefits = [
  "Całość prac prowadzimy na zewnątrz budynku - bez uciążliwości dla mieszkańców.",
  "Nie zmienia się grubość ścian i wygląd elewacji.",
  "Wdmuchiwanie w szczeliny bywa tańsze niż metoda lekko-mokra.",
  "Celuloza szczelnie wypełnia wolną przestrzeń i ogranicza straty ciepła.",
  "Rozkład ocieplenia kontrolujemy kamerą termowizyjną i wykonujemy korekty.",
];

const cavityWallFaqs = [
  {
    question: "Czy po dociepleniu ścian z pustką elewacja będzie wyglądać tak samo?",
    answer:
      "Tak. Otwory technologiczne są niewielkie, a po zakończeniu prac są trwale maskowane, więc elewacja zachowuje estetyczny wygląd.",
  },
  {
    question: "Czy ta metoda wymaga prac wewnątrz domu?",
    answer:
      "Nie. Całość realizacji prowadzimy od strony zewnętrznej, bez ingerencji w pomieszczenia mieszkalne.",
  },
  {
    question: "Jak sprawdzacie, czy pustka została dobrze wypełniona?",
    answer:
      "Po wdmuchaniu materiału kontrolujemy efekt termowizją i w razie potrzeby wykonujemy korekty, aby uzyskać równomierną izolację.",
  },
];

export default function OciepleniePustkaPowietrznaPage() {
  return (
    <>
      <ServiceSchema
        name="Ocieplenie ścian z pustką powietrzną"
        description="Termoizolacja ścian dwuwarstwowych z pustką powietrzną przez wdmuchiwanie wełny celulozowej."
        url="https://iso-dach.eu/ocieplenie-scian-z-pustka-powietrzna"
        image="https://iso-dach.eu/img/ocieplenie-scian-z-pustka-powietrzna/hero.jpg"
      />
      <FAQPageSchema faqs={cavityWallFaqs} />

      <div className="min-h-screen marketing-page">
        <section className="marketing-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
<h1 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                  Ocieplenie ścian z pustką powietrzną
                </h1>
                <p className="mb-8 text-lg text-white/90">
                  Wykonujemy termoizolację domów budowanych w technologii
                  dwuwarstwowej z pustką powietrzną pomiędzy warstwami ścian.
                  Szczelne wypełnienie celulozą pomaga ograniczyć koszty
                  ogrzewania budynku.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    asChild
                    className="bg-white text-primary hover:bg-gray-100"
                  >
                    <Link href="/kontakt">Bezpłatna wycena</Link>
                  </Button>
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="#zalety">Poznaj zalety</Link>
                  </Button>
                </div>
              </div>

              <div className="relative h-64 marketing-image-frame md:h-96">
                <Image
                  src="/img/ocieplenie-scian-z-pustka-powietrzna/hero.jpg"
                  alt="Termoizolacja ścian z pustką powietrzną"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <GeoAnswerSection
          title="Ocieplenie ścian z pustką powietrzną pozwala docieplić budynek bez pogrubiania elewacji."
          answer="W domach dwuwarstwowych izolacja jest podawana przez niewielkie otwory i szczelnie wypełnia przestrzeń między warstwami ściany. To szybka metoda, która ogranicza straty ciepła i nie wymaga prac wewnątrz budynku."
          bullets={[
            "Brak konieczności ingerencji w pomieszczenia mieszkalne.",
            "Brak zmiany grubości ściany i wyglądu elewacji.",
            "Kontrola termowizyjna poprawności wypełnienia pustki.",
          ]}
          qa={[
            {
              question: "Czy elewacja będzie widocznie naruszona po pracach?",
              answer:
                "Otwory są niewielkie i po zakończeniu realizacji są maskowane, dzięki czemu efekt końcowy pozostaje estetyczny.",
            },
            {
              question: "Czy to rozwiązanie dla każdego domu?",
              answer:
                "Metoda jest dedykowana ścianom z pustką powietrzną. Przed wyceną sprawdzamy konstrukcję przegrody i dobieramy technologię.",
            },
            {
              question: "Ile trwa realizacja?",
              answer:
                "Czas zależy od metrażu i układu ścian, ale zwykle jest krótszy niż przy klasycznych metodach dociepleń elewacji.",
            },
          ]}
          localNote="Najwięcej realizacji wykonujemy w województwie zachodniopomorskim, ale przyjmujemy też zlecenia z innych regionów."
          relatedLinks={[
            { href: "/termowizja", label: "Termowizja ścian i mostków" },
            { href: "/termomodernizacja", label: "Plan termomodernizacji budynku" },
            { href: "/blog/jak-wybrac-najlepszy-material-izolacyjny", label: "Porównanie materiałów izolacyjnych" },
          ]}
        />

        <section className="marketing-section py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-[0_20px_40px_-30px_rgba(75,0,18,0.6)]">
              <div className="relative aspect-video">
                <Image
                  src="/img/ocieplenie-scian-z-pustka-powietrzna/hero2.jpg"
                  alt="Realizacja ocieplenia ścian z pustką powietrzną"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1200px"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell py-16 md:py-20">
          <div className="section-inner container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <article className="soft-card reveal-up rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-bold text-primary">
                  Termoizolacja ścian z pustką powietrzną
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Ocieplenie wykonujemy przez niewielkie otwory technologiczne
                  (średnica 23 mm) nawiercone w warstwie zewnętrznej cegieł.
                  Przez te otwory pod ciśnieniem wdmuchujemy impregnowaną wełnę
                  celulozową o bardzo dobrych parametrach izolacyjnych.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Materiał szczelnie wypełnia pustą szczelinę. Rozkład izolacji
                  kontrolujemy kamerą termowizyjną i w razie potrzeby wykonujemy
                  poprawki, aby uzyskać równomierny efekt.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Po zakończeniu prac otwory zaklejamy klejem mrozoodpornym i
                  maskujemy miejsca ingerencji, tak aby elewacja zachowała
                  estetykę.
                </p>
              </article>

              <aside className="soft-card reveal-up reveal-delay-1 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-primary">
                  Jak to wygląda w praktyce
                </h3>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>Oględziny ścian i analiza termowizyjna.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>Nawiercenie otworów 23 mm w warstwie zewnętrznej.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>Wdmuchiwanie celulozy pod kontrolowanym ciśnieniem.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>Kontrola termowizyjna i zamknięcie otworów.</span>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section id="zalety" className="marketing-section py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl rounded-2xl border border-primary/10 bg-white/90 p-6 shadow-[0_20px_40px_-30px_rgba(75,0,18,0.5)] md:p-8">
              <h2 className="text-3xl font-bold text-primary">
                Zalety wypełnienia pustki celulozą
              </h2>
              <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                {cavityWallBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-foreground/90 md:text-base">
                Ta sama technologia celulozowa daje bardzo dobre rezultaty
                również przy ocieplaniu poddasza i stropodachu.
              </p>
            </div>
          </div>
        </section>

        <section className="marketing-section-alt py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
              <article className="soft-card rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-bold text-primary">
                  Co jest kluczowe przy tej metodzie
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Skuteczne ocieplenie ścian dwuwarstwowych wymaga bardzo dobrej
                  wiedzy o konstrukcji przegrody, aby właściwie rozprowadzić
                  izolację na całej wolnej przestrzeni. Dlatego bazujemy na
                  szczegółowej analizie termowizyjnej.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Dzięki temu możemy szybko wykryć miejsca wymagające korekty i
                  uzyskać równomierny efekt izolacyjny.
                </p>
              </article>

              <article className="soft-card rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-bold text-primary">Gdzie pracujemy</h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Najczęściej realizujemy zlecenia w Szczecinie, Gorzowie
                  Wielkopolskim, Stargardzie i okolicach, ale przyjmujemy
                  zlecenia z terenu całej Polski.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Jeśli chcesz sprawdzić, czy Twój budynek nadaje się do tej
                  metody, skontaktuj się z nami - przygotujemy ocenę i zakres
                  prac.
                </p>
              </article>
            </div>
          </div>
        </section>

        <ServiceIntentSection
          title="Czy to rozwiązanie dla Twojego budynku?"
          points={[
            "Masz ściany warstwowe i chcesz docieplić je bez pogrubiania elewacji.",
            "Szukasz metody szybkiej, czystej i mało uciążliwej dla domowników.",
            "Zależy Ci na realnym obniżeniu kosztów ogrzewania.",
          ]}
        />

        <section className="marketing-cta-band py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-5 text-3xl font-bold">
              Zamów termoizolację ścian z pustką
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
              Przygotujemy bezpłatną wycenę i dobierzemy optymalny sposób
              wypełnienia pustki powietrznej w Twoim budynku.
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
