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
  datePublished?: string;
  dateModified?: string;
}

const formatSegmentName = (segment: string) =>
  segment
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const getServiceBreadcrumbs = (url: string, name: string) => {
  let pathname = "/";

  try {
    pathname = new URL(url).pathname;
  } catch {
    pathname = "/";
  }

  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Strona główna",
      item: "https://iso-dach.eu",
    },
  ];

  if (segments.length === 0) {
    return breadcrumbs;
  }

  let currentPath = "";
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      "@type": "ListItem",
      position: index + 2,
      name: index === segments.length - 1 ? name : formatSegmentName(segment),
      item: `https://iso-dach.eu${currentPath}`,
    });
  });

  return breadcrumbs;
};

export function ServiceSchema({
  name,
  description,
  url,
  image = "https://iso-dach.eu/img/home/slide.jpg",
  reviews,
  datePublished = "2024-01-01",
  dateModified = "2026-02-11",
}: ServiceSchemaProps) {
  const serviceEntity = {
    "@type": "Service",
    "@id": `${url}#service`,
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
    ...(reviews && reviews.length > 0
      ? {
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
        }
      : {}),
  };

  const breadcrumbEntity = {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: getServiceBreadcrumbs(url, name),
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...serviceEntity,
        mainEntityOfPage: {
          "@id": url,
        },
      },
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name,
        datePublished,
        dateModified,
        author: {
          "@type": "Organization",
          name: "ISO-DACH",
          url: "https://iso-dach.eu",
        },
        publisher: {
          "@type": "Organization",
          name: "ISO-DACH",
          logo: {
            "@type": "ImageObject",
            url: "https://iso-dach.eu/logo.svg",
          },
        },
        breadcrumb: {
          "@id": `${url}#breadcrumb`,
        },
      },
      breadcrumbEntity,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
