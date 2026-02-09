export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ISO-DACH",
    alternateName: "ISO DACH Dariusz Jagodziński",
    url: "https://www.iso-dach.eu",
    logo: "https://www.iso-dach.eu/logo.svg",
    description:
      "Profesjonalne usługi ocieplania budynków wełną celulozową. Izolacja poddaszy, ścian, stropów i piwnic.",
    foundingDate: "2010",
    founders: [
      {
        "@type": "Person",
        name: "Dariusz Jagodziński",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Jana Pawła II 34",
      addressLocality: "Dobrzany",
      postalCode: "73-130",
      addressRegion: "zachodniopomorskie",
      addressCountry: "PL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+48-660-441-941",
      contactType: "customer service",
      availableLanguage: ["Polish"],
    },
    sameAs: [],
    vatID: "PL8541386908",
    taxID: "8541386908",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 53.4285,
        longitude: 15.4241,
      },
      geoRadius: "100 km",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
