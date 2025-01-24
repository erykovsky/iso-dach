import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { BenefitsSection } from "@/components/benefits-section";
import { ServicesSection } from "@/components/services-section";
import { ContactSection } from "@/components/contact-section";
import { HeroCarousel } from "@/components/hero-carousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroCarousel />
        <ServicesSection />
        <BenefitsSection />
        <ContactSection />
      </main>
    </div>
  );
}
