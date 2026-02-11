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
import { Card, CardContent } from "@/components/ui/card";
import { FAQPageSchema } from "@/components/schema/faq-schema";
import { ServiceSchema } from "@/components/schema/service-schema";
import { ServiceIntentSection } from "@/components/service-intent-section";
import { GeoAnswerSection } from "@/components/geo-answer-section";
import { CheckCircle, ArrowRight, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Ocieplanie stropodachu",
  description:
    "Profesjonalne ocieplanie stropodachu metodą wdmuchiwania. Skuteczna izolacja termiczna, która zapobiega ucieczce ciepła przez dach.",
  keywords: [
    "ocieplanie stropodachu",
    "izolacja stropodachu",
    "wdmuchiwanie celulozy stropodach",
    "ocieplenie dachu płaskiego",
    "ocieplanie stropodachu Szczecin",
    "naprawa stropodachu",
  ],
  alternates: {
    canonical: "https://iso-dach.eu/ocieplanie-stropodachu",
  },
  openGraph: {
    title: "Ocieplanie stropodachu | ISO-DACH",
    description:
      "Skuteczne ocieplenie stropodachu metodą wdmuchiwania. Mniejsze straty ciepła i niższe rachunki.",
    url: "https://iso-dach.eu/ocieplanie-stropodachu",
    type: "article",
    images: [
      {
        url: "/img/ocieplanie-stropodachu/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ocieplanie stropodachu ISO-DACH",
      },
    ],
  },
};

const stropodachFaqSchema = [
  {
    question: "Jaka jest optymalna grubość izolacji stropodachu?",
    answer:
      "Najczęściej stosujemy warstwę 20-30 cm, zależnie od konstrukcji stropodachu i oczekiwanego efektu energetycznego.",
  },
  {
    question: "Jak długo trwa ocieplanie stropodachu metodą wdmuchiwania?",
    answer:
      "Dla standardowego domu jednorodzinnego najczęściej 1-2 dni robocze po wcześniejszym oględzinach.",
  },
  {
    question: "Czy ocieplanie stropodachu wymaga pozwolenia?",
    answer:
      "W większości przypadków nie, bo prace nie zmieniają bryły budynku. Weryfikujemy to indywidualnie przed realizacją.",
  },
];

const stropodachGalleryImages = Array.from({ length: 18 }, (_, index) => ({
  src: `/img/ocieplanie-stropodachu/${index + 1}.jpg`,
  alt: `Realizacja ocieplania stropodachu ${index + 1}`,
}));

