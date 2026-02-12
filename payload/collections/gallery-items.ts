import type { CollectionConfig } from "payload";
import { galleryCategoryOptions } from "../../lib/gallery-categories";

export const GalleryItems: CollectionConfig = {
  slug: "gallery-items",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "sortOrder", "updatedAt"],
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      maxLength: 120,
      label: "Nazwa zdjęcia",
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: galleryCategoryOptions.map((option) => ({
        label: option.label,
        value: option.value,
      })),
      label: "Kategoria",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Zdjęcie",
    },
    {
      name: "sortOrder",
      type: "number",
      required: true,
      defaultValue: 100,
      index: true,
      label: "Kolejność",
    },
  ],
};
