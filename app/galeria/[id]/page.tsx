import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
    categoryNameById,
    getAdjacentGalleryItems,
    getGalleryItemById,
} from "../gallery-data";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const item = getGalleryItemById(id);

    if (!item) {
        return {
            title: "Nie znaleziono",
        };
    }

    const categoryName = categoryNameById[item.category];

    return {
        title: `Realizacja ${id}: ${categoryName}`,
        description: `Zdjęcie realizacji nr ${id} w kategorii ${categoryName.toLowerCase()}. Zobacz przykład wykonania izolacji przez zespół ISO-DACH i sprawdź jakość prac.`,
        alternates: {
            canonical: `https://iso-dach.eu/galeria/${id}`,
        },
        robots: {
            index: false,
            follow: true,
        },
        openGraph: {
            title: `Realizacja ${id}: ${categoryName}`,
            description: `Zdjęcie realizacji nr ${id} w kategorii ${categoryName.toLowerCase()} wykonanej przez ISO-DACH.`,
            images: [
                {
                    url: item.image,
                    width: 1200,
                    height: 630,
                    alt: `Realizacja ${categoryName} - zdjęcie ${id}`,
                },
            ],
        },
    };
}

export default async function GalleryImagePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const item = getGalleryItemById(id);
    const adjacentItems = item ? getAdjacentGalleryItems(item.id) : { previous: null, next: null };

    if (!item) {
        notFound();
    }

    return (
        <div className="min-h-screen marketing-page">
            <section className="container mx-auto px-4 py-8 md:py-12">
                <div className="mb-6">
                    <Button variant="outline" asChild>
                        <Link href="/galeria" prefetch={false}>Powrót do galerii</Link>
                    </Button>
                </div>

                <article className="mx-auto max-w-5xl">
                    <h1 className="mb-6 text-center text-2xl font-bold text-primary md:text-3xl">
                        Realizacja: {categoryNameById[item.category]}
                    </h1>
                    <div className="relative mx-auto h-[52vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-primary/12 bg-black/5 sm:h-[62vh] md:h-[72vh]">
                        <p className="absolute left-3 top-3 z-10 inline-flex rounded-full border border-white/50 bg-white/88 px-3 py-1 text-xs font-semibold text-primary/85 shadow-sm backdrop-blur-sm">
                            {categoryNameById[item.category]}
                        </p>
                        <Image
                            src={item.image || "/placeholder.svg"}
                            alt={`Realizacja ${categoryNameById[item.category]} - zdjęcie ${item.id}`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 92vw, (max-width: 1280px) 78vw, 900px"
                            priority
                            quality={70}
                        />
                    </div>

                    <nav className="mt-6 flex flex-wrap items-center justify-center gap-3">
                        {adjacentItems.previous ? (
                            <Button variant="outline" asChild>
                                <Link href={`/galeria/${adjacentItems.previous.id}`} prefetch={false}>
                                    Poprzednie zdjęcie
                                </Link>
                            </Button>
                        ) : null}
                        {adjacentItems.next ? (
                            <Button variant="outline" asChild>
                                <Link href={`/galeria/${adjacentItems.next.id}`} prefetch={false}>
                                    Następne zdjęcie
                                </Link>
                            </Button>
                        ) : null}
                    </nav>

                    <div className="mt-8 max-w-3xl mx-auto">
                        <h2 className="text-xl font-semibold text-primary mb-4">
                            Szczegóły realizacji
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Prezentujemy efekt naszej pracy w kategorii: <strong>{categoryNameById[item.category]}</strong>.
                            Każdy projekt realizujemy z najwyższą starannością, wykorzystując sprawdzone technologie i materiały
                            najwyższej jakości. Dzięki wieloletniemu doświadczeniu i zespołowi wykwalifikowanych specjalistów
                            możemy zagwarantować trwały efekt i pełne zadowolenie klienta.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Nasze realizacje obejmują izolację termiczną i akustyczną poddaszy, ścian, stropów oraz piwnic.
                            Współpracujemy zarówno z klientami indywidualnymi, jak i firmami oraz instytucjami publicznymi.
                            Każdy projekt poprzedzamy szczegółową analizą i bezpłatną wyceną.
                        </p>
                        <p className="text-gray-700">
                            Jeśli chcesz uzyskać więcej informacji o tej lub podobnych realizacjach, skontaktuj się z nami.
                            Chętnie odpowiemy na wszystkie pytania i przygotujemy indywidualną ofertę dostosowaną do
                            Twoich potrzeb i oczekiwań.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link href="/kontakt" prefetch={false}>Bezpłatna wycena</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/galeria" prefetch={false}>Zobacz więcej realizacji</Link>
                            </Button>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
}
