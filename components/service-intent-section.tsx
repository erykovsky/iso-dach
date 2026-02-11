import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type ServiceIntentSectionProps = {
  title?: string;
  lead?: string;
  points: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

export const ServiceIntentSection = ({
  title = "Czy ta usługa jest dla Ciebie?",
  lead = "Ta usługa będzie dobrym wyborem, jeśli dotyczy Cię jeden z poniższych scenariuszy:",
  points,
  ctaLabel = "Poproś o bezpłatną wycenę",
  ctaHref = "/kontakt",
}: ServiceIntentSectionProps) => {
  return (
    <section className="marketing-section-alt py-14 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-2xl border border-primary/10 bg-white/80 p-6 shadow-[0_20px_50px_-35px_rgba(75,0,18,0.55)] md:p-8">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {lead}
          </p>

          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-foreground/90 md:text-base">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <Link
              href={ctaHref}
              className="brand-focus inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
