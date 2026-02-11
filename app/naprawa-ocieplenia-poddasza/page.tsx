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
import { ServiceSchema } from "@/components/schema/service-schema";
import { FAQPageSchema } from "@/components/schema/faq-schema";
import { ServiceIntentSection } from "@/components/service-intent-section";
import { GeoAnswerSection } from "@/components/geo-answer-section";
import { ArrowRight, CheckCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Naprawa ocieplenia poddasza",
  description:
    "Naprawa izolacji dachu i ocieplenia poddasza metodą wdmuchiwania celulozy. Diagnostyka termowizyjna oraz usuwanie mostków termicznych bez dużego remontu.",
  keywords: [
    "naprawa ocieplenia poddasza",
    "naprawa izolacji dachu",
    "uzupełnienie izolacji poddasza",
    "mostki termiczne poddasze",
    "naprawa izolacji celulozą",
    "naprawa ocieplenia Szczecin",
  ],
  alternates: {
    canonical: "https://iso-dach.eu/naprawa-ocieplenia-poddasza",
  },
  openGraph: {
    title: "Naprawa ocieplenia poddasza",
    description:
      "Skuteczna naprawa izolacji dachu i poddasza. Termowizja, celuloza i szybka realizacja bez zbędnej ingerencji.",
    url: "https://iso-dach.eu/naprawa-ocieplenia-poddasza",
    type: "article",
    images: [
      {
        url: "/img/naprawa-ocieplenia-poddasza/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Naprawa ocieplenia poddasza - ISO-DACH",
      },
    ],
  },
};

const atticRepairFaqs = [
  {
    question: "Kiedy warto wykonać naprawę ocieplenia poddasza?",
    answer:
      "Najczęściej wtedy, gdy termowizja pokazuje mostki termiczne, wzrastają rachunki za ogrzewanie lub pojawia się dyskomfort cieplny na poddaszu.",
  },
  {
    question: "Czy naprawa wymaga zrywania całego wykończenia poddasza?",
    answer:
      "Najczęściej nie. W wielu przypadkach wykonujemy niewielkie otwory technologiczne i uzupełniamy izolację metodą wdmuchiwania.",
  },
  {
    question: "Czy przed naprawą wykonujecie badanie termowizyjne?",
    answer:
      "Tak. Badanie termowizyjne pozwala precyzyjnie wskazać miejsca ubytków i zaplanować zakres prac bez zbędnej ingerencji.",
  },
  {
    question: "Na jakim obszarze realizujecie naprawy izolacji dachu?",
    answer:
      "Najczęściej pracujemy w Szczecinie, Gorzowie Wielkopolskim, Stargardzie i okolicach, ale przyjmujemy zlecenia z całej Polski.",
  },
];

const commonDefects = [
  "Brak starannego dopasowania płyt z wełny mineralnej do ocieplanej powierzchni.",
  "Niewłaściwie zaizolowana murłata.",
  "Ubytki izolacji wynikające ze starzenia się materiału lub niedokładnego mocowania.",
  "Zniszczona izolacja przez bytowanie kuny na poddaszu.",
  "Zbyt cienka warstwa materiału izolacyjnego względem wymaganych parametrów.",
];

const atticRepairGalleryImages = [1, 2].map((index) => ({
  src: `/img/naprawa-ocieplenia-poddasza/${index}.jpg`,
  alt: `Naprawa ocieplenia poddasza - realizacja ${index}`,
}));

