import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-linear-to-br from-[#800020] via-[#6c001b] to-[#4B0012] py-14 text-white">
      <div className="absolute inset-0 opacity-[0.12]">
        <div className="absolute -left-32 -top-36 h-80 w-80 rounded-full bg-[#228B22] blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-[#2a000a] blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <section className="reveal-up space-y-4">
            <h3 className="text-2xl font-bold text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.45)]">
              ISO-DACH
            </h3>
            <p className="max-w-sm leading-relaxed text-white/85">
              Profesjonalne ocieplenia dla domów, firm i budynków użytkowych.
              Rzetelna realizacja i trwały efekt na lata.
            </p>
          </section>

          <section className="reveal-up reveal-delay-1 space-y-4">
            <h3 className="text-2xl font-bold text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.45)]">
              Kontakt
            </h3>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#90EE90]" />
                <a href="tel:+48660441941" className="hover:text-[#90EE90]">
                  +48 660 441 941
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#90EE90]" />
                <a href="mailto:info@iso-dach.eu" className="hover:text-[#90EE90]">
                  info@iso-dach.eu
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-[#90EE90]" />
                <address className="not-italic leading-relaxed">
                  ul. Jana Pawła II 34,
                  <br />
                  73-130 Dobrzany
                </address>
              </li>
            </ul>
          </section>

          <section className="reveal-up reveal-delay-2 space-y-4">
            <h3 className="text-2xl font-bold text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.45)]">
              Nawigacja
            </h3>
            <ul className="grid grid-cols-2 gap-x-5 gap-y-2 text-white/90">
              {[
                { label: "Strona główna", href: "/" },
                { label: "Galeria", href: "/galeria" },
                { label: "Blog", href: "/blog" },
                { label: "Cennik", href: "/cennik" },
                { label: "Kontakt", href: "/kontakt" },
                { label: "Polityka Prywatności", href: "/polityka-prywatnosci" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#90EE90]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <h4 className="mb-3 text-lg font-semibold">Śledź nas</h4>
              <div className="flex gap-2">
                <a
                  href="https://www.facebook.com/iso-dach-1639181143011116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-focus rounded-full border border-white/30 p-2.5 text-white transition hover:bg-white/10 hover:text-[#90EE90]"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/iso_dach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-focus rounded-full border border-white/30 p-2.5 text-white transition hover:bg-white/10 hover:text-[#90EE90]"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://youtube.com/@iso-dach7799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-focus rounded-full border border-white/30 p-2.5 text-white transition hover:bg-white/10 hover:text-[#90EE90]"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center">
          <p className="text-sm text-white/75">
            &copy; 2025 ISO-DACH. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};
