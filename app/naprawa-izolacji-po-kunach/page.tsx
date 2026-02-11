import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQPageSchema } from "@/components/schema/faq-schema";
import { ServiceSchema } from "@/components/schema/service-schema";
import { ServiceIntentSection } from "@/components/service-intent-section";
import { VideoObjectSchema } from "@/components/schema/video-object-schema";
import { GeoAnswerSection } from "@/components/geo-answer-section";

export const metadata: Metadata = {
  title: "Naprawa izolacji po kunach",
  description:
    "Naprawa izolacji po kunach i odtworzenie ocieplenia poddasza wełną celulozową. Diagnostyka termowizyjna oraz skuteczne zabezpieczenie dachu.",
  keywords: [
    "naprawa izolacji po kunach",
    "kuna na poddaszu naprawa",
    "uszkodzona izolacja dachu",
    "wymiana wełny po kunie",
    "ocieplenie poddasza po kunach",
    "naprawa dachu Szczecin",
  ],
  alternates: {
    canonical: "https://iso-dach.eu/naprawa-izolacji-po-kunach",
  },
  openGraph: {
    title: "Naprawa izolacji po kunach | ISO-DACH",
    description:
      "Szybka i skuteczna naprawa izolacji dachu po kunach. Wełna celulozowa, termowizja i sprawdzone metody naprawcze.",
    url: "https://iso-dach.eu/naprawa-izolacji-po-kunach",
    type: "article",
    images: [
      {
        url: "/img/naprawa-izolacji-po-kunach/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Naprawa izolacji po kunach - ISO-DACH",
      },
    ],
    videos: [
      {
        url: "https://www.youtube-nocookie.com/embed/aonxLOo1Poo?rel=0",
        width: 1280,
        height: 720,
      },
    ],
  },
};

const celluloseAdvantages = [
  "Wełna celulozowa zawiera sole boru, które podrażniają błony śluzowe, dlatego zwierzęta unikają kontaktu z tym materiałem.",
  "W przeciwieństwie do mat z wełny mineralnej ma postać sypką i łatwo się rozgrzebuje, więc nie nadaje się do budowy legowisk.",
];

const repairOptions = [
  {
    title: "Nadmuch celulozy na starą wełnę",
    description:
      "Według naszych doświadczeń daje około 50% szans, że kuna nie wróci. Pod nową warstwą pozostaje jednak stara wełna mineralna, która nadal może być atrakcyjna dla zwierząt.",
  },
  {
    title: "Usunięcie starej wełny i nowe wypełnienie celulozą",
    description:
      "Najskuteczniejszy wariant. Usuwamy stary materiał i wypełniamy przegrody wełną celulozową, dzięki czemu ryzyko powrotu kuny jest minimalne.",
  },
];

const martenSigns = [
  "Głośne odgłosy na poddaszu, zwłaszcza nocą.",
  "Charakterystyczny, nieprzyjemny zapach.",
  "Odchody w warstwie izolacji.",
  "Widoczne uszkodzenia ocieplenia i pogorszenie komfortu cieplnego.",
];

const martenRepairFaqs = [
  {
    question: "Czy po kunie wystarczy samo uzupełnienie ocieplenia?",
    answer:
      "To zależy od skali zniszczeń. Przy lokalnych uszkodzeniach może wystarczyć naprawa punktowa, ale przy większych zniszczeniach zalecamy wymianę starej warstwy.",
  },
  {
    question: "Jak potwierdzacie miejsca uszkodzenia izolacji?",
    answer:
      "Wykorzystujemy diagnostykę termowizyjną, która pokazuje obszary strat ciepła i pomaga precyzyjnie zaplanować zakres naprawy.",
  },
  {
    question: "Czy celuloza ogranicza ryzyko powrotu kuny?",
    answer:
      "Tak. Wełna celulozowa jest mniej atrakcyjna dla zwierząt do budowy legowisk niż tradycyjne maty z wełny mineralnej.",
  },
];

const martenRepairGalleryImages = Array.from({ length: 10 }, (_, index) => ({
  src: `/img/naprawa-izolacji-po-kunach/${index + 1}.jpg`,
  alt: `Naprawa izolacji po kunach - realizacja ${index + 1}`,
}));

const martenRepairVideoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Naprawa izolacji po kunach",
  description:
    "Materiał wideo o naprawie izolacji poddasza po zniszczeniach powodowanych przez kuny.",
  thumbnailUrl: "https://iso-dach.eu/img/naprawa-izolacji-po-kunach/hero.jpg",
  uploadDate: "2024-01-15T08:00:00+01:00",
  duration: "PT3M",
  contentUrl: "https://www.youtube.com/watch?v=aonxLOo1Poo",
  embedUrl: "https://www.youtube-nocookie.com/embed/aonxLOo1Poo?rel=0",
  publisher: {
    "@type": "Organization",
    name: "ISO-DACH",
    logo: {
      "@type": "ImageObject",
      url: "https://iso-dach.eu/logo.svg",
    },
  },
};

export default function NaprawaIzolacjiPoKunachPage() {
  return (
    <>
      <ServiceSchema
        name="Naprawa izolacji dachu zniszczonej przez bytowanie kuny"
        description="Naprawa izolacji po kunach i odtworzenie ocieplenia poddasza wełną celulozową."
        url="https://iso-dach.eu/naprawa-izolacji-po-kunach"
        image="https://iso-dach.eu/img/naprawa-izolacji-po-kunach/hero.jpg"
      />
      <FAQPageSchema faqs={martenRepairFaqs} />
      <VideoObjectSchema
        title="Naprawa izolacji po kunach"
        description="Materiał wideo o naprawie izolacji poddasza po zniszczeniach powodowanych przez kuny."
        thumbnailUrl="https://iso-dach.eu/img/naprawa-izolacji-po-kunach/hero.jpg"
        uploadDate="2024-01-15T08:00:00+01:00"
        videoUrl="https://www.youtube.com/watch?v=aonxLOo1Poo"
        embedUrl="https://www.youtube-nocookie.com/embed/aonxLOo1Poo?rel=0"
        pageUrl="https://iso-dach.eu/naprawa-izolacji-po-kunach#film"
        duration="PT3M"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(martenRepairVideoSchema) }}
      />

      <div className="min-h-screen marketing-page">
        <section className="marketing-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
