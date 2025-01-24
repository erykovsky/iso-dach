import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-[#800020] to-[#4B0012] text-white py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-4">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Profesjonalne ocieplenia dla Twojego domu
              </h1>
              <p className="text-xl mb-6">
                Zwiększ komfort i oszczędzaj na rachunkach za energię
              </p>
              <Link
                href="#contact"
                className="bg-[#32CD32] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#32CD32] transition duration-300"
              >
                Darmowa wycena
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/welna_wdmuchiwana.jpg"
                alt="Ocieplanie domu"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>
        <section id="services" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#800020]">
              Nasze Usługi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Ocieplanie ścian",
                "Izolacja poddaszy",
                "Termomodernizacja",
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#32CD32]"
                >
                  <h3 className="text-xl font-semibold mb-4 text-[#800020]">
                    {service}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link
                    href="#"
                    className="text-[#32CD32] font-semibold hover:underline"
                  >
                    Dowiedz się więcej
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="py-16 bg-[#800020] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Korzyści z Ocieplenia
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Niższe rachunki za energię",
                "Zwiększony komfort termiczny",
                "Ochrona środowiska",
                "Wzrost wartości nieruchomości",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-[#32CD32] mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit}</h3>
                    <p className="text-[#FFB3B3]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="py-16 bg-[#32CD32] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Skontaktuj się z nami</h2>
            <p className="text-xl mb-8">
              Umów się na bezpłatną konsultację i wycenę
            </p>
            <Link
              prefetch={true}
              href="/wycena"
              className="bg-[#800020] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#4B0012] transition duration-300 inline-flex items-center"
            >
              Zamów wycenę
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
