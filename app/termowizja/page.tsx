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
import { CheckCircle, ArrowRight, HelpCircle, Thermometer } from "lucide-react";

export const metadata: Metadata = {
  title: "Badania termowizyjne",
  description:
    "Profesjonalne badania termowizyjne budynków. Wykrywamy mostki termiczne, straty ciepła i problemy z izolacją. Kompleksowa analiza efektywności energetycznej.",
  alternates: {
    canonical: "https://iso-dach.eu/termowizja",
  },
};

export default function TermowizjaPage() {
  return (
    <div className="min-h-screen marketing-page">
      {/* Hero Section */}
      <section className="marketing-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Profesjonalne badania termowizyjne
              </h1>
              <p className="text-white/90 text-lg mb-8">
                Zaawansowana diagnostyka termowizyjna pozwala precyzyjnie
                wykryć miejsca ucieczki ciepła, mostki termiczne i problemy z
                izolacją. Nasze badania to pierwszy krok do efektywnej
                termomodernizacji.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  <Link href="/kontakt">Zamów badanie</Link>
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
                alt="Badanie termowizyjne budynku"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Czym jest badanie termowizyjne Section */}
      <section className="marketing-section py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Czym jest badanie termowizyjne?
            </h2>
            <p className="text-lg text-gray-700">
              Badanie termowizyjne to nieinwazyjna metoda diagnostyczna, która
              wykorzystuje specjalistyczną kamerę termowizyjną do
              wizualizacji rozkładu temperatur na powierzchni budynku.
              Umożliwia precyzyjne wykrycie miejsc, w których ciepło ucieka z
              budynku, oraz identyfikację problemów z izolacją, wilgocią i
              wentylacją.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Thermometer className="text-secondary mt-1 shrink-0 h-8 w-8" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Jak to działa?
                    </h3>
                    <p className="text-gray-600">
                      Kamera termowizyjna rejestruje promieniowanie podczerwone
                      emitowane przez obiekty i przekształca je na widoczny
                      obraz kolorowy, gdzie różne kolory reprezentują różne
                      temperatury powierzchni.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-secondary mt-1 shrink-0 h-8 w-8" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Kiedy wykonać?
                    </h3>
                    <p className="text-gray-600">
                      Najlepszy czas na badanie to sezon grzewczy (październik
                      - marzec), gdy różnica temperatur między wnętrzem a
                      otoczeniem wynosi minimum 15°C. To pozwala uzyskać
                      najdokładniejsze wyniki.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Zalety Section */}
      <section id="zalety" className="marketing-section-alt py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Zalety badań termowizyjnych
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Wykrycie mostków termicznych",
                description:
                  "Identyfikacja miejsc, gdzie ciepło ucieka z budynku, takich jak słupy, nadproża okienne czy balkony.",
              },
              {
                title: "Ocena jakości izolacji",
                description:
                  "Weryfikacja skuteczności istniejącej izolacji termicznej ścian, dachu i fundamentów.",
              },
              {
                title: "Lokalizacja przecieków powietrza",
                description:
                  "Wykrycie nieszczelności w obudowie budynku, przez które ucieka ogrzewane powietrze.",
              },
              {
                title: "Wykrywanie wilgoci",
                description:
                  "Identyfikacja miejsc zawilgoconych, które mogą prowadzić do rozwoju pleśni i grzybów.",
              },
              {
                title: "Oszczędność energii",
                description:
                  "Precyzyjna diagnoza pozwala zaplanować skuteczną termomodernizację i obniżyć koszty ogrzewania.",
              },
              {
                title: "Metoda nieinwazyjna",
                description:
                  "Badanie nie wymaga ingerencji w strukturę budynku - nie trzeba nic burzyć ani wiercić.",
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
                      <h3 className="font-semibold text-lg mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Co wykrywamy podczas badania Section */}
      <section className="marketing-section py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Co wykrywamy podczas badania?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Straty ciepła przez ściany",
                description:
                  "Niedostateczna lub uszkodzona izolacja ścian zewnętrznych, która prowadzi do znacznych strat energii.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Nieszczelności okien i drzwi",
                description:
                  "Miejsca, gdzie zimne powietrze przenika do wnętrza, a ciepłe ucieka na zewnątrz.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Problemy z dachem",
                description:
                  "Braki w izolacji dachu, przecieki i miejsca ucieczki ciepła przez połać dachową.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Mostki termiczne",
                description:
                  "Elementy konstrukcyjne o zwiększonej przewodności cieplnej, takie jak belki czy słupy.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Zawilgocenia i przecieki",
                description:
                  "Miejsca, gdzie wilgoć przenika przez przegrody budowlane, zagrażając konstrukcji i zdrowiu mieszkańców.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Problemy z wentylacją",
                description:
                  "Niewłaściwe działanie systemu wentylacji mechanicznej lub grawitacyjnej.",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="marketing-tile"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
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
            Jak przebiega badanie termowizyjne?
          </h2>
          <div className="max-w-3xl mx-auto">
            <ol className="relative border-l border-primary/30">
              {[
                {
                  title: "Przygotowanie do badania",
                  description:
                    "Przed badaniem budynek powinien być ogrzewany przez minimum 24 godziny. Okna i drzwi muszą być zamknięte.",
                },
                {
                  title: "Pomiar temperatury",
                  description:
                    "Sprawdzamy warunki atmosferyczne i różnicę temperatur między wnętrzem a zewnętrzem budynku.",
                },
                {
                  title: "Badanie zewnętrzne",
                  description:
                    "Wykonujemy zdjęcia termowizyjne wszystkich ścian zewnętrznych, dachu i fundamentów budynku.",
                },
                {
                  title: "Badanie wewnętrzne",
                  description:
                    "Skanujemy ściany wewnętrzne, sufity, okna i drzwi, poszukując miejsc ucieczki ciepła.",
                },
                {
                  title: "Test szczelności (opcjonalnie)",
                  description:
                    "Przeprowadzamy test Blower Door do wykrycia nieszczelności w obudowie budynku.",
                },
                {
                  title: "Analiza wyników",
                  description:
                    "Dokładnie analizujemy zebrane dane i identyfikujemy problematyczne miejsca wymagające naprawy.",
                },
                {
                  title: "Raport z rekomendacjami",
                  description:
                    "Przygotowujemy szczegółowy raport z termogramami, opisem wykrytych problemów i zaleceniami działań naprawczych.",
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

      {/* FAQ Section */}
      <section className="marketing-section-alt py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Najczęściej zadawane pytania
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "Kiedy najlepiej wykonać badanie termowizyjne?",
                  answer:
                    "Najlepszy czas na badanie termowizyjne to sezon grzewczy (październik - marzec), gdy różnica temperatur między wnętrzem budynku a otoczeniem wynosi minimum 15°C. Optymalne warunki to temperatura wewnętrzna około 20°C i zewnętrzna poniżej 5°C. Badanie należy wykonywać rano lub wieczorem, unikając bezpośredniego nasłonecznienia ścian.",
                },
                {
                  question: "Ile trwa badanie termowizyjne?",
                  answer:
                    "Czas badania zależy od wielkości budynku i wybranego pakietu. Dla standardowego domu jednorodzinnego badanie podstawowe trwa około 1-2 godzin, rozszerzone 2-4 godzin, a premium (z testem Blower Door) 4-6 godzin. Przygotowanie raportu zajmuje dodatkowo 3-7 dni roboczych.",
                },
                {
                  question: "Jak przygotować budynek do badania?",
                  answer:
                    "Przed badaniem budynek powinien być intensywnie ogrzewany przez minimum 24 godziny do temperatury około 20-22°C. Wszystkie okna i drzwi zewnętrzne muszą być zamknięte przynajmniej 12 godzin przed badaniem. Zasłony i rolety powinny być odsłonięte. Warto również odsunąć meble od ścian zewnętrznych w miejscach, które mają być badane.",
                },
                {
                  question:
                    "Czy badanie termowizyjne wykryje wszystkie problemy?",
                  answer:
                    "Termowizja to bardzo skuteczna metoda diagnostyczna, ale ma swoje ograniczenia. Nie wykryje problemów schowanych głęboko w ścianie ani tych, które nie powodują zmiany temperatury powierzchni. Najlepsze rezultaty daje połączenie termowizji z innymi metodami, takimi jak test Blower Door czy endoskopia budowlana.",
                },
                {
                  question: "Co otrzymuję po badaniu termowizyjnym?",
                  answer:
                    "Po badaniu otrzymujesz szczegółowy raport zawierający termogramy (zdjęcia termowizyjne) z opisem wykrytych problemów, ich lokalizacją i nasileniem. W zależności od pakietu raport zawiera również rekomendacje działań naprawczych, szacunkowe koszty i potencjalne oszczędności energii. Oferujemy także konsultację w celu omówienia wyników.",
                },
                {
                  question: "Czy mogę samodzielnie wykonać badanie termowizyjne?",
                  answer:
                    "Chociaż kamery termowizyjne są dostępne w wypożyczalniach, profesjonalne badanie wymaga specjalistycznej wiedzy i doświadczenia. Prawidłowa interpretacja termogramów, znajomość fizyki budowli i norm budowlanych są kluczowe dla uzyskania wartościowych wyników. Nieprawidłowa analiza może prowadzić do błędnych wniosków i kosztownych błędów w termomodernizacji.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-start gap-2">
                      <HelpCircle
                        className="text-primary mt-1 shrink-0"
                        size={18}
                      />
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-7">
                    {faq.answer}
                  </AccordionContent>
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
            Chcesz poznać stan termiczny swojego budynku?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Zamów profesjonalne badanie termowizyjne i dowiedz się, gdzie Twój
            dom traci ciepło. Otrzymasz szczegółowy raport z rekomendacjami
            działań naprawczych.
          </p>
          <Button size="lg" asChild>
            <Link href="/kontakt">
              Zamów badanie termowizyjne
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
