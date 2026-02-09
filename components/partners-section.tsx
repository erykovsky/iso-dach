import Image from "next/image";

const partners = [
  { name: "Termex", logo: "/images/termex-fiber-logo.png" },
  { name: "Knauf", logo: "/images/knauf-insulation-logo.png" },
  { name: "Białe Ciepło", logo: "/images/biale-cieplo-logo.png" },
  { name: "URSA", logo: "/images/ursa-logo.png" },
];

export const PartnersSection = () => {
  return (
    <section className="section-shell bg-muted/45 py-20">
      <div className="section-inner container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="reveal-up mb-4 inline-flex rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary/80">
            Zaufani dostawcy
          </p>
          <h2 className="reveal-up reveal-delay-1 text-4xl font-bold text-primary sm:text-5xl">
            Nasi partnerzy
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {partners.map((partner, index) => (
            <article
              key={partner.name}
              className={`soft-card group flex min-h-28 items-center justify-center rounded-2xl p-4 reveal-up ${
                index === 0 ? "reveal-delay-1" : "reveal-delay-2"
              }`}
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`Logo ${partner.name}`}
                width={180}
                height={72}
                className="h-auto max-w-full object-contain grayscale transition duration-300 group-hover:scale-[1.03] group-hover:grayscale-0"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
