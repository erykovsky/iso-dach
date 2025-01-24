"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link prefetch={true} href="/">
          <Logo className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link
            href="#services"
            className="text-[#800020] hover:text-[#32CD32]"
          >
            Usługi
          </Link>
          <Link
            href="#benefits"
            className="text-[#800020] hover:text-[#32CD32]"
          >
            Korzyści
          </Link>
          <Link href="#contact" className="text-[#800020] hover:text-[#32CD32]">
            Kontakt
          </Link>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <nav className="flex flex-col items-center py-4">
            <Link
              href="#services"
              className="text-[#800020] hover:text-[#32CD32] py-2"
              onClick={toggleMenu}
            >
              Usługi
            </Link>
            <Link
              href="#benefits"
              className="text-[#800020] hover:text-[#32CD32] py-2"
              onClick={toggleMenu}
            >
              Korzyści
            </Link>
            <Link
              href="#contact"
              className="text-[#800020] hover:text-[#32CD32] py-2"
              onClick={toggleMenu}
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
