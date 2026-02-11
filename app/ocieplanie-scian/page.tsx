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
import { CheckCircle, ArrowRight, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Ocieplanie ścian zewnętrznych",
  description:
    "Profesjonalne ocieplanie ścian zewnętrznych wełną celulozową i styropianem. Zmniejsz straty ciepła o 30%, obniż rachunki za ogrzewanie. Bezpłatna wycena w 24h. Działamy w woj. zachodniopomorskim.",
  keywords: [
    "ocieplanie ścian",
    "izolacja ścian zewnętrznych",
    "styropian grafitowy",
    "wełna mineralna",
    "ocieplanie domu",
    "termomodernizacja ścian",
    "Szczecin",
  ],
  alternates: {
    canonical: "https://iso-dach.eu/ocieplanie-scian",
  },
  openGraph: {
    title: "Ocieplanie ścian zewnętrznych",
    description:
      "Profesjonalne ocieplanie ścian. Zmniejsz straty ciepła o 30%. Bezpłatna wycena.",
    url: "https://iso-dach.eu/ocieplanie-scian",
    type: "article",
    images: [
      {
        url: "/img/9.jpg",
        width: 1200,
        height: 630,
        alt: "Ocieplanie ścian zewnętrznych - ISO-DACH",
      },
    ],
  },
};

const wallInsulationFAQs = [
  {
    question: "Jaka jest optymalna grubość izolacji ścian zewnętrznych?",
    answer:
      "Według obecnych norm energetycznych WT 2021, optymalna grubość izolacji ścian zewnętrznych wynosi 15-20 cm dla styropianu EPS lub 15-18 cm dla wełny mineralnej. Badania pokazują, że taka grubość pozwala zmniejszyć straty ciepła nawet o 30%, co przekłada się na realne oszczędności na ogrzewaniu wynoszące 800-1200 zł rocznie dla domu o powierzchni 150 m².",
  },
  {
    question: "Jak długo trwa ocieplanie ścian zewnętrznych?",
    answer:
      "Czas realizacji ocieplania ścian zależy od wielkości budynku i warunków pogodowych. Dla standardowego domu jednorodzinnego o powierzchni 150 m² proces trwa zazwyczaj od 2 do 4 tygodni. Dokładny harmonogram prac: przygotowanie powierzchni (2-3 dni), montaż izolacji (5-7 dni), warstwa zbrojąca (3-4 dni), wykończenie elewacji (4-6 dni).",
  },
  {
    question: "Czy ocieplanie ścian można wykonywać zimą?",
    answer:
      "Prace ociepleniowe najlepiej wykonywać w temperaturze powyżej +5°C i wilgotności poniżej 80%. Optymalny okres to wiosna, lato i wczesna jesień. Zimowe wykonywanie prac w temperaturze poniżej 0°C może negatywnie wpłynąć na przyczepność klejów i jakość tynków, dlatego nie zalecamy tego rozwiązania.",
  },
  {
    question: "Czy potrzebuję pozwolenia na ocieplenie ścian?",
    answer:
      "W większości przypadków ocieplenie ścian zewnętrznych nie wymaga pozwolenia na budowę, a jedynie zgłoszenia robót budowlanych do 30 dni przed rozpoczęciem prac. Zgłoszenie nie jest wymagane, gdy grubość izolacji nie przekracza 10 cm. W przypadku budynków zabytkowych lub położonych w obszarach ochrony konserwatorskiej może być wymagane uzyskanie zgody.",
  },
  {
    question: "Jaki jest okres gwarancji na ocieplenie ścian?",
    answer:
      "ISO-DACH udziela 5-letniej gwarancji na wykonane prace ociepleniowe. Na zastosowane materiały obowiązuje gwarancja producenta wynosząca od 5 do 10 lat. Przy prawidłowej konserwacji i odświeżaniu tynków co 15-20 lat, dobrze wykonane ocieplenie ścian może służyć nawet 30-40 lat bez utraty właściwości izolacyjnych.",
  },
];

