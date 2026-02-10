import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Calculator, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Cennik | ISO-DACH",
  description:
    "Cennik usług ocieplenia i izolacji. Sprawdź nasze konkurencyjne ceny i zamów bezpłatną wycenę.",
  alternates: {
    canonical: "https://iso-dach.eu/cennik",
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen marketing-page">
      {/* Hero Section */}
      <section className="marketing-hero py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Cennik</h1>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="marketing-section py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Cennik usług ocieplenia granulatem celulozowym firmy Termex®
              </h2>
              <p className="text-gray-700 mb-6">
                Poniżej znajduje się cennik usług ocieplenia granulatem
                celulozowym firmy Termex® o powierzchni poziomych 70-200 m²
                izolowanych od góry (powierzchnie poziome – stropy i
                stropodachy).
              </p>

              <div className="overflow-x-auto">
                <Table>
                  <TableCaption>
                    Ceny brutto za m² dla powierzchni poziomych
                  </TableCaption>
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
            </div>

            <div className="mb-12">
              <p className="text-gray-700 mb-6">
                Poniżej znajduje się cennik usług ocieplenia granulatem firmy
                Termex® o powierzchni poziomych 70-200 m² izolowanych
                (powierzchnie skośne poddasza).
              </p>

              <div className="overflow-x-auto">
                <Table>
                  <TableCaption>
                    Ceny brutto za m² dla powierzchni skośnych
                  </TableCaption>
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
            </div>

            <div className="marketing-surface p-6 mb-12">
              <h3 className="text-xl font-semibold mb-4">Pozostałe usługi</h3>
              <p className="text-gray-700">
                Dla pozostałych usług oferujemy indywidualne wyceny, dostosowane
                do specyfiki budynku, zakresu prac i wybranych materiałów.
                Skontaktuj się z nami, aby otrzymać bezpłatną wycenę dopasowaną
                do Twoich potrzeb.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <FileText className="h-8 w-8 text-primary" />
                    <CardTitle>Zamów wycenę</CardTitle>
                  </div>
                  <CardDescription>
                    Skontaktuj się z nami, aby otrzymać szczegółową wycenę
                    dopasowaną do Twoich potrzeb.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Każdy budynek jest inny, dlatego oferujemy indywidualne
                    podejście do każdego projektu. Nasi specjaliści przeprowadzą
                    dokładną analizę i zaproponują optymalne rozwiązanie.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/kontakt">
                      Zamów bezpłatną wycenę
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Calculator className="h-8 w-8 text-primary" />
                    <CardTitle>Konsultacja telefoniczna</CardTitle>
                  </div>
                  <CardDescription>
                    Masz pytania dotyczące cen lub usług? Zadzwoń do nas,
                    chętnie pomożemy.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Nasi doradcy są dostępni od poniedziałku do piątku w
                    godzinach 8:00-18:00. Odpowiemy na wszystkie Twoje pytania i
                    pomożemy wybrać najlepsze rozwiązanie.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <a href="tel:+48660441941" className="flex items-center">
                      <Phone className="mr-2 h-4 w-4" />
                      +48 660 441 941
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Notes Section */}
      <section className="marketing-section-alt py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Informacje dodatkowe
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>Minimalna powierzchnia:</strong> Dla zleceń o
                powierzchni mniejszej niż 70 m² obowiązuje indywidualna wycena.
              </p>
              <p className="text-gray-700">
                <strong>Dojazd:</strong> Ceny zawierają koszt dojazdu do 30 km
                od siedziby firmy. Dla większych odległości doliczamy dodatkową
                opłatę.
              </p>
              <p className="text-gray-700">
                <strong>Materiały:</strong> Wszystkie ceny zawierają koszt
                materiałów izolacyjnych i robocizny.
              </p>
              <p className="text-gray-700">
                <strong>Gwarancja:</strong> Na wszystkie wykonane prace
                udzielamy gwarancji.
              </p>
              <p className="text-gray-700">
                <strong>Termin realizacji:</strong> Termin realizacji ustalamy
                indywidualnie, w zależności od zakresu prac i dostępności.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="marketing-cta-band py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Gotowy na ciepły i energooszczędny dom?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami, aby otrzymać bezpłatną wycenę. Nasi eksperci
            pomogą dobrać najlepsze rozwiązanie dla Twojego domu.
          </p>
          <Button size="lg" asChild>
            <Link href="/kontakt">
              Zamów bezpłatną wycenę
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