export default function NaprawaOciepleniaPoddaszaPage() {
  return (
    <>
      <ServiceSchema
        name="Naprawa ocieplenia poddasza"
        description="Naprawa izolacji dachu i poddasza metodą wdmuchiwania celulozy oraz diagnostyka termowizyjna."
        url="https://iso-dach.eu/naprawa-ocieplenia-poddasza"
        image="https://iso-dach.eu/img/naprawa-ocieplenia-poddasza/hero.jpg"
      />
      <FAQPageSchema faqs={atticRepairFaqs} />

      <div className="min-h-screen marketing-page">
        <section className="marketing-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
<h1 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                  Naprawa ocieplenia poddasza
                </h1>
                <p className="mb-8 text-lg text-white/90">
                  Badania termowizyjne często pokazują, że stan izolacji wymaga
                  korekty. Naprawiamy ocieplenie poddasza szybko i skutecznie,
                  ograniczając straty ciepła bez kosztownego remontu całej
                  przegrody.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    asChild
                    className="bg-white text-primary hover:bg-gray-100"
                  >
                    <Link href="/kontakt">Zamów diagnostykę</Link>
                  </Button>
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="#wady">Najczęstsze wady izolacji</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-64 marketing-image-frame md:h-96">
                <Image
                  src="/img/naprawa-ocieplenia-poddasza/hero.jpg"
                  alt="Naprawa izolacji dachu"
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
          title="Naprawa ocieplenia poddasza pozwala odzyskać skuteczność izolacji bez pełnej przebudowy."
          answer="Jeśli termowizja pokazuje mostki termiczne, poddasze szybko się wychładza lub rachunki rosną, najczęściej wystarczy precyzyjna naprawa i uzupełnienie izolacji. Dzięki technologii wdmuchiwania zakres prac można ograniczyć do minimum."
          bullets={[
            "Dokładna diagnoza miejsc ubytków przed rozpoczęciem prac.",
            "Uzupełnienie izolacji tam, gdzie realnie jej brakuje.",
            "Mniejszy koszt niż pełna wymiana całego układu ocieplenia.",
          ]}
          qa={[
            {
              question: "Kiedy wystarczy naprawa zamiast wymiany całości?",
              answer:
                "Gdy uszkodzenia są punktowe lub częściowe. Po oględzinach i termowizji wskazujemy, czy naprawa będzie wystarczająca.",
            },
            {
              question: "Czy naprawa rozwiązuje problem mostków termicznych?",
              answer:
                "Tak, jeśli prace są wykonane precyzyjnie i obejmują wszystkie krytyczne miejsca strat ciepła.",
            },
            {
              question: "Czy po pracach sprawdzacie efekt?",
              answer:
                "Tak, weryfikujemy skuteczność wykonanej naprawy i na tej podstawie zamykamy realizację.",
            },
          ]}
          localNote="Najczęściej naprawy ocieplenia poddaszy wykonujemy w Szczecinie, Stargardzie i okolicach, ale realizujemy zlecenia także na terenie całej Polski."
          relatedLinks={[
            { href: "/termowizja", label: "Diagnostyka termowizyjna" },
            { href: "/naprawa-izolacji-po-kunach", label: "Naprawa po kunach" },
            { href: "/izolacja-poddaszy", label: "Nowa izolacja poddasza" },
          ]}
        />

        <section id="wady" className="section-shell py-16 md:py-20">
          <div className="section-inner container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="soft-card reveal-up rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-bold text-primary">
                  Naprawa izolacji dachu
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Nawet starannie wykonana izolacja z tradycyjnych materiałów
                  może z czasem tracić szczelność. Mostki termiczne się
                  powiększają, a skuteczność ocieplenia spada, co prowadzi do
                  większych ubytków ciepła.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  W każdej z takich sytuacji konieczna jest naprawa ocieplenia i
                  usunięcie wad. Przed i po pracach weryfikujemy efekty kamerą
                  termowizyjną.
                </p>
              </article>

              <aside className="soft-card reveal-up reveal-delay-1 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-primary">
                  Najczęstsze wady izolacji
                </h3>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  {commonDefects.map((defect) => (
                    <li key={defect} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                      <span>{defect}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="marketing-section-alt py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <article className="soft-card rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-bold text-primary">
                  Wełna celulozowa: skuteczny materiał naprawczy
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Wykorzystujemy wełnę celulozową w granulkach, która świetnie
                  sprawdza się przy pracach korygujących i naprawczych.
                  Wdmuchiwany pod ciśnieniem materiał dociera do najmniejszych
                  szczelin i tworzy zwartą, szczelną warstwę izolacyjną.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Naprawa tą metodą jest szybka i skuteczna. Najczęściej nie
                  wymaga demontażu całego poszycia poddasza, co ogranicza koszt
                  i zakres robót.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Wykonujemy niewielkie otwory technologiczne, przez które
                  podajemy granulat. W wybranych przypadkach izolację
                  uzupełniamy również od zewnątrz, demontując tylko niezbędny
                  fragment pokrycia.
                </p>
              </article>

              <article className="soft-card rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-bold text-primary">
                  Przygotowanie do naprawy ocieplenia
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Jeśli podejrzewasz, że izolacja dachu przestała działać
                  prawidłowo, warto zacząć od diagnostyki termowizyjnej.
                  Kamera pokazuje miejsca braków izolacji bez konieczności
                  wykonywania odkrywek.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Po analizie dobieramy zakres prac do realnych uszkodzeń.
                  Czasem wystarczy precyzyjne uzupełnienie izolacji, a czasem
                  konieczna jest wymiana najbardziej zniszczonych fragmentów.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Najczęściej realizujemy zlecenia w Szczecinie, Gorzowie
                  Wielkopolskim, Stargardzie i okolicach, ale przyjmujemy
                  zlecenia z całej Polski.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="marketing-section py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-10 text-center text-3xl font-bold">
              Realizacje napraw ocieplenia poddasza
            </h2>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
              {atticRepairGalleryImages.map((image, index) => (
                <article
                  key={image.src}
                  className="group overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-[0_18px_35px_-28px_rgba(75,0,18,0.7)]"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      loading="lazy"
                      quality={70}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ServiceIntentSection
          points={[
            "Na poddaszu czujesz wyraźny chłód mimo ogrzewania budynku.",
            "Masz podejrzenie mostków termicznych lub starych ubytków izolacji.",
            "Chcesz naprawić izolację bez pełnego remontu poddasza.",
          ]}
          title="Czy naprawa ocieplenia poddasza jest dla Ciebie?"
        />

        <section className="marketing-section py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Najczęściej zadawane pytania
            </h2>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {atticRepairFaqs.map((faq, index) => (
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
            <h2 className="mb-6 text-3xl font-bold">
              Potrzebujesz naprawy izolacji dachu?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
              Skontaktuj się z nami. Zaproponujemy termin badania termowizyjnego i
              przygotujemy plan skutecznej naprawy ocieplenia poddasza.
            </p>
            <Button size="lg" asChild>
              <Link href="/kontakt">
                Umów konsultację
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
