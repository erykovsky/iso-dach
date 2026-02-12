import { Metadata } from "next";
import { Gallery } from "./gallery";
import { WebPageSchema } from "@/components/schema/webpage-schema";
import { getGalleryItems } from "@/lib/gallery";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Galeria realizacji izolacji i ociepleń",
  description:
    "Zobacz realizacje ocieplania i termomodernizacji wykonane przez ISO-DACH: poddasza, stropodachy, ściany z pustką oraz naprawy izolacji po kunach.",
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

export default async function GalleryPage() {
  const items = await getGalleryItems();

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
      <Gallery items={items} />
    </>
  );
}