export default function OcieplanieStropodachuPage() {
  return (
    <>
      <ServiceSchema
        name="Ocieplanie stropodachu"
        description="Profesjonalne ocieplanie stropodachu metodą wdmuchiwania. Skuteczna izolacja termiczna i ograniczenie strat ciepła."
        url="https://iso-dach.eu/ocieplanie-stropodachu"
        image="https://iso-dach.eu/img/ocieplanie-stropodachu/hero.jpg"
      />
      <FAQPageSchema faqs={stropodachFaqSchema} />
      <div className="min-h-screen marketing-page">
        {/* Hero Section */}
        <section className="marketing-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
<h1 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                  Profesjonalne ocieplanie stropodachu
                </h1>
                <p className="mb-8 text-lg text-white/90">
                  Wykonujemy ocieplenia stropodachów bloków, wieżowców i różnych
                  typów budynków. Izolacja wewnętrzna płaskich dachów skutecznie
                  obniża koszty utrzymania i poprawia komfort cieplny.
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
                  src="/img/ocieplanie-stropodachu/hero.jpg"
                  alt="Realizacja ocieplania stropodachu"
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
          title="Ocieplanie stropodachu metodą wdmuchiwania skutecznie ogranicza straty ciepła bez dużej ingerencji w dach."
          answer="W starszych budynkach tradycyjna izolacja często nie domyka wszystkich przestrzeni. Wdmuchiwanie granulatu pozwala równomiernie rozprowadzić materiał także w trudno dostępnych miejscach i poprawić parametry energetyczne budynku."
          bullets={[
            "Szczelne wypełnienie pustek pod całą powierzchnią stropodachu.",
            "Krótki czas realizacji i mała uciążliwość dla mieszkańców.",
            "Niższe rachunki dzięki ograniczeniu ucieczki ciepła przez dach.",
          ]}
          qa={[
            {
              question: "Czy trzeba zrywać całe pokrycie dachu?",
              answer:
                "Nie. W większości realizacji wykonujemy tylko niezbędne otwory technologiczne i po zakończeniu prac je odtwarzamy.",
            },
            {
              question: "Czy to działa w starych blokach i kamienicach?",
              answer:
                "Tak. To jedna z najczęściej wybieranych metod właśnie w starszych budynkach z problemem nierównej lub osiadłej izolacji.",
            },
            {
              question: "Jak szybko można umówić wycenę?",
              answer:
                "Po kontakcie ustalamy termin oględzin i na tej podstawie przygotowujemy zakres oraz koszt realizacji.",
            },
          ]}
          localNote="Najczęściej realizujemy ocieplanie stropodachów w województwie zachodniopomorskim, ale obsługujemy inwestycje również poza regionem."
          relatedLinks={[
            { href: "/termowizja", label: "Termowizja przed dociepleniem" },
            { href: "/izolacja-poddaszy", label: "Izolacja poddaszy" },
            { href: "/blog/termomodernizacja-budynku-od-czego-zaczac", label: "Termomodernizacja krok po kroku" },
          ]}
        />

        <section className="section-shell py-16 md:py-20">
          <div className="section-inner container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <article className="soft-card reveal-up rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-bold text-primary">Ocieplanie stropodachu</h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Źle ocieplone stropodachy i stropy w starszych budynkach to częsty
                  problem. W obiektach budowanych 20-30 lat temu standardy
                  energooszczędności były niższe, a tradycyjne ocieplenie płatami
                  wełny mineralnej czy styropianu często nie daje szczelnego efektu na
                  całej powierzchni dachu.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Nowoczesna technologia wdmuchiwania granulatu celulozy lub wełny
                  mineralnej skutecznie rozwiązuje ten problem. Urządzenia dokładnie
                  rozprowadzają izolację również w trudno dostępnych i niewidocznych
                  miejscach.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  To przekłada się na skuteczne ocieplanie od wewnątrz i poprawę
                  parametrów termoizolacyjnych budynku. Dobrze wykonana izolacja dachu
                  pozwala zaoszczędzić nawet do 30% kosztów energii.
                </p>
              </article>

              <aside className="soft-card reveal-up reveal-delay-1 rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-primary">
                  Dlaczego ta metoda jest skuteczna?
                </h2>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>Szczelne wypełnienie pustek pod całą powierzchnią dachu.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>Możliwość pracy bez demontażu całej konstrukcji.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>Skuteczność również w starszych budynkach i blokach.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>Realna redukcja strat ciepła i kosztów eksploatacji.</span>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="marketing-section py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-10 text-center text-3xl font-bold">
              Realizacje ocieplania stropodachu
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {stropodachGalleryImages.map((image) => (
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
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Zalety Section */}
        <section id="zalety" className="marketing-section py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Zalety ocieplania stropodachu
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Redukcja strat ciepła",
                  description:
                    "Zmniejszenie strat ciepła przez dach nawet o 30%, co przekłada się na niższe rachunki za ogrzewanie.",
                },
                {
                  title: "Komfort termiczny",
                  description:
                    "Utrzymanie optymalnej temperatury na najwyższych kondygnacjach, zarówno zimą jak i latem.",
                },
                {
                  title: "Szybka realizacja",
                  description:
                    "Metoda wdmuchiwania pozwala na szybkie i efektywne ocieplenie stropodachu bez konieczności demontażu dachu.",
                },
                {
                  title: "Brak ingerencji w konstrukcję",
                  description:
                    "Technologia nie wymaga ingerencji w konstrukcję dachu ani zakłócania codziennego funkcjonowania budynku.",
                },
                {
                  title: "Dokładne wypełnienie",
                  description:
                    "Materiał izolacyjny dokładnie wypełnia wszystkie przestrzenie, eliminując mostki termiczne i zapewniając równomierną izolację.",
                },
                {
                  title: "Trwałość rozwiązania",
                  description:
                    "Zastosowane materiały izolacyjne charakteryzują się długą żywotnością i odpornością na osiadanie.",
                },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="soft-card rounded-2xl border-0 shadow-none"
                >
                  <CardContent className="p-4 sm:p-5">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="mt-1 shrink-0 text-secondary" />
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="marketing-section-alt py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
              <div className="soft-card rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-bold text-primary">
                  Jak ocieplamy stropodach od wewnątrz
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Praca przy ocieplaniu stropodachu nie musi powodować uciążliwości
                  dla mieszkańców. Jeśli brakuje dostępu do przestrzeni wewnętrznej
                  stropodachu, wykonujemy otwór technologiczny (zwykle ok. 50×50 cm)
                  i przez niego wprowadzamy wąż do wdmuchiwania termoizolacji.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Liczba otworów zależy od układu stropodachu i możliwości dostępu.
                  Po wykonaniu izolacji otwory zamykamy i przywracamy wygląd sprzed
                  robót.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                  Stosujemy granulat celulozy lub granulat wełny mineralnej. Dzięki
                  temu uzyskujemy szczelną i trwałą termoizolację ograniczającą straty
                  ciepła z budynku.
                </p>
              </div>
              <div className="relative h-full min-h-[320px] marketing-image-frame">
                <Image
                  src="/img/ocieplanie-stropodachu/16.jpg"
                  alt="Wdmuchiwanie izolacji w stropodachu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Materiały Section */}
        <section className="marketing-section py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Materiały izolacyjne, które stosujemy
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {[
                {
                  title: "Granulat wełny mineralnej",
                  description:
                    "Sprawdzone rozwiązanie o bardzo dobrych właściwościach termoizolacyjnych i akustycznych, odporne na osiadanie.",
                  image: "/img/ocieplanie-stropodachu/hero3.jpg",
                },
                {
                  title: "Granulat celulozowy",
                  description:
                    "Materiał aplikowany metodą wdmuchiwania, który dokładnie wypełnia przestrzenie i ogranicza mostki termiczne.",
                  image: "/img/ocieplanie-stropodachu/hero4.jpg",
                },
              ].map((material, index) => (
                <div key={index} className="marketing-tile">
                  <div className="relative h-52">
                    <Image
                      src={material.image || "/img/home/slide.jpg"}
                      alt={material.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="mb-2 text-lg font-semibold">{material.title}</h3>
                    <p className="text-gray-600">{material.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell py-16 md:py-20">
          <div className="section-inner container mx-auto px-4">
            <div className="mx-auto max-w-5xl space-y-5 rounded-2xl border border-primary/10 bg-white/88 p-6 shadow-[0_20px_40px_-30px_rgba(75,0,18,0.52)] md:p-8">
              <h2 className="text-3xl font-bold text-primary">
                Ocieplanie stropodachów poprzez wdmuchiwanie
              </h2>
              <p className="text-sm leading-relaxed text-foreground/90 md:text-base">
                Specjalne pompy wdmuchujące materiał pracują pod wysokim
                ciśnieniem, co jest szczególnie ważne w wysokich budynkach. Dzięki
                długim wężom możemy skutecznie transportować granulat i równomiernie
                rozprowadzać go na całej powierzchni stropodachu.
              </p>
              <p className="text-sm leading-relaxed text-foreground/90 md:text-base">
                Podczas realizacji pracujemy zespołowo: jedna osoba odpowiada za
                zasilanie urządzenia, druga za prowadzenie węża i kontrolę
                rozprowadzenia materiału. Dbamy o właściwe napowietrzenie granulatu i
                odpowiednie parametry aplikacji.
              </p>
              <p className="text-sm leading-relaxed text-foreground/90 md:text-base">
                Otwory technologiczne wykonujemy możliwie małe, z zachowaniem pełnej
                precyzji. Dzięki temu uzyskujemy szczelną i trwałą warstwę izolacji
                bez dużej ingerencji w konstrukcję dachu.
              </p>
              <p className="text-sm leading-relaxed text-foreground/90 md:text-base">
                Działamy głównie na terenie Szczecina i okolicznych miejscowości, ale
                dojeżdżamy również w inne lokalizacje. W trakcie działalności
                ociepliliśmy wiele budynków, w tym bloki mieszkalne.
              </p>
            </div>
          </div>
        </section>

        <ServiceIntentSection
          points={[
            "Masz stropodach i podejrzewasz duże straty ciepła przez górną przegrodę.",
            "Szukasz szybkiej metody ocieplenia bez rozbierania całej konstrukcji.",
            "Chcesz poprawić komfort na najwyższych kondygnacjach i ograniczyć rachunki.",
          ]}
        />

        {/* FAQ Section */}
        <section className="marketing-section-alt py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Najczęściej zadawane pytania
            </h2>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "Jaka jest optymalna grubość izolacji stropodachu?",
                    answer:
                      "Optymalna grubość izolacji stropodachu zależy od wielu czynników, takich jak klimat, rodzaj budynku i materiał izolacyjny. Obecnie standardem jest stosowanie warstwy o grubości 20-30 cm dla granulatu wełny mineralnej lub celulozowej. Nasi specjaliści pomogą dobrać najlepsze rozwiązanie dla Twojego budynku.",
                  },
                  {
                    question: "Jak długo trwa ocieplanie stropodachu metodą wdmuchiwania?",
                    answer:
                      "Czas realizacji zależy od powierzchni stropodachu i dostępności. Dla standardowego budynku jednorodzinnego proces ocieplania stropodachu metodą wdmuchiwania trwa zazwyczaj 1-2 dni. Dla większych obiektów czas ten może być dłuższy. Dokładny harmonogram ustalamy indywidualnie po ocenie zakresu prac.",
                  },
                  {
                    question: "Czy ocieplanie stropodachu wymaga pozwolenia na budowę?",
                    answer:
                      "W większości przypadków ocieplanie stropodachu metodą wdmuchiwania nie wymaga pozwolenia na budowę ani zgłoszenia, ponieważ nie ingeruje w konstrukcję budynku ani nie zmienia jego wyglądu zewnętrznego. Jednak przepisy mogą się różnić w zależności od lokalizacji i specyfiki budynku. Nasi specjaliści pomogą w dopełnieniu ewentualnych formalności.",
                  },
                  {
                    question: "Czy można ocieplić stropodach zimą?",
                    answer:
                      "Tak, ocieplanie stropodachu metodą wdmuchiwania można wykonywać przez cały rok, również zimą, ponieważ prace prowadzone są głównie od zewnątrz budynku i nie wymagają demontażu dachu. Jednak w przypadku bardzo niskich temperatur lub intensywnych opadów śniegu prace mogą być utrudnione lub czasowo wstrzymane.",
                  },
                  {
                    question: "Jaki jest okres gwarancji na ocieplenie stropodachu?",
                    answer:
                      "Oferujemy standardową gwarancję na wykonane prace ociepleniowe na okres 5 lat. Na zastosowane materiały obowiązuje gwarancja producenta, która zazwyczaj wynosi od 5 do 10 lat. Przy odpowiedniej wentylacji stropodachu, dobrze wykonane ocieplenie może służyć nawet 30-40 lat.",
                  },
                ].map((faq, index) => (
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

        {/* CTA Section */}
        <section className="marketing-cta-band py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold">
              Gotowy na ciepły i energooszczędny dom?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
              Skontaktuj się z nami, aby otrzymać bezpłatną wycenę ocieplenia
              stropodachu. Nasi eksperci pomogą dobrać najlepsze rozwiązanie dla
              Twojego budynku.
            </p>
            <Button size="lg" asChild>
              <Link href="/kontakt">
                Zamów bezpłatną wycenę
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
