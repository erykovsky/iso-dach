import Image from "next/image";

const partners = [
 { name: "Partner 1", logo: "/placeholder.svg?height=80&width=200" },
 { name: "Partner 2", logo: "/placeholder.svg?height=80&width=200" },
 { name: "Partner 3", logo: "/placeholder.svg?height=80&width=200" },
 { name: "Partner 4", logo: "/placeholder.svg?height=80&width=200" },
 { name: "Partner 5", logo: "/placeholder.svg?height=80&width=200" },
 { name: "Partner 6", logo: "/placeholder.svg?height=80&width=200" },
];

export const PartnersSection = () => {
 return (
  <section className="py-16 bg-muted">
   <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-primary mb-12">
     Nasi Partnerzy
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
     {partners.map((partner, index) => (
      <div key={index} className="flex justify-center">
       <Image
        src={partner.logo || "/placeholder.svg"}
        alt={`Logo ${partner.name}`}
        width={200}
        height={80}
        className="max-w-full h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
       />
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};
