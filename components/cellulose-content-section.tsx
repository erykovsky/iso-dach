import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const CelluloseContentSection = () => {
  return (
    <section className="marketing-section py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl space-y-6">
          <header className="soft-card reveal-up rounded-2xl p-6 md:p-8">
            <p className="inline-flex rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-semibold tracking-wide text-primary/80">
              Ocieplanie celulozą
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              Ocieplanie celulozą dachów, ścian i stropów
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Technologia ocieplania celulozą to jeden z najskuteczniejszych
              sposobów ograniczania strat ciepła w budynkach. W ISO-DACH
              wykonujemy wdmuchiwanie granulatu celulozy zarówno w nowych
              inwestycjach, jak i w istniejących, zamieszkanych domach.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              W praktyce celuloza wdmuchiwana pozwala szczelniej wypełnić
              przegrody i trudno dostępne miejsca, co przekłada się na realną
              poprawę efektywności energetycznej. W wielu budynkach ogranicza to
              straty ciepła nawet o około 30%.
            </p>
          </header>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="soft-card reveal-up reveal-delay-1 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-primary">
                Wdmuchiwanie celulozy: najważniejsze zalety
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Stosujemy certyfikowaną, skandynawską wełnę celulozową Termex®.
                To materiał skuteczny, trwały i oparty o ekologiczne surowce z
                recyklingu.
              </p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/90 md:text-base">
                <li>
                  Szczelne wypełnienie przegród i pustek izolacyjnych dzięki
                  technologii wdmuchiwania.
                </li>
                <li>
                  Bardzo dobre właściwości termoizolacyjne (ok. 0,037 W/mK) i
                  wysoka skuteczność dzięki pełnemu wypełnieniu.
                </li>
                <li>
                  Ograniczenie ryzyka zagnieżdżania się kun na poddaszu dzięki
                  szczelności i składowi materiału.
                </li>
                <li>
                  Odporność na grzyby i pleśń oraz brak drażniących włókien.
                </li>
                <li>
                  Lepsze wsparcie wysychania konstrukcji drewnianej i wysoki
                  poziom bezpieczeństwa pożarowego.
                </li>
              </ul>
            </article>

            <article className="soft-card reveal-up reveal-delay-2 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-primary">
                Krótki czas remontu i szeroki zakres usług
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Wdmuchiwanie celulozy najczęściej nie wymaga dużej ingerencji w
                wykończone pomieszczenia. Materiał podajemy przez niewielkie
                otwory, które później łatwo estetycznie zamknąć.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Ocieplamy poddasza, ściany, stropy i podłogi, a także naprawiamy
                istniejące izolacje. Skutecznie rozwiązujemy również problem
                szkód po kunach, dobierając metodę do konstrukcji budynku i
                oczekiwań inwestora.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Działamy na terenie całej Polski, koncentrując realizacje głównie
                w województwie zachodniopomorskim (m.in. Szczecin, Stargard). W
                razie potrzeby obsługujemy także inne regiony.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/kontakt"
                  className="brand-focus inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
                >
                  Zapytaj o wycenę
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/naprawa-izolacji-po-kunach"
                  className="brand-focus inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/5"
                >
                  Naprawa po kunach
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
