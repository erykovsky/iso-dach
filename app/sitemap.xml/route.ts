import fs from "fs";
import path from "path";
import { getSortedBlogPosts } from "@/lib/blog";
import { BLOG_CATEGORIES } from "@/lib/blog-categories";

const staticRouteToFileMap: Record<string, string> = {
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

type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency: "daily" | "weekly" | "monthly";
  priority: number;
};

const parseDate = (value?: string): Date => {
  if (!value) {
    return new Date();
  }

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
};

const getFileLastModified = (relativeFilePath: string): Date => {
  try {
    return fs.statSync(path.join(process.cwd(), relativeFilePath)).mtime;
  } catch {
    return new Date();
  }
};

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const getBaseUrl = (request: Request) => {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (configuredUrl) {
    return configuredUrl;
  }

  const requestUrl = new URL(request.url);
  return `${requestUrl.protocol}//${requestUrl.host}`;
};

const buildSitemapEntries = (baseUrl: string): SitemapEntry[] => {
  const staticRoutes: SitemapEntry[] = Object.keys(staticRouteToFileMap).map((route) => {
    const changeFrequency: SitemapEntry["changeFrequency"] =
      route === "" ? "weekly" : "monthly";

    return {
      url: `${baseUrl}${route}`,
      lastModified: getFileLastModified(staticRouteToFileMap[route] ?? "app/page.tsx"),
      changeFrequency,
      priority: route === "" ? 1 : 0.8,
    };
  });

  const blogPosts = getSortedBlogPosts();

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: parseDate(post.lastModified ?? post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const categoryRoutes = BLOG_CATEGORIES.map((category) => {
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
      changeFrequency: "monthly" as const,
      priority: 0.65,
    };
  });

  return [...staticRoutes, ...categoryRoutes, ...blogRoutes];
};

export const revalidate = 3600;

export function GET(request: Request) {
  const baseUrl = getBaseUrl(request);
  const entries = buildSitemapEntries(baseUrl);

  const urlset = entries
    .map((entry) => {
      const loc = escapeXml(entry.url);
      const lastMod = entry.lastModified.toISOString();

      return [
        "<url>",
        `<loc>${loc}</loc>`,
        `<lastmod>${lastMod}</lastmod>`,
        `<changefreq>${entry.changeFrequency}</changefreq>`,
        `<priority>${entry.priority.toFixed(2)}</priority>`,
        "</url>",
      ].join("");
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlset}</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
