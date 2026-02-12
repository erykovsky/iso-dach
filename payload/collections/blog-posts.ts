import type { CollectionConfig } from "payload";
import { BLOG_CATEGORIES } from "../../lib/blog-categories";

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .trim()
    .replace(/[ąćęłńóśźż]/g, (char) => {
      const map: Record<string, string> = {
        ą: "a",
        ć: "c",
        ę: "e",
        ł: "l",
        ń: "n",
        ó: "o",
        ś: "s",
        ź: "z",
        ż: "z",
      };

      return map[char] ?? char;
    })
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export const BlogPosts: CollectionConfig = {
  slug: "blog-posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "date", "updatedAt"],
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data || typeof data !== "object") {
          return data;
        }

        const currentSlug =
          typeof data.slug === "string" && data.slug.trim().length > 0
            ? data.slug
            : typeof data.title === "string"
              ? data.title
              : "";

        if (currentSlug) {
          data.slug = slugify(currentSlug);
        }

        return data;
      },
    ],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      maxLength: 180,
      label: "Tytuł",
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      label: "Slug (URL)",
      admin: {
        description: "Np. jak-ocieplic-poddasze-celuloza",
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
      maxLength: 320,
      label: "Krótki opis",
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: BLOG_CATEGORIES.map((category) => ({
        label: category.name,
        value: category.id,
      })),
      label: "Kategoria",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Grafika wpisu",
    },
    {
      name: "date",
      type: "date",
      required: true,
      defaultValue: () => new Date().toISOString(),
      label: "Data publikacji",
    },
    {
      name: "readTime",
      type: "number",
      required: true,
      min: 1,
      max: 60,
      defaultValue: 5,
      label: "Czas czytania (min)",
    },
    {
      name: "faqs",
      type: "array",
      label: "FAQ (opcjonalnie)",
      fields: [
        {
          name: "question",
          type: "text",
          required: true,
          label: "Pytanie",
        },
        {
          name: "answer",
          type: "textarea",
          required: true,
          label: "Odpowiedź",
        },
      ],
    },
    {
      name: "content",
      type: "richText",
      required: true,
      label: "Treść artykułu",
    },
  ],
  versions: {
    drafts: true,
  },
};

