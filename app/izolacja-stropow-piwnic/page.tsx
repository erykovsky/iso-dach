import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQPageSchema } from "@/components/schema/faq-schema";
import { ServiceSchema } from "@/components/schema/service-schema";
import { ServiceIntentSection } from "@/components/service-intent-section";
import { GeoAnswerSection } from "@/components/geo-answer-section";
import { getServicePageImagesBySlot } from "@/lib/service-page-images";

export const metadata: Metadata = {
  title: "Ocieplanie stropu piwnicy",
  description:
    "Ocieplanie stropu piwnicy systemem Białe Ciepło i płytami ISOVER Stropmax 31. Skuteczna redukcja strat ciepła, lepsza akustyka i szybka realizacja.",
  keywords: [
    "ocieplanie stropu piwnicy",
    "izolacja stropu nad piwnicą",
    "Białe Ciepło",
    "ISOVER Stropmax 31",
    "natryskowa izolacja stropu piwnicy",
    "ocieplenie piwnicy Szczecin",
  ],
  alternates: {
    canonical: "https://iso-dach.eu/izolacja-stropow-piwnic",
  },
  openGraph: {
    title: "Ocieplanie stropu piwnicy",
    description:
      "Natryskowa izolacja Białe Ciepło oraz płyty ISOVER Stropmax 31. Skuteczne docieplenie stropów piwnic.",
    url: "https://iso-dach.eu/izolacja-stropow-piwnic",
    type: "article",
    images: [
      {
        url: "/img/izolacja-stropow-piwnic/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ocieplanie stropu piwnicy - ISO-DACH",
      },
    ],
  },
};

const bialeCieploFeatures = [
  "Lambda deklarowana λ = 0,034 W/(mK), fizyczna λ = 0,031 W/(mK).",
  "Ultralekki materiał o gęstości 45-55 kg/m3.",
  "Śnieżnobiała barwa w masie i estetyczny efekt po aplikacji.",
  "System mineralny, ekologiczny i niepalny (klasa A1).",
  "Bardzo dobre właściwości akustyczne i pełna paroprzepuszczalność.",
  "Brak mostków termicznych i możliwość natrysku do 250 mm.",
  "Szybka aplikacja: około 50-100 m2 / 8h (zależnie od grubości).",
];

const useCases = [
  "Garaże wielkopowierzchniowe",
  "Stropy piwnic budynków wielorodzinnych",
  "Hale widowiskowo-sportowe",
  "Hale produkcyjno-magazynowe",
  "Biura, restauracje, banki i korytarze szkół",
  "Obiekty specjalistyczne: statki i platformy wiertnicze",
];

const basementFaqs = [
  {
    question: "Czy ocieplenie stropu piwnicy można wykonać bez remontu mieszkania?",
    answer:
      "Tak. Prace prowadzimy od strony piwnicy lub garażu, dzięki czemu nie ingerujemy w wykończenie części mieszkalnej.",
  },
  {
    question: "Kiedy lepsze jest Białe Ciepło, a kiedy płyty ISOVER Stropmax 31?",
    answer:
      "Przy nieregularnych powierzchniach i trudnych detalach często lepiej sprawdza się natrysk Białe Ciepło. Płyty ISOVER Stropmax 31 to z kolei szybki montaż na równych powierzchniach.",
  },
  {
    question: "Czy izolacja stropu piwnicy poprawia także akustykę?",
    answer:
      "Tak. Odpowiednio dobrana izolacja ogranicza nie tylko straty ciepła, ale też przenoszenie części hałasów między kondygnacjami.",
  },
];

