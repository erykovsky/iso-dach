import type { MetadataRoute } from "next";
import { getSortedBlogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.iso-dach.eu";

  const routes = [
    "",
    "/ocieplanie-scian",
    "/izolacja-poddaszy",
    "/izolacja-stropow-piwnic",
    "/ocieplanie-stropodachu",
    "/ocieplenie-scian-z-pustka-powietrzna",
    "/naprawa-izolacji-po-kunach",
    "/termomodernizacja",
    "/termowizja",
    "/galeria",
    "/cennik",
    "/kontakt",
    "/blog",
    "/polityka-prywatnosci",
  ];

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getSortedBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
