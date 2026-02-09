import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Ocieplenie Ścian z Pustką Powietrzną | ISO-DACH",
    description:
        "Specjalistyczna metoda ocieplania ścian z pustką powietrzną poprzez wdmuchiwanie materiału izolacyjnego, bez konieczności ingerencji w elewację.",
};

export default function OciepleniePustkaPowietrznaPage() {
    return (
        <div className="min-h-screen marketing-page">
            {/* Hero Section */}
            <section className="marketing-hero py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ocieplenie Ścian z Pustką Powietrzną
                            </h1>
                            <p className="text-white/90 text-lg mb-8">
                                Specjalistyczna metoda ocieplania ścian z pustką
                                powietrzną poprzez wdmuchiwanie materiału
                                izolacyjnego. Skuteczne rozwiązanie dla budynków
                                z warstwowymi ścianami, bez konieczności
                                ingerencji w elewację.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button
                                    size="lg"
                                    asChild
                                    className="bg-white text-primary hover:bg-gray-100"
                                >
                                    <Link href="/kontakt">
                                        Bezpłatna wycena
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    asChild
                                >
                                    <Link href="#zalety">Poznaj zalety</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative h-64 md:h-96 marketing-image-frame">
                            <Image
                                src="/cavity-wall-insulation.png"
                                alt="Ocieplenie ścian z pustką powietrzną"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Zalety Section */}
            <section id="zalety" className="marketing-section py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Zalety Ocieplenia Ścian z Pustką Powietrzną
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Brak ingerencji w elewację",
                                description:
                                    "Metoda nie wymaga demontażu ani naruszenia istniejącej elewacji, co pozwala zachować oryginalny wygląd budynku.",
                            },
                            {
                                title: "Szybka realizacja",
                                description:
                                    "Proces ocieplania jest znacznie szybszy niż tradycyjne metody, zazwyczaj trwa 1-2 dni dla standardowego domu jednorodzinnego.",
                            },
                            {
                                title: "Minimalne zakłócenia",
                                description:
                                    "Prace wykonywane są głównie z zewnątrz budynku, bez konieczności opuszczania domu przez mieszkańców.",
                            },
                            {
                                title: "Eliminacja mostków termicznych",
                                description:
                                    "Materiał izolacyjny dokładnie wypełnia całą przestrzeń pustki powietrznej, eliminując mostki termiczne.",
                            },
                            {
                                title: "Poprawa izolacyjności akustycznej",
                                description:
                                    "Oprócz izolacji termicznej, wypełnienie pustki powietrznej znacząco poprawia izolacyjność akustyczną ścian.",
                            },
                            {
                                title: "Oszczędność energii",
                                description:
                                    "Skuteczna izolacja ścian może zmniejszyć straty ciepła przez ściany nawet o 35%, co przekłada się na niższe rachunki za ogrzewanie.",
                            },
                        ].map((benefit, index) => (
                            <Card
                                key={index}
                                className="border-none shadow-md hover:shadow-lg transition-shadow"
                            >
                                <CardContent className="p-4 sm:p-5">
                                    <div className="flex items-start gap-4">
                                        <CheckCircle className="text-secondary mt-1 shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-gray-600">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologia Section */}
            <section className="marketing-section-alt py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Technologia Ocieplania Ścian z Pustką Powietrzną
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-64 md:h-96 marketing-image-frame">
                            <Image
                                src="/cavity-wall-insulation.png"
                                alt="Proces ocieplania ścian z pustką powietrzną"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">
                                Metoda Wdmuchiwania
                            </h3>
                            <p className="text-gray-700 mb-6">
                                Ocieplanie ścian z pustką powietrzną polega na
                                wypełnieniu przestrzeni między warstwami ściany
                                materiałem izolacyjnym. Proces rozpoczyna się od
                                wykonania niewielkich otworów w ścianie
                                zewnętrznej, przez które specjalistyczny sprzęt
                                wdmuchuje materiał izolacyjny. Materiał
                                równomiernie wypełnia całą przestrzeń pustki,
                                tworząc ciągłą warstwę izolacyjną.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Metoda ta jest szczególnie polecana dla budynków
                                z warstwowymi ścianami, gdzie między warstwą
                                zewnętrzną a wewnętrzną znajduje się pustka
                                powietrzna. Jest to typowe rozwiązanie w
                                budownictwie z lat 70., 80. i 90. XX wieku.
                            </p>
                            <h3 className="text-xl font-semibold mb-4">
                                Zalety metody wdmuchiwania:
                            </h3>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-start gap-2">
                                    <CheckCircle
                                        className="text-secondary mt-1 shrink-0"
                                        size={18}
                                    />
                                    <span>
                                        Brak konieczności demontażu elewacji
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle
                                        className="text-secondary mt-1 shrink-0"
                                        size={18}
                                    />
                                    <span>Szybka i czysta realizacja</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle
                                        className="text-secondary mt-1 shrink-0"
                                        size={18}
                                    />
                                    <span>
                                        Dokładne wypełnienie całej przestrzeni
                                        pustki
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle
                                        className="text-secondary mt-1 shrink-0"
                                        size={18}
                                    />
                                    <span>
                                        Minimalne zakłócenia dla mieszkańców
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle
                                        className="text-secondary mt-1 shrink-0"
                                        size={18}
                                    />
                                    <span>
                                        Możliwość wykonania prac w każdej porze
                                        roku
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Materiały Section */}
            <section className="marketing-section py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Materiały Izolacyjne, Które Stosujemy
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Granulat Wełny Mineralnej",
                                description:
                                    "Naturalny materiał o doskonałych właściwościach termoizolacyjnych i akustycznych. Niepalny, odporny na gryzonie i owady.",
                                image: "/placeholder.svg?height=300&width=400&query=mineral wool granulate",
                            },
                            {
                                title: "Granulat Wełny Szklanej",
                                description:
                                    "Lekki materiał o dobrych właściwościach izolacyjnych, odporny na wilgoć i przyjazny dla alergików.",
                                image: "/placeholder.svg?height=300&width=400&query=glass wool granulate",
                            },
                            {
                                title: "Granulat Celulozowy",
                                description:
                                    "Ekologiczny materiał z recyklingu papieru, o dobrych właściwościach termoizolacyjnych i zdolności do regulacji wilgotności.",
                                image: "/placeholder.svg?height=300&width=400&query=cellulose insulation",
                            },
                        ].map((material, index) => (
                            <div
                                key={index}
                                className="marketing-tile"
                            >
                                <div className="relative h-48">
                                    <Image
                                        src={
                                            material.image || "/placeholder.svg"
                                        }
                                        alt={material.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-4 sm:p-5">
                                    <h3 className="font-semibold text-lg mb-2">
                                        {material.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {material.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Proces Section */}
            <section className="marketing-section-alt py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Jak Wygląda Proces Ocieplania Ścian z Pustką Powietrzną?
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        <ol className="relative border-l border-primary/30">
                            {[
                                {
                                    title: "Inspekcja i analiza",
                                    description:
                                        "Przeprowadzamy szczegółową inspekcję ścian, określamy szerokość pustki powietrznej i jej stan, a także identyfikujemy potencjalne przeszkody.",
                                },
                                {
                                    title: "Badanie termowizyjne",
                                    description:
                                        "Wykonujemy badanie termowizyjne, które pozwala zidentyfikować miejsca ucieczki ciepła i mostki termiczne.",
                                },
                                {
                                    title: "Dobór materiału izolacyjnego",
                                    description:
                                        "Wybieramy optymalny materiał izolacyjny, uwzględniając specyfikę budynku, szerokość pustki i oczekiwania klienta.",
                                },
                                {
                                    title: "Przygotowanie otworów technologicznych",
                                    description:
                                        "Wykonujemy niewielkie otwory w ścianie zewnętrznej, przez które będzie wprowadzany materiał izolacyjny.",
                                },
                                {
                                    title: "Wdmuchiwanie izolacji",
                                    description:
                                        "Za pomocą specjalistycznego sprzętu wdmuchujemy wybrany materiał izolacyjny, równomiernie wypełniając przestrzeń pustki powietrznej.",
                                },
                                {
                                    title: "Kontrola jakości",
                                    description:
                                        "Przeprowadzamy kontrolę jakości wykonanych prac, sprawdzając równomierność rozłożenia materiału i szczelność wypełnienia.",
                                },
                                {
                                    title: "Zamknięcie otworów technologicznych",
                                    description:
                                        "Zamykamy otwory technologiczne, przywracając pierwotny wygląd elewacji.",
                                },
                                {
                                    title: "Badanie termowizyjne po wykonaniu prac",
                                    description:
                                        "Wykonujemy ponowne badanie termowizyjne, które potwierdza skuteczność wykonanej izolacji.",
                                },
                            ].map((step, index) => (
                                <li key={index} className="mb-10 ml-6">
                                    <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 bg-primary text-white">
                                        {index + 1}
                                    </span>
                                    <h3 className="font-semibold text-lg mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {step.description}
                                    </p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* Realizacje Section */}
            <section className="marketing-section py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Nasze Realizacje
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, index) => (
                            <div
                                key={index}
                                className="relative h-64 marketing-image-frame"
                            >
                                <Image
                                    src={`/placeholder.svg?height=400&width=600&query=cavity wall insulation example ${index + 1
                                        }`}
                                    alt={`Realizacja ocieplenia ścian z pustką powietrzną ${index + 1
                                        }`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Button asChild>
                            <Link href="/galeria">
                                Zobacz więcej realizacji
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="marketing-section-alt py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Najczęściej Zadawane Pytania
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="w-full">
                            {[
                                {
                                    question:
                                        "Jak sprawdzić, czy mój dom ma ściany z pustką powietrzną?",
                                    answer: "Ściany z pustką powietrzną są typowe dla budynków wzniesionych w technologii warstwowej, popularnej w latach 70., 80. i 90. XX wieku. Można to sprawdzić, mierząc grubość ściany (powinna być większa niż 30 cm) lub wykonując niewielki otwór w ścianie zewnętrznej. Nasi specjaliści mogą przeprowadzić profesjonalną ocenę podczas bezpłatnej konsultacji.",
                                },
                                {
                                    question:
                                        "Czy ocieplenie ścian z pustką powietrzną jest skuteczne?",
                                    answer: "Tak, ocieplenie ścian z pustką powietrzną jest bardzo skuteczne. Badania pokazują, że może zmniejszyć straty ciepła przez ściany nawet o 35%, co przekłada się na znaczące oszczędności energii. Dodatkowo, eliminuje mostki termiczne i poprawia izolacyjność akustyczną budynku.",
                                },
                                {
                                    question:
                                        "Jak długo trwa ocieplanie ścian z pustką powietrzną?",
                                    answer: "Czas realizacji zależy od wielkości budynku i dostępności ścian. Dla standardowego domu jednorodzinnego proces ocieplania ścian z pustką powietrzną trwa zazwyczaj 1-2 dni. Jest to znacznie szybciej niż w przypadku tradycyjnych metod ocieplania ścian.",
                                },
                                {
                                    question:
                                        "Czy po ociepleniu ścian z pustką powietrzną zmieni się wygląd elewacji?",
                                    answer: "Nie, po ociepleniu ścian z pustką powietrzną wygląd elewacji pozostaje niezmieniony. Otwory technologiczne, przez które wprowadzany jest materiał izolacyjny, są niewielkie i po zakończeniu prac zostają starannie zamknięte i zamaskowane, przywracając pierwotny wygląd elewacji.",
                                },
                                {
                                    question:
                                        "Czy ocieplenie ścian z pustką powietrzną wymaga pozwolenia na budowę?",
                                    answer: "W większości przypadków ocieplenie ścian z pustką powietrzną nie wymaga pozwolenia na budowę ani zgłoszenia, ponieważ nie ingeruje w konstrukcję budynku ani nie zmienia jego wyglądu zewnętrznego. Jednak przepisy mogą się różnić w zależności od lokalizacji i specyfiki budynku. Nasi specjaliści pomogą w dopełnieniu ewentualnych formalności.",
                                },
                            ].map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                >
                                    <AccordionTrigger className="text-left">
                                        <div className="flex items-start gap-2">
                                            <HelpCircle
                                                className="text-primary mt-1 shrink-0"
                                                size={18}
                                            />
                                            <span>{faq.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pl-7">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="marketing-cta-band py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Gotowy na ciepły i energooszczędny dom?
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                        Skontaktuj się z nami, aby otrzymać bezpłatną wycenę
                        ocieplenia ścian z pustką powietrzną. Nasi eksperci
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