export default async function IzolacjaStropowPiwnicPage() {
  const pageImages = await getServicePageImagesBySlot("izolacja-stropow-piwnic");

  const heroImage =
    pageImages.hero[0] ??
    pageImages.gallery[0] ??
    pageImages.material[0] ??
    null;
  const basementCeilingGalleryImages = pageImages.gallery;
  const materialImages = pageImages.material;
  const materialCards = [
    {
      title: "Białe Ciepło",
      description:
        "Izolacja natryskowa, która dociera do najtrudniejszych miejsc, szczelnie pokrywa powierzchnię i skutecznie ogranicza mostki termiczne.",
      image: materialImages[0] ?? null,
    },
    {
      title: "ISOVER Stropmax 31",
      description:
        "Płyty montowane o dobrych parametrach cieplnych i akustycznych. Rozwiązanie cenione za szybki i prosty montaż.",
      image: materialImages[1] ?? null,
    },
  ];

  return (
    <>
      <ServiceSchema
        name="Izolacja stropów piwnic"
        description="Profesjonalne ocieplanie stropów piwnic systemem natryskowym Białe Ciepło i płytami ISOVER Stropmax 31."
        url="https://iso-dach.eu/izolacja-stropow-piwnic"
        image="https://iso-dach.eu/img/izolacja-stropow-piwnic/hero.jpg"
      />
      <FAQPageSchema faqs={basementFaqs} />

      <div className="min-h-screen marketing-page">
        <section className="marketing-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
<h1 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                  Ocieplanie stropu piwnicy
                </h1>
                <p className="mb-8 text-lg text-white/90">
                  Natryskowy system izolacji termiczno-akustycznej Białe Ciepło
                  oraz płyty ISOVER Stropmax 31 to skuteczny sposób na
                  ograniczenie strat ciepła i poprawę komfortu nad piwnicą.
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
                    <Link href="#materialy">Zobacz materiały</Link>
                  </Button>
                </div>
              </div>

              <div className="relative h-64 marketing-image-frame md:h-96">
                {heroImage ? (
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    quality={70}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <GeoAnswerSection
          title="Ocieplenie stropu piwnicy poprawia komfort na parterze i ogranicza straty ciepła bez ingerencji w część mieszkalną."
          answer="Strop nad nieogrzewaną piwnicą to częsty punkt ucieczki energii. Zastosowanie systemu natryskowego lub płyt izolacyjnych pozwala szybko poprawić parametry cieplne i akustyczne budynku."
          bullets={[
            "Lepszy komfort cieplny podłogi na kondygnacji mieszkalnej.",
            "Mniejsze zużycie energii potrzebnej do ogrzewania budynku.",
            "Skuteczna izolacja również w obiektach wielkopowierzchniowych.",
          ]}
          qa={[
            {
              question: "Czy prace można zrobić bez remontu mieszkań?",
              answer:
                "Tak. Ocieplenie wykonujemy od strony piwnicy lub garażu, więc nie trzeba ingerować w wykończenie pomieszczeń mieszkalnych.",
            },
            {
              question: "Co wybrać: Białe Ciepło czy płyty?",
              answer:
                "Dobór zależy od konstrukcji stropu i oczekiwanego efektu. Przy nieregularnych powierzchniach często lepiej sprawdza się natrysk.",
            },
            {
              question: "Czy taka izolacja pomaga też akustycznie?",
              answer:
                "Tak. Oprócz poprawy termiki materiał ogranicza przenoszenie części hałasów między kondygnacjami.",
            },
          ]}
          localNote="Usługi izolacji stropów piwnic najczęściej realizujemy w Szczecinie i okolicach, ale dojeżdżamy także do innych miast."
          relatedLinks={[
            { href: "/termomodernizacja", label: "Kompleksowa termomodernizacja" },
            { href: "/ocieplanie-stropodachu", label: "Ocieplanie stropodachu" },
            { href: "/blog/system-izolacji-biale-cieplo", label: "System Białe Ciepło®" },
          ]}
        />

        <section className="section-shell py-16 md:py-20">
          <div className="section-inner container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="soft-card reveal-up rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-bold text-primary">
                  System Białe Ciepło
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Natryskowy system izolacji termiczno-akustycznej Białe
                  Ciepło zrewolucjonizował rynek izolacji dzięki bardzo dobrym
                  parametrom i wszechstronnemu zastosowaniu. Odpowiednią grubość
                  warstwy wykonujemy agregatem, a następnie nadajemy strukturę
                  gładką lub porowatą.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Po całkowitym wyschnięciu powierzchnię można malować. Materiał
                  jest lekki, trwały i skutecznie wspiera izolację cieplną oraz
                  akustyczną stropów piwnic.
                </p>
              </article>

              <aside className="soft-card reveal-up reveal-delay-1 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-primary">
                  Cechy wyróżniające
                </h3>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  {bialeCieploFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="marketing-section py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-10 text-center text-3xl font-bold">
              Realizacje izolacji stropów piwnic
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {basementCeilingGalleryImages.map((image, index) => (
                <article
                  key={image.src}
                  className="group overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-[0_18px_35px_-28px_rgba(75,0,18,0.7)]"
                >
                  <div className="relative aspect-4/3">
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

        <section id="materialy" className="marketing-section py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-10 text-center text-3xl font-bold">
              Materiały, które stosujemy
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {materialCards.map((material) => (
                <article key={material.title} className="marketing-tile">
                {material.image ? (
                  <div className="relative h-64">
                    <Image
                      src={material.image.src}
                      alt={material.image.alt || material.title}
                      fill
                      className="object-cover"
                      quality={70}
                    />
                  </div>
                ) : null}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-primary">{material.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {material.description}
                  </p>
                </div>
              </article>
              ))}
            </div>
          </div>
        </section>

        <section className="marketing-section-alt py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr]">
              <article className="soft-card rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-bold text-primary">
                  Gdzie sprawdza się ta technologia
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                  System stosujemy wszędzie tam, gdzie potrzebna jest izolacja
                  ograniczająca straty ciepła i wyciszająca hałas:
                </p>
                <ul className="mt-5 grid gap-2 text-sm text-foreground/90 md:text-base">
                  {useCases.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="soft-card rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-bold text-primary">
                  Kiedy konieczne jest ocieplenie stropu piwnicy?
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Pomijanie stropu piwnicy podczas ocieplania budynku to częsty
                  i kosztowny błąd. Skutkiem są duże straty ciepła, wyższe koszty
                  ogrzewania oraz niższy komfort cieplny pomieszczeń nad piwnicą.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Dobrze wykonana izolacja pozwala utrzymać chłodniejszy klimat w
                  piwnicy, a jednocześnie ogranicza wychładzanie części mieszkalnej.
                  To realna oszczędność na eksploatacji budynku.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Wykonujemy także naprawy izolacji dachów i innych przegród,
                  wykorzystując nowoczesne rozwiązania oraz wysokiej jakości
                  materiały izolacyjne.
                </p>
              </article>
            </div>
          </div>
        </section>

        <ServiceIntentSection
          title="Czy ocieplenie stropu piwnicy jest dla Ciebie?"
          points={[
            "Podłoga na parterze jest chłodna mimo pracy ogrzewania.",
            "Chcesz ograniczyć rachunki i straty ciepła przez strop nad piwnicą.",
            "Potrzebujesz izolacji, która dodatkowo poprawi akustykę.",
          ]}
        />

        <section className="marketing-cta-band py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-5 text-3xl font-bold">
              Zleć ocieplenie stropu piwnicy
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
              Przygotujemy odpowiedni zakres prac i dobierzemy najlepszą metodę:
              natrysk Białe Ciepło albo montaż płyt ISOVER Stropmax 31.
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
