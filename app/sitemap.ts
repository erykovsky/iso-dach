import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.iso-dach.eu";

  const routes = [
    "",
    "/ocieplanie-scian",
    "/izolacja-poddaszy",
    "/izolacja-stropow-piwnic",
    "/ocieplanie-stropodachu",
    "/ocieplenie-scian-z-pustka-powietrzna",
    "/naprawa-izolacji-scian",
    "/naprawa-izolacji-po-kunach",
    "/termomodernizacja",
    "/termowizja",
    "/galeria",
    "/cennik",
    "/kontakt",
    "/blog",
    "/polityka-prywatnosci",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
