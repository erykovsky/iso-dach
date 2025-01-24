import { CheckCircle, Zap, Thermometer, Leaf, TrendingUp } from "lucide-react";

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
      className="py-20 bg-gradient-to-br from-[#800020] to-[#4B0012] text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Korzyści z Ocieplenia
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start bg-white/10 rounded-lg p-6 transition-all duration-300 hover:bg-white/20 hover:shadow-xl"
            >
              <benefit.icon className="text-[#FFD700] mr-4 flex-shrink-0 w-8 h-8" />
              <div>
                <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-[#FFE4E1] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
