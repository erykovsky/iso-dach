import type { CollectionConfig } from "payload";
import {
  serviceImageSlotOptions,
  servicePageOptions,
} from "../../lib/service-pages";

export const ServicePageImages: CollectionConfig = {
  slug: "service-page-images",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "service", "slot", "sortOrder", "isActive", "updatedAt"],
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
      label: "Nazwa obrazu",
    },
    {
      name: "service",
      type: "select",
      required: true,
      index: true,
      options: servicePageOptions.map((option) => ({
        label: option.label,
        value: option.value,
      })),
      label: "Strona usługi",
    },
    {
      name: "slot",
      type: "select",
      required: true,
      index: true,
      options: serviceImageSlotOptions.map((option) => ({
        label: option.label,
        value: option.value,
      })),
      label: "Miejsce użycia",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Obraz",
    },
    {
      name: "alt",
      type: "text",
      required: false,
      maxLength: 180,
      label: "Nadpisanie alt (opcjonalne)",
    },
    {
      name: "sortOrder",
      type: "number",
      required: true,
      defaultValue: 100,
      index: true,
      label: "Kolejność",
    },
    {
      name: "isActive",
      type: "checkbox",
      required: true,
      defaultValue: true,
      index: true,
      label: "Aktywne",
    },
  ],
};
