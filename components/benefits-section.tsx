import { Zap, Thermometer, Leaf, TrendingUp } from "lucide-react";

const benefits = [
  {
    title: "Niższe rachunki za energię",
    description:
      "Zmniejsz koszty ogrzewania nawet o 30% dzięki skutecznej izolacji termicznej Twojego domu.",
    icon: Zap,
  },
  {
    title: "Zwiększony komfort termiczny",
    description:
      "Ciesz się przyjemną temperaturą w domu przez cały rok, bez względu na warunki atmosferyczne na zewnątrz.",
    icon: Thermometer,
  },
  {
    title: "Ochrona środowiska",
    description:
      "Zredukuj emisję CO2 i przyczyń się do walki ze zmianami klimatycznymi, zmniejszając zużycie energii.",
    icon: Leaf,
  },
  {
    title: "Wzrost wartości nieruchomości",
    description:
      "Zwiększ atrakcyjność i wartość swojego domu na rynku nieruchomości dzięki lepszej efektywności energetycznej.",
    icon: TrendingUp,
  },
];

export const BenefitsSection = () => {
  return (
    <section
      id="benefits"
      className="section-shell bg-gradient-to-br from-[#800020] via-[#6f001d] to-[#4B0012] py-24 text-white"
    >
      <div className="section-inner container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <p className="reveal-up mb-4 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90">
            Dlaczego warto
          </p>
          <h2 className="reveal-up reveal-delay-1 text-4xl font-bold sm:text-5xl">
            Korzyści z ocieplenia
          </h2>
          <p className="reveal-up reveal-delay-2 mt-5 text-lg leading-relaxed text-white/80">
            Lepsza izolacja to nie tylko niższe koszty ogrzewania, ale też
            większy komfort codziennego życia i wyższa wartość nieruchomości.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className={`group rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 reveal-up ${
                index % 2 === 0 ? "reveal-delay-1" : "reveal-delay-2"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFD700]/20 text-[#FFD700]">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{benefit.title}</h3>
                  <p className="mt-3 leading-relaxed text-[#FFE4E1]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
