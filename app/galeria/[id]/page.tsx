import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { categoryNameById, getGalleryItemById } from "../gallery-data";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const item = getGalleryItemById(id);

    if (!item) {
        return {
            title: "Nie znaleziono | ISO-DACH",
        };
    }

    const categoryName = categoryNameById[item.category];

    return {
        title: `Realizacja ${categoryName} - Zdjęcie ${id} | ISO-DACH`,
        description: `Zobacz realizację ${categoryName.toLowerCase()} wykonaną przez ISO-DACH. Profesjonalne izolacje i ocieplanie budynków wełną celulozową.`,
        alternates: {
            canonical: `https://www.iso-dach.eu/galeria/${id}`,
        },
        openGraph: {
            title: `Realizacja ${categoryName} - Zdjęcie ${id} | ISO-DACH`,
            description: `Zobacz realizację ${categoryName.toLowerCase()} wykonaną przez ISO-DACH.`,
            images: [
                {
                    url: item.image,
                    width: 1200,
                    height: 630,
                    alt: `Realizacja ${categoryName} - ISO-DACH`,
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

    if (!item) {
        notFound();
    }

    return (
        <div className="min-h-screen marketing-page">
            <section className="container mx-auto px-4 py-8 md:py-12">
                <div className="mb-6">
                    <Button variant="outline" asChild>
                        <Link href="/galeria">Powrót do galerii</Link>
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
                            sizes="(max-width: 768px) 92vw, (max-width: 1280px) 78vw, 1000px"
                            priority
                        />
                    </div>
                </article>
            </section>
        </div>
    );
}
