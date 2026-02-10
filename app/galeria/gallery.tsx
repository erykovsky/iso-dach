"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  categoryNameById,
  galleryCategories,
  galleryItems,
} from "./gallery-data";

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("wszystkie");

  const filteredImages =
    activeCategory === "wszystkie"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen marketing-page">
      <div className="marketing-hero py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">
            Galeria
          </h1>
          <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto">
            Zapraszamy do obejrzenia galerii zdjęć prezentujących efekty naszej pracy oraz stosowane rozwiązania. To przegląd stylu, jakości i dbałości o detale.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`${activeCategory === category.id ? "pill-filter-active" : "pill-filter"
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item) => (
            <Link
              key={item.id}
              href={`/galeria/${item.id}`}
              scroll={false}
              className="group relative block overflow-hidden rounded-2xl border border-primary/12 bg-white/70 shadow-[0_18px_38px_-28px_rgba(75,0,18,0.72)]"
            >
              <div className="absolute left-3 top-3 z-10 inline-flex rounded-full border border-white/55 bg-white/85 px-2.5 py-1 text-[11px] font-semibold text-primary shadow-sm backdrop-blur-sm">
                {categoryNameById[item.category]}
              </div>
              <div className="relative aspect-4/3">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={`Realizacja ${categoryNameById[item.category]} - ISO-DACH`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  quality={75}
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/28 to-transparent" />
              </div>
            </Link>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Brak zdjęć w tej kategorii.</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="mb-6 max-w-2xl mx-auto">
            Chcesz zobaczyć więcej naszych realizacji lub omówić swój projekt?
            Skontaktuj się z nami, aby umówić się na bezpłatną konsultację.
          </p>
          <Button size="lg" asChild>
            <Link href="/kontakt">Skontaktuj się z nami</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
