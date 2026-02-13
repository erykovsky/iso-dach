import { unstable_cache } from "next/cache";
import { getPayloadClient } from "@/lib/payload";
import type { ServiceImageSlot, ServicePageSlug } from "@/lib/service-pages";

type ServicePageImageMediaDoc = {
  alt?: string | null;
  url?: string | null;
};

type ServicePageImageDoc = {
  id: number | string;
  title?: string | null;
  service?: string | null;
  slot?: string | null;
  image?: number | string | ServicePageImageMediaDoc | null;
  alt?: string | null;
  sortOrder?: number | null;
  isActive?: boolean | null;
};

type ServicePageImageItem = {
  slot: ServiceImageSlot;
  src: string;
  alt: string;
  sortOrder: number;
};

export type ServicePageImageInput = {
  src: string;
  alt: string;
};

const normalizeImageUrl = (url: string): string =>
  url.startsWith("http://") || url.startsWith("https://") || url.startsWith("/")
    ? url
    : `/${url}`;

const isServiceImageSlot = (value: string): value is ServiceImageSlot => {
  return (
    value === "hero" ||
    value === "heroSecondary" ||
    value === "gallery" ||
    value === "material"
  );
};

const mapDocToItem = (doc: ServicePageImageDoc): ServicePageImageItem | null => {
  if (!doc.isActive || !doc.slot || !isServiceImageSlot(doc.slot)) {
    return null;
  }

  if (!doc.image || typeof doc.image !== "object") {
    return null;
  }

  const imageUrl = typeof doc.image.url === "string" ? doc.image.url : "";
  if (!imageUrl) {
    return null;
  }

  const mediaAlt = typeof doc.image.alt === "string" ? doc.image.alt.trim() : "";
  const overrideAlt = doc.alt?.trim() || "";
  const title = doc.title?.trim() || "";

  return {
    slot: doc.slot,
    src: normalizeImageUrl(imageUrl),
    alt: overrideAlt || mediaAlt || title || "Zdjęcie usługi ISO-DACH",
    sortOrder: typeof doc.sortOrder === "number" ? doc.sortOrder : 100,
  };
};

const getServicePageImagesFlat = unstable_cache(
  async (service: ServicePageSlug): Promise<ServicePageImageItem[]> => {
    try {
      const payload = await getPayloadClient();
      if (!payload) {
        return [];
      }

      const result = await payload.find({
        collection: "service-page-images",
        depth: 1,
        limit: 300,
        pagination: false,
        sort: "sortOrder",
        where: {
          and: [
            { service: { equals: service } },
            { isActive: { equals: true } },
          ],
        },
      });

      const items = (result.docs as ServicePageImageDoc[])
        .map(mapDocToItem)
        .filter((item): item is ServicePageImageItem => Boolean(item));

      items.sort((a, b) => {
        if (a.sortOrder !== b.sortOrder) {
          return a.sortOrder - b.sortOrder;
        }
        if (a.slot !== b.slot) {
          return a.slot.localeCompare(b.slot);
        }
        if (a.src !== b.src) {
          return a.src.localeCompare(b.src);
        }
        return a.alt.localeCompare(b.alt);
      });

      return items;
    } catch (error) {
      console.error("[service-page-images] Failed to load images:", error);
      return [];
    }
  },
  ["service-page-images-v1"],
  {
    revalidate: 30,
  },
);

export const getServicePageImagesBySlot = async (
  service: ServicePageSlug,
): Promise<Record<ServiceImageSlot, ServicePageImageInput[]>> => {
  const docs = await getServicePageImagesFlat(service);

  const grouped: Record<ServiceImageSlot, ServicePageImageInput[]> = {
    hero: [],
    heroSecondary: [],
    gallery: [],
    material: [],
  };

  for (const item of docs) {
    grouped[item.slot].push({ src: item.src, alt: item.alt });
  }

  return grouped;
};
