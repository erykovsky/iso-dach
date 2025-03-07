"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { useState } from "react";
import { Menu, Phone, X, Facebook, Instagram, Youtube } from "lucide-react";

export const Header = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
 };

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
     <Link
      href="/uslugi"
      className="text-primary hover:text-secondary transition duration-300 ease-in-out"
      prefetch={true}
     >
      Usługi
     </Link>
     <Link
      href="/galeria"
      className="text-primary hover:text-secondary transition duration-300 ease-in-out"
      prefetch={true}
     >
      Galeria
     </Link>
     <Link
      href="/blog"
      className="text-primary hover:text-secondary transition duration-300 ease-in-out"
      prefetch={true}
     >
      Blog
     </Link>
     <Link
      href="/kontakt"
      className="text-primary hover:text-secondary transition duration-300 ease-in-out"
      prefetch={true}
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
     className="lg:hidden text-primary"
     onClick={toggleMenu}
     aria-label="Toggle menu"
    >
     {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
   </div>
   {isMenuOpen && (
    <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md">
     <nav className="flex flex-col items-center py-4 space-y-4">
      <Link
       href="/uslugi"
       className="text-primary hover:text-secondary transition duration-300 ease-in-out"
       onClick={toggleMenu}
       prefetch={true}
      >
       Usługi
      </Link>
      <Link
       href="/galeria"
       className="text-primary hover:text-secondary transition duration-300 ease-in-out"
       onClick={toggleMenu}
       prefetch={true}
      >
       Galeria
      </Link>
      <Link
       href="/blog"
       className="text-primary hover:text-secondary transition duration-300 ease-in-out"
       onClick={toggleMenu}
       prefetch={true}
      >
       Blog
      </Link>
      <Link
       href="/kontakt"
       className="text-primary hover:text-secondary transition duration-300 ease-in-out"
       onClick={toggleMenu}
       prefetch={true}
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
