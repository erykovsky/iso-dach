import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { RzetelnaFirmaLogo } from "./rzetelna-firma-logo";

export const Footer = () => {
  return (
    <footer className="bg-[#800020] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">ISO-DACH</h3>
            <p className="text-white">
              Profesjonalne ocieplenia dla Twojego domu
            </p>
            <div className="flex items-center mt-4">
              <Link
                href="https://wizytowka.rzetelnafirma.pl/S6GCXOB0"
                target="_blank"
              >
                <span className="font-bold text-sm text-white">
                  Uczestnik programu
                </span>{" "}
                <RzetelnaFirmaLogo className="h-16 w-auto mt-2" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="mr-2 text-[#90EE90]" size={18} />
                <span>+48 660 441 941</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-[#90EE90]" size={18} />
                <span>info@iso-dach.eu</span>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 text-[#90EE90]" size={18} />
                <span>ul. Robotnicza 2, 73-130 Dobrzany</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Nawigacja</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-white hover:text-[#90EE90]"
                >
                  Usługi
                </Link>
              </li>
              <li>
                <Link
                  href="#benefits"
                  className="text-white hover:text-[#90EE90]"
                >
                  Korzyści
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white hover:text-[#90EE90]"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white text-center">
          <p>&copy; 2025 ISO-DACH. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};