<h1 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                  Naprawa izolacji dachu zniszczonej przez bytowanie kuny
                </h1>
                <p className="mb-8 text-lg text-white/90">
                  Szkody wyrządzone przez kuny na poddaszu to duży problem w domach
                  jednorodzinnych. Uszkodzona izolacja powoduje straty ciepła,
                  podnosi koszty ogrzewania i może wpływać na trwałość konstrukcji.
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
                    <Link href="#opcje">Naprawa czy nowa izolacja</Link>
                  </Button>
                </div>
              </div>

              <div className="relative h-64 marketing-image-frame md:h-96">
                <Image
                  src="/img/naprawa-izolacji-po-kunach/hero.jpg"
                  alt="Naprawa izolacji po kunach"
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
          title="Naprawa izolacji po kunach polega na usunięciu zniszczeń i przywróceniu szczelnej warstwy ocieplenia."
          answer="Bytowanie kuny szybko niszczy izolację, co zwiększa straty ciepła i pogarsza komfort na poddaszu. W zależności od skali uszkodzeń wykonujemy naprawę punktową lub pełne odtworzenie warstwy izolacyjnej celulozą."
          bullets={[
            "Ocena skali uszkodzeń i plan naprawy dopasowany do dachu.",
            "Możliwość wymiany najbardziej zniszczonych fragmentów izolacji.",
            "Wykorzystanie materiału mniej atrakcyjnego dla zwierząt (celuloza).",
          ]}
          qa={[
            {
              question: "Czy sama „dokładka” izolacji zawsze wystarczy?",
              answer:
                "Nie zawsze. Przy większych zniszczeniach skuteczniejsza jest wymiana starej warstwy i wykonanie nowej izolacji.",
            },
            {
              question: "Jak rozpoznać, że problemem jest kuna?",
              answer:
                "Typowe sygnały to hałas nocą, nieprzyjemny zapach, odchody i wyraźne pogorszenie termiki poddasza.",
            },
            {
              question: "Czy można połączyć naprawę z termowizją?",
              answer:
                "Tak. Diagnostyka termowizyjna pomaga precyzyjnie wskazać miejsca strat ciepła i potwierdzić efekt naprawy.",
            },
          ]}
          localNote="Najwięcej napraw izolacji po kunach realizujemy w Szczecinie i okolicznych miejscowościach, ale dojeżdżamy również do innych regionów."
          relatedLinks={[
            { href: "/naprawa-ocieplenia-poddasza", label: "Naprawa ocieplenia poddasza" },
            { href: "/termowizja", label: "Termowizja po zniszczeniach" },
            { href: "/izolacja-poddaszy", label: "Nowa izolacja poddasza" },
          ]}
        />

        <section className="section-shell py-16 md:py-20">
          <div className="section-inner container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="soft-card reveal-up rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-bold text-primary">
                  Dlaczego celuloza po kunach sprawdza się lepiej
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Wykonujemy ocieplenia poddaszy z wełny celulozowej, w której kuny
                  praktycznie nie zakładają legowisk. To skuteczny materiał zarówno
                  przy nowych realizacjach, jak i przy naprawach izolacji.
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  {celluloseAdvantages.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <aside className="soft-card reveal-up reveal-delay-1 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-primary">Skutki bytowania kuny</h3>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    <span>Duże ubytki ciepła i wyższe rachunki za ogrzewanie.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    <span>Zniszczenie warstwy izolacyjnej przez legowiska i tunele.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    <span>Ryzyko dalszych uszkodzeń poddasza i pogorszenia komfortu.</span>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section id="opcje" className="marketing-section py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-10 text-center text-3xl font-bold">Naprawa czy nowa izolacja</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {repairOptions.map((option) => (
                <article key={option.title} className="soft-card rounded-2xl p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-primary">{option.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                    {option.description}
                  </p>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-relaxed text-foreground/90 md:text-base">
              Zapraszamy do korzystania z naszych usług. Jesteśmy specjalistami w
              dziedzinie napraw izolacji i działamy na terenie całej Polski.
            </p>
          </div>
        </section>

        <section className="marketing-section-alt py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1fr_1fr]">
              <article className="soft-card rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-bold text-primary">
                  Jak rozpoznać obecność kuny na poddaszu?
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Kuna zostawia charakterystyczne oznaki, które zwykle da się
                  zauważyć lub usłyszeć. Często hałas bywa mylony z obecnością myszy,
                  ale kuny są zazwyczaj głośniejsze i bardziej aktywne nocą.
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  {martenSigns.map((sign) => (
                    <li key={sign} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Przy większych zniszczeniach usuwamy zasiedlony materiał i
                  wykonujemy nowe ocieplenie. Celuloza jest bezpieczna dla ludzi,
                  ale nie sprzyja zwierzętom i utrudnia budowę gniazd.
                </p>
              </article>

              <div className="space-y-6">
                <article className="soft-card rounded-2xl p-6 md:p-8">
                  <h2 className="text-3xl font-bold text-primary">Diagnostyka termowizyjna</h2>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                    Przed naprawą wykorzystujemy kamery termowizyjne, żeby dokładnie
                    sprawdzić, w których punktach doszło do uszkodzenia izolacji.
                    Dzięki temu zakres prac jest precyzyjny i skuteczny.
                  </p>
                </article>

                <article className="soft-card rounded-2xl p-6 md:p-8">
                  <h2 className="text-3xl font-bold text-primary">Gdzie realizujemy zlecenia</h2>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                    Najczęściej pracujemy w Szczecinie i okolicznych
                    miejscowościach, ale realizujemy usługi także w innych regionach
                    Polski po wcześniejszym ustaleniu szczegółów.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="marketing-section py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-10 text-center text-3xl font-bold">
              Realizacje napraw izolacji po kunach
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {martenRepairGalleryImages.map((image, index) => (
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
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      loading="lazy"
                      quality={70}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="film" className="marketing-section py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-4 text-center text-3xl font-bold">Materiał wideo</h2>
              <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
                Krótkie nagranie pokazujące temat naprawy izolacji po kunach oraz
                możliwe działania naprawcze.
              </p>

              <div className="marketing-surface p-3 sm:p-4">
                <div className="aspect-video w-full overflow-hidden rounded-xl border border-primary/10 bg-black">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube-nocookie.com/embed/aonxLOo1Poo?rel=0"
                    title="Naprawa izolacji po kunach"
                    width={1280}
                    height={720}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceIntentSection
          title="Czy ten zakres prac jest dla Ciebie?"
          points={[
            "Słyszysz odgłosy zwierząt na poddaszu, głównie nocą.",
            "Masz podejrzenie zniszczenia izolacji i wzrostu strat ciepła.",
            "Chcesz skutecznie naprawić ocieplenie i ograniczyć ryzyko powrotu kuny.",
          ]}
        />

        <section className="marketing-cta-band py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-5 text-3xl font-bold">Zleć naprawę izolacji po kunach</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
              Skontaktuj się z nami i ustal szczegóły zlecenia. Dobierzemy najlepszy
              wariant naprawy dla Twojego dachu i poddasza.
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
