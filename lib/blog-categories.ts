export const BLOG_ALL_CATEGORY_ID = "wszystkie";

export const BLOG_CATEGORIES = [
  {
    id: "porady",
    name: "Porady",
    description:
      "Praktyczne porady dotyczące ocieplania, izolacji i poprawy komfortu cieplnego budynku.",
  },
  {
    id: "technologie",
    name: "Technologie",
    description:
      "Nowoczesne technologie izolacyjne i sprawdzone metody stosowane w realizacjach ISO-DACH.",
  },
  {
    id: "dotacje",
    name: "Dotacje",
    description:
      "Informacje o programach wsparcia i dofinansowaniach na prace ociepleniowe i termomodernizacyjne.",
  },
  {
    id: "realizacje",
    name: "Realizacje",
    description:
      "Przykładowe realizacje ociepleń i napraw izolacji wykonane przez zespół ISO-DACH.",
  },
] as const;

export type BlogCategoryId = (typeof BLOG_CATEGORIES)[number]["id"];

export const isBlogCategory = (value: string): value is BlogCategoryId =>
  BLOG_CATEGORIES.some((category) => category.id === value);

export const getBlogCategoryName = (value: string) =>
  BLOG_CATEGORIES.find((category) => category.id === value)?.name ?? "Inne";

export const getBlogCategoryDescription = (value: string) =>
  BLOG_CATEGORIES.find((category) => category.id === value)?.description ??
  "Artykuły i poradniki dotyczące ocieplania, termomodernizacji i efektywności energetycznej budynków.";
