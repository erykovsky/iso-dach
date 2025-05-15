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
 title: "Ocieplanie Ścian | ISO-DACH",
 description:
  "Profesjonalne ocieplanie ścian zewnętrznych. Zwiększ efektywność energetyczną swojego domu i obniż rachunki za ogrzewanie.",
};

export default function OcieplanieScianPage() {
 return (
  <div className="min-h-screen bg-gray-50">
   {/* Hero Section */}
   <section className="bg-primary py-16 md:py-24">
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
        src="/placeholder.svg?height=600&width=800"
        alt="Ocieplanie ścian zewnętrznych"
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
          <CheckCircle className="text-secondary mt-1 flex-shrink-0" />
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
   <section className="py-16 md:py-24 bg-gray-100">
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
   <section className="py-16 md:py-24">
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
        image: "/placeholder.svg?height=300&width=400",
       },
       {
        title: "Styropian Grafitowy",
        description:
         "Zaawansowany materiał o lepszych właściwościach izolacyjnych niż tradycyjny styropian, pozwalający na stosowanie cieńszych warstw.",
        image: "/placeholder.svg?height=300&width=400",
       },
       {
        title: "Wełna Mineralna",
        description:
         "Doskonała izolacja termiczna i akustyczna, niepalna i paroprzepuszczalna, idealna dla budynków wymagających oddychających ścian.",
        image: "/placeholder.svg?height=300&width=400",
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
         <h3 className="font-semibold text-lg mb-2">{material.title}</h3>
         <p className="text-gray-600">{material.description}</p>
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
 );
}
