import { cache } from "react";
import { getPayloadClient } from "@/lib/payload";
import {
  categoryNameById,
  isGalleryCategory,
  type GalleryCategory,
} from "@/lib/gallery-categories";

type GalleryMediaDoc = {
  alt?: string | null;
  url?: string | null;
};

type GalleryItemDoc = {
  id: number | string;
  title?: string | null;
  category?: string | null;
  image?: number | string | GalleryMediaDoc | null;
  sortOrder?: number | null;
};

export type GalleryItemView = {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  alt: string;
  sortOrder: number;
};

const normalizeImageUrl = (url: string): string =>
  url.startsWith("http://") || url.startsWith("https://") || url.startsWith("/")
    ? url
    : `/${url}`;

const mapDocToGalleryItem = (doc: GalleryItemDoc): GalleryItemView | null => {
  if (!doc.category || !isGalleryCategory(doc.category)) {
    return null;
  }

  if (!doc.image || typeof doc.image !== "object") {
    return null;
  }

  const imageUrl = typeof doc.image.url === "string" ? doc.image.url : "";
  if (!imageUrl) {
    return null;
  }

  const id = String(doc.id);
  const categoryName = categoryNameById[doc.category];
  const title = doc.title?.trim() || `${categoryName} ${id}`;
  const altFromMedia = typeof doc.image.alt === "string" ? doc.image.alt.trim() : "";

  return {
    id,
    title,
    category: doc.category,
    image: normalizeImageUrl(imageUrl),
    alt: altFromMedia || `Realizacja ${categoryName} - zdjęcie ${id}`,
    sortOrder: typeof doc.sortOrder === "number" ? doc.sortOrder : 100,
  };
};

export const getGalleryItems = cache(async (): Promise<GalleryItemView[]> => {
  try {
    const payload = await getPayloadClient();
    if (!payload) {
      return [];
    }

    const result = await payload.find({
      collection: "gallery-items",
      depth: 1,
      limit: 300,
      pagination: false,
      sort: "sortOrder",
    });

    const itemsFromCMS = (result.docs as GalleryItemDoc[])
      .map(mapDocToGalleryItem)
      .filter((item): item is GalleryItemView => Boolean(item));

    return itemsFromCMS;
  } catch (error) {
    console.error("[gallery] Failed to load gallery items:", error);
    return [];
  }
});

export const getGalleryItemById = cache(
  async (id: string): Promise<GalleryItemView | null> => {
    const items = await getGalleryItems();
    return items.find((item) => item.id === id) ?? null;
  },
);

export const getAdjacentGalleryItems = cache(async (id: string) => {
  const items = await getGalleryItems();
  const currentIndex = items.findIndex((item) => item.id === id);

  if (currentIndex < 0) {
    return { previous: null, next: null };
  }

  return {
    previous: items[currentIndex - 1] ?? null,
    next: items[currentIndex + 1] ?? null,
  };
});
