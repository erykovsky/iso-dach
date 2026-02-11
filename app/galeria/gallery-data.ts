export type GalleryCategory = {
    id: string;
    name: string;
};

export type GalleryItem = {
    id: string;
    category: string;
    image: string;
};

export const galleryCategories: GalleryCategory[] = [
    { id: "wszystkie", name: "Wszystkie" },
    { id: "ocieplanie-scian", name: "Ocieplanie ścian" },
    { id: "izolacja-poddaszy", name: "Izolacja poddaszy" },
    { id: "izolacja-stropow-piwnic", name: "Izolacja stropów piwnic" },
    { id: "izolacja-natryskowa", name: "Izolacja natryskowa" },
    { id: "ocieplanie-stropodachu", name: "Ocieplanie stropodachu" },
    { id: "naprawa-izolacji", name: "Naprawa izolacji" },
];

export const galleryItems: GalleryItem[] = [
    {
        id: "1",
        category: "izolacja-stropow-piwnic",
        image: "/img/izolacja-stropu-piwnicy.jpg",
    },
    {
        id: "2",
        category: "izolacja-natryskowa",
        image: "/img/izolacja-natryskowa-poddasza.jpg",
    },
    {
        id: "3",
        category: "ocieplanie-stropodachu",
        image: "/img/ocieplanie-stropodachu-realizacja-1.jpg",
    },
    {
        id: "4",
        category: "ocieplanie-stropodachu",
        image: "/img/ocieplanie-stropodachu-realizacja-2.jpg",
    },
    {
        id: "5",
        category: "ocieplanie-stropodachu",
        image: "/img/ocieplenie-sciany-z-pustka.jpg",
    },
    {
        id: "6",
        category: "izolacja-poddaszy",
        image: "/img/izolacja-poddasza-realizacja.jpeg",
    },
    {
        id: "7",
        category: "naprawa-izolacji",
        image: "/img/naprawa-izolacji-po-kunach.jpg",
    },
];

export const categoryNameById = Object.fromEntries(
    galleryCategories.map((category) => [category.id, category.name]),
) as Record<string, string>;

export const getGalleryItemById = (id: string) =>
    galleryItems.find((item) => item.id === id);
