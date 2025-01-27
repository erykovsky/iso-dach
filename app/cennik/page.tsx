import type { Metadata } from "next";
import { PricingTable } from "@/components/pricing-table";

export const metadata: Metadata = {
  title: "Cennik | ISO-DACH",
  description: "Cennik usług ocieplenia granulatem celulozowym firmy Termex®",
};

const horizontalPricing = [
  { thickness: "20 cm", price: "56 zł" },
  { thickness: "25 cm", price: "69 zł" },
  { thickness: "30 cm", price: "84 zł" },
  { thickness: "40 cm", price: "110 zł" },
];

const slopedPricing = [
  { thickness: "20 cm", price: "60 zł" },
  { thickness: "25 cm", price: "75 zł" },
  { thickness: "30 cm", price: "90 zł" },
  { thickness: "40 cm", price: "120 zł" },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">
        Cennik Usług Ocieplenia
      </h1>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Powierzchnie poziome (stropy i stropodachy)
        </h2>
        <p className="mb-4 text-muted-foreground">
          Poniżej znajduje się cennik usług ocieplenia granulatem celulozowym
          firmy Termex® o powierzchni poziomych 70-200 m2 izolowanych od góry.
        </p>
        <PricingTable data={horizontalPricing} />
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Powierzchnie skośne (poddasza)
        </h2>
        <p className="mb-4 text-muted-foreground">
          Poniżej znajduje się cennik usług ocieplenia granulatem firmy Termex®
          o powierzchni poziomych 70-200 m2 izolowanych (powierzchnie skośne
          poddasza).
        </p>
        <PricingTable data={slopedPricing} />
      </div>
    </div>
  );
}
