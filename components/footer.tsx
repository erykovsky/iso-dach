import {
 Mail,
 MapPin,
 Phone,
 Facebook,
 Instagram,
 Youtube,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
 return (
  <footer className="bg-[#800020] text-white py-12">
   <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
     <div className="space-y-4">
      <h3 className="text-2xl font-bold mb-4">ISO-DACH</h3>
      <p className="text-white text-lg">
       Profesjonalne ocieplenia dla Twojego domu
      </p>
      <div className="mt-6">
       <Link
        href="https://wizytowka.rzetelnafirma.pl/S6GCXOB0"
        target="_blank"
        className="inline-block transition-transform hover:scale-105"
       >
        <span className="font-bold text-sm text-white block mb-2">
         Uczestnik programu
        </span>
        <Image
         src="/rzetelna-firma.png"
         alt="Rzetelna Firma"
         width={150}
         height={70}
         loading="eager"
         decoding="sync"
         quality={65}
        />
       </Link>
      </div>
     </div>
     <div className="space-y-4">
      <h3 className="text-2xl font-bold mb-4">Kontakt</h3>
      <ul className="space-y-4">
       <li className="flex items-center group">
        <Phone
         className="mr-3 text-[#90EE90] group-hover:text-white transition-colors"
         size={24}
        />
        <a
         href="tel:+48660441941"
         className="group-hover:text-[#90EE90] transition-colors"
        >
         +48 660 441 941
        </a>
       </li>
       <li className="flex items-center group">
        <Mail
         className="mr-3 text-[#90EE90] group-hover:text-white transition-colors"
         size={24}
        />
        <a
         href="mailto:info@iso-dach.eu"
         className="group-hover:text-[#90EE90] transition-colors"
        >
         info@iso-dach.eu
        </a>
       </li>
       <li className="flex items-start group">
        <MapPin
         className="mr-3 text-[#90EE90] group-hover:text-white transition-colors mt-1"
         size={24}
        />
        <span className="group-hover:text-[#90EE90] transition-colors">
         ul. Jana Pawła II 34,
         <br />
         73-130 Dobrzany
        </span>
       </li>
      </ul>
     </div>
     <div className="space-y-4">
      <h3 className="text-2xl font-bold mb-4">Nawigacja</h3>
      <ul className="space-y-3">
       {["Usługi", "Korzyści", "Kontakt"].map((item) => (
        <li key={item}>
         <Link
          href={`#${item.toLowerCase()}`}
          className="text-white hover:text-[#90EE90] transition-colors text-lg"
         >
          {item}
         </Link>
        </li>
       ))}
      </ul>
      <div className="mt-8">
       <h4 className="text-xl font-semibold mb-4">Śledź nas</h4>
       <div className="flex space-x-4">
        <a
         href="https://www.facebook.com/iso-dach-1639181143011116"
         target="_blank"
         className="text-white hover:text-[#90EE90] transition-colors"
        >
         <Facebook size={24} />
        </a>
        <a
         href="https://www.instagram.com/iso_dach"
         target="_blank"
         className="text-white hover:text-[#90EE90] transition-colors"
        >
         <Instagram size={24} />
        </a>
        <a
         href="https://youtube.com/@iso-dach7799"
         target="_blank"
         className="text-white hover:text-[#90EE90] transition-colors"
        >
         <Youtube size={24} />
        </a>
       </div>
      </div>
     </div>
    </div>
    <div className="mt-12 pt-8 border-t border-white/20 text-center">
     <p className="text-sm">
      &copy; 2025 ISO-DACH. Wszelkie prawa zastrzeżone.
     </p>
    </div>
   </div>
  </footer>
 );
};
