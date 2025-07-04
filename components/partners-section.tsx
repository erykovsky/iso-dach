import Image from "next/image";

const partners = [
    { name: "Termex", logo: "/images/termex-fiber-logo.png" },
    { name: "Knauf", logo: "/images/knauf-insulation-logo.png" },
    { name: "Białe Ciepło", logo: "/images/biale-cieplo-logo.png" },
    { name: "Białe Ciepło", logo: "/images/ursa-logo.png" },
];

export const PartnersSection = () => {
    return (
        <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-primary mb-12">
                    Nasi Partnerzy
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
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
