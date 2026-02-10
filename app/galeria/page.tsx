import { Metadata } from "next";
import { Gallery } from "./gallery";

export const metadata: Metadata = {
  title: "Galeria realizacji",
  description:
    "Zobacz nasze realizacje ocieplania i termomodernizacji. Profesjonalne izolacje poddaszy, ścian i stropodachów.",
  alternates: {
    canonical: "https://iso-dach.eu/galeria",
  },
};

export default function GalleryPage() {
  return <Gallery />;
}
