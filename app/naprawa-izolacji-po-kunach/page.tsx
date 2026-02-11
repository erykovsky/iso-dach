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
import { FAQPageSchema } from "@/components/schema/faq-schema";
import { HowToSchema } from "@/components/schema/howto-schema";
import { ServiceSchema } from "@/components/schema/service-schema";
import { ServiceIntentSection } from "@/components/service-intent-section";
import { VideoObjectSchema } from "@/components/schema/video-object-schema";
import { ArrowRight, HelpCircle, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
    title: "Naprawa izolacji po kunach",
    description:
        "Specjalistyczna usługa naprawy i odtworzenia izolacji uszkodzonej przez kuny. Zabezpieczamy przed ponownym wtargnięciem tych zwierząt.",
    alternates: {
        canonical: "https://iso-dach.eu/naprawa-izolacji-po-kunach",
    },
    openGraph: {
        title: "Naprawa izolacji po kunach",
        description: "Specjalistyczna naprawa izolacji uszkodzonej przez kuny. Zabezpieczenie przed ponownym wtargnięciem.",
        url: "https://iso-dach.eu/naprawa-izolacji-po-kunach",
        type: "article",
        images: [
            {
                url: "/img/izolacje-budynkow-hero.jpg",
                width: 1200,
                height: 630,
                alt: "Naprawa izolacji po kunach - ISO-DACH",
            },
        ],
    },
};

const martenRepairFaqSchema = [
    {
        question: "Jak rozpoznać, że na poddaszu są kuny?",
        answer:
            "Najczęstsze oznaki to hałasy nocą, zapach, odchody i uszkodzenia izolacji lub instalacji.",
    },
    {
        question: "Jak długo trwa naprawa izolacji po kunach?",
        answer:
            "W standardowym domu zwykle 2-5 dni, zależnie od skali zniszczeń i zakresu zabezpieczeń.",
    },
    {
        question: "Czy zabezpieczenia przed kunami są skuteczne?",
        answer:
            "Tak, przy dobrze dobranych rozwiązaniach i szczelnym zamknięciu miejsc wejścia ochrona jest bardzo skuteczna.",
    },
];

const martenRepairHowToSteps = [
    {
        name: "Inspekcja i ocena szkód",
        text: "Sprawdzamy zakres zniszczeń i miejsca wejścia kun.",
    },
    {
        name: "Usunięcie kun i zniszczonej izolacji",
        text: "Usuwamy uszkodzony materiał i przygotowujemy przestrzeń do naprawy.",
    },
    {
        name: "Dezynfekcja i odtworzenie izolacji",
        text: "Oczyszczamy przestrzeń i montujemy nową izolację termiczną.",
    },
    {
        name: "Zabezpieczenie przed ponownym wtargnięciem",
        text: "Montujemy zabezpieczenia i wykonujemy kontrolę końcową.",
    },
];

