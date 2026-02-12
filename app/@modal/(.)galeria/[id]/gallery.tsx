import Image from "next/image";
import { notFound } from "next/navigation";
import { categoryNameById } from "@/lib/gallery-categories";
import { getGalleryItemById } from "@/lib/gallery";

export const Gallery = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const item = await getGalleryItemById(id);

    if (!item) {
        notFound();
    }

    return (
        <article className="mx-auto w-full max-w-4xl">
            <div className="relative h-[50vh] w-full bg-black/5 sm:h-[60vh] md:h-[68vh]">
                <p className="absolute left-3 top-3 z-10 inline-flex rounded-full border border-white/50 bg-white/88 px-3 py-1 text-xs font-semibold text-primary/85 shadow-sm backdrop-blur-sm">
                    {categoryNameById[item.category]}
                </p>
                <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 92vw, (max-width: 1280px) 74vw, 900px"
                    priority
                />
            </div>
        </article>
    );
};
