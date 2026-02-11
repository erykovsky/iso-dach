interface VideoObjectSchemaProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  videoUrl: string;
  embedUrl: string;
  duration?: string;
}

export function VideoObjectSchema({
  title,
  description,
  thumbnailUrl,
  uploadDate,
  videoUrl,
  embedUrl,
  duration = "PT3M",
}: VideoObjectSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: title,
    description: description,
    thumbnailUrl: thumbnailUrl,
    uploadDate: uploadDate,
    duration: duration,
    contentUrl: videoUrl,
    embedUrl: embedUrl,
    publisher: {
      "@type": "Organization",
      name: "ISO-DACH",
      logo: {
        "@type": "ImageObject",
        url: "https://iso-dach.eu/logo.svg",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
