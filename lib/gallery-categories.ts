export const galleryCategoryOptions = [
  { value: "izolacja-poddaszy", label: "Izolacja poddaszy" },
  { value: "izolacja-natryskowa", label: "Izolacja natryskowa" },
  { value: "izolacja-stropow-piwnic", label: "Izolacja stropów piwnic" },
  { value: "ocieplanie-stropodachu", label: "Ocieplanie stropodachu" },
  { value: "naprawa-izolacji-poddasza", label: "Naprawa izolacji poddasza" },
  { value: "naprawa-izolacji-po-kunach", label: "Naprawa izolacji po kunach" },
] as const;

export type GalleryCategory = (typeof galleryCategoryOptions)[number]["value"];

export const galleryCategories = [
  { id: "wszystkie", name: "Wszystkie" },
  ...galleryCategoryOptions.map((option) => ({
    id: option.value,
    name: option.label,
  })),
] as const;

export const categoryNameById = Object.fromEntries(
  galleryCategories.map((category) => [category.id, category.name]),
) as Record<string, string>;

export const isGalleryCategory = (value: string): value is GalleryCategory =>
  galleryCategoryOptions.some((option) => option.value === value);
