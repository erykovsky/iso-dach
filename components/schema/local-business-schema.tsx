export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "ISO-DACH",
    image: "https://iso-dach.eu/img/9.jpg",
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
          itemOffered: {
            "@type": "Service",
            name: "Izolacja poddaszy wełną celulozową",
            description:
              "Profesjonalna izolacja poddaszy z wykorzystaniem wełny celulozowej. Oszczędność energii do 40%.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ocieplanie ścian zewnętrznych",
            description:
              "Kompleksowe ocieplanie ścian zewnętrznych materiałami najwyższej jakości.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Termomodernizacja budynków",
            description:
              "Kompleksowa termomodernizacja budynków mieszkalnych i przemysłowych.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
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
