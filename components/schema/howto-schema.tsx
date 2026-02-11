interface HowToStep {
  name: string;
  text: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  totalTime?: string;
  steps: HowToStep[];
}

export function HowToSchema({
  name,
  description,
  url,
  image = "https://iso-dach.eu/img/home/slide.jpg",
  totalTime = "P3D",
  steps,
}: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url,
    image,
    totalTime,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
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
