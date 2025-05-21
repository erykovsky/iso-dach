import { BenefitsSection } from "@/components/benefits-section";
import { ServicesSection } from "@/components/services-section";
import { ContactSection } from "@/components/contact-section";
import { HeroCarousel } from "@/components/hero-carousel";
import { PartnersSection } from "@/components/partners-section";

export default function Home() {
 return (
  <div className="flex flex-col min-h-screen">
   <main className="flex-grow">
    <HeroCarousel />
    <ServicesSection />
    <BenefitsSection />
    <PartnersSection />
    <ContactSection />
   </main>
  </div>
 );
}
