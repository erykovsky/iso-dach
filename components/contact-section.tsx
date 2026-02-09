import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="section-shell relative overflow-hidden bg-gradient-to-br from-[#32CD32] via-[#2ebc2e] to-[#228B22] py-24 text-white"
    >
      <div className="absolute inset-0 opacity-15">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-20 right-0 h-96 w-96 rounded-full bg-[#4B0012] blur-3xl" />
      </div>

      <div className="section-inner container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/25 bg-white/10 p-8 text-center shadow-[0_35px_80px_-45px_rgba(0,0,0,0.65)] backdrop-blur-sm sm:p-12">
          <h2 className="reveal-up text-4xl font-bold tracking-tight sm:text-5xl">
            Skontaktuj się z nami
          </h2>
          <p className="reveal-up reveal-delay-1 mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Umów się na bezpłatną konsultację i wycenę. Nasi eksperci pomogą
            dobrać najlepszą metodę izolacji pod Twój dom i budżet.
          </p>

          <div className="reveal-up reveal-delay-2 mt-9 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Link
              href="/kontakt"
              className="brand-focus inline-flex items-center rounded-full border border-[#800020]/35 bg-[#800020] px-7 py-3.5 text-lg font-semibold text-white shadow-[0_15px_34px_-20px_rgba(75,0,18,0.9)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#69001a]"
            >
              Zamów wycenę
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+48660441941"
              className="brand-focus inline-flex items-center rounded-full border border-white/50 bg-white px-7 py-3.5 text-lg font-semibold text-[#228B22] shadow-[0_15px_34px_-20px_rgba(0,0,0,0.6)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f8fff8]"
            >
              <Phone className="mr-2 h-5 w-5" />
              +48 660 441 941
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
