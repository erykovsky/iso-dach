"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

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
    subtitle: "Od konsultacji po realizację, zajmiemy się wszystkim",
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
    <section className="section-shell relative overflow-hidden bg-linear-to-br from-[#800020] via-[#6b001b] to-[#4B0012] text-white">
      <div className="section-inner container mx-auto px-4 pb-14 pt-10 lg:pb-16 lg:pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
          <div className="order-2 lg:order-1">
            <span className="reveal-up inline-flex items-center rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
              <Sparkles className="mr-2 h-4 w-4 text-[#32CD32]" />
              {slides[currentSlide].highlight}
            </span>

            <h1 className="reveal-up reveal-delay-1 mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {slides[currentSlide].title}
            </h1>

            <p className="reveal-up reveal-delay-2 mt-5 max-w-2xl text-lg leading-relaxed text-white/88 sm:text-xl">
              {slides[currentSlide].subtitle}
            </p>

            <div className="reveal-up reveal-delay-3 mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4">
              <Link
                prefetch
                href="/kontakt"
                className="brand-focus inline-flex items-center justify-center rounded-full border border-[#32CD32] bg-[#32CD32] px-7 py-3.5 text-lg font-semibold text-[#123100] shadow-[0_20px_32px_-20px_rgba(50,205,50,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#44d944]"
              >
                Darmowa wycena
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <a
                href="tel:+48660441941"
                className="brand-focus inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/18"
              >
                +48 660 441 941
              </a>
            </div>

            <div className="mt-7 flex items-center gap-2 sm:mt-8">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  onClick={() => setCurrentSlide(index)}
                  className={`brand-focus h-2.5 rounded-full transition-all ${
                    currentSlide === index
                      ? "w-10 bg-[#32CD32]"
                      : "w-5 bg-white/35 hover:bg-white/55"
                  }`}
                  aria-label={`Przejdź do slajdu ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="hero-glow reveal-up reveal-delay-1 relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/15 shadow-[0_35px_70px_-35px_rgba(0,0,0,0.75)]" style={{ minHeight: '400px' }}>
              {slides.map((slide, index) => (
                <div
                  key={slide.title}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    currentSlide === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#330009]/55 via-transparent to-transparent" />
                </div>
              ))}

              <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                <button
                  onClick={prevSlide}
                  className="brand-focus rounded-full border border-white/25 bg-[#4b0012]/75 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-[#640018]"
                  aria-label="Poprzedni slajd"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="brand-focus rounded-full border border-white/25 bg-[#4b0012]/75 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-[#640018]"
                  aria-label="Następny slajd"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full bg-white/20">
        <div
          className="h-full bg-[#32CD32] transition-all duration-500"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
};
