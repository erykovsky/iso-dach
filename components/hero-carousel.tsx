"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/welna_wdmuchiwana.jpg",
    title: "Profesjonalne ocieplenia dla Twojego domu",
    subtitle: "Zwiększ komfort i oszczędzaj na rachunkach za energię",
    highlight: "Oszczędność do 30% na ogrzewaniu",
  },
  {
    image: "/wdmuchiwanie_celulozy.webp",
    title: "Nowoczesne technologie izolacji",
    subtitle:
      "Wykorzystujemy najnowsze rozwiązania w dziedzinie termomodernizacji",
    highlight: "Certyfikowane materiały",
  },
  {
    image: "/image.webp",
    title: "Kompleksowa obsługa od A do Z",
    subtitle: "Od konsultacji po realizację - zajmiemy się wszystkim",
    highlight: "10 lat gwarancji",
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative bg-[#800020] overflow-hidden">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Carousel - Moved to top for mobile */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentSlide === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#800020]/60 lg:bg-gradient-to-r lg:from-[#800020]/60 lg:to-transparent" />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                aria-label="Poprzedni slajd"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                aria-label="Następny slajd"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 lg:pl-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg text-white/90 mb-6">
              {slides[currentSlide].subtitle}
            </p>
            <Link
              prefetch={true}
              href="/wycena"
              className="bg-[#32CD32] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#2db82d] transition-all duration-300 inline-flex items-center text-lg"
            >
              Darmowa wycena
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-[#32CD32] transition-all duration-500"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
};
