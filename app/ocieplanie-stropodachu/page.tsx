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
import { CheckCircle, ArrowRight, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Ocieplanie Stropodachu | ISO-DACH",
  description:
    "Profesjonalne ocieplanie stropodachu metodą wdmuchiwania. Skuteczna izolacja termiczna, która zapobiega ucieczce ciepła przez dach.",
};

export default function OcieplanieStropodachuPage() {
  return (
    <div className="min-h-screen marketing-page">
      {/* Hero Section */}
      <section className="marketing-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Profesjonalne Ocieplanie Stropodachu
              </h1>
              <p className="text-white/90 text-lg mb-8">
                Skuteczna izolacja stropodachu, która zapobiega ucieczce ciepła przez
                dach i zapewnia optymalną temperaturę na najwyższych kondygnacjach.
                Nasze rozwiązania to gwarancja komfortu i oszczędności.
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
                src="/placeholder.svg?height=600&width=800"
                alt="Ocieplanie stropodachu"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Zalety Section */}
      <section id="zalety" className="marketing-section py-16 md:py-24">
        <div className="container mx-auto px-4" >
          <h2 className="text-3xl font-bold text-center mb-12">
            Zalety Ocieplania Stropodachu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Technologia Section */}
      <section className="marketing-section-alt py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technologia Ocieplania Stropodachu
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 md:h-96 marketing-image-frame">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Technologia wdmuchiwania izolacji"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Metoda Wdmuchiwania</h3>
              <p className="text-gray-700 mb-6">
                Ocieplanie stropodachu metodą wdmuchiwania to nowoczesna i efektywna
                technologia izolacji termicznej. Polega ona na wprowadzeniu materiału
                izolacyjnego (granulatu) do przestrzeni stropodachu przez specjalnie
                wykonane otwory technologiczne. Materiał jest równomiernie rozprowadzany
                za pomocą specjalistycznego sprzętu, co zapewnia dokładne wypełnienie
                wszystkich przestrzeni i eliminację mostków termicznych.
              </p>
              <p className="text-gray-700 mb-6">
                Metoda ta jest szczególnie polecana dla budynków z trudno dostępnymi
                stropodachami wentylowanymi, gdzie tradycyjne metody ocieplania byłyby
                trudne lub niemożliwe do zastosowania. Wdmuchiwanie izolacji nie wymaga
                demontażu dachu ani znaczącej ingerencji w konstrukcję budynku.
              </p>
              <h3 className="text-xl font-semibold mb-4">
                Zalety metody wdmuchiwania:
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary mt-1 shrink-0" size={18} />
                  <span>Szybka i efektywna realizacja</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary mt-1 shrink-0" size={18} />
                  <span>Dokładne wypełnienie wszystkich przestrzeni</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary mt-1 shrink-0" size={18} />
                  <span>Brak konieczności demontażu dachu</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary mt-1 shrink-0" size={18} />
                  <span>Minimalne zakłócenie funkcjonowania budynku</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary mt-1 shrink-0" size={18} />
                  <span>Możliwość zastosowania w trudno dostępnych miejscach</span>
                </li>
              </ul>
            </div>
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
                title: "Granulat Wełny Mineralnej",
                description:
                  "Naturalny materiał o doskonałych właściwościach termoizolacyjnych i akustycznych. Niepalny, odporny na gryzonie i owady.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Granulat Wełny Szklanej",
                description:
                  "Lekki materiał o dobrych właściwościach izolacyjnych, odporny na wilgoć i przyjazny dla alergików.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Granulat Celulozowy",
                description:
                  "Ekologiczny materiał z recyklingu papieru, o dobrych właściwościach termoizolacyjnych i zdolności do regulacji wilgotności.",
                image: "/placeholder.svg?height=300&width=400",
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
                <div className="p-4 sm:p-5">
                  <h3 className="font-semibold text-lg mb-2">{material.title}</h3>
                  <p className="text-gray-600">{material.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proces Section */}
      <section className="marketing-section-alt py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Jak Wygląda Proces Ocieplania Stropodachu?
          </h2>
          <div className="max-w-3xl mx-auto">
            <ol className="relative border-l border-primary/30">
              {[
                {
                  title: "Inspekcja i analiza",
                  description:
                    "Przeprowadzamy szczegółową inspekcję stropodachu, określamy jego stan techniczny i potrzeby izolacyjne.",
                },
                {
                  title: "Dobór materiału izolacyjnego",
                  description:
                    "Wybieramy optymalny materiał izolacyjny, uwzględniając specyfikę budynku, oczekiwania klienta i budżet.",
                },
                {
                  title: "Przygotowanie otworów technologicznych",
                  description:
                    "Wykonujemy otwory technologiczne w stropodachu, przez które będzie wprowadzany materiał izolacyjny.",
                },
                {
                  title: "Wdmuchiwanie izolacji",
                  description:
                    "Za pomocą specjalistycznego sprzętu wdmuchujemy wybrany materiał izolacyjny, równomiernie wypełniając przestrzeń stropodachu.",
                },
                {
                  title: "Kontrola jakości",
                  description:
                    "Przeprowadzamy kontrolę jakości wykonanych prac, sprawdzając równomierność rozłożenia materiału i grubość warstwy izolacyjnej.",
                },
                {
                  title: "Zamknięcie otworów technologicznych",
                  description:
                    "Zamykamy otwory technologiczne, przywracając pierwotny wygląd dachu.",
                },
                {
                  title: "Odbiór i dokumentacja",
                  description:
                    "Przekazujemy klientowi dokumentację powykonawczą, w tym certyfikaty zastosowanych materiałów i gwarancję na wykonane prace.",
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

      {/* Realizacje Section */}
      <section className="marketing-section py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nasze Realizacje</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="relative h-64 marketing-image-frame"
              >
                <Image
                  src={`/placeholder.svg?height=400&width=600&text=Realizacja ${index + 1
                    }`}
                  alt={`Realizacja ocieplania stropodachu ${index + 1}`}
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

      {/* FAQ Section */}
      <section className="marketing-section-alt py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Najczęściej Zadawane Pytania
          </h2>
          <div className="max-w-3xl mx-auto">
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
            Gotowy na ciepły i energooszczędny dom?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami, aby otrzymać bezpłatną wycenę ocieplenia
            stropodachu. Nasi eksperci pomogą dobrać najlepsze rozwiązanie dla Twojego
            budynku.
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
  );
}
