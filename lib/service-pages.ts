export const servicePageOptions = [
  { label: "Izolacja poddaszy", value: "izolacja-poddaszy" },
  { label: "Ocieplanie stropodachu", value: "ocieplanie-stropodachu" },
  { label: "Izolacja stropów piwnic", value: "izolacja-stropow-piwnic" },
  {
    label: "Ocieplenie ścian z pustką powietrzną",
    value: "ocieplenie-scian-z-pustka-powietrzna",
  },
  {
    label: "Naprawa ocieplenia poddasza",
    value: "naprawa-ocieplenia-poddasza",
  },
  { label: "Naprawa izolacji po kunach", value: "naprawa-izolacji-po-kunach" },
  { label: "Badania termowizyjne", value: "termowizja" },
  { label: "Termomodernizacja", value: "termomodernizacja" },
] as const;

export type ServicePageSlug = (typeof servicePageOptions)[number]["value"];

export const serviceImageSlotOptions = [
  { label: "Hero (główne)", value: "hero" },
  { label: "Hero dodatkowe", value: "heroSecondary" },
  { label: "Galeria", value: "gallery" },
  { label: "Materiał", value: "material" },
] as const;

export type ServiceImageSlot = (typeof serviceImageSlotOptions)[number]["value"];

const servicePageValues = new Set(servicePageOptions.map((option) => option.value));

export const isServicePageSlug = (value: string): value is ServicePageSlug => {
  return servicePageValues.has(value as ServicePageSlug);
};
