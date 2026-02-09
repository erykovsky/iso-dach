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
import { CheckCircle, ArrowRight, HelpCircle, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Termomodernizacja | ISO-DACH",
  description:
    "Kompleksowa termomodernizacja budynków. Zwiększ efektywność energetyczną, obniż koszty ogrzewania i podnieś wartość nieruchomości.",
};

export default function TermomodernizacjaPage() {
  return (
    <div className="min-h-screen marketing-page">
      {/* Hero Section */}
      <section className="marketing-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Kompleksowa Termomodernizacja
              </h1>
              <p className="text-white/90 text-lg mb-8">
                Kompleksowa modernizacja energetyczna budynku, obejmująca izolację,
                wymianę okien i drzwi oraz optymalizację systemu grzewczego. Nasze
                rozwiązania to gwarancja oszczędności i komfortu.
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
                alt="Termomodernizacja budynku"
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
            Zalety Termomodernizacji
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Znaczące oszczędności",
                description:
                  "Zmniejszenie kosztów ogrzewania nawet o 40-60% dzięki kompleksowej poprawie efektywności energetycznej budynku.",
              },
              {
                title: "Komfort termiczny",
                description:
                  "Utrzymanie optymalnej temperatury w całym budynku przez cały rok, eliminacja przeciągów i zimnych ścian.",
              },
              {
                title: "Ochrona środowiska",
                description:
                  "Redukcja emisji CO2 i innych zanieczyszczeń dzięki mniejszemu zużyciu energii potrzebnej do ogrzewania.",
              },
              {
                title: "Wzrost wartości nieruchomości",
                description:
                  "Poprawa klasy energetycznej budynku, co przekłada się na wyższą wartość rynkową nieruchomości.",
              },
              {
                title: "Poprawa estetyki",
                description:
                  "Odnowienie elewacji i modernizacja wyglądu budynku, co zwiększa jego atrakcyjność.",
              },
              {
                title: "Możliwość dofinansowania",
                description:
                  "Dostęp do różnych programów dotacji i ulg podatkowych na termomodernizację budynków.",
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

      {/* Zakres Prac Section */}
      <section className="marketing-section-alt py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Zakres Prac Termomodernizacyjnych
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ocieplenie ścian zewnętrznych",
                description:
                  "Kompleksowa izolacja ścian zewnętrznych z wykorzystaniem najnowszych technologii i materiałów izolacyjnych.",
                icon: (
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-xl">01</span>
                  </div>
                ),
              },
              {
                title: "Izolacja poddasza lub stropodachu",
                description:
                  "Profesjonalna izolacja termiczna dachu lub stropodachu, zapobiegająca ucieczce ciepła przez górne partie budynku.",
                icon: (
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-xl">02</span>
                  </div>
                ),
              },
              {
                title: "Wymiana stolarki okiennej i drzwiowej",
                description:
                  "Montaż energooszczędnych okien i drzwi, które znacząco redukują straty ciepła i poprawiają komfort akustyczny.",
                icon: (
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-xl">03</span>
                  </div>
                ),
              },
              {
                title: "Modernizacja systemu grzewczego",
                description:
                  "Wymiana przestarzałych źródeł ciepła na nowoczesne, energooszczędne rozwiązania, takie jak pompy ciepła czy kotły kondensacyjne.",
                icon: (
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-xl">04</span>
                  </div>
                ),
              },
              {
                title: "Instalacja odnawialnych źródeł energii",
                description:
                  "Montaż paneli fotowoltaicznych, kolektorów słonecznych lub innych systemów OZE, które obniżają koszty energii.",
                icon: (
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-xl">05</span>
                  </div>
                ),
              },
              {
                title: "Modernizacja systemu wentylacji",
                description:
                  "Instalacja systemu wentylacji mechanicznej z odzyskiem ciepła (rekuperacji), zapewniającej świeże powietrze bez strat energii.",
                icon: (
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-xl">06</span>
                  </div>
                ),
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  {item.icon}
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proces Section */}
      <section className="marketing-section py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Proces Termomodernizacji
          </h2>
          <div className="max-w-3xl mx-auto">
            <ol className="relative border-l border-primary/30">
              {[
                {
                  title: "Audyt energetyczny",
                  description:
                    "Przeprowadzamy szczegółowy audyt energetyczny budynku, który pozwala określić jego stan techniczny, źródła strat ciepła i potencjał oszczędności.",
                },
                {
                  title: "Projekt termomodernizacji",
                  description:
                    "Na podstawie audytu opracowujemy kompleksowy projekt termomodernizacji, uwzględniający optymalne rozwiązania techniczne i materiałowe.",
                },
                {
                  title: "Analiza finansowa i dofinansowanie",
                  description:
                    "Pomagamy w analizie kosztów i korzyści oraz w uzyskaniu dostępnych dotacji, ulg podatkowych i preferencyjnych kredytów.",
                },
                {
                  title: "Realizacja prac",
                  description:
                    "Przeprowadzamy kompleksowe prace termomodernizacyjne zgodnie z projektem, z zachowaniem najwyższych standardów jakości.",
                },
                {
                  title: "Kontrola jakości",
                  description:
                    "Przeprowadzamy szczegółową kontrolę wykonanych prac, w tym badania termowizyjne, aby zapewnić najwyższą jakość usługi.",
                },
                {
                  title: "Odbiór i dokumentacja",
                  description:
                    "Przygotowujemy pełną dokumentację powykonawczą, w tym nowy certyfikat energetyczny budynku, potwierdzający poprawę jego efektywności.",
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

      {/* Dotacje Section */}
      <section className="marketing-section-alt py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Dostępne Programy Dofinansowania
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Program Czyste Powietrze",
                description:
                  "Dofinansowanie do wymiany starych pieców i kotłów na paliwo stałe oraz termomodernizacji budynków jednorodzinnych.",
                icon: <Zap className="w-10 h-10 text-secondary mb-4" />,
              },
              {
                title: "Ulga Termomodernizacyjna",
                description:
                  "Możliwość odliczenia od podatku wydatków poniesionych na termomodernizację budynków jednorodzinnych.",
                icon: <Zap className="w-10 h-10 text-secondary mb-4" />,
              },
              {
                title: "Program Stop Smog",
                description:
                  "Wsparcie dla najuboższych gospodarstw domowych w zakresie termomodernizacji i wymiany źródeł ciepła.",
                icon: <Zap className="w-10 h-10 text-secondary mb-4" />,
              },
              {
                title: "Fundusz Termomodernizacji i Remontów",
                description:
                  "Premia termomodernizacyjna dla właścicieli budynków mieszkalnych, jednorodzinnych i wielorodzinnych.",
                icon: <Zap className="w-10 h-10 text-secondary mb-4" />,
              },
              {
                title: "Programy Regionalne",
                description:
                  "Lokalne programy dofinansowania termomodernizacji, oferowane przez gminy, miasta i województwa.",
                icon: <Zap className="w-10 h-10 text-secondary mb-4" />,
              },
              {
                title: "Mój Prąd",
                description:
                  "Dofinansowanie do instalacji fotowoltaicznych, które mogą być elementem kompleksowej termomodernizacji.",
                icon: <Zap className="w-10 h-10 text-secondary mb-4" />,
              },
            ].map((program, index) => (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  {program.icon}
                  <h3 className="font-semibold text-lg mb-2">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Nasi specjaliści pomogą Ci wybrać najlepszy program dofinansowania i
              przygotować niezbędną dokumentację.
            </p>
            <Button asChild>
              <Link href="/kontakt">Zapytaj o dofinansowanie</Link>
            </Button>
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
                  alt={`Realizacja termomodernizacji ${index + 1}`}
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
                  question: "Ile można zaoszczędzić dzięki termomodernizacji?",
                  answer:
                    "Oszczędności zależą od stanu wyjściowego budynku i zakresu przeprowadzonych prac. W przypadku kompleksowej termomodernizacji starszego budynku można osiągnąć oszczędności na poziomie 40-60% kosztów ogrzewania. Dla nowszych budynków oszczędności mogą wynosić 20-40%. Dokładne wartości określa audyt energetyczny.",
                },
                {
                  question: "Jak długo trwa proces termomodernizacji?",
                  answer:
                    "Czas realizacji zależy od zakresu prac i wielkości budynku. Kompleksowa termomodernizacja domu jednorodzinnego trwa zazwyczaj od 4 do 8 tygodni. W przypadku budynków wielorodzinnych proces może trwać od 2 do 6 miesięcy. Dokładny harmonogram ustalamy indywidualnie po ocenie zakresu prac.",
                },
                {
                  question: "Czy termomodernizację można przeprowadzać etapami?",
                  answer:
                    "Tak, termomodernizację można przeprowadzać etapami, rozłożonymi w czasie. Ważne jest jednak, aby działać według wcześniej przygotowanego kompleksowego planu, który uwzględnia wszystkie elementy i ich wzajemne oddziaływanie. Nasi specjaliści pomogą zaplanować optymalną kolejność prac.",
                },
                {
                  question: "Jakie dokumenty są potrzebne do uzyskania dofinansowania?",
                  answer:
                    "Wymagane dokumenty zależą od programu dofinansowania, ale najczęściej potrzebne są: audyt energetyczny, projekt termomodernizacji, dokumenty potwierdzające prawo własności do budynku, dokumentacja techniczna, kosztorys planowanych prac oraz wnioski właściwe dla danego programu. Nasz zespół pomoże w przygotowaniu wszystkich niezbędnych dokumentów.",
                },
                {
                  question: "Czy termomodernizacja wymaga pozwolenia na budowę?",
                  answer:
                    "W większości przypadków termomodernizacja nie wymaga pozwolenia na budowę, a jedynie zgłoszenia robót budowlanych. Jednak w przypadku znaczących zmian w wyglądzie budynku lub jego konstrukcji może być wymagane pozwolenie. Przepisy mogą się różnić w zależności od lokalizacji i specyfiki budynku. Nasi specjaliści pomogą w dopełnieniu wszystkich formalności.",
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
          <h2 className="text-3xl font-bold mb-6">Gotowy na energooszczędny dom?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami, aby otrzymać bezpłatną wycenę termomodernizacji.
            Nasi eksperci pomogą dobrać najlepsze rozwiązanie dla Twojego budynku.
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
