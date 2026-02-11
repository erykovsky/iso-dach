import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

export const homeIntentFaqs = [
  {
    question: "Masz kuny na poddaszu i chcesz szybkiej naprawy?",
    answer:
      "Wykonujemy diagnostykę szkód, odtworzenie izolacji i zabezpieczenie miejsc wejścia kun, aby problem nie wrócił.",
    href: "/naprawa-izolacji-po-kunach",
  },
  {
    question: "Chcesz obniżyć rachunki za ogrzewanie bez dużego remontu?",
    answer:
      "Dobieramy metodę ocieplenia do budynku tak, by realnie ograniczyć straty ciepła i poprawić komfort w domu.",
    href: "/izolacja-poddaszy",
  },
  {
    question: "Nie wiesz, gdzie ucieka ciepło?",
    answer:
      "Badanie termowizyjne pokaże newralgiczne miejsca i pozwoli zaplanować skuteczne prace bez zgadywania.",
    href: "/termowizja",
  },
  {
    question: "Masz ściany warstwowe z pustką powietrzną?",
    answer:
      "Wypełniamy pustkę materiałem izolacyjnym bez demontażu elewacji, co skraca czas prac i ogranicza ingerencję.",
    href: "/ocieplenie-scian-z-pustka-powietrzna",
  },
];

export const IntentAnswersSection = () => {
  return (
    <section className="section-shell bg-white py-20">
      <div className="section-inner container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <p className="reveal-up mb-4 inline-flex rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary/80">
              Szybkie odpowiedzi
            </p>
            <h2 className="reveal-up reveal-delay-1 text-4xl font-bold text-primary sm:text-5xl">
              Najczęstsze pytania przed wyceną
            </h2>
            <p className="reveal-up reveal-delay-2 mt-5 text-lg leading-relaxed text-muted-foreground">
              Krótkie odpowiedzi, które pomagają szybko dobrać właściwą usługę i
              przyspieszyć kontakt.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {homeIntentFaqs.map((item) => (
              <article
                key={item.question}
                className="soft-card reveal-up rounded-2xl p-5 sm:p-6"
              >
                <h3 className="flex items-start gap-2 text-lg font-semibold text-primary">
                  <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <span>{item.question}</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.answer}
                </p>
                <Link
                  href={item.href}
                  className="brand-focus mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
                >
                  Przejdź do usługi
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
