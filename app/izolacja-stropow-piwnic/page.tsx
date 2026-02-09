import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function IzolacjaStropowPiwnicPage() {
  return (
    <div className="min-h-screen marketing-page">
      <section className="marketing-hero py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold text-white md:text-5xl">
              Izolacja stropów piwnic
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-white/85">
              Kompleksowe rozwiązania poprawiające komfort cieplny domu,
              ograniczające straty energii i chroniące konstrukcję przed
              wilgocią.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 md:py-16">
        <section className="marketing-section mb-14">
          <div className="relative h-64 md:h-96 marketing-image-frame">
            <Image
              src="/placeholder.svg?height=600&width=800&query=basement ceiling insulation"
              alt="Izolacja stropów piwnic"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-5 text-center text-muted-foreground">
            Profesjonalna izolacja stropów piwnic to klucz do komfortu
            termicznego i oszczędności energii w Twoim domu.
          </p>
        </section>

        <section className="marketing-section-alt mb-14 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Dlaczego izolacja stropów piwnic jest ważna?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-foreground/85">
            <li>
              <strong>Redukcja strat ciepła:</strong> izolacja minimalizuje
              ucieczkę ciepła przez strop piwnicy, co obniża koszty ogrzewania.
            </li>
            <li>
              <strong>Ochrona przed wilgocią:</strong> zapobiega kondensacji i
              rozwojowi pleśni, chroniąc konstrukcję budynku.
            </li>
            <li>
              <strong>Poprawa komfortu:</strong> stabilna temperatura
              pomieszczeń nad piwnicą zwiększa komfort użytkowania.
            </li>
            <li>
              <strong>Oszczędność energii:</strong> mniejsze zużycie energii to
              korzyść dla środowiska i domowego budżetu.
            </li>
          </ul>
        </section>

        <section className="marketing-section mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Technologie izolacji stropów piwnic
          </h2>
          <p className="text-foreground/85 mb-4">
            Oferujemy różnorodne metody izolacji stropów piwnic, dopasowane do
            specyfiki budynku i oczekiwań inwestora:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/85">
            <li>
              <strong>Natrysk pianką PUR:</strong> szybka i skuteczna metoda,
              zapewniająca wysoką szczelność i izolacyjność.
            </li>
            <li>
              <strong>Montaż płyt izolacyjnych:</strong> klasyczna technologia z
              wykorzystaniem wełny mineralnej, styropianu lub płyt PIR/PUR.
            </li>
            <li>
              <strong>Systemy termoizolacyjne:</strong> nowoczesne rozwiązania,
              które pozwalają uzyskać bardzo dobre parametry cieplne.
            </li>
          </ul>
        </section>

        <section className="marketing-section mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Materiały izolacyjne, które stosujemy
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Wełna mineralna",
                description:
                  "Doskonała izolacja termiczna i akustyczna, niepalna i paroprzepuszczalna.",
                image: "/placeholder.svg?height=300&width=400&query=mineral wool insulation",
              },
              {
                title: "Płyty styropianowe",
                description:
                  "Lekki materiał o dobrych właściwościach izolacyjnych, łatwy w montażu i obróbce.",
                image: "/placeholder.svg?height=300&width=400&query=styrofoam boards",
              },
              {
                title: "Płyty PIR/PUR",
                description:
                  "Nowoczesny materiał o wysokich parametrach izolacyjnych i dobrej trwałości.",
                image: "/placeholder.svg?height=300&width=400&query=PIR insulation panels",
              },
            ].map((material) => (
              <article key={material.title} className="marketing-tile">
                <div className="relative h-48">
                  <Image
                    src={material.image || "/placeholder.svg"}
                    alt={material.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {material.title}
                  </h3>
                  <p className="text-muted-foreground">{material.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="marketing-section-alt mb-14 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Jak wygląda proces izolacji stropów piwnic?
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-foreground/85">
            <li>
              <strong>Audyt i ocena:</strong> szczegółowa analiza stanu stropu
              i dobór technologii.
            </li>
            <li>
              <strong>Przygotowanie powierzchni:</strong> oczyszczenie i
              przygotowanie stropu do montażu izolacji.
            </li>
            <li>
              <strong>Montaż izolacji:</strong> wykonanie prac zgodnie z
              wybraną technologią i standardem jakości.
            </li>
            <li>
              <strong>Kontrola jakości:</strong> sprawdzenie szczelności,
              poprawności wykonania i skuteczności izolacji.
            </li>
          </ol>
        </section>

        <section className="marketing-cta-band rounded-2xl p-8 text-center md:p-10">
          <h2 className="text-2xl font-semibold text-primary mb-3">
            Skontaktuj się z nami
          </h2>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Zainteresowany izolacją stropów piwnic? Przygotujemy bezpłatną
            wycenę i zaproponujemy optymalne rozwiązanie dla Twojego budynku.
          </p>
          <Button asChild size="lg">
            <Link href="/kontakt">Bezpłatna konsultacja</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
