export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "ISO-DACH",
    image: "https://iso-dach.eu/img/izolacje-budynkow-hero.jpg",
    "@id": "https://iso-dach.eu",
    url: "https://iso-dach.eu",
    telephone: "+48 660 441 941",
    email: "info@iso-dach.eu",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Jana Pawła II 34",
      addressLocality: "Dobrzany",
      postalCode: "73-130",
      addressRegion: "zachodniopomorskie",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.4285,
      longitude: 15.4241,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usługi ociepleniowe",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://iso-dach.eu/izolacja-poddaszy",
          itemOffered: {
            "@type": "Service",
            name: "Izolacja poddaszy",
            description:
              "Profesjonalna izolacja poddaszy poprawiająca komfort cieplny i obniżająca rachunki za ogrzewanie.",
          },
        },
        {
          "@type": "Offer",
          url: "https://iso-dach.eu/ocieplanie-scian",
          itemOffered: {
            "@type": "Service",
            name: "Ocieplanie ścian zewnętrznych",
            description:
              "Kompleksowe ocieplanie ścian zewnętrznych materiałami najwyższej jakości.",
          },
        },
        {
          "@type": "Offer",
          url: "https://iso-dach.eu/izolacja-stropow-piwnic",
          itemOffered: {
            "@type": "Service",
            name: "Izolacja stropów piwnic",
            description:
              "Skuteczna izolacja stropów nad piwnicą ograniczająca ucieczkę ciepła z parteru.",
          },
        },
        {
          "@type": "Offer",
          url: "https://iso-dach.eu/ocieplanie-stropodachu",
          itemOffered: {
            "@type": "Service",
            name: "Ocieplanie stropodachu",
            description:
              "Szybkie i skuteczne ocieplenie stropodachu bez ingerencji w konstrukcję dachu.",
          },
        },
        {
          "@type": "Offer",
          url: "https://iso-dach.eu/ocieplenie-scian-z-pustka-powietrzna",
          itemOffered: {
            "@type": "Service",
            name: "Ocieplenie ścian z pustką powietrzną",
            description:
              "Docieplanie ścian trójwarstwowych metodą wdmuchiwania materiału izolacyjnego.",
          },
        },
        {
          "@type": "Offer",
          url: "https://iso-dach.eu/naprawa-izolacji-po-kunach",
          itemOffered: {
            "@type": "Service",
            name: "Naprawa izolacji po kunach",
            description:
              "Naprawa uszkodzonej izolacji dachowej i przywrócenie pełnej szczelności przegrody.",
          },
        },
        {
          "@type": "Offer",
          url: "https://iso-dach.eu/termowizja",
          itemOffered: {
            "@type": "Service",
            name: "Termowizja budynków",
            description:
              "Badania termowizyjne pomagające wykryć mostki termiczne i miejsca strat ciepła.",
          },
        },
        {
          "@type": "Offer",
          url: "https://iso-dach.eu/termomodernizacja",
          itemOffered: {
            "@type": "Service",
            name: "Termomodernizacja budynków",
            description:
              "Kompleksowa termomodernizacja budynków mieszkalnych i przemysłowych.",
          },
        },
      ],
    },
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
    currenciesAccepted: "PLN",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
