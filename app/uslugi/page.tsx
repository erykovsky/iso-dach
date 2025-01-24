import Link from "next/link";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Izolacja dachów",
    description:
      "Profesjonalna izolacja dachów z wykorzystaniem najnowszych materiałów i technologii.",
    features: [
      "Redukcja strat ciepła",
      "Ochrona przed wilgocią",
      "Zwiększenie komfortu mieszkania",
    ],
  },
  {
    id: 2,
    title: "Naprawa i konserwacja dachów",
    description:
      "Kompleksowe usługi naprawy i konserwacji dachów, zapewniające długotrwałą ochronę Twojego domu.",
    features: [
      "Uszczelnianie przecieków",
      "Wymiana uszkodzonych dachówek",
      "Czyszczenie i konserwacja",
    ],
  },
  {
    id: 3,
    title: "Montaż okien dachowych",
    description:
      "Profesjonalny montaż okien dachowych, zwiększający doświetlenie i funkcjonalność poddasza.",
    features: [
      "Dobór odpowiednich okien",
      "Precyzyjny montaż",
      "Regulacja i konserwacja",
    ],
  },
  {
    id: 4,
    title: "Termomodernizacja poddaszy",
    description:
      "Kompleksowa termomodernizacja poddaszy, poprawiająca efektywność energetyczną budynku.",
    features: [
      "Izolacja ścian i sufitów",
      "Montaż paroizolacji",
      "Optymalizacja wentylacji",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link
            prefetch={true}
            href="/"
            className="flex items-center text-[#800020] hover:text-[#32CD32] font-semibold transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Powrót do strony głównej
          </Link>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 mt-8">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-burgundy">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-lime-green mr-2" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
      <div className="bg-gradient-to-r from-burgundy to-burgundy/80 mt-12 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4">
                Potrzebujesz indywidualnej wyceny?
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Skontaktuj się z nami, aby otrzymać bezpłatną konsultację i
                wycenę dostosowaną do Twoich potrzeb.
              </p>
              <Link
                href="/wycena"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lime-green hover:bg-lime-green/90 transition-colors duration-300 ease-in-out"
              >
                Otrzymaj wycenę
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
            <div className="w-full md:w-1/3">
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src="/wdmuchiwanie_poddasze.jpg"
                  alt="Dach z izolacją"
                  className="object-cover rounded-lg shadow-md"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
