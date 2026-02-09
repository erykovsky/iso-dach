import { BenefitsSection } from "@/components/benefits-section";
import { ServicesSection } from "@/components/services-section";
import { ContactSection } from "@/components/contact-section";
import { HeroCarousel } from "@/components/hero-carousel";
import { PartnersSection } from "@/components/partners-section";
import { WebPageSchema } from "@/components/schema/webpage-schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.iso-dach.eu",
  },
};

export default function Home() {
    return (
        <>
            <WebPageSchema
                title="Izolacje dachów, stropów i piwnic – firma ISO-DACH"
                description="Profesjonalne ocieplanie budynków wełną celulozową. Izolacja poddaszy, ścian, stropów i piwnic. Oszczędność energii do 40%."
                url="https://www.iso-dach.eu"
            />
        <div className="flex flex-col min-h-screen">
            <main className="grow">
                <HeroCarousel />
                <ServicesSection />
                <BenefitsSection />
                <PartnersSection />
                <ContactSection />
            </main>
        </div>
        </>
    );
}
