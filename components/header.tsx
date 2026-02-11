"use client";

import type React from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { useState, useRef, useEffect } from "react";
import {
  Menu,
  Phone,
  X,
  Facebook,
  Instagram,
  Youtube,
  ChevronDown,
} from "lucide-react";

const services = [
  { name: "Izolacja poddaszy", href: "/izolacja-poddaszy" },
  { name: "Ocieplanie stropodachu", href: "/ocieplanie-stropodachu" },
  { name: "Izolacja stropów piwnic", href: "/izolacja-stropow-piwnic" },
  {
    name: "Ocieplenie ścian z pustką powietrzną",
    href: "/ocieplenie-scian-z-pustka-powietrzna",
  },
  { name: "Naprawa izolacji po kunach", href: "/naprawa-izolacji-po-kunach" },
  { name: "Badania termowizyjne", href: "/termowizja" },
];

const desktopLinkClass =
  "brand-focus rounded-full px-3 py-2 text-sm font-semibold text-primary/90 hover:bg-primary/10 hover:text-primary transition";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const servicesMenuId = "header-services-menu";
  const mobileServicesMenuId = "mobile-services-menu";

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsMobileServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
  };

  const toggleMobileServices = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileServicesOpen((prev) => !prev);
  };

  const focusServiceLink = (index: number) => {
    const links = servicesRef.current?.querySelectorAll<HTMLAnchorElement>(
      '[data-service-link="true"]',
    );
    if (!links || links.length === 0) return;
    const safeIndex = (index + links.length) % links.length;
    links[safeIndex]?.focus();
  };

  const handleServicesButtonKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsServicesOpen(true);
      requestAnimationFrame(() => focusServiceLink(0));
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setIsServicesOpen(true);
      requestAnimationFrame(() => focusServiceLink(-1));
      return;
    }

    if (event.key === "Escape") {
      setIsServicesOpen(false);
    }
  };

  const handleServicesMenuKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    const links = servicesRef.current?.querySelectorAll<HTMLAnchorElement>(
      '[data-service-link="true"]',
    );
    if (!links || links.length === 0) return;

    const currentIndex = Array.from(links).findIndex(
      (link) => link === document.activeElement,
    );

    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusServiceLink(currentIndex < 0 ? 0 : currentIndex + 1);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      focusServiceLink(currentIndex < 0 ? links.length - 1 : currentIndex - 1);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      focusServiceLink(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      focusServiceLink(links.length - 1);
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      setIsServicesOpen(false);
      servicesButtonRef.current?.focus();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-white/85 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        <Link
          href="/"
          prefetch
          aria-label="ISO-DACH - strona główna"
          onClick={() => isMenuOpen && setIsMenuOpen(false)}
        >
          <span className="sr-only">ISO-DACH - strona główna</span>
          <Logo
            aria-hidden="true"
            focusable="false"
            width={118}
            height={47}
          />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          <div
            className="relative"
            ref={servicesRef}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              ref={servicesButtonRef}
              className={`${desktopLinkClass} inline-flex items-center`}
              onClick={toggleServices}
              onKeyDown={handleServicesButtonKeyDown}
              aria-expanded={isServicesOpen}
              aria-haspopup="menu"
              aria-controls={servicesMenuId}
            >
              Usługi
              <ChevronDown
                size={16}
                className={`ml-1 transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div className="absolute left-0 top-full h-2 w-full" />

            <div
              id={servicesMenuId}
              role="menu"
              aria-label="Usługi"
              onKeyDown={handleServicesMenuKeyDown}
              className={`absolute left-0 top-[calc(100%+3px)] w-80 rounded-2xl border border-primary/15 bg-white p-2 shadow-[0_20px_55px_-30px_rgba(75,0,18,0.7)] transition-all duration-200 ${
                isServicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
            >
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  prefetch
                  role="menuitem"
                  data-service-link="true"
                  className="brand-focus block rounded-xl px-4 py-3 text-sm font-medium text-primary/85 hover:bg-primary/10 hover:text-primary"
                  onClick={() => setIsServicesOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/o-nas" prefetch className={desktopLinkClass}>
            O nas
          </Link>
          <Link href="/galeria" prefetch className={desktopLinkClass}>
            Galeria
          </Link>
          <Link href="/blog" prefetch className={desktopLinkClass}>
            Blog
          </Link>
          <Link href="/cennik" prefetch className={desktopLinkClass}>
            Cennik
          </Link>
          <Link href="/kontakt" prefetch className={desktopLinkClass}>
            Kontakt
          </Link>

          <div className="mx-1 h-8 w-px bg-primary/15" />

          <div className="flex items-center gap-2 px-1">
            <a
              href="https://facebook.com/iso-dach-1639181143011116"
              target="_blank"
              rel="noopener noreferrer"
              className="brand-focus rounded-full p-2 text-primary/90 hover:bg-primary/10 hover:text-[#1877F2]"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://instagram.com/iso_dach"
              target="_blank"
              rel="noopener noreferrer"
              className="brand-focus rounded-full p-2 text-primary/90 hover:bg-primary/10 hover:text-[#E4405F]"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://youtube.com/@iso-dach7799"
              target="_blank"
              rel="noopener noreferrer"
              className="brand-focus rounded-full p-2 text-primary/90 hover:bg-primary/10 hover:text-[#FF0000]"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
          </div>

          <a
            href="tel:+48660441941"
            className="brand-focus ml-1 inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/90 px-4 py-2 text-sm font-semibold text-secondary-foreground shadow-[0_10px_22px_-16px_rgba(50,205,50,0.9)] hover:bg-secondary"
          >
            <Phone size={16} />
            <span>+48 660 441 941</span>
          </a>
        </nav>

        <button
          className="brand-focus rounded-xl p-2.5 text-primary hover:bg-primary/10 lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-primary/10 bg-white px-4 pb-5 pt-2 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-2">
            <div className="rounded-2xl border border-primary/10 bg-white p-2">
              <button
                className="brand-focus flex w-full items-center justify-center rounded-xl px-3 py-2 text-sm font-semibold text-primary"
                onClick={toggleMobileServices}
                aria-expanded={isMobileServicesOpen}
                aria-controls={mobileServicesMenuId}
              >
                Usługi
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isMobileServicesOpen && (
                <div id={mobileServicesMenuId} className="mt-1 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      prefetch
                      className="brand-focus block rounded-lg px-3 py-2 text-center text-sm font-medium text-primary/85 hover:bg-white"
                      onClick={() => {
                        setIsMobileServicesOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/o-nas"
              prefetch
              className="rounded-xl px-4 py-2.5 text-center text-sm font-semibold text-primary hover:bg-primary/10"
              onClick={toggleMenu}
            >
              O nas
            </Link>
            <Link
              href="/galeria"
              prefetch
              className="rounded-xl px-4 py-2.5 text-center text-sm font-semibold text-primary hover:bg-primary/10"
              onClick={toggleMenu}
            >
              Galeria
            </Link>
            <Link
              href="/blog"
              prefetch
              className="rounded-xl px-4 py-2.5 text-center text-sm font-semibold text-primary hover:bg-primary/10"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              href="/cennik"
              prefetch
              className="rounded-xl px-4 py-2.5 text-center text-sm font-semibold text-primary hover:bg-primary/10"
              onClick={toggleMenu}
            >
              Cennik
            </Link>
            <Link
              href="/kontakt"
              prefetch
              className="rounded-xl px-4 py-2.5 text-center text-sm font-semibold text-primary hover:bg-primary/10"
              onClick={toggleMenu}
            >
              Kontakt
            </Link>

            <div className="my-1 h-px bg-primary/10" />

            <div className="flex items-center justify-center gap-3 py-1">
              <a
                href="https://facebook.com/iso-dach-1639181143011116"
                target="_blank"
                rel="noopener noreferrer"
                className="brand-focus rounded-full p-2 text-primary hover:bg-primary/10 hover:text-[#1877F2]"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/iso_dach"
                target="_blank"
                rel="noopener noreferrer"
                className="brand-focus rounded-full p-2 text-primary hover:bg-primary/10 hover:text-[#E4405F]"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com/@iso-dach7799"
                target="_blank"
                rel="noopener noreferrer"
                className="brand-focus rounded-full p-2 text-primary hover:bg-primary/10 hover:text-[#FF0000]"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>

            <a
              href="tel:+48660441941"
              className="brand-focus mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-4 py-3 text-sm font-semibold text-secondary-foreground"
            >
              <Phone size={18} />
              <span>+48 660 441 941</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
