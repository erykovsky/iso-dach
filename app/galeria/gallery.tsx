"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  galleryCategories,
  categoryNameById,
} from "@/lib/gallery-categories";
import type { GalleryItemView } from "@/lib/gallery";

type GalleryProps = {
  items: GalleryItemView[];
};

export function Gallery({ items }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState("wszystkie");

  const filteredImages =
    activeCategory === "wszystkie"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen marketing-page">
      <section className="marketing-hero py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-white md:text-5xl">Galeria</h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/85">
              Zapraszamy do obejrzenia zdjęć prezentujących efekty naszej pracy oraz
              stosowane rozwiązania.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-10 md:py-14">
        <div className="section-inner container mx-auto px-4">
          <h2 className="sr-only">Kategorie galerii realizacji</h2>
          <div className="soft-card mb-8 rounded-2xl p-3 md:p-4">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {galleryCategories.map((category) => (
                <button
                  type="button"
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`${
                    activeCategory === category.id ? "pill-filter-active" : "pill-filter"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filteredImages.map((item, index) => (
              <Link
                key={item.id}
                href={`/galeria/${item.id}`}
                prefetch={false}
                scroll={false}
                className="group relative block overflow-hidden rounded-xl border border-primary/12 bg-white shadow-[0_14px_30px_-24px_rgba(75,0,18,0.72)]"
              >
                <span className="absolute left-2.5 top-2.5 z-10 inline-flex rounded-full border border-white/55 bg-white/85 px-2 py-0.5 text-[10px] font-semibold text-primary shadow-sm backdrop-blur-sm sm:left-3 sm:top-3 sm:text-[11px]">
                  {categoryNameById[item.category]}
                </span>
                <div className="relative aspect-4/3">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    priority={index === 0}
                    decoding="async"
                    quality={70}
                  />
                </div>
              </Link>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-gray-500">Brak zdjęć w tej kategorii.</p>
            </div>
          )}
        </div>
      </section>

      <section className="marketing-cta-band py-12 md:py-14">
        <div className="container mx-auto px-4 text-center">
          <p className="mx-auto mb-6 max-w-2xl text-sm text-gray-700 md:text-base">
            Chcesz zobaczyć więcej realizacji lub omówić swój projekt?
            Skontaktuj się z nami i umów bezpłatną konsultację.
          </p>
          <Button size="lg" asChild>
            <Link href="/kontakt" prefetch={false}>Skontaktuj się z nami</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