export default function NaprawaIzolacjiPoKunachPage() {
    return (
        <>
            <ServiceSchema
                name="Naprawa izolacji po kunach"
                description="Specjalistyczna naprawa i odtworzenie izolacji uszkodzonej przez kuny wraz z zabezpieczeniem budynku."
                url="https://iso-dach.eu/naprawa-izolacji-po-kunach"
                image="https://iso-dach.eu/img/izolacje-budynkow-hero.jpg"
            />
            <FAQPageSchema faqs={martenRepairFaqSchema} />
            <HowToSchema
                name="Jak przebiega naprawa izolacji po kunach"
                description="Etapy naprawy izolacji uszkodzonej przez kuny i zabezpieczenia budynku."
                url="https://iso-dach.eu/naprawa-izolacji-po-kunach"
                image="https://iso-dach.eu/img/izolacje-budynkow-hero.jpg"
                totalTime="P5D"
                steps={martenRepairHowToSteps}
            />
            <VideoObjectSchema
                title="Naprawa izolacji po kunach - zabezpieczenie poddasza"
                description="Materiał wideo pokazujący proces naprawy izolacji uszkodzonej przez kuny oraz metody skutecznego zabezpieczenia poddasza."
                thumbnailUrl="https://iso-dach.eu/img/izolacje-budynkow-hero.jpg"
                uploadDate="2024-01-15"
                videoUrl="https://www.youtube.com/watch?v=aonxLOo1Poo"
                embedUrl="https://www.youtube-nocookie.com/embed/aonxLOo1Poo"
                duration="PT3M"
            />
            <div className="min-h-screen marketing-page">
                {/* Hero Section */}
                <section className="marketing-hero py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                                    Naprawa izolacji po kunach
                                </h1>
                                <p className="text-white/90 text-lg mb-8">
                                    Specjalistyczna usługa naprawy i odtworzenia
                                    izolacji uszkodzonej przez kuny. Zabezpieczamy
                                    przed ponownym wtargnięciem tych zwierząt i
                                    przywracamy pełną funkcjonalność izolacji
                                    termicznej.
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
                                        <Link href="#problem">Poznaj problem</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative h-64 md:h-96 marketing-image-frame">
                                <Image
                                    src="/img/izolacje-budynkow-hero.jpg"
                                    alt="Naprawa izolacji po kunach"
                                    fill
                                    className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problem Section */}
                <section id="problem" className="marketing-section py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Problem kun w izolacji
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6">
                                    Dlaczego kuny są problemem?
                                </h3>
                                <p className="text-gray-700 mb-6">
                                    Kuny to małe, zwinne ssaki, które często
                                    wybierają poddasza, stropodachy i przestrzenie
                                    między izolacją jako miejsce do życia. Choć same
                                    w sobie nie są groźne dla ludzi, mogą wyrządzić
                                    znaczne szkody w izolacji budynku:
                                </p>
                                <ul className="space-y-4 mb-6">
                                    <li className="flex items-start gap-3">
                                        <AlertTriangle className="text-red-500 mt-1 shrink-0" />
                                        <span>
                                            Niszczą materiał izolacyjny, tworząc w
                                            nim tunele i gniazda
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <AlertTriangle className="text-red-500 mt-1 shrink-0" />
                                        <span>
                                            Zanieczyszczają izolację odchodami i
                                            moczem, co może prowadzić do
                                            nieprzyjemnych zapachów
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <AlertTriangle className="text-red-500 mt-1 shrink-0" />
                                        <span>
                                            Mogą uszkadzać instalacje elektryczne,
                                            co stwarza ryzyko pożaru
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <AlertTriangle className="text-red-500 mt-1 shrink-0" />
                                        <span>
                                            Znacząco obniżają skuteczność izolacji
                                            termicznej, co prowadzi do zwiększonych
                                            kosztów ogrzewania
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <AlertTriangle className="text-red-500 mt-1 shrink-0" />
                                        <span>
                                            Hałasują, szczególnie w nocy, zakłócając
                                            spokój mieszkańców
                                        </span>
                                    </li>
                                </ul>
                                <p className="text-gray-700">
                                    Uszkodzenia spowodowane przez kuny mogą być
                                    rozległe i wymagają specjalistycznej naprawy,
                                    aby przywrócić pełną funkcjonalność izolacji
                                    oraz zabezpieczyć budynek przed ponownym
                                    wtargnięciem tych zwierząt.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="relative h-48 marketing-image-frame">
                                    <Image
                                        src="/img/izolacje-budynkow-hero.jpg"
                                        alt="Uszkodzenia izolacji przez kuny"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-48 marketing-image-frame">
                                    <Image
                                        src="/img/izolacje-budynkow-hero.jpg"
                                        alt="Uszkodzenia izolacji przez kuny"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-48 marketing-image-frame">
                                    <Image
                                        src="/img/izolacje-budynkow-hero.jpg"
                                        alt="Uszkodzenia izolacji przez kuny"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-48 marketing-image-frame">
                                    <Image
                                        src="/img/izolacje-budynkow-hero.jpg"
                                        alt="Uszkodzenia izolacji przez kuny"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video Section */}
                <section id="film" className="marketing-section py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-5xl">
                            <h2 className="text-3xl font-bold text-center mb-6">
                                Zobacz materiał wideo
                            </h2>
                            <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
                                Krótkie nagranie pokazujące temat naprawy izolacji
                                po kunach i działania, które pomagają skutecznie
                                zabezpieczyć poddasze.
                            </p>

                            <div className="marketing-surface p-3 sm:p-4">
                                <div className="aspect-video w-full overflow-hidden rounded-xl border border-primary/10 bg-black">
                                    <iframe
                                        className="h-full w-full"
                                        src="https://www.youtube-nocookie.com/embed/aonxLOo1Poo?rel=0"
                                        title="Naprawa izolacji po kunach - materiał wideo"
                                        loading="lazy"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Nasze rozwiązanie Section */}
                <section className="marketing-section-alt py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Nasze rozwiązanie
                        </h2>
                        <div className="max-w-3xl mx-auto">
                            <ol className="relative border-l border-primary/30">
                                {[
                                    {
                                        title: "Inspekcja i ocena szkód",
                                        description:
                                            "Przeprowadzamy szczegółową inspekcję poddasza lub stropodachu, oceniając zakres uszkodzeń spowodowanych przez kuny i identyfikując miejsca ich wejścia.",
                                    },
                                    {
                                        title: "Usunięcie kun",
                                        description:
                                            "Jeśli kuny nadal przebywają w budynku, stosujemy humanitarne metody ich wypłoszenia, bez krzywdzenia zwierząt.",
                                    },
                                    {
                                        title: "Usunięcie zniszczonej izolacji",
                                        description:
                                            "Dokładnie usuwamy zniszczoną i zanieczyszczoną izolację, aby zapobiec problemom z nieprzyjemnymi zapachami i potencjalnymi zagrożeniami zdrowotnymi.",
                                    },
                                    {
                                        title: "Dezynfekcja i oczyszczenie",
                                        description:
                                            "Przeprowadzamy profesjonalną dezynfekcję przestrzeni, eliminując bakterie, grzyby i nieprzyjemne zapachy pozostawione przez kuny.",
                                    },
                                    {
                                        title: "Naprawa uszkodzeń konstrukcyjnych",
                                        description:
                                            "Naprawiamy wszelkie uszkodzenia konstrukcyjne spowodowane przez kuny, w tym uszkodzenia folii dachowej, drewnianych elementów konstrukcji itp.",
                                    },
                                    {
                                        title: "Montaż nowej izolacji",
                                        description:
                                            "Instalujemy nową, wysokiej jakości izolację termiczną, przywracając pełną funkcjonalność i efektywność energetyczną budynku.",
                                    },
                                    {
                                        title: "Zabezpieczenie przed ponownym wtargnięciem",
                                        description:
                                            "Montujemy specjalistyczne zabezpieczenia, które uniemożliwiają kunom ponowne wtargnięcie do budynku, takie jak siatki, blachy czy elektroniczne odstraszacze.",
                                    },
                                    {
                                        title: "Kontrola końcowa i gwarancja",
                                        description:
                                            "Przeprowadzamy szczegółową kontrolę wykonanych prac i udzielamy gwarancji na skuteczność zabezpieczeń przed kunami.",
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

                {/* Zabezpieczenia Section */}
                <section className="marketing-section py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Metody zabezpieczenia przed kunami
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Siatki zabezpieczające",
                                    description:
                                        "Montaż specjalnych siatek o odpowiedniej gęstości oczek, które uniemożliwiają kunom dostęp do poddasza czy stropodachu.",
                                    image: "/img/izolacje-budynkow-hero.jpg",
                                },
                                {
                                    title: "Blachy ochronne",
                                    description:
                                        "Instalacja blach ochronnych w miejscach potencjalnego wejścia kun, które uniemożliwiają im przegryzienie się do wnętrza.",
                                    image: "/img/izolacje-budynkow-hero.jpg",
                                },
                                {
                                    title: "Elektroniczne odstraszacze",
                                    description:
                                        "Montaż urządzeń emitujących ultradźwięki lub zmienne pole elektromagnetyczne, które są nieprzyjemne dla kun, ale nieszkodliwe dla ludzi i zwierząt domowych.",
                                    image: "/img/izolacje-budynkow-hero.jpg",
                                },
                                {
                                    title: "Repelenty zapachowe",
                                    description:
                                        "Stosowanie naturalnych lub syntetycznych repelentów zapachowych, które odstraszają kuny dzięki nieprzyjemnemu dla nich zapachowi.",
                                    image: "/img/izolacje-budynkow-hero.jpg",
                                },
                                {
                                    title: "Uszczelnienie otworów",
                                    description:
                                        "Dokładne uszczelnienie wszelkich otworów i szczelin w dachu i elewacji, przez które kuny mogłyby się dostać do budynku.",
                                    image: "/img/izolacje-budynkow-hero.jpg",
                                },
                                {
                                    title: "Systemy hybrydowe",
                                    description:
                                        "Połączenie różnych metod zabezpieczeń dla uzyskania maksymalnej skuteczności ochrony przed kunami.",
                                    image: "/img/izolacje-budynkow-hero.jpg",
                                },
                            ].map((method, index) => (
                                <div
                                    key={index}
                                    className="marketing-tile"
                                >
                                    <div className="relative h-48">
                                        <Image
                                            src={method.image || "/img/izolacje-budynkow-hero.jpg"}
                                            alt={method.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-semibold text-lg mb-2">
                                            {method.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {method.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <ServiceIntentSection
                    points={[
                        "Słyszysz hałasy na poddaszu i widzisz oznaki zniszczeń izolacji.",
                        "Po kunach pojawił się zapach lub podejrzewasz skażenie materiału izolacyjnego.",
                        "Chcesz nie tylko naprawić szkody, ale też trwale zabezpieczyć dach przed nawrotem problemu.",
                    ]}
                />

                {/* FAQ Section */}
                <section className="marketing-section py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Najczęściej Zadawane Pytania
                        </h2>
                        <div className="max-w-3xl mx-auto">
                            <Accordion type="single" collapsible className="w-full">
                                {[
                                    {
                                        question:
                                            "Jak rozpoznać, że na poddaszu są kuny?",
                                        answer: "Najczęstsze oznaki obecności kun to: hałasy na poddaszu (szczególnie w nocy), nieprzyjemny zapach, ślady odchodów, uszkodzenia izolacji i instalacji elektrycznej, ślady wejścia na zewnątrz budynku (np. uszkodzenia rynien, dachówek). Jeśli zauważysz którykolwiek z tych symptomów, warto jak najszybciej skontaktować się ze specjalistą.",
                                    },
                                    {
                                        question: "Czy kuny są pod ochroną?",
                                        answer: "Tak, kuny domowe (Martes foina) są w Polsce objęte częściową ochroną gatunkową. Oznacza to, że nie można ich zabijać ani łapać bez odpowiedniego zezwolenia. Dlatego nasze metody polegają na humanitarnym wypłoszeniu kun i zabezpieczeniu budynku przed ich ponownym wtargnięciem, bez krzywdzenia zwierząt.",
                                    },
                                    {
                                        question:
                                            "Jak długo trwa naprawa izolacji po kunach?",
                                        answer: "Czas realizacji zależy od zakresu uszkodzeń i wielkości budynku. Dla standardowego domu jednorodzinnego proces naprawy izolacji po kunach trwa zazwyczaj od 2 do 5 dni. Obejmuje to usunięcie zniszczonej izolacji, dezynfekcję, montaż nowej izolacji i zabezpieczenie przed ponownym wtargnięciem kun. Dokładny harmonogram ustalamy indywidualnie po ocenie zakresu prac.",
                                    },
                                    {
                                        question:
                                            "Czy zabezpieczenia przed kunami są skuteczne?",
                                        answer: "Tak, profesjonalnie wykonane zabezpieczenia są bardzo skuteczne. Stosujemy kompleksowe rozwiązania, które uniemożliwiają kunom ponowne wtargnięcie do budynku. Kluczem do sukcesu jest dokładna identyfikacja wszystkich potencjalnych miejsc wejścia i zastosowanie odpowiednich zabezpieczeń. Na nasze zabezpieczenia udzielamy gwarancji.",
                                    },
                                    {
                                        question:
                                            "Czy po naprawie izolacji będzie nieprzyjemny zapach?",
                                        answer: "Nie, podczas naprawy izolacji usuwamy całkowicie zniszczony materiał izolacyjny i przeprowadzamy profesjonalną dezynfekcję przestrzeni, która eliminuje wszelkie nieprzyjemne zapachy pozostawione przez kuny. Po zakończeniu prac nie powinien być wyczuwalny żaden nieprzyjemny zapach.",
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
                            Masz problem z kunami?
                        </h2>
                        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                            Skontaktuj się z nami, aby otrzymać bezpłatną wycenę
                            naprawy izolacji po kunach. Nasi eksperci pomogą
                            rozwiązać problem i zabezpieczyć Twój dom przed ponownym
                            wtargnięciem tych zwierząt.
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
        </>
    );
}
