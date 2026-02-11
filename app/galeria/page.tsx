import { Metadata } from "next";
import { Gallery } from "./gallery";
import { WebPageSchema } from "@/components/schema/webpage-schema";

export const metadata: Metadata = {
  title: "Galeria realizacji",
  description:
    "Zobacz nasze realizacje ocieplania i termomodernizacji. Profesjonalne izolacje poddaszy, ścian i stropodachów.",
  alternates: {
    canonical: "https://iso-dach.eu/galeria",
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
