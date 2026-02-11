interface ServiceReview {
  author: string;
  body: string;
  rating?: number;
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  reviews?: ServiceReview[];
}

const defaultReviews: ServiceReview[] = [
  {
    author: "Bogdan",
    body: "Szybko i sprawnie. Szczegóły w ciągu jednej wizyty, wykonanie w ciągu jednego dnia.",
    rating: 5,
  },
  {
    author: "Piotr",
    body: "Świetny kontakt, terminowość i fachowe wykonanie. Polecam współpracę.",
    rating: 5,
  },
];

export function ServiceSchema({
  name,
  description,
  url,
  image = "https://iso-dach.eu/img/9.jpg",
  reviews = defaultReviews,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url,
    image,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "ISO-DACH",
      url: "https://iso-dach.eu",
      telephone: "+48 660 441 941",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Województwo zachodniopomorskie",
      },
    },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "PLN",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name,
      },
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewBody: review.body,
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(review.rating ?? 5),
        bestRating: "5",
        worstRating: "1",
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
