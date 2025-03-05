import { Shield, Home, Zap, Building, PenToolIcon as Tool } from "lucide-react";
import Link from "next/link";

const services = [
 {
  title: "Ocieplanie ścian",
  description:
   "Kompleksowa izolacja ścian zewnętrznych, która znacząco redukuje straty ciepła i poprawia efektywność energetyczną Twojego domu.",
  icon: Shield,
  link: "/ocieplanie-scian",
 },
 {
  title: "Izolacja poddaszy",
  description:
   "Profesjonalne ocieplenie poddasza, które zapewnia komfortową temperaturę na górnych kondygnacjach i zmniejsza koszty ogrzewania.",
  icon: Home,
  link: "/izolacja-poddaszy",
 },
 {
  title: "Termomodernizacja",
  description:
   "Kompleksowa modernizacja energetyczna budynku, obejmująca izolację, wymianę okien i drzwi oraz optymalizację systemu grzewczego.",
  icon: Zap,
  link: "/termomodernizacja",
 },
 {
  title: "Ocieplanie stropodachu",
  description:
   "Skuteczna izolacja stropodachu, która zapobiega ucieczce ciepła przez dach i zapewnia optymalną temperaturę na najwyższych kondygnacjach.",
  icon: Building,
  link: "/ocieplanie-stropodachu",
 },
 {
  title: "Naprawa izolacji po kunach",
  description:
   "Specjalistyczna usługa naprawy i odtworzenia izolacji uszkodzonej przez kuny. Zabezpieczamy przed ponownym wtargnięciem tych zwierząt.",
  icon: Tool,
  link: "/naprawa-izolacji-po-kunach",
 },
];

export const ServicesSection = () => {
 return (
  <section id="services" className="py-24 bg-gradient-to-b from-white to-muted">
   <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16 text-primary">
     Nasze Usługi
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
     {services.map((service, index) => (
      <div
       key={index}
       className="bg-card p-6 rounded-lg shadow-lg border-b-4 border-secondary transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
      >
       <div className="flex items-center mb-4">
        <service.icon className="w-10 h-10 text-primary mr-4" />
        <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
       </div>
       <p className="text-muted-foreground mb-6 leading-relaxed">
        {service.description}
       </p>
       <Link
        href={service.link}
        className="inline-flex items-center text-secondary font-semibold hover:underline transition-colors duration-300 hover:text-secondary-foreground"
       >
        Dowiedz się więcej
        <svg
         className="w-5 h-5 ml-2"
         fill="none"
         stroke="currentColor"
         viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
         />
        </svg>
       </Link>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};
