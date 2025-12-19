import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Shield, Home, Zap, Building, PenToolIcon as Tool, Thermometer } from "lucide-react";
import {
 Card,
 CardContent,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
 title: "Usługi | ISO-DACH",
 description:
  "Kompleksowe usługi ocieplania i termomodernizacji budynków - ocieplanie ścian, izolacja poddaszy, termomodernizacja i więcej.",
};

const services = [
 {
  title: "Ocieplanie ścian",
  description:
   "Kompleksowa izolacja ścian zewnętrznych, która znacząco redukuje straty ciepła i poprawia efektywność energetyczną Twojego domu.",
  icon: Shield,
  link: "/ocieplanie-scian",
  image: "/placeholder.svg?height=200&width=400",
  details: [
   "Redukcja strat ciepła nawet o 30%",
   "Poprawa komfortu termicznego",
   "Ochrona konstrukcji budynku",
   "Zwiększenie wartości nieruchomości",
  ],
 },
 {
  title: "Izolacja poddaszy",
  description:
   "Profesjonalne ocieplenie poddasza, które zapewnia komfortową temperaturę na górnych kondygnacjach i zmniejsza koszty ogrzewania.",
  icon: Home,
  link: "/izolacja-poddaszy",
  image: "/placeholder.svg?height=200&width=400",
  details: [
   "Skuteczna izolacja termiczna i akustyczna",
   "Ochrona przed przegrzewaniem latem",
   "Zapobieganie kondensacji pary wodnej",
   "Możliwość adaptacji poddasza na cele mieszkalne",
  ],
 },
 {
  title: "Termomodernizacja",
  description:
   "Kompleksowa modernizacja energetyczna budynku, obejmująca izolację, wymianę okien i drzwi oraz optymalizację systemu grzewczego.",
  icon: Zap,
  link: "/termomodernizacja",
  image: "/placeholder.svg?height=200&width=400",
  details: [
   "Kompleksowe podejście do efektywności energetycznej",
   "Znaczące obniżenie kosztów ogrzewania",
   "Możliwość uzyskania dofinansowania",
   "Poprawa komfortu mieszkania",
  ],
 },
 {
  title: "Ocieplanie stropodachu",
  description:
   "Skuteczna izolacja stropodachu, która zapobiega ucieczce ciepła przez dach i zapewnia optymalną temperaturę na najwyższych kondygnacjach.",
  icon: Building,
  link: "/ocieplanie-stropodachu",
  image: "/placeholder.svg?height=200&width=400",
  details: [
   "Redukcja strat ciepła przez dach",
   "Ochrona przed przegrzewaniem pomieszczeń",
   "Wydłużenie żywotności konstrukcji dachu",
   "Szybka i nieinwazyjna metoda",
  ],
 },
 {
  title: "Naprawa izolacji po kunach",
  description:
   "Specjalistyczna usługa naprawy i odtworzenia izolacji uszkodzonej przez kuny. Zabezpieczamy przed ponownym wtargnięciem tych zwierząt.",
  icon: Tool,
  link: "/naprawa-izolacji-po-kunach",
  image: "/placeholder.svg?height=200&width=400",
  details: [
   "Usunięcie zniszczonej izolacji",
   "Dezynfekcja i oczyszczenie przestrzeni",
   "Montaż nowej, wysokiej jakości izolacji",
   "Zabezpieczenie przed ponownym wtargnięciem kun",
  ],
 },
 {
  title: "Badania termowizyjne",
  description:
   "Zaawansowana diagnostyka termowizyjna pozwala precyzyjnie wykryć miejsca ucieczki ciepła, mostki termiczne i problemy z izolacją. Pierwszy krok do efektywnej termomodernizacji.",
  icon: Thermometer,
  link: "/termowizja",
  image: "/placeholder.svg?height=200&width=400",
  details: [
   "Wykrycie mostków termicznych i strat ciepła",
   "Ocena jakości istniejącej izolacji",
   "Lokalizacja przecieków powietrza i wilgoci",
   "Szczegółowy raport z rekomendacjami",
  ],
 },
];

export default function ServicesPage() {
 return (
  <div className="min-h-screen bg-gray-50">
   <div className="bg-primary py-16">
    <div className="container mx-auto px-4">
     <h1 className="text-4xl font-bold text-white text-center">Nasze Usługi</h1>
     <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto">
      Oferujemy kompleksowe rozwiązania w zakresie izolacji i termomodernizacji,
      które pomogą Ci oszczędzić energię i zwiększyć komfort Twojego domu.
     </p>
    </div>
   </div>

   <div className="container mx-auto px-4 py-16">
    <div className="grid gap-12">
     {services.map((service, index) => (
      <div
       key={index}
       className={`grid md:grid-cols-2 gap-8 items-center ${
        index % 2 !== 0 ? "md:flex-row-reverse" : ""
       }`}
      >
       <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
        <Image
         src={service.image || "/placeholder.svg"}
         alt={service.title}
         fill
         className="object-cover"
        />
       </div>

       <Card>
        <CardHeader>
         <div className="flex items-center gap-4 mb-2">
          <service.icon className="h-8 w-8 text-primary" />
          <CardTitle className="text-2xl">{service.title}</CardTitle>
         </div>
         <CardDescription className="text-base">
          {service.description}
         </CardDescription>
        </CardHeader>
        <CardContent>
         <h3 className="font-medium mb-2">Korzyści:</h3>
         <ul className="space-y-1">
          {service.details.map((detail, i) => (
           <li key={i} className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>{detail}</span>
           </li>
          ))}
         </ul>
        </CardContent>
        <CardFooter>
         <Button asChild>
          <Link href={service.link}>Dowiedz się więcej</Link>
         </Button>
        </CardFooter>
       </Card>
      </div>
     ))}
    </div>

    <div className="mt-16 text-center">
     <h2 className="text-2xl font-bold mb-4">Potrzebujesz wyceny?</h2>
     <p className="mb-8 max-w-2xl mx-auto">
      Skontaktuj się z nami, aby otrzymać bezpłatną wycenę dla Twojego projektu.
      Nasi specjaliści pomogą dobrać najlepsze rozwiązanie dla Twojego domu.
     </p>
     <Button size="lg" asChild>
      <Link href="/kontakt">Zamów bezpłatną wycenę</Link>
     </Button>
    </div>
   </div>
  </div>
 );
}
