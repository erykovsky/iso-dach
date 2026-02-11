interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}

export function ArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  image = "https://iso-dach.eu/img/9.jpg",
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    image,
    datePublished,
    dateModified: dateModified ?? datePublished,
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
    inLanguage: "pl-PL",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
