export type GalleryCategory = {
 id: string;
 name: string;
};

export type GalleryItem = {
 id: string;
 title: string;
 category: string;
 image: string;
 description: string;
};

export const galleryCategories: GalleryCategory[] = [
 { id: "wszystkie", name: "Wszystkie" },
 { id: "ocieplanie-scian", name: "Ocieplanie ścian" },
 { id: "izolacja-poddaszy", name: "Izolacja poddaszy" },
 { id: "termomodernizacja", name: "Termomodernizacja" },
 { id: "ocieplanie-stropodachu", name: "Ocieplanie stropodachu" },
 { id: "naprawa-izolacji", name: "Naprawa izolacji" },
];

export const galleryItems: GalleryItem[] = [
 {
  id: "1",
  title: "Ocieplenie ścian zewnętrznych",
  category: "ocieplanie-scian",
  image: "/placeholder.svg?height=600&width=800",
  description: "Przykładowa realizacja ocieplenia ścian zewnętrznych.",
 },
 {
  id: "2",
  title: "Izolacja poddasza",
  category: "izolacja-poddaszy",
  image: "/placeholder.svg?height=600&width=800",
  description: "Przykładowa realizacja izolacji poddasza.",
 },
 {
  id: "3",
  title: "Termomodernizacja budynku",
  category: "termomodernizacja",
  image: "/placeholder.svg?height=600&width=800",
  description: "Przykładowa realizacja prac termomodernizacyjnych.",
 },
 {
  id: "4",
  title: "Ocieplenie stropodachu",
  category: "ocieplanie-stropodachu",
  image: "/placeholder.svg?height=600&width=800",
  description: "Przykładowa realizacja ocieplenia stropodachu.",
 },
 {
  id: "5",
  title: "Naprawa izolacji po kunach",
  category: "naprawa-izolacji",
  image: "/placeholder.svg?height=600&width=800",
  description: "Przykładowa realizacja naprawy izolacji po kunach.",
 },
 {
  id: "6",
  title: "Ocieplenie ścian",
  category: "ocieplanie-scian",
  image: "/placeholder.svg?height=600&width=800",
  description: "Przykładowa realizacja ocieplenia ścian budynku.",
 },
 {
  id: "7",
  title: "Izolacja poddasza wełną mineralną",
  category: "izolacja-poddaszy",
  image: "/placeholder.svg?height=600&width=800",
  description: "Przykładowa realizacja izolacji poddasza wełną mineralną.",
 },
 {
  id: "8",
  title: "Termomodernizacja domu",
  category: "termomodernizacja",
  image: "/placeholder.svg?height=600&width=800",
  description: "Przykładowa realizacja kompleksowej termomodernizacji.",
 },
 {
  id: "9",
  title: "Ocieplenie stropodachu metodą wdmuchiwania",
  category: "ocieplanie-stropodachu",
  image: "/placeholder.svg?height=600&width=800",
  description: "Przykładowa realizacja ocieplenia stropodachu granulatem.",
 },
];

export const categoryNameById = Object.fromEntries(
 galleryCategories.map((category) => [category.id, category.name]),
) as Record<string, string>;

export const getGalleryItemById = (id: string) =>
 galleryItems.find((item) => item.id === id);
