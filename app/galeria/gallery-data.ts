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
    { id: "izolacja-poddaszy", name: "Izolacja poddaszy" },
    { id: "izolacja-natryskowa", name: "Izolacja natryskowa" },
    { id: "izolacja-stropow-piwnic", name: "Izolacja stropów piwnic" },
    { id: "ocieplanie-stropodachu", name: "Ocieplanie stropodachu" },
    { id: "naprawa-izolacji-poddasza", name: "Naprawa izolacji poddasza" },
    { id: "naprawa-izolacji-po-kunach", name: "Naprawa izolacji po kunach" },
];

export const galleryItems: GalleryItem[] = [
    {
        id: "1",
        category: "naprawa-izolacji-po-kunach",
        image: "/img/galeria/1.jpg",
    },
    {
        id: "2",
        category: "izolacja-poddaszy",
        image: "/img/galeria/2.jpg",
    },
    {
        id: "3",
        category: "izolacja-poddaszy",
        image: "/img/galeria/3.jpg",
    },
    {
        id: "4",
        category: "izolacja-poddaszy",
        image: "/img/galeria/4.jpg",
    },
    {
        id: "5",
        category: "naprawa-izolacji-poddasza",
        image: "/img/galeria/5.jpg",
    },
    {
        id: "6",
        category: "izolacja-stropow-piwnic",
        image: "/img/galeria/6.jpg",
    },
    {
        id: "7",
        category: "izolacja-stropow-piwnic",
        image: "/img/galeria/7.jpg",
    },
    {
        id: "8",
        category: "izolacja-stropow-piwnic",
        image: "/img/galeria/8.jpg",
    },
    {
        id: "9",
        category: "ocieplanie-stropodachu",
        image: "/img/galeria/9.jpg",
    },
    {
        id: "10",
        category: "ocieplanie-stropodachu",
        image: "/img/galeria/10.jpg",
    },
    {
        id: "11",
        category: "ocieplanie-stropodachu",
        image: "/img/galeria/11.jpg",
    },
    {
        id: "12",
        category: "izolacja-natryskowa",
        image: "/img/galeria/12.jpg",
    },
    {
        id: "13",
        category: "izolacja-natryskowa",
        image: "/img/galeria/13.jpg",
    },
    {
        id: "14",
        category: "izolacja-natryskowa",
        image: "/img/galeria/14.jpg",
    },
    {
        id: "15",
        category: "naprawa-izolacji-po-kunach",
        image: "/img/galeria/15.jpg",
    },
    {
        id: "16",
        category: "naprawa-izolacji-po-kunach",
        image: "/img/galeria/16.jpg",
    },
    {
        id: "17",
        category: "naprawa-izolacji-poddasza",
        image: "/img/galeria/17.jpg",
    },
    {
        id: "18",
        category: "naprawa-izolacji-poddasza",
        image: "/img/galeria/18.jpg",
    },
    {
        id: "19",
        category: "naprawa-izolacji-poddasza",
        image: "/img/galeria/19.jpg",
    },
];

export const categoryNameById = Object.fromEntries(
    galleryCategories.map((category) => [category.id, category.name]),
) as Record<string, string>;

export const getGalleryItemById = (id: string) =>
    galleryItems.find((item) => item.id === id);

export const getAdjacentGalleryItems = (id: string) => {
    const currentIndex = galleryItems.findIndex((item) => item.id === id);
    if (currentIndex < 0) {
        return { previous: null, next: null };
    }

    return {
        previous: galleryItems[currentIndex - 1] ?? null,
        next: galleryItems[currentIndex + 1] ?? null,
    };
};
