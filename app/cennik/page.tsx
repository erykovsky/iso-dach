import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Calculator, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WebPageSchema } from "@/components/schema/webpage-schema";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = {
  title: "Cennik",
  description:
    "Cennik usług ocieplenia i izolacji. Sprawdź nasze konkurencyjne ceny i zamów bezpłatną wycenę.",
  keywords: [
    "cennik ocieplenia poddasza",
    "cena ocieplenia stropodachu",
    "koszt izolacji celulozą",
    "wycena ocieplenia domu",
    "cennik izolacji Szczecin",
    "ISO-DACH cennik",
  ],
  alternates: {
    canonical: "https://iso-dach.eu/cennik",
  },
  openGraph: {
    title: "Cennik usług izolacji | ISO-DACH",
    description:
      "Sprawdź orientacyjne ceny ocieplenia poddaszy, stropodachów i innych usług izolacyjnych.",
    url: "https://iso-dach.eu/cennik",
    type: "website",
    images: [
      {
        url: "/img/home/slide.jpg",
        width: 1200,
        height: 630,
        alt: "Cennik usług izolacyjnych ISO-DACH",
      },
    ],
  },
};

export default function PricingPage() {
  return (
    <>
      <WebPageSchema
        title="Cennik"
        description="Cennik usług ocieplenia i izolacji ISO-DACH."
        url="https://iso-dach.eu/cennik"
        breadcrumbs={[
          { name: "Strona główna", url: "https://iso-dach.eu" },
          { name: "Cennik", url: "https://iso-dach.eu/cennik" },
        ]}
      />
      <div className="min-h-screen marketing-page">
        <section className="marketing-hero py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
<h1 className="text-4xl font-bold text-white md:text-5xl">Cennik</h1>
              <p className="mx-auto mt-4 max-w-2xl text-white/85">
                Orientacyjne ceny usług izolacyjnych. Ostateczna wycena jest zawsze
                dopasowana do budynku i zakresu prac.
              </p>
            </div>
          </div>
        </section>

        <section className="section-shell py-10 md:py-14">
          <div className="section-inner container mx-auto px-4">
            <div className="mx-auto max-w-5xl space-y-6">
              <article className="soft-card rounded-2xl p-5 md:p-7">
                <h2 className="text-2xl font-bold text-primary md:text-3xl">
                  Cennik usług ocieplenia granulatem celulozowym firmy Termex®
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85 md:text-base">
                  Poniżej znajduje się cennik usług ocieplenia granulatem celulozowym firmy
                  Termex® o powierzchni poziomych 70-200 m² izolowanych od góry
                  (powierzchnie poziome: stropy i stropodachy).
                </p>
                <div className="mt-5 overflow-x-auto rounded-xl border border-primary/10 bg-white/90 p-2">
                  <Table>
                    <TableCaption>Ceny brutto za m² dla powierzchni poziomych</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/2">Grubość izolacji</TableHead>
                        <TableHead>Stawka za m²</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">20 cm</TableCell>
                        <TableCell>56 zł</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">25 cm</TableCell>
                        <TableCell>69 zł</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">30 cm</TableCell>
                        <TableCell>84 zł</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">40 cm</TableCell>
                        <TableCell>110 zł</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </article>

              <article className="soft-card rounded-2xl p-5 md:p-7">
                <p className="text-sm leading-relaxed text-foreground/85 md:text-base">
                  Poniżej znajduje się cennik usług ocieplenia granulatem firmy Termex®
                  o powierzchniach 70-200 m² izolowanych (powierzchnie skośne poddasza).
                </p>
                <div className="mt-5 overflow-x-auto rounded-xl border border-primary/10 bg-white/90 p-2">
                  <Table>
                    <TableCaption>Ceny brutto za m² dla powierzchni skośnych</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/2">Grubość izolacji</TableHead>
                        <TableHead>Stawka za m²</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">20 cm</TableCell>
                        <TableCell>60 zł</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">25 cm</TableCell>
                        <TableCell>75 zł</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">30 cm</TableCell>
                        <TableCell>90 zł</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">40 cm</TableCell>
                        <TableCell>120 zł</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </article>

              <article className="marketing-surface rounded-2xl p-5 md:p-7">
                <h3 className="text-xl font-semibold">Pozostałe usługi</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85 md:text-base">
                  Dla pozostałych usług oferujemy indywidualne wyceny, dostosowane do
                  specyfiki budynku, zakresu prac i wybranych materiałów. Skontaktuj się
                  z nami, aby otrzymać bezpłatną wycenę dopasowaną do Twoich potrzeb.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="marketing-section-alt py-12 md:py-14">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl grid grid-cols-1 gap-5 md:grid-cols-2">
              <article className="soft-card rounded-2xl p-5 md:p-6">
                <div className="flex items-center gap-3 text-primary">
                  <FileText className="h-6 w-6" />
                  <h3 className="text-xl font-semibold text-foreground">Zamów wycenę</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80 md:text-base">
                  Każdy budynek jest inny, dlatego oferujemy indywidualne podejście do
                  każdego projektu. Nasi specjaliści przeprowadzą analizę i zaproponują
                  optymalne rozwiązanie.
                </p>
                <Button asChild className="mt-5">
                  <Link href="/kontakt">
                    Zamów bezpłatną wycenę
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </article>

              <article className="soft-card rounded-2xl p-5 md:p-6">
                <div className="flex items-center gap-3 text-primary">
                  <Calculator className="h-6 w-6" />
                  <h3 className="text-xl font-semibold text-foreground">Konsultacja telefoniczna</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80 md:text-base">
                  Masz pytania dotyczące cen lub usług? Zadzwoń do nas. Doradzimy,
                  jakie rozwiązanie będzie najlepsze dla Twojego budynku.
                </p>
                <Button variant="outline" asChild className="mt-5 border-primary/20">
                  <a href="tel:+48660441941" className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    +48 660 441 941
                  </a>
                </Button>
              </article>
            </div>
          </div>
        </section>

        <section className="marketing-section py-12 md:py-14">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl soft-card rounded-2xl p-5 md:p-7">
              <h2 className="text-2xl font-bold text-primary">Informacje dodatkowe</h2>
              <div className="mt-5 grid grid-cols-1 gap-3 text-sm leading-relaxed text-foreground/85 md:text-base">
                <p>
                  <strong>Minimalna powierzchnia:</strong> Dla zleceń o powierzchni
                  mniejszej niż 70 m² obowiązuje indywidualna wycena.
                </p>
                <p>
                  <strong>Dojazd:</strong> Ceny zawierają koszt dojazdu do 30 km od
                  siedziby firmy. Dla większych odległości doliczamy dodatkową opłatę.
                </p>
                <p>
                  <strong>Materiały:</strong> Wszystkie ceny zawierają koszt materiałów
                  izolacyjnych i robocizny.
                </p>
                <p>
                  <strong>Gwarancja:</strong> Na wszystkie wykonane prace udzielamy gwarancji.
                </p>
                <p>
                  <strong>Termin realizacji:</strong> Termin realizacji ustalamy
                  indywidualnie, w zależności od zakresu prac i dostępności.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="marketing-cta-band py-14 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Gotowy na ciepły i energooszczędny dom?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
              Skontaktuj się z nami, aby otrzymać bezpłatną wycenę.
            </p>
            <Button size="lg" asChild className="mt-8">
              <Link href="/kontakt">
                Zamów bezpłatną wycenę
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
