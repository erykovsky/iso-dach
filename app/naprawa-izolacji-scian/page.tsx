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
import { ArrowRight, HelpCircle, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
 title: "Naprawa Izolacji Po Kunach | ISO-DACH",
 description:
  "Specjalistyczna usługa naprawy i odtworzenia izolacji uszkodzonej przez kuny. Zabezpieczamy przed ponownym wtargnięciem tych zwierząt.",
};

export default function NaprawaIzolacjiPoKunachPage() {
 return (
  <div className="min-h-screen bg-gray-50">
   {/* Hero Section */}
   <section className="bg-primary py-16 md:py-24">
    <div className="container mx-auto px-4">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
       <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
        Naprawa Izolacji Po Kunach
       </h1>
       <p className="text-white/90 text-lg mb-8">
        Specjalistyczna usługa naprawy i odtworzenia izolacji uszkodzonej przez
        kuny. Zabezpieczamy przed ponownym wtargnięciem tych zwierząt i
        przywracamy pełną funkcjonalność izolacji termicznej.
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
         <Link href="#problem">Poznaj problem</Link>
        </Button>
       </div>
      </div>
      <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
       <Image
        src="/placeholder.svg?height=600&width=800"
        alt="Naprawa izolacji po kunach"
        fill
        className="object-cover"
       />
      </div>
     </div>
    </div>
   </section>

   {/* Problem Section */}
   <section id="problem" className="py-16 md:py-24">
    <div className="container mx-auto px-4">
     <h2 className="text-3xl font-bold text-center mb-12">
      Problem Kun w Izolacji
     </h2>
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
       <h3 className="text-2xl font-semibold mb-6">
        Dlaczego kuny są problemem?
       </h3>
       <p className="text-gray-700 mb-6">
        Kuny to małe, zwinne ssaki, które często wybierają poddasza, stropodachy
        i przestrzenie między izolacją jako miejsce do życia. Choć same w sobie
        nie są groźne dla ludzi, mogą wyrządzić znaczne szkody w izolacji
        budynku:
       </p>
       <ul className="space-y-4 mb-6">
        <li className="flex items-start gap-3">
         <AlertTriangle className="text-red-500 mt-1 flex-shrink-0" />
         <span>
          Niszczą materiał izolacyjny, tworząc w nim tunele i gniazda
         </span>
        </li>
        <li className="flex items-start gap-3">
         <AlertTriangle className="text-red-500 mt-1 flex-shrink-0" />
         <span>
          Zanieczyszczają izolację odchodami i moczem, co może prowadzić do
          nieprzyjemnych zapachów
         </span>
        </li>
        <li className="flex items-start gap-3">
         <AlertTriangle className="text-red-500 mt-1 flex-shrink-0" />
         <span>
          Mogą uszkadzać instalacje elektryczne, co stwarza ryzyko pożaru
         </span>
        </li>
        <li className="flex items-start gap-3">
         <AlertTriangle className="text-red-500 mt-1 flex-shrink-0" />
         <span>
          Znacząco obniżają skuteczność izolacji termicznej, co prowadzi do
          zwiększonych kosztów ogrzewania
         </span>
        </li>
        <li className="flex items-start gap-3">
         <AlertTriangle className="text-red-500 mt-1 flex-shrink-0" />
         <span>
          Hałasują, szczególnie w nocy, zakłócając spokój mieszkańców
         </span>
        </li>
       </ul>
       <p className="text-gray-700">
        Uszkodzenia spowodowane przez kuny mogą być rozległe i wymagają
        specjalistycznej naprawy, aby przywrócić pełną funkcjonalność izolacji
        oraz zabezpieczyć budynek przed ponownym wtargnięciem tych zwierząt.
       </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
       <div className="relative h-48 rounded-lg overflow-hidden">
        <Image
         src="/placeholder.svg?height=300&width=400&text=Uszkodzenia 1"
         alt="Uszkodzenia izolacji przez kuny"
         fill
         className="object-cover"
        />
       </div>
       <div className="relative h-48 rounded-lg overflow-hidden">
        <Image
         src="/placeholder.svg?height=300&width=400&text=Uszkodzenia 2"
         alt="Uszkodzenia izolacji przez kuny"
         fill
         className="object-cover"
        />
       </div>
       <div className="relative h-48 rounded-lg overflow-hidden">
        <Image
         src="/placeholder.svg?height=300&width=400&text=Uszkodzenia 3"
         alt="Uszkodzenia izolacji przez kuny"
         fill
         className="object-cover"
        />
       </div>
       <div className="relative h-48 rounded-lg overflow-hidden">
        <Image
         src="/placeholder.svg?height=300&width=400&text=Uszkodzenia 4"
         alt="Uszkodzenia izolacji przez kuny"
         fill
         className="object-cover"
        />
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* Nasze Rozwiązanie Section */}
   <section className="py-16 md:py-24 bg-gray-100">
    <div className="container mx-auto px-4">
     <h2 className="text-3xl font-bold text-center mb-12">Nasze Rozwiązanie</h2>
     <div className="max-w-3xl mx-auto">
      <ol className="relative border-l border-primary/30">
       {[
        {
         title: "Inspekcja i ocena szkód",
         description:
          "Przeprowadzamy szczegółową inspekcję poddasza lub stropodachu, oceniając zakres uszkodzeń spowodowanych przez kuny i identyfikując miejsca ich wejścia.",
        },
        {
         title: "Usunięcie kun",
         description:
          "Jeśli kuny nadal przebywają w budynku, stosujemy humanitarne metody ich wypłoszenia, bez krzywdzenia zwierząt.",
        },
        {
         title: "Usunięcie zniszczonej izolacji",
         description:
          "Dokładnie usuwamy zniszczoną i zanieczyszczoną izolację, aby zapobiec problemom z nieprzyjemnymi zapachami i potencjalnymi zagrożeniami zdrowotnymi.",
        },
        {
         title: "Dezynfekcja i oczyszczenie",
         description:
          "Przeprowadzamy profesjonalną dezynfekcję przestrzeni, eliminując bakterie, grzyby i nieprzyjemne zapachy pozostawione przez kuny.",
        },
        {
         title: "Naprawa uszkodzeń konstrukcyjnych",
         description:
          "Naprawiamy wszelkie uszkodzenia konstrukcyjne spowodowane przez kuny, w tym uszkodzenia folii dachowej, drewnianych elementów konstrukcji itp.",
        },
        {
         title: "Montaż nowej izolacji",
         description:
          "Instalujemy nową, wysokiej jakości izolację termiczną, przywracając pełną funkcjonalność i efektywność energetyczną budynku.",
        },
        {
         title: "Zabezpieczenie przed ponownym wtargnięciem",
         description:
          "Montujemy specjalistyczne zabezpieczenia, które uniemożliwiają kunom ponowne wtargnięcie do budynku, takie jak siatki, blachy czy elektroniczne odstraszacze.",
        },
        {
         title: "Kontrola końcowa i gwarancja",
         description:
          "Przeprowadzamy szczegółową kontrolę wykonanych prac i udzielamy gwarancji na skuteczność zabezpieczeń przed kunami.",
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

   {/* Zabezpieczenia Section */}
   <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
     <h2 className="text-3xl font-bold text-center mb-12">
      Metody Zabezpieczenia Przed Kunami
     </h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
       {
        title: "Siatki Zabezpieczające",
        description:
         "Montaż specjalnych siatek o odpowiedniej gęstości oczek, które uniemożliwiają kunom dostęp do poddasza czy stropodachu.",
        image: "/placeholder.svg?height=300&width=400",
       },
       {
        title: "Blachy Ochronne",
        description:
         "Instalacja blach ochronnych w miejscach potencjalnego wejścia kun, które uniemożliwiają im przegryzienie się do wnętrza.",
        image: "/placeholder.svg?height=300&width=400",
       },
       {
        title: "Elektroniczne Odstraszacze",
        description:
         "Montaż urządzeń emitujących ultradźwięki lub zmienne pole elektromagnetyczne, które są nieprzyjemne dla kun, ale nieszkodliwe dla ludzi i zwierząt domowych.",
        image: "/placeholder.svg?height=300&width=400",
       },
       {
        title: "Repelenty Zapachowe",
        description:
         "Stosowanie naturalnych lub syntetycznych repelentów zapachowych, które odstraszają kuny dzięki nieprzyjemnemu dla nich zapachowi.",
        image: "/placeholder.svg?height=300&width=400",
       },
       {
        title: "Uszczelnienie Otworów",
        description:
         "Dokładne uszczelnienie wszelkich otworów i szczelin w dachu i elewacji, przez które kuny mogłyby się dostać do budynku.",
        image: "/placeholder.svg?height=300&width=400",
       },
       {
        title: "Systemy Hybrydowe",
        description:
         "Połączenie różnych metod zabezpieczeń dla uzyskania maksymalnej skuteczności ochrony przed kunami.",
        image: "/placeholder.svg?height=300&width=400",
       },
      ].map((method, index) => (
       <div
        key={index}
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
       >
        <div className="relative h-48">
         <Image
          src={method.image || "/placeholder.svg"}
          alt={method.title}
          fill
          className="object-cover"
         />
        </div>
        <div className="p-6">
         <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
         <p className="text-gray-600">{method.description}</p>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* Realizacje Section */}
   <section className="py-16 md:py-24 bg-gray-100">
    <div className="container mx-auto px-4">
     <h2 className="text-3xl font-bold text-center mb-12">Nasze Realizacje</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
       <div
        key={index}
        className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
       >
        <Image
         src={`/placeholder.svg?height=400&width=600&text=Realizacja ${
          index + 1
         }`}
         alt={`Realizacja naprawy izolacji po kunach ${index + 1}`}
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
         question: "Jak rozpoznać, że na poddaszu są kuny?",
         answer:
          "Najczęstsze oznaki obecności kun to: hałasy na poddaszu (szczególnie w nocy), nieprzyjemny zapach, ślady odchodów, uszkodzenia izolacji i instalacji elektrycznej, ślady wejścia na zewnątrz budynku (np. uszkodzenia rynien, dachówek). Jeśli zauważysz którykolwiek z tych symptomów, warto jak najszybciej skontaktować się ze specjalistą.",
        },
        {
         question: "Czy kuny są pod ochroną?",
         answer:
          "Tak, kuny domowe (Martes foina) są w Polsce objęte częściową ochroną gatunkową. Oznacza to, że nie można ich zabijać ani łapać bez odpowiedniego zezwolenia. Dlatego nasze metody polegają na humanitarnym wypłoszeniu kun i zabezpieczeniu budynku przed ich ponownym wtargnięciem, bez krzywdzenia zwierząt.",
        },
        {
         question: "Jak długo trwa naprawa izolacji po kunach?",
         answer:
          "Czas realizacji zależy od zakresu uszkodzeń i wielkości budynku. Dla standardowego domu jednorodzinnego proces naprawy izolacji po kunach trwa zazwyczaj od 2 do 5 dni. Obejmuje to usunięcie zniszczonej izolacji, dezynfekcję, montaż nowej izolacji i zabezpieczenie przed ponownym wtargnięciem kun. Dokładny harmonogram ustalamy indywidualnie po ocenie zakresu prac.",
        },
        {
         question: "Czy zabezpieczenia przed kunami są skuteczne?",
         answer:
          "Tak, profesjonalnie wykonane zabezpieczenia są bardzo skuteczne. Stosujemy kompleksowe rozwiązania, które uniemożliwiają kunom ponowne wtargnięcie do budynku. Kluczem do sukcesu jest dokładna identyfikacja wszystkich potencjalnych miejsc wejścia i zastosowanie odpowiednich zabezpieczeń. Na nasze zabezpieczenia udzielamy gwarancji.",
        },
        {
         question: "Czy po naprawie izolacji będzie nieprzyjemny zapach?",
         answer:
          "Nie, podczas naprawy izolacji usuwamy całkowicie zniszczony materiał izolacyjny i przeprowadzamy profesjonalną dezynfekcję przestrzeni, która eliminuje wszelkie nieprzyjemne zapachy pozostawione przez kuny. Po zakończeniu prac nie powinien być wyczuwalny żaden nieprzyjemny zapach.",
        },
       ].map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
         <AccordionTrigger className="text-left">
          <div className="flex items-start gap-2">
           <HelpCircle className="text-primary mt-1 flex-shrink-0" size={18} />
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
   <section className="py-16 md:py-24 bg-primary/10">
    <div className="container mx-auto px-4 text-center">
     <h2 className="text-3xl font-bold mb-6">Masz problem z kunami?</h2>
     <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
      Skontaktuj się z nami, aby otrzymać bezpłatną wycenę naprawy izolacji po
      kunach. Nasi eksperci pomogą rozwiązać problem i zabezpieczyć Twój dom
      przed ponownym wtargnięciem tych zwierząt.
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