export default function OcieplanieScianPage() {
  return (
    <>
      <ServiceSchema
        name="Ocieplanie ścian zewnętrznych"
        description="Profesjonalne ocieplanie ścian zewnętrznych poprawiające efektywność energetyczną budynków."
        url="https://iso-dach.eu/ocieplanie-scian"
        image="https://iso-dach.eu/img/9.jpg"
      />
      <FAQPageSchema faqs={wallInsulationFAQs} />
      <div className="min-h-screen marketing-page">
        {/* Hero Section */}
        <section className="marketing-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Profesjonalne Ocieplanie Ścian
                </h1>
                <p className="text-white/90 text-lg mb-8">
                  Kompleksowa izolacja ścian zewnętrznych, która znacząco redukuje straty
                  ciepła i poprawia efektywność energetyczną Twojego domu. Nasze
                  rozwiązania to gwarancja komfortu i oszczędności.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    asChild
                    className="bg-white text-primary hover:bg-gray-100"
                  >
                    <Link href="/kontakt">Bezpłatna wycena</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="secondary"
                    asChild
                  >
                    <Link href="#zalety">Poznaj zalety</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-64 md:h-96 marketing-image-frame">
                <Image
                  src="/img/9.jpg"
                  alt="Ocieplanie ścian zewnętrznych"
                  fill
                  className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Zalety Section */}
        <section id="zalety" className="marketing-section py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Zalety Ocieplania Ścian
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Oszczędność energii",
                  description:
                    "Zmniejszenie strat ciepła przez ściany zewnętrzne nawet o 30%, co przekłada się na niższe rachunki za ogrzewanie.",
                },
                {
                  title: "Komfort termiczny",
                  description:
                    "Utrzymanie optymalnej temperatury wewnątrz budynku przez cały rok, zarówno zimą jak i latem.",
                },
                {
                  title: "Ochrona konstrukcji",
                  description:
                    "Zabezpieczenie ścian przed niekorzystnymi warunkami atmosferycznymi, co wydłuża żywotność budynku.",
                },
                {
                  title: "Eliminacja mostków termicznych",
                  description:
                    "Redukcja miejsc, przez które ucieka ciepło, co zapobiega powstawaniu pleśni i grzybów.",
                },
                {
                  title: "Poprawa estetyki",
                  description:
                    "Odnowienie elewacji budynku, co zwiększa jego atrakcyjność i wartość rynkową.",
                },
                {
                  title: "Ochrona środowiska",
                  description:
                    "Zmniejszenie emisji CO2 dzięki mniejszemu zużyciu energii potrzebnej do ogrzewania.",
                },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="border-none shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="text-secondary mt-1 shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Proces Section */}
        <section className="marketing-section-alt py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Jak Wygląda Proces Ocieplania Ścian?
            </h2>
            <div className="max-w-3xl mx-auto">
              <ol className="relative border-l border-primary/30">
                {[
                  {
                    title: "Konsultacja i wycena",
                    description:
                      "Nasi specjaliści przeprowadzają dokładną analizę budynku, określają potrzeby i przygotowują szczegółową wycenę.",
                  },
                  {
                    title: "Wybór materiałów",
                    description:
                      "Dobieramy optymalne materiały izolacyjne, uwzględniając specyfikę budynku, oczekiwania klienta i budżet.",
                  },
                  {
                    title: "Przygotowanie powierzchni",
                    description:
                      "Oczyszczamy i przygotowujemy ściany do ocieplenia, usuwając wszelkie nierówności i uszkodzenia.",
                  },
                  {
                    title: "Montaż izolacji",
                    description:
                      "Profesjonalny montaż wybranego materiału izolacyjnego z zachowaniem najwyższych standardów jakości.",
                  },
                  {
                    title: "Wykonanie warstwy zbrojącej",
                    description:
                      "Nakładamy siatkę zbrojącą i klej, co zapewnia trwałość i odporność mechaniczną całego systemu.",
                  },
                  {
                    title: "Wykończenie elewacji",
                    description:
                      "Nakładamy tynk elewacyjny w wybranym kolorze i fakturze, nadając budynkowi estetyczny wygląd.",
                  },
                  {
                    title: "Kontrola jakości",
                    description:
                      "Przeprowadzamy szczegółową kontrolę wykonanych prac, aby zapewnić najwyższą jakość usługi.",
                  },
                ].map((step, index) => (
                  <li key={index} className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 bg-primary text-white">
                      {index + 1}
                    </span>
                    <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Materiały Section */}
        <section className="marketing-section py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Materiały Izolacyjne, Które Stosujemy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Styropian EPS",
                  description:
                    "Najpopularniejszy materiał izolacyjny, oferujący dobry stosunek ceny do jakości. Dostępny w różnych grubościach i gęstościach.",
                  image: "/img/9.jpg",
                },
                {
                  title: "Styropian Grafitowy",
                  description:
                    "Zaawansowany materiał o lepszych właściwościach izolacyjnych niż tradycyjny styropian, pozwalający na stosowanie cieńszych warstw.",
                  image: "/img/9.jpg",
                },
                {
                  title: "Wełna Mineralna",
                  description:
                    "Doskonała izolacja termiczna i akustyczna, niepalna i paroprzepuszczalna, idealna dla budynków wymagających oddychających ścian.",
                  image: "/img/9.jpg",
                },
              ].map((material, index) => (
                <div
                  key={index}
                  className="marketing-tile"
                >
                  <div className="relative h-48">
                    <Image
                      src={material.image || "/img/9.jpg"}
                      alt={material.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{material.title}</h3>
                    <p className="text-gray-600">{material.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Realizacje Section */}
        <section className="marketing-section-alt py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nasze Realizacje</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="relative h-64 marketing-image-frame"
                >
                  <Image
                    src={`/img/9.jpg`}
                    alt={`Realizacja ocieplania ścian ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/galeria">Zobacz więcej realizacji</Link>
              </Button>
            </div>
          </div>
        </section>

        <ServiceIntentSection
          points={[
            "Zimą ściany są wyraźnie zimne, a pomieszczenia szybko tracą ciepło.",
            "Na elewacji pojawiają się oznaki zawilgocenia lub mostków termicznych.",
            "Chcesz obniżyć koszty ogrzewania i poprawić komfort bez przegrzewania domu latem.",
          ]}
        />

        {/* FAQ Section */}
        <section className="marketing-section py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Najczęściej Zadawane Pytania
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "Jaka jest optymalna grubość izolacji ścian zewnętrznych?",
                    answer:
                      "Optymalna grubość izolacji zależy od wielu czynników, takich jak klimat, rodzaj budynku, istniejąca izolacja i budżet. Obecnie standardem jest stosowanie styropianu o grubości 15-20 cm lub wełny mineralnej o grubości 15-18 cm. Nasi specjaliści pomogą dobrać najlepsze rozwiązanie dla Twojego domu.",
                  },
                  {
                    question: "Jak długo trwa ocieplanie ścian zewnętrznych?",
                    answer:
                      "Czas realizacji zależy od wielkości budynku, zakresu prac i warunków pogodowych. Dla standardowego domu jednorodzinnego proces ocieplania ścian trwa zazwyczaj od 2 do 4 tygodni. Dokładny harmonogram ustalamy indywidualnie po ocenie zakresu prac.",
                  },
                  {
                    question: "Czy ocieplanie ścian można wykonywać zimą?",
                    answer:
                      "Prace związane z ocieplaniem ścian najlepiej wykonywać w temperaturze powyżej +5°C, dlatego optymalnym okresem jest wiosna, lato i wczesna jesień. W niektórych przypadkach, przy zastosowaniu specjalnych materiałów i technik, możliwe jest prowadzenie prac w niższych temperaturach, ale nie zalecamy tego ze względu na potencjalny wpływ na jakość.",
                  },
                  {
                    question: "Czy potrzebuję pozwolenia na ocieplenie ścian?",
                    answer:
                      "W większości przypadków ocieplenie ścian zewnętrznych nie wymaga pozwolenia na budowę, a jedynie zgłoszenia robót budowlanych. Jednak przepisy mogą się różnić w zależności od lokalizacji i specyfiki budynku. Nasi specjaliści pomogą w przygotowaniu niezbędnej dokumentacji i dopełnieniu formalności.",
                  },
                  {
                    question: "Jaki jest okres gwarancji na ocieplenie ścian?",
                    answer:
                      "Oferujemy standardową gwarancję na wykonane prace ociepleniowe na okres 5 lat. Na zastosowane materiały obowiązuje gwarancja producenta, która zazwyczaj wynosi od 5 do 10 lat. Przy odpowiedniej konserwacji, dobrze wykonane ocieplenie może służyć nawet 30-40 lat.",
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-start gap-2">
                        <HelpCircle className="text-primary mt-1 shrink-0" size={18} />
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
            <h2 className="text-3xl font-bold mb-6">
              Gotowy na efektywny i ciepły dom?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Skontaktuj się z nami, aby otrzymać bezpłatną wycenę ocieplenia ścian
              zewnętrznych. Nasi eksperci pomogą dobrać najlepsze rozwiązanie dla
              Twojego domu.
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
