import Image from "next/image";
import type { SVGAttributes } from "react";

interface RzetelnaFirmaLogoProps
 extends Omit<SVGAttributes<SVGSVGElement>, "width" | "height"> {
 className?: string;
}

export const RzetelnaFirmaLogo = ({ className }: RzetelnaFirmaLogoProps) => {
 return (
  <Image
   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rzetelna-firma-uXWdFjsXbjlqUb9hpnPTSEjafMfxaO.webp"
   alt="Rzetelna Firma Logo"
   width={182}
   height={78}
   className={className}
  />
 );
};
