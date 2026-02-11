interface VideoObjectSchemaProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  videoUrl: string;
  embedUrl: string;
  pageUrl?: string;
  duration?: string;
}

export function VideoObjectSchema({
  title,
  description,
  thumbnailUrl,
  uploadDate,
  videoUrl,
  embedUrl,
  pageUrl,
  duration = "PT3M",
}: VideoObjectSchemaProps) {
  const resolvedPageUrl = pageUrl ?? videoUrl;
  const videoId = `${videoUrl}#video`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": resolvedPageUrl,
        url: resolvedPageUrl,
        name: title,
        hasPart: {
          "@id": videoId,
        },
      },
      {
        "@type": "VideoObject",
        "@id": videoId,
        name: title,
        description,
        url: videoUrl,
        thumbnailUrl: [thumbnailUrl],
        uploadDate,
        duration,
        contentUrl: videoUrl,
        embedUrl,
        inLanguage: "pl-PL",
        isFamilyFriendly: true,
        mainEntityOfPage: {
          "@id": resolvedPageUrl,
        },
        potentialAction: {
          "@type": "WatchAction",
          target: embedUrl,
        },
        publisher: {
          "@type": "Organization",
          name: "ISO-DACH",
          logo: {
            "@type": "ImageObject",
            url: "https://iso-dach.eu/logo.svg",
          },
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
