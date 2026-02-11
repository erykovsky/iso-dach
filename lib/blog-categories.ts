export const BLOG_ALL_CATEGORY_ID = "wszystkie";

export const BLOG_CATEGORIES = [
  {
    id: "porady",
    name: "Porady",
    description:
      "Praktyczne wskazówki dotyczące ocieplania, izolacji i poprawy komfortu cieplnego budynku, przygotowane na podstawie realnych realizacji.",
  },
  {
    id: "technologie",
    name: "Technologie",
    description:
      "Nowoczesne technologie izolacyjne oraz sprawdzone metody wykonawcze, które stosujemy podczas prac na poddaszach, stropach i ścianach.",
  },
  {
    id: "dotacje",
    name: "Dotacje",
    description:
      "Informacje o dostępnych programach wsparcia i dofinansowaniach na ocieplenie, termomodernizację oraz poprawę efektywności energetycznej budynków.",
  },
  {
    id: "realizacje",
    name: "Realizacje",
    description:
      "Przykładowe realizacje ociepleń i napraw izolacji wykonane przez zespół ISO-DACH, wraz z opisem zakresu prac i zastosowanych rozwiązań.",
  },
] as const;

export type BlogCategoryId = (typeof BLOG_CATEGORIES)[number]["id"];

export const isBlogCategory = (value: string): value is BlogCategoryId =>
  BLOG_CATEGORIES.some((category) => category.id === value);

export const getBlogCategoryName = (value: string) =>
  BLOG_CATEGORIES.find((category) => category.id === value)?.name ?? "Inne";

export const getBlogCategoryDescription = (value: string) =>
  BLOG_CATEGORIES.find((category) => category.id === value)?.description ??
  "Artykuły i poradniki dotyczące ocieplania, termomodernizacji i poprawy efektywności energetycznej budynków mieszkalnych oraz użytkowych.";
