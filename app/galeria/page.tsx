import { Metadata } from "next";
import { Gallery } from "./gallery";
import { WebPageSchema } from "@/components/schema/webpage-schema";

export const metadata: Metadata = {
  title: "Galeria realizacji",
  description:
    "Zobacz nasze realizacje ocieplania i termomodernizacji. Profesjonalne izolacje poddaszy, ścian i stropodachów.",
  keywords: [
    "galeria realizacji ociepleń",
    "zdjęcia ocieplenia poddasza",
    "izolacja dachu realizacje",
    "naprawa izolacji po kunach zdjęcia",
    "ISO-DACH realizacje",
  ],
  alternates: {
    canonical: "https://iso-dach.eu/galeria",
  },
  openGraph: {
    title: "Galeria realizacji | ISO-DACH",
    description:
      "Zobacz zdjęcia realizacji ociepleń poddaszy, ścian, stropodachów i napraw izolacji.",
    url: "https://iso-dach.eu/galeria",
    type: "website",
    images: [
      {
        url: "/img/galeria/1.jpg",
        width: 1200,
        height: 630,
        alt: "Galeria realizacji ISO-DACH",
      },
    ],
  },
};

export default function GalleryPage() {
  return (
    <>
      <WebPageSchema
        title="Galeria realizacji"
        description="Zobacz wybrane realizacje ociepleń i napraw izolacji wykonane przez ISO-DACH."
        url="https://iso-dach.eu/galeria"
        breadcrumbs={[
          { name: "Strona główna", url: "https://iso-dach.eu" },
          { name: "Galeria", url: "https://iso-dach.eu/galeria" },
        ]}
      />
      <Gallery />
    </>
  );
}
