interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
}

const formatSegmentName = (segment: string) =>
  segment
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const getBreadcrumbsFromUrl = (
  pageUrl: string,
  pageTitle: string
): Array<{ name: string; url: string }> => {
  let pathname = "/";

  try {
    pathname = new URL(pageUrl).pathname;
  } catch {
    pathname = "/";
  }

  const segments = pathname.split("/").filter(Boolean);
  const items: Array<{ name: string; url: string }> = [
    { name: "Strona główna", url: "https://iso-dach.eu" },
  ];

  if (segments.length === 0) {
    return items;
  }

  let currentPath = "";
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    items.push({
      name: index === segments.length - 1 ? pageTitle : formatSegmentName(segment),
      url: `https://iso-dach.eu${currentPath}`,
    });
  });

  return items;
};

export function WebPageSchema({
  title,
  description,
  url,
  image = "https://iso-dach.eu/img/home/slide.jpg",
  datePublished = "2024-01-01",
  dateModified = new Date().toISOString().split("T")[0],
  breadcrumbs,
}: WebPageSchemaProps) {
  const breadcrumbItems = (breadcrumbs ?? getBreadcrumbsFromUrl(url, title)).map(
    (item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })
  );

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
        url: "https://iso-dach.eu/logo.svg",
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
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
