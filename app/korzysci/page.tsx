import Link from "next/link";
import {
  ArrowLeft,
  Shield,
  Zap,
  ThumbsUp,
  Banknote,
  Clock,
  Award,
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Najwyższa jakość",
    description:
      "Wykorzystujemy tylko najlepsze materiały i najnowocześniejsze technologie, aby zapewnić trwałość i skuteczność naszych rozwiązań.",
  },
  {
    icon: Zap,
    title: "Energooszczędność",
    description:
      "Nasze izolacje znacząco redukują straty ciepła, co przekłada się na niższe rachunki za ogrzewanie i klimatyzację.",
  },
  {
    icon: ThumbsUp,
    title: "Komfort mieszkania",
    description:
      "Prawidłowa izolacja zapewnia optymalną temperaturę wewnątrz domu przez cały rok, zwiększając komfort życia.",
  },
  {
    icon: Banknote,
    title: "Oszczędność w długim terminie",
    description:
      "Inwestycja w wysokiej jakości izolację zwraca się w postaci niższych kosztów utrzymania domu.",
  },
  {
    icon: Clock,
    title: "Szybka realizacja",
    description:
      "Dzięki doświadczonemu zespołowi, jesteśmy w stanie szybko i sprawnie przeprowadzić prace izolacyjne.",
  },
  {
    icon: Award,
    title: "Gwarancja jakości",
    description:
      "Oferujemy długoterminową gwarancję na nasze usługi, zapewniając spokój ducha naszym klientom.",
  },
];

export default function BenefitsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-lime-green rounded-full mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-semibold mb-2 text-burgundy">
                  {benefit.title}
                </h2>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <div className="bg-burgundy mt-12 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4">
              Przekonaj się sam!
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Skorzystaj z naszych usług i ciesz się wszystkimi korzyściami,
              jakie oferuje profesjonalna izolacja od Iso-Dach.
            </p>
            <Link
              href="/wycena"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lime-green hover:bg-lime-green/90 transition-colors duration-300 ease-in-out"
            >
              Zamów bezpłatną wycenę
              <ArrowLeft className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
