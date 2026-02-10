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
import { CheckCircle, ArrowRight, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Izolacja Poddaszy Wełną Celulozową | ISO-DACH",
  description:
    "Profesjonalna izolacja poddaszy wełną celulozową. Zmniejsz straty ciepła przez dach o 30-40%, obniż koszty ogrzewania. Ekologiczny materiał z recyklingu. Bezpłatna wycena. Szczecin i okolice.",
  keywords: [
    "izolacja poddasza",
    "wełna celulozowa",
    "ocieplanie poddasza",
    "izolacja dachu",
    "ocieplanie wełną celulozową",
    "izolacja termiczna poddasza",
    "Szczecin",
    "zachodniopomorskie",
  ],
  alternates: {
    canonical: "https://iso-dach.eu/izolacja-poddaszy",
  },
  openGraph: {
    title: "Izolacja Poddaszy Wełną Celulozową | ISO-DACH",
    description: "Profesjonalna izolacja poddaszy. Oszczędność energii do 40%. Bezpłatna wycena.",
    url: "https://iso-dach.eu/izolacja-poddaszy",
    type: "article",
    images: [
      {
        url: "/img/9.jpg",
        width: 1200,
        height: 630,
        alt: "Izolacja poddaszy wełną celulozową - ISO-DACH",
      },
    ],
  },
};

const atticInsulationFAQs = [
  {
    question: "Jaka jest optymalna grubość izolacji poddasza wełną celulozową?",
    answer:
      "Według norm energetycznych WT 2021, optymalna grubość izolacji poddasza wełną celulozową wynosi 25-35 cm. Badania przeprowadzone przez Politechnikę Warszawską pokazują, że taka grubość pozwala uzyskać współczynnik przenikania ciepła U na poziomie 0,12-0,15 W/(m²·K), co przekłada się na zmniejszenie strat ciepła przez dach o 30-40%. Dla domu o powierzchni 150 m² oznacza to oszczędność na ogrzewaniu wynoszącą 1000-1500 zł rocznie.",
  },
  {
    question: "Czy izolacja poddasza wymaga wentylacji?",
    answer:
      "Tak, prawidłowa wentylacja poddasza jest absolutnie kluczowa dla skuteczności izolacji. Należy zapewnić szczelinę wentylacyjną o szerokości minimum 5 cm między izolacją a poszyciem dachu, aby umożliwić swobodny przepływ powietrza. Zgodnie z badaniami ITB (Instytut Techniki Budowlanej), brak odpowiedniej wentylacji może prowadzić do kondensacji pary wodnej, co w konsekwencji powoduje zawilgocenie izolacji (zmniejszenie jej skuteczności o 40-60%), rozwój pleśni i grzybów oraz uszkodzenie konstrukcji dachu.",
  },
  {
    question: "Czy można izolować poddasze zimą?",
    answer:
      "Tak, izolację poddasza wełną celulozową można wykonywać przez cały rok, również zimą, ponieważ prace prowadzone są wewnątrz budynku. Metoda wdmuchiwania celulozy nie wymaga specjalnych warunków temperaturowych - materiał można aplikować w temperaturze od -5°C do +40°C. Jest to znacząca zaleta w porównaniu do pianek poliuretanowych, które wymagają temperatury min. +10°C. Dla zapewnienia najlepszej jakości, zalecamy utrzymanie temperatury wewnątrz poddasza powyżej +5°C podczas prac.",
  },
  {
    question: "Jak długo trwa izolacja poddasza i ile kosztuje?",
    answer:
      "Czas realizacji izolacji poddasza zależy od powierzchni i zakresu prac. Dla standardowego poddasza o powierzchni 100-120 m² proces trwa zazwyczaj od 3 do 5 dni: przygotowanie (1 dzień), montaż folii paroizolacyjnej (1 dzień), wdmuchiwanie celulozy (1-2 dni), wykończenie (1 dzień). Koszt izolacji wełną celulozową wynosi średnio 45-65 zł/m² (wraz z materiałem i montażem). Dla poddasza 100 m² oznacza to koszt 4500-6500 zł. Okres zwrotu inwestycji wynosi zazwyczaj 4-6 lat dzięki oszczędnościom na ogrzewaniu.",
  },
  {
    question: "Czy izolacja poddasza wymaga pozwolenia na budowę?",
    answer:
      "W większości przypadków izolacja poddasza wewnętrznego nie wymaga pozwolenia na budowę ani zgłoszenia, jeśli nie wiąże się ze zmianą konstrukcji dachu ani zmianą sposobu użytkowania poddasza. Jeśli jednak planowana jest adaptacja poddasza nieużytkowego na cele mieszkalne (zgodnie z przepisami prawa budowlanego), wymagane jest zgłoszenie robót budowlanych lub uzyskanie pozwolenia w przypadku przekroczenia określonych parametrów. Nasi specjaliści pomogą w przygotowaniu niezbędnej dokumentacji i kompleksowo załatwią wszystkie formalności.",
  },
];

