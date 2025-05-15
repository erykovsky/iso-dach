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

// Lista usług do wyświetlenia w dropdown menu
const services = [
    { name: "Ocieplanie ścian", href: "/ocieplanie-scian" },
    { name: "Izolacja poddaszy", href: "/izolacja-poddaszy" },
    { name: "Termomodernizacja", href: "/termomodernizacja" },
    { name: "Ocieplanie stropodachu", href: "/ocieplanie-stropodachu" },
    { name: "Naprawa izolacji po kunach", href: "/naprawa-izolacji-po-kunach" },
];

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const servicesRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsMobileServicesOpen(false);
    };

    const toggleServices = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    const toggleMobileServices = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsMobileServicesOpen(!isMobileServicesOpen);
    };

    // Obsługa kliknięcia poza menu, aby je zamknąć
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
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link
                    href="/"
                    prefetch={true}
                    className="flex items-center space-x-2"
                    onClick={() => isMenuOpen && setIsMenuOpen(false)}
                >
                    <Logo className="h-10 w-auto" />
                </Link>
                <nav className="hidden lg:flex items-center space-x-6">
                    {/* Dropdown menu dla usług - wersja desktopowa */}
                    <div
                        className="relative"
                        ref={servicesRef}
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <button
                            className="flex items-center text-primary hover:text-secondary transition duration-300 ease-in-out"
                            onClick={() => toggleServices()}
                            aria-expanded={isServicesOpen}
                        >
                            Usługi
                            <ChevronDown
                                size={16}
                                className={`ml-1 transition-transform ${
                                    isServicesOpen ? "rotate-180" : ""
                                }`}
                            />
                        </button>

                        {/* Dodaję niewidoczny element, który wypełni przerwę między przyciskiem a menu */}
                        <div className="absolute left-0 top-full h-2 w-full" />

                        <div
                            className={`absolute left-0 top-[calc(100%+2px)] w-64 bg-white rounded-md shadow-lg py-2 z-20 transition-all duration-300
                ${
                    isServicesOpen
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                }`}
                        >
                            {services.map((service, index) => (
                                <Link
                                    key={index}
                                    href={service.href}
                                    prefetch={true}
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-primary transition-colors"
                                    onClick={() => setIsServicesOpen(false)}
                                >
                                    {service.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link
                        href="/galeria"
                        prefetch={true}
                        className="text-primary hover:text-secondary transition duration-300 ease-in-out"
                    >
                        Galeria
                    </Link>
                    <Link
                        href="/blog"
                        prefetch={true}
                        className="text-primary hover:text-secondary transition duration-300 ease-in-out"
                    >
                        Blog
                    </Link>
                    <Link
                        href="/kontakt"
                        prefetch={true}
                        className="text-primary hover:text-secondary transition duration-300 ease-in-out"
                    >
                        Kontakt
                    </Link>
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://facebook.com/iso-dach-1639181143011116"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-[#1877F2] transition duration-300 ease-in-out"
                            aria-label="Facebook"
                        >
                            <Facebook size={20} />
                        </a>
                        <a
                            href="https://instagram.com/iso_dach"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-[#E4405F] transition duration-300 ease-in-out"
                            aria-label="Instagram"
                        >
                            <Instagram size={20} />
                        </a>
                        <a
                            href="https://youtube.com/@iso-dach7799"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-[#FF0000] transition duration-300 ease-in-out"
                            aria-label="YouTube"
                        >
                            <Youtube size={20} />
                        </a>
                    </div>
                    <a
                        href="tel:+48660441941"
                        className="flex items-center space-x-2 text-primary hover:text-secondary transition duration-300 ease-in-out"
                    >
                        <Phone size={20} />
                        <span>+48 660 441 941</span>
                    </a>
                </nav>
                <button
                    className="lg:hidden text-primary p-3 -m-3"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md">
                    <nav className="flex flex-col items-center py-4 space-y-4">
                        {/* Dropdown menu dla usług - wersja mobilna */}
                        <div className="w-full flex flex-col items-center">
                            <button
                                className="flex items-center text-primary hover:text-secondary transition duration-300 ease-in-out"
                                onClick={toggleMobileServices}
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
                                <div className="mt-2 w-full flex flex-col items-center space-y-2 py-2 bg-gray-50">
                                    {services.map((service, index) => (
                                        <Link
                                            key={index}
                                            href={service.href}
                                            prefetch={true}
                                            className="text-gray-700 hover:text-primary transition-colors py-1"
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
                            href="/galeria"
                            prefetch={true}
                            className="text-primary hover:text-secondary transition duration-300 ease-in-out"
                            onClick={toggleMenu}
                        >
                            Galeria
                        </Link>
                        <Link
                            href="/blog"
                            prefetch={true}
                            className="text-primary hover:text-secondary transition duration-300 ease-in-out"
                            onClick={toggleMenu}
                        >
                            Blog
                        </Link>
                        <Link
                            href="/kontakt"
                            prefetch={true}
                            className="text-primary hover:text-secondary transition duration-300 ease-in-out"
                            onClick={toggleMenu}
                        >
                            Kontakt
                        </Link>
                        <div className="flex items-center space-x-4 mt-4">
                            <a
                                href="https://facebook.com/iso-dach-1639181143011116"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-[#1877F2] transition duration-300 ease-in-out"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://instagram.com/iso_dach"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-[#E4405F] transition duration-300 ease-in-out"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://youtube.com/@iso-dach7799"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-[#FF0000] transition duration-300 ease-in-out"
                                aria-label="YouTube"
                            >
                                <Youtube size={20} />
                            </a>
                        </div>
                        <a
                            href="tel:+48660441941"
                            className="flex items-center space-x-2 text-primary hover:text-secondary transition duration-300 ease-in-out"
                        >
                            <Phone size={20} />
                            <span>+48 660 441 941</span>
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};
