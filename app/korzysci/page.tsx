import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Zap,
  ThumbsUp,
  Banknote,
  Clock,
  Award,
} from "lucide-react";
import { BenefitCard } from "@/components/benefit-card";

export const metadata: Metadata = {
  title: "Korzyści z Izolacji | Iso-Dach",
  description:
    "Odkryj korzyści profesjonalnej izolacji od Iso-Dach: oszczędność energii, komfort mieszkania i długoterminowe oszczędności.",
};

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
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-burgundy mb-8 text-center">
          Korzyści z Izolacji Iso-Dach
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </main>
      <section className="bg-burgundy mt-12 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#800020] mb-4">
              Przekonaj się sam!
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Skorzystaj z naszych usług i ciesz się wszystkimi korzyściami,
              jakie oferuje profesjonalna izolacja od Iso-Dach.
            </p>
            <Link
              href="/wycena"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#32CD32] hover:bg-lime-500/90 transition-colors duration-300 ease-in-out"
            >
              Zamów bezpłatną wycenę
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