export default function IzolacjaPoddaszyPage() {
  return (
    <>
      <FAQPageSchema faqs={atticInsulationFAQs} />
      <div className="min-h-screen marketing-page">
        {/* Hero Section */}
        <section className="marketing-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Profesjonalna izolacja poddaszy
                </h1>
                <p className="text-white/90 text-lg mb-8">
                  Skuteczna izolacja termiczna i akustyczna poddasza, która zapewnia
                  komfortową temperaturę na górnych kondygnacjach i zmniejsza koszty
                  ogrzewania. Nasze rozwiązania to gwarancja ciepła zimą i chłodu latem.
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
                  alt="Izolacja poddasza"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Zalety Section */}
        <section id="zalety" className="marketing-section py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Zalety izolacji poddasza
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Oszczędność energii",
                  description:
                    "Zmniejszenie strat ciepła przez dach nawet o 30-40%, co znacząco obniża koszty ogrzewania.",
                },
                {
                  title: "Komfort termiczny",
                  description:
                    "Utrzymanie optymalnej temperatury na poddaszu przez cały rok - ciepło zimą i chłodno latem.",
                },
                {
                  title: "Izolacja akustyczna",
                  description:
                    "Redukcja hałasu z zewnątrz, w tym odgłosów deszczu czy wiatru uderzającego o dach.",
                },
                {
                  title: "Ochrona przed wilgocią",
                  description:
                    "Prawidłowa izolacja zapobiega kondensacji pary wodnej i powstawaniu pleśni czy grzybów.",
                },
                {
                  title: "Zwiększenie przestrzeni użytkowej",
                  description:
                    "Możliwość adaptacji poddasza na cele mieszkalne, co zwiększa wartość nieruchomości.",
                },
                {
                  title: "Ochrona konstrukcji dachu",
                  description:
                    "Zabezpieczenie elementów konstrukcyjnych dachu przed szkodliwym działaniem wilgoci i zmiennych temperatur.",
                },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="border-none shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-4 sm:p-5">
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
              Jak wygląda proces izolacji poddasza?
            </h2>
            <div className="max-w-3xl mx-auto">
              <ol className="relative border-l border-primary/30">
                {[
                  {
                    title: "Konsultacja i wycena",
                    description:
                      "Nasi specjaliści przeprowadzają dokładną analizę poddasza, określają potrzeby i przygotowują szczegółową wycenę.",
                  },
                  {
                    title: "Wybór materiałów",
                    description:
                      "Dobieramy optymalne materiały izolacyjne, uwzględniając specyfikę budynku, oczekiwania klienta i budżet.",
                  },
                  {
                    title: "Przygotowanie powierzchni",
                    description:
                      "Oczyszczamy i przygotowujemy poddasze do izolacji, usuwając wszelkie przeszkody i zabezpieczając instalacje.",
                  },
                  {
                    title: "Montaż paroizolacji",
                    description:
                      "Instalujemy folię paroizolacyjną, która zapobiega przenikaniu pary wodnej z pomieszczeń do warstwy izolacyjnej.",
                  },
                  {
                    title: "Montaż izolacji",
                    description:
                      "Profesjonalny montaż wybranego materiału izolacyjnego między krokwiami i/lub pod krokwiami.",
                  },
                  {
                    title: "Montaż poszycia",
                    description:
                      "Instalacja płyt gipsowo-kartonowych lub innych materiałów wykończeniowych na stelażu.",
                  },
                  {
                    title: "Wykończenie powierzchni",
                    description:
                      "Szpachlowanie, gruntowanie i malowanie powierzchni, nadając poddaszu estetyczny wygląd.",
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
              Materiały izolacyjne, które stosujemy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Wełna skalna",
                  description:
                    "Wytrzymały materiał izolacyjny o bardzo dobrych właściwościach termicznych i akustycznych, niepalny i paroprzepuszczalny, dostępny w postaci mat i płyt.",
                  image: "/img/welna-skalna.png",
                },
                {
                  title: "Wełna szklana",
                  description:
                    "Lekki materiał o dobrych właściwościach izolacyjnych, łatwy w montażu i przyjazny dla alergików.",
                  image: "/img/welna-szklana.png",
                },
                {
                  title: "Celuloza",
                  description:
                    "Ekologiczny materiał izolacyjny z recyklingu papieru, aplikowany metodą wdmuchiwania. Doskonale wypełnia trudno dostępne miejsca.",
                  image: "/img/welna-celulozowa.png",
                },
              ].map((material, index) => (
                <div
                  key={index}
                  className="marketing-tile"
                >
                  <div className="relative h-48">
                    <Image
                      src={material.image || "/placeholder.svg"}
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

        {/* FAQ Section */}
        <section className="marketing-section py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Najczęściej zadawane pytania
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "Jaka jest optymalna grubość izolacji poddasza?",
                    answer:
                      "Optymalna grubość izolacji poddasza zależy od wielu czynników, takich jak klimat, rodzaj budynku i materiał izolacyjny. Obecnie standardem jest stosowanie wełny mineralnej o grubości 25-30 cm lub pianki poliuretanowej o grubości 15-20 cm. Nasi specjaliści pomogą dobrać najlepsze rozwiązanie dla Twojego domu.",
                  },
                  {
                    question: "Czy izolacja poddasza wymaga wentylacji?",
                    answer:
                      "Tak, prawidłowa wentylacja jest kluczowa dla skutecznej izolacji poddasza. Należy zapewnić szczelinę wentylacyjną między izolacją a poszyciem dachu, aby umożliwić odp  Należy zapewnić szczelinę wentylacyjną między izolacją a poszyciem dachu, aby umożliwić odprowadzanie wilgoci i zapobiec kondensacji pary wodnej. Brak odpowiedniej wentylacji może prowadzić do zawilgocenia izolacji, rozwoju pleśni i grzybów oraz uszkodzenia konstrukcji dachu.",
                  },
                  {
                    question: "Czy można izolować poddasze zimą?",
                    answer:
                      "Izolację poddasza można wykonywać przez cały rok, również zimą, ponieważ prace prowadzone są wewnątrz budynku. Jednak należy pamiętać, że w przypadku niektórych materiałów (np. pianki natryskowej) wymagana jest minimalna temperatura aplikacji. Nasi specjaliści dostosują technologię do warunków panujących na poddaszu.",
                  },
                  {
                    question: "Jak długo trwa izolacja poddasza?",
                    answer:
                      "Czas realizacji izolacji poddasza zależy od jego powierzchni, wybranej technologii i zakresu prac. Dla standardowego poddasza o powierzchni około 100 m² proces izolacji trwa zazwyczaj od 3 do 7 dni. Dokładny harmonogram ustalamy indywidualnie po ocenie zakresu prac.",
                  },
                  {
                    question: "Czy izolacja poddasza wymaga pozwolenia na budowę?",
                    answer:
                      "W większości przypadków izolacja poddasza nie wymaga pozwolenia na budowę ani zgłoszenia, jeśli nie wiąże się ze zmianą konstrukcji dachu. Jeśli jednak planowana jest adaptacja poddasza na cele mieszkalne, może być wymagane zgłoszenie lub pozwolenie. Nasi specjaliści pomogą w przygotowaniu niezbędnej dokumentacji.",
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
              Gotowy na ciepłe i komfortowe poddasze?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Skontaktuj się z nami, aby otrzymać bezpłatną wycenę izolacji poddasza.
              Nasi eksperci pomogą dobrać najlepsze rozwiązanie dla Twojego domu.
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
