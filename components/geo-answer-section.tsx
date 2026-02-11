import Link from "next/link";
import { CheckCircle2, MessageCircleQuestion } from "lucide-react";

type GeoAnswerSectionProps = {
  title: string;
  answer: string;
  bullets: string[];
  qa: Array<{ question: string; answer: string }>;
  localNote: string;
  relatedLinks?: Array<{ href: string; label: string }>;
};

export function GeoAnswerSection({
  title,
  answer,
  bullets,
  qa,
  localNote,
  relatedLinks,
}: GeoAnswerSectionProps) {
  return (
    <section className="section-shell py-10 md:py-14">
      <div className="section-inner container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="soft-card rounded-2xl p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary/80">
              Szybka odpowiedź
            </p>
            <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
              {title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/90 md:text-base">
              {answer}
            </p>
            <ul className="mt-5 grid gap-2.5 text-sm text-foreground/90 md:text-base">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <aside className="soft-card rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-primary md:text-2xl">
              Najczęstsze pytania przed wyceną
            </h3>
            <div className="mt-5 space-y-4">
              {qa.map((item) => (
                <article key={item.question} className="rounded-xl border border-primary/10 bg-white/80 p-4">
                  <p className="flex items-start gap-2 text-sm font-semibold text-foreground md:text-base">
                    <MessageCircleQuestion className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item.question}</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </aside>
        </div>

        <div className="mx-auto mt-6 max-w-6xl rounded-2xl border border-primary/15 bg-primary/5 px-5 py-4 text-sm leading-relaxed text-foreground/85 md:px-6 md:text-base">
          {localNote}
        </div>

        {relatedLinks && relatedLinks.length > 0 ? (
          <div className="mx-auto mt-5 max-w-6xl rounded-2xl border border-primary/12 bg-white/80 p-5 md:p-6">
            <h3 className="text-lg font-semibold text-primary md:text-xl">
              Powiązane usługi i poradniki
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="pill-filter"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
