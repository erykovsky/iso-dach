import {
  Shield,
  Home,
  Zap,
  Building,
  PenToolIcon as Tool,
  Wrench,
  Thermometer,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Ocieplenie ścian z pustką powietrzną",
    description:
      "Skuteczne docieplenie ścian dwuwarstwowych metodą wdmuchiwania, bez pogrubiania elewacji i z minimalną ingerencją.",
    icon: Shield,
    link: "/ocieplenie-scian-z-pustka-powietrzna",
  },
  {
    title: "Izolacja poddaszy",
    description:
      "Profesjonalne ocieplenie poddasza, które zapewnia komfortową temperaturę na górnych kondygnacjach i zmniejsza koszty ogrzewania.",
    icon: Home,
    link: "/izolacja-poddaszy",
  },
  {
    title: "Termomodernizacja",
    description:
      "Kompleksowa modernizacja energetyczna budynku, obejmująca izolację, wymianę okien i drzwi oraz optymalizację systemu grzewczego.",
    icon: Zap,
    link: "/termomodernizacja",
  },
  {
    title: "Ocieplanie stropodachu",
    description:
      "Skuteczna izolacja stropodachu, która zapobiega ucieczce ciepła przez dach i zapewnia optymalną temperaturę na najwyższych kondygnacjach.",
    icon: Building,
    link: "/ocieplanie-stropodachu",
  },
  {
    title: "Naprawa izolacji po kunach",
    description:
      "Specjalistyczna usługa naprawy i odtworzenia izolacji uszkodzonej przez kuny. Zabezpieczamy przed ponownym wtargnięciem tych zwierząt.",
    icon: Tool,
    link: "/naprawa-izolacji-po-kunach",
  },
  {
    title: "Naprawa ocieplenia poddasza",
    description:
      "Naprawa nieszczelnej izolacji poddasza metodą wdmuchiwania, bez kosztownego remontu i z kontrolą termowizyjną efektów.",
    icon: Wrench,
    link: "/naprawa-ocieplenia-poddasza",
  },
  {
    title: "Termowizja",
    description:
      "Badania termowizyjne pozwalające szybko wykryć mostki termiczne, nieszczelności i miejsca utraty ciepła w budynku.",
    icon: Thermometer,
    link: "/termowizja",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-shell py-24">
      <div className="section-inner container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <p className="reveal-up mb-4 inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary/80">
            Oferta ISO-DACH
          </p>
          <h2 className="reveal-up reveal-delay-1 text-4xl font-bold text-primary sm:text-5xl">
            Nasze usługi
          </h2>
          <p className="reveal-up reveal-delay-2 mt-5 text-lg leading-relaxed text-muted-foreground">
            Precyzyjnie dobrane rozwiązania izolacyjne dla domów i budynków,
            zaprojektowane pod realne oszczędności energii i trwały komfort.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.link}
              className={`soft-card group flex h-full flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1.5 reveal-up ${
                index > 2 ? "reveal-delay-2" : "reveal-delay-1"
              }`}
            >
              <div className="mb-5 h-1.5 w-12 rounded-full bg-secondary/70 transition-all duration-300 group-hover:w-16" />
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <Link
                href={service.link}
                className="mt-6 inline-flex items-center text-sm font-semibold text-secondary-foreground transition-colors hover:text-secondary"
              >
                Dowiedz się więcej
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
