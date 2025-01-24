import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-[#32CD32] to-[#228B22] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-8 tracking-tight">
          Skontaktuj się z nami
        </h2>
        <p className="text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Umów się na bezpłatną konsultację i wycenę. Nasi eksperci są gotowi,
          aby pomóc Ci w osiągnięciu optymalnej efektywności energetycznej
          Twojego domu.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            href="/wycena"
            className="bg-[#800020] text-white font-semibold py-4 px-8 rounded-full hover:bg-[#4B0012] transition duration-300 inline-flex items-center text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Zamów wycenę
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <a
            href="tel:+48123456789"
            className="bg-white text-[#32CD32] font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition duration-300 inline-flex items-center text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Phone className="mr-2 w-5 h-5" />
            +48 660 441 941
          </a>
        </div>
      </div>
    </section>
  );
};
