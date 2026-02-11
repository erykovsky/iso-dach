import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const customerReviews = [
  {
    author: "Bogdan",
    rating: 5,
    comment:
      "Szybko i sprawnie. Szczegóły w ciągu jednej wizyty, wykonanie w ciągu jednego dnia.",
  },
  {
    author: "Lukasz S.",
    rating: 5,
    comment:
      "Zdecydowanie polecam. Szybka odpowiedź, fachowa ocena problemu i terminowa naprawa izolacji po kunie. Dach jest teraz szczelny, a cena usługi była uczciwa.",
  },
  { author: "Dmytro R.", rating: 5, comment: "Ocena 5/5." },
  {
    author: "Piotr S.",
    rating: 5,
    comment:
      "Świetny kontakt, terminowość i pełen profesjonalizm. Zakres prac był jasno opisany, ekipa pracowała sprawnie i zostawiła po sobie porządek.",
  },
  {
    author: "Kd kd",
    rating: 5,
    comment: "W końcu profesjonalna firma, polecam..!",
  },
  { author: "Anna C.", rating: 5, comment: "Ocena 5/5." },
  {
    author: "Piotr P.",
    rating: 5,
    comment: "Polecam, prawdziwi fachowcy.",
  },
  {
    author: "Marcin S.",
    rating: 5,
    comment: "Firma uczciwa. Polecam.",
  },
];

export const ReviewsSection = () => {
  return (
    <section className="section-shell bg-muted/35 py-20">
      <div className="section-inner container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <p className="reveal-up mb-4 inline-flex rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary/80">
              Opinie klientów
            </p>
            <h2 className="reveal-up reveal-delay-1 text-4xl font-bold text-primary sm:text-5xl">
              Co mówią o nas klienci
            </h2>
            <p className="reveal-up reveal-delay-2 mt-5 text-lg leading-relaxed text-muted-foreground">
              Poznaj doświadczenia osób, które powierzyły nam izolację swojego domu.
              Każda realizacja to dla nas odpowiedzialność za komfort, bezpieczeństwo
              i oszczędność energii w budynku.
            </p>
            <p className="reveal-up reveal-delay-2 mt-4 text-base leading-relaxed text-muted-foreground">
              Klienci cenią nas za rzetelne doradztwo, terminowość oraz jakość
              wykonania od pierwszego kontaktu po końcowy odbiór prac.
            </p>
          </div>

          <div className="soft-card reveal-up rounded-3xl p-6 sm:p-8">
            <div className="mb-6 border-b border-primary/10 pb-4">
              <div>
                <p className="text-sm font-semibold tracking-wide text-primary/80 uppercase">
                  Opinie klientów
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Kilka opinii od naszych klientów.
                </p>
              </div>
            </div>

            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent>
                {customerReviews.map((review) => (
                  <CarouselItem
                    key={`${review.author}-${review.comment.slice(0, 16)}`}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <article className="h-full rounded-2xl border border-primary/10 bg-white/80 p-4 sm:p-5">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-base font-semibold text-primary">
                          {review.author}
                        </p>
                      </div>
                      <div className="mt-3 flex items-center gap-1 text-[#f6b100]">
                        {Array.from({ length: review.rating }).map((_, index) => (
                          <Star
                            key={index}
                            className="h-4 w-4 fill-current"
                            aria-hidden="true"
                          />
                        ))}
                        <span className="ml-1 text-xs font-medium text-muted-foreground">
                          {review.rating}.0 / 5.0
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">
                        {review.comment}
                      </p>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-5 flex items-center justify-end gap-2">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
