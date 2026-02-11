import { BenefitsSection } from "@/components/benefits-section";
import { ServicesSection } from "@/components/services-section";
import { ContactSection } from "@/components/contact-section";
import { HeroCarousel } from "@/components/hero-carousel";
import { PartnersSection } from "@/components/partners-section";
import { ReviewsSection } from "@/components/reviews-section";
import { IntentAnswersSection, homeIntentFaqs } from "@/components/intent-answers-section";
import { CelluloseContentSection } from "@/components/cellulose-content-section";
import { FAQPageSchema } from "@/components/schema/faq-schema";
import { WebPageSchema } from "@/components/schema/webpage-schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
    alternates: {
        canonical: "https://iso-dach.eu",
    },
};

export default function Home() {
    return (
        <>
            <WebPageSchema
                title="Izolacje dachów, stropów i piwnic – firma ISO-DACH"
                description="Profesjonalne ocieplanie budynków wełną celulozową. Izolacja poddaszy, ścian, stropów i piwnic. Oszczędność energii do 40%."
                url="https://iso-dach.eu"
            />
            <FAQPageSchema faqs={homeIntentFaqs} />
            <div className="flex flex-col min-h-screen">
                <div className="grow">
                    <HeroCarousel />
                    <ServicesSection />
                    <IntentAnswersSection />
                    <CelluloseContentSection />
                    <BenefitsSection />
                    <ReviewsSection />
                    <PartnersSection />
                    <ContactSection />
                </div>
            </div>
        </>
    );
}
