import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { getSortedBlogPosts } from "@/lib/blog";
import { BLOG_CATEGORIES } from "@/lib/blog-categories";
import { galleryItems } from "@/app/galeria/gallery-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iso-dach.eu";
  const blogPosts = getSortedBlogPosts();

  const routeToFileMap: Record<string, string> = {
    "": "app/page.tsx",
    "/o-nas": "app/o-nas/page.tsx",
    "/izolacja-poddaszy": "app/izolacja-poddaszy/page.tsx",
    "/izolacja-stropow-piwnic": "app/izolacja-stropow-piwnic/page.tsx",
    "/ocieplanie-stropodachu": "app/ocieplanie-stropodachu/page.tsx",
    "/ocieplenie-scian-z-pustka-powietrzna":
      "app/ocieplenie-scian-z-pustka-powietrzna/page.tsx",
    "/naprawa-izolacji-po-kunach": "app/naprawa-izolacji-po-kunach/page.tsx",
    "/naprawa-ocieplenia-poddasza": "app/naprawa-ocieplenia-poddasza/page.tsx",
    "/termomodernizacja": "app/termomodernizacja/page.tsx",
    "/termowizja": "app/termowizja/page.tsx",
    "/galeria": "app/galeria/page.tsx",
    "/cennik": "app/cennik/page.tsx",
    "/kontakt": "app/kontakt/page.tsx",
    "/blog": "app/blog/page.tsx",
    "/polityka-prywatnosci": "app/polityka-prywatnosci/page.tsx",
  };

  const getFileLastModified = (relativeFilePath: string): Date => {
    try {
      return fs.statSync(path.join(process.cwd(), relativeFilePath)).mtime;
    } catch {
      return new Date();
    }
  };

  const parseDate = (value?: string): Date => {
    if (!value) {
      return new Date();
    }

    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
  };

  const routes = [
    "",
    "/o-nas",
    "/izolacja-poddaszy",
    "/izolacja-stropow-piwnic",
    "/ocieplanie-stropodachu",
    "/ocieplenie-scian-z-pustka-powietrzna",
    "/naprawa-izolacji-po-kunach",
    "/naprawa-ocieplenia-poddasza",
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
    lastModified: getFileLastModified(routeToFileMap[route] ?? "app/page.tsx"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: parseDate(post.lastModified ?? post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = BLOG_CATEGORIES.map((category) => {
    const categoryPosts = blogPosts.filter((post) => post.category === category.id);
    const categoryLastModified =
      categoryPosts.length > 0
        ? categoryPosts.reduce<Date>((latestDate, post) => {
            const postModified = parseDate(post.lastModified ?? post.date);
            return postModified > latestDate ? postModified : latestDate;
          }, parseDate(categoryPosts[0]?.lastModified ?? categoryPosts[0]?.date))
        : getFileLastModified("app/blog/kategoria/[category]/page.tsx");

    return {
      url: `${baseUrl}/blog/kategoria/${category.id}`,
      lastModified: categoryLastModified,
      changeFrequency: "monthly",
      priority: 0.65,
    };
  });

  const galleryRoutes: MetadataRoute.Sitemap = galleryItems.map((item) => ({
    url: `${baseUrl}/galeria/${item.id}`,
    lastModified: getFileLastModified("app/galeria/gallery-data.ts"),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...categoryRoutes, ...blogRoutes, ...galleryRoutes];
}
