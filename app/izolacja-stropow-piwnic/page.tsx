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
  title: "Izolacja Stropów Piwnic | ISO-DACH",
  description:
    "Profesjonalne ocieplenie stropów piwnic i garaży. Eliminacja zimnej podłogi i redukcja strat ciepła do nieogrzewanych pomieszczeń.",
};

export default function IzolacjaStropowPiwnicPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Izolacja Stropów Piwnic
              </h1>
              <p className="text-white/90 text-lg mb-8">
                Profesjonalne ocieplenie stropów piwnic i garaży, które
                eliminuje straty ciepła i zapewnia komfortową temperaturę w
                pomieszczeniach nad piwnicą. Nasze rozwiązania to gwarancja
                ciepłych podłóg i oszczędności energii.
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
                  variant="outline"
                  asChild
                  className="text-white border-white hover:bg-white/10"
                >
                  <Link href="#zalety">Poznaj zalety</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/basement-ceiling-insulation.png"
                alt="Izolacja stropów piwnic"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Zalety Section */}
      <section id="zalety" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Zalety Izolacji Stropów Piwnic
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Eliminacja zimnej podłogi",
                description:
                  "Skuteczne ocieplenie stropu piwnicy eliminuje problem zimnej podłogi w pomieszczeniach mieszkalnych, zwiększając komfort użytkowania.",
              },
              {
                title: "Oszczędność energii",
                description:
                  "Zmniejszenie strat ciepła do nieogrzewanych pomieszczeń piwnicznych, co przekłada się na niższe rachunki za ogrzewanie.",
              },
              {
                title: "Ochrona przed wilgocią",
                description:
                  "Prawidłowa izolacja zapobiega kondensacji pary wodnej i powstawaniu pleśni na styku pomieszczeń o różnych temperaturach.",
              },
              {
                title: "Szybka realizacja",
                description:
                  "Prace izolacyjne wykonywane są od strony piwnicy, bez konieczności ingerencji w pomieszczenia mieszkalne.",
              },
              {
                title: "Trwałość rozwiązania",
                description:
                  "Zastosowane materiały izolacyjne charakteryzują się długą żywotnością i odpornością na osiadanie.",
              },
              {
                title: "Poprawa akustyki",
                description:
                  "Dodatkowa warstwa izolacji poprawia izolacyjność akustyczną między piwnicą a pomieszczeniami mieszkalnymi.",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-secondary mt-1 flex-shrink-0" />
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

      {/* Materiały Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Materiały Izolacyjne, Które Stosujemy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Wełna Mineralna",
                description:
                  "Doskonała izolacja termiczna i akustyczna, niepalna i paroprzepuszczalna. Idealna do izolacji stropów piwnic w budynkach mieszkalnych.",
                image: "/mineral-wool-insulation.png",
              },
              {
                title: "Płyty Styropianowe",
                description:
                  "Lekki materiał o dobrych właściwościach izolacyjnych, łatwy w montażu i obróbce. Dostępny w różnych grubościach i gęstościach.",
                image: "/placeholder-in5rz.png",
              },
              {
                title: "Płyty PIR/PUR",
                description:
                  "Nowoczesny materiał o najwyższych parametrach izolacyjnych, pozwalający na uzyskanie doskonałej izolacji przy mniejszej grubości warstwy.",
                image:
                  "/placeholder.svg?height=300&width=400&query=PIR insulation panels",
              },
            ].map((material, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
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
                  <h3 className="font-semibold text-lg mb-2">
                    {material.title}
                  </h3>
                  <p className="text-gray-600">{material.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proces Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Jak Wygląda Proces Izolacji Stropu Piwnicy?
          </h2>
          <div className="max-w-3xl mx-auto">
            <ol className="relative border-l border-primary/30">
              {[
                {
                  title: "Inspekcja i analiza",
                  description:
                    "Przeprowadzamy szczegółową inspekcję stropu piwnicy, określamy jego stan techniczny i potrzeby izolacyjne.",
                },
                {
                  title: "Dobór materiału izolacyjnego",
                  description:
                    "Wybieramy optymalny materiał izolacyjny, uwzględniając specyfikę budynku, oczekiwania klienta i budżet.",
                },
                {
                  title: "Przygotowanie powierzchni",
                  description:
                    "Oczyszczamy i przygotowujemy powierzchnię stropu do izolacji, usuwając wszelkie przeszkody i zabezpieczając instalacje.",
                },
                {
                  title: "Montaż konstrukcji nośnej",
                  description:
                    "Instalujemy konstrukcję nośną (w przypadku izolacji podwieszanej) lub przygotowujemy klej (w przypadku izolacji klejonej).",
                },
                {
                  title: "Montaż izolacji",
                  description:
                    "Profesjonalny montaż wybranego materiału izolacyjnego, z zachowaniem ciągłości izolacji i eliminacją mostków termicznych.",
                },
                {
                  title: "Montaż warstwy wykończeniowej",
                  description:
                    "W zależności od potrzeb, montujemy warstwę wykończeniową (np. płyty gipsowo-kartonowe, tynk) lub pozostawiamy izolację jako warstwę finalną.",
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

      {/* Realizacje Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nasze Realizacje
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={`/placeholder.svg?height=400&width=600&query=basement ceiling insulation example ${
                    index + 1
                  }`}
                  alt={`Realizacja izolacji stropu piwnicy ${index + 1}`}
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Najczęściej Zadawane Pytania
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question:
                    "Jaka jest optymalna grubość izolacji stropu piwnicy?",
                  answer:
                    "Optymalna grubość izolacji stropu piwnicy zależy od wielu czynników, takich jak różnica temperatur między piwnicą a pomieszczeniami mieszkalnymi, rodzaj materiału izolacyjnego i wymagania dotyczące efektywności energetycznej. Zazwyczaj stosuje się warstwę o grubości 10-15 cm dla wełny mineralnej lub 8-12 cm dla płyt styropianowych. Nasi specjaliści pomogą dobrać najlepsze rozwiązanie dla Twojego budynku.",
                },
                {
                  question:
                    "Czy izolacja stropu piwnicy wymaga specjalnych pozwoleń?",
                  answer:
                    "W większości przypadków izolacja stropu piwnicy nie wymaga specjalnych pozwoleń, ponieważ jest to praca wewnątrz budynku, która nie ingeruje w jego konstrukcję ani nie zmienia jego wyglądu zewnętrznego. Jednak w przypadku budynków zabytkowych lub objętych szczególną ochroną mogą być wymagane dodatkowe zgody. Nasi specjaliści pomogą w dopełnieniu ewentualnych formalności.",
                },
                {
                  question: "Jak długo trwa izolacja stropu piwnicy?",
                  answer:
                    "Czas realizacji zależy od powierzchni stropu, wybranej technologii i zakresu prac. Dla standardowego domu jednorodzinnego proces izolacji stropu piwnicy trwa zazwyczaj od 2 do 5 dni. Dokładny harmonogram ustalamy indywidualnie po ocenie zakresu prac.",
                },
                {
                  question:
                    "Czy izolacja stropu piwnicy rozwiąże problem wilgoci w piwnicy?",
                  answer:
                    "Izolacja stropu piwnicy sama w sobie nie rozwiąże problemu wilgoci w piwnicy, ale może zapobiec kondensacji pary wodnej na stropie, która często prowadzi do rozwoju pleśni. Jeśli w piwnicy występuje problem z wilgocią, zalecamy kompleksowe podejście, obejmujące odpowiednią hydroizolację ścian i podłogi piwnicy oraz zapewnienie właściwej wentylacji. Nasi specjaliści mogą przeprowadzić ocenę sytuacji i zaproponować odpowiednie rozwiązania.",
                },
                {
                  question:
                    "Czy po izolacji stropu piwnicy zmniejszy się wysokość pomieszczenia?",
                  answer:
                    "Tak, izolacja stropu piwnicy od strony piwnicy zmniejszy wysokość tego pomieszczenia o grubość warstwy izolacyjnej oraz ewentualnej konstrukcji nośnej i wykończenia. W zależności od zastosowanej technologii, może to być od kilku do kilkunastu centymetrów. Jeśli wysokość piwnicy jest krytycznym parametrem, możemy zaproponować materiały o wyższych parametrach izolacyjnych, które pozwalają na zastosowanie cieńszej warstwy.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-start gap-2">
                      <HelpCircle
                        className="text-primary mt-1 flex-shrink-0"
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
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Gotowy na ciepłe podłogi i niższe rachunki?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami, aby otrzymać bezpłatną wycenę izolacji stropu
            piwnicy. Nasi eksperci pomogą dobrać najlepsze rozwiązanie dla
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
  );
}
