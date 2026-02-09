interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}

export function WebPageSchema({
  title,
  description,
  url,
  image = "https://www.iso-dach.eu/img/9.jpg",
  datePublished = "2024-01-01",
  dateModified = new Date().toISOString().split("T")[0],
}: WebPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified,
    publisher: {
      "@type": "Organization",
      name: "ISO-DACH",
      logo: {
        "@type": "ImageObject",
        url: "https://www.iso-dach.eu/logo.png",
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Strona główna",
          item: "https://www.iso-dach.eu",
        },
      ],
    },
    inLanguage: "pl-PL",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
