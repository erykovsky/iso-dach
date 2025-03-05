"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

// Kategorie zdjęć
const categories = [
 { id: "wszystkie", name: "Wszystkie" },
 { id: "ocieplanie-scian", name: "Ocieplanie ścian" },
 { id: "izolacja-poddaszy", name: "Izolacja poddaszy" },
 { id: "termomodernizacja", name: "Termomodernizacja" },
 { id: "ocieplanie-stropodachu", name: "Ocieplanie stropodachu" },
 { id: "naprawa-izolacji", name: "Naprawa izolacji" },
];

// Przykładowe zdjęcia (w rzeczywistości byłyby to prawdziwe zdjęcia realizacji)
const galleryItems = [
 {
  id: 1,
  title: "Ocieplenie ścian zewnętrznych - Szczecin",
  category: "ocieplanie-scian",
  image: "/placeholder.svg?height=600&width=800",
  description:
   "Kompleksowe ocieplenie ścian zewnętrznych budynku jednorodzinnego w Szczecinie. Zastosowano styropian grafitowy o grubości 15 cm.",
 },
 {
  id: 2,
  title: "Izolacja poddasza - Stargard",
  category: "izolacja-poddaszy",
  image: "/placeholder.svg?height=600&width=800",
  description:
   "Izolacja poddasza wełną mineralną w domu jednorodzinnym w Stargardzie. Zastosowano wełnę o grubości 25 cm.",
 },
 {
  id: 3,
  title: "Termomodernizacja budynku - Koszalin",
  category: "termomodernizacja",
  image: "/placeholder.svg?height=600&width=800",
  description:
   "Kompleksowa termomodernizacja budynku wielorodzinnego w Koszalinie. Projekt obejmował ocieplenie ścian, wymianę okien i modernizację systemu grzewczego.",
 },
 {
  id: 4,
  title: "Ocieplenie stropodachu - Dobrzany",
  category: "ocieplanie-stropodachu",
  image: "/placeholder.svg?height=600&width=800",
  description:
   "Ocieplenie stropodachu metodą wdmuchiwania granulatu celulozowego w budynku mieszkalnym w Dobrzanach.",
 },
 {
  id: 5,
  title: "Naprawa izolacji po kunach - Szczecinek",
  category: "naprawa-izolacji",
  image: "/placeholder.svg?height=600&width=800",
  description:
   "Naprawa izolacji poddasza uszkodzonej przez kuny w domu jednorodzinnym w Szczecinku. Wymieniono izolację i zabezpieczono przed ponownym wtargnięciem zwierząt.",
 },
 {
  id: 6,
  title: "Ocieplenie ścian - Kołobrzeg",
  category: "ocieplanie-scian",
  image: "/placeholder.svg?height=600&width=800",
  description:
   "Ocieplenie ścian zewnętrznych budynku mieszkalnego w Kołobrzegu. Zastosowano styropian o grubości 12 cm.",
 },
 {
  id: 7,
  title: "Izolacja poddasza - Gryfino",
  category: "izolacja-poddaszy",
  image: "/placeholder.svg?height=600&width=800",
  description:
   "Izolacja poddasza wełną mineralną w domu jednorodzinnym w Gryfinie. Zastosowano wełnę o grubości 30 cm.",
 },
 {
  id: 8,
  title: "Termomodernizacja - Goleniów",
  category: "termomodernizacja",
  image: "/placeholder.svg?height=600&width=800",
  description:
   "Termomodernizacja budynku jednorodzinnego w Goleniowie. Projekt obejmował ocieplenie ścian i poddasza.",
 },
 {
  id: 9,
  title: "Ocieplenie stropodachu - Pyrzyce",
  category: "ocieplanie-stropodachu",
  image: "/placeholder.svg?height=600&width=800",
  description:
   "Ocieplenie stropodachu metodą wdmuchiwania granulatu w budynku mieszkalnym w Pyrzycach.",
 },
];

export function Gallery() {
 const [activeCategory, setActiveCategory] = useState("wszystkie");
 const [selectedImage, setSelectedImage] = useState<number | null>(null);

 const filteredImages =
  activeCategory === "wszystkie"
   ? galleryItems
   : galleryItems.filter((item) => item.category === activeCategory);

 const openLightbox = (id: number) => {
  setSelectedImage(id);
  document.body.style.overflow = "hidden";
 };

 const closeLightbox = () => {
  setSelectedImage(null);
  document.body.style.overflow = "auto";
 };

 const selectedItem =
  selectedImage !== null
   ? galleryItems.find((item) => item.id === selectedImage)
   : null;

 return (
  <div className="min-h-screen bg-gray-50">
   <div className="bg-primary py-16">
    <div className="container mx-auto px-4">
     <h1 className="text-4xl font-bold text-white text-center">
      Galeria Realizacji
     </h1>
     <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto">
      Zobacz nasze wybrane realizacje z zakresu ocieplania i termomodernizacji
      budynków. Każdy projekt wykonujemy z najwyższą starannością i dbałością o
      detale.
     </p>
    </div>
   </div>

   <div className="container mx-auto px-4 py-12">
    {/* Nowy design filtrów */}
    <div className="mb-10">
     <div className="flex flex-wrap justify-center gap-2 md:gap-4">
      {categories.map((category) => (
       <button
        key={category.id}
        onClick={() => setActiveCategory(category.id)}
        className={`px-4 py-2 rounded-full transition-all duration-300 ${
         activeCategory === category.id
          ? "bg-primary text-white shadow-md"
          : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
        }`}
       >
        {category.name}
       </button>
      ))}
     </div>
    </div>

    {/* Galeria zdjęć */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     {filteredImages.map((item) => (
      <div
       key={item.id}
       className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
       onClick={() => openLightbox(item.id)}
      >
       <div className="relative h-64 cursor-pointer">
        <Image
         src={item.image || "/placeholder.svg"}
         alt={item.title}
         fill
         className="object-cover"
        />
       </div>
       <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
       </div>
      </div>
     ))}
    </div>

    {filteredImages.length === 0 && (
     <div className="text-center py-12">
      <p className="text-gray-500">Brak zdjęć w tej kategorii.</p>
     </div>
    )}

    <div className="mt-12 text-center">
     <p className="mb-6 max-w-2xl mx-auto">
      Chcesz zobaczyć więcej naszych realizacji lub omówić swój projekt?
      Skontaktuj się z nami, aby umówić się na bezpłatną konsultację.
     </p>
     <Button size="lg" asChild>
      <Link href="/kontakt">Skontaktuj się z nami</Link>
     </Button>
    </div>
   </div>

   {/* Lightbox */}
   {selectedImage !== null && selectedItem && (
    <div
     className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
     onClick={closeLightbox}
    >
     <button
      className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
      onClick={closeLightbox}
     >
      <X size={32} />
     </button>

     <div
      className="max-w-4xl w-full bg-white rounded-lg overflow-hidden"
      onClick={(e) => e.stopPropagation()}
     >
      <div className="relative h-[50vh] md:h-[60vh]">
       <Image
        src={selectedItem.image || "/placeholder.svg"}
        alt={selectedItem.title}
        fill
        className="object-contain"
       />
      </div>
      <div className="p-6">
       <h3 className="text-xl font-semibold mb-2">{selectedItem.title}</h3>
       <p className="text-gray-700">{selectedItem.description}</p>
      </div>
     </div>
    </div>
   )}
  </div>
 );
}
