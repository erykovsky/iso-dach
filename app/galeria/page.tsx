import { Metadata } from "next";
import { Gallery } from "./gallery";

export const metadata: Metadata = {
 title: "Galeria Realizacji | ISO-DACH",
 description:
  "Zobacz nasze realizacje ocieplania i termomodernizacji budynków. Profesjonalne izolacje poddaszy, ścian i stropodachów.",
};

export default function GalleryPage() {
 return <Gallery />;
}
