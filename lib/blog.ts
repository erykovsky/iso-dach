import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { cache } from "react";
import { getPayloadClient } from "@/lib/payload";
import { isBlogCategory, type BlogCategoryId } from "@/lib/blog-categories";

const contentDirectory = path.join(process.cwd(), "content/blog");
const defaultBlogImage = "/img/blog/1.jpg";
const defaultBlogCategory: BlogCategoryId = "porady";

type LexicalContent = {
  root: {
    children?: unknown[];
    [key: string]: unknown;
  };
  [key: string]: unknown;
};

export type BlogPost = {
  faqs?: {
    question: string;
    answer: string;
  }[];
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: BlogCategoryId;
  image: string;
  date: string;
  readTime: number;
  lastModified?: string;
  content?: string;
  contentLexical?: LexicalContent;
};

type BlogMediaDoc = {
  alt?: string | null;
  url?: string | null;
};

type BlogPostDoc = {
  id: number | string;
  title?: string | null;
  slug?: string | null;
  excerpt?: string | null;
  category?: string | null;
  image?: number | string | BlogMediaDoc | null;
  date?: string | null;
  readTime?: number | null;
  updatedAt?: string | null;
  faqs?: Array<{ question?: string | null; answer?: string | null }> | null;
  content?: unknown;
};

const normalizeImageUrl = (url: string): string =>
  url.startsWith("http://") || url.startsWith("https://") || url.startsWith("/")
    ? url
    : `/${url}`;

const parseDateTimestamp = (value: string | undefined): number => {
  if (!value) {
    return 0;
  }

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? 0 : date.getTime();
};

const toCategory = (value: string | null | undefined): BlogCategoryId =>
  value && isBlogCategory(value) ? value : defaultBlogCategory;

const normalizeFaqs = (
  faqs: BlogPostDoc["faqs"],
): BlogPost["faqs"] | undefined => {
  if (!Array.isArray(faqs)) {
    return undefined;
  }

  const normalized = faqs
    .map((faq) => ({
      question: typeof faq.question === "string" ? faq.question.trim() : "",
      answer: typeof faq.answer === "string" ? faq.answer.trim() : "",
    }))
    .filter((faq) => faq.question.length > 0 && faq.answer.length > 0);

  return normalized.length > 0 ? normalized : undefined;
};

const parseNumericId = (value: number | string): number => {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  const parsed = Number.parseInt(String(value), 10);
  return Number.isFinite(parsed) ? parsed : 1;
};

const getPayloadImageUrl = (image: BlogPostDoc["image"]): string => {
  if (image && typeof image === "object" && typeof image.url === "string") {
    return normalizeImageUrl(image.url);
  }

  return defaultBlogImage;
};

const toReadableDate = (value: string | undefined | null): string =>
  value && value.trim().length > 0 ? value : new Date().toISOString();

const mapPayloadDocToSummary = (doc: BlogPostDoc): BlogPost | null => {
  const title = typeof doc.title === "string" ? doc.title.trim() : "";
  const slug = typeof doc.slug === "string" ? doc.slug.trim() : "";
  const excerpt = typeof doc.excerpt === "string" ? doc.excerpt.trim() : "";

  if (!title || !slug || !excerpt) {
    return null;
  }

  return {
    id: parseNumericId(doc.id),
    title,
    slug,
    excerpt,
    category: toCategory(doc.category),
    image: getPayloadImageUrl(doc.image),
    date: toReadableDate(doc.date),
    readTime:
      typeof doc.readTime === "number" && doc.readTime > 0
        ? Math.round(doc.readTime)
        : 5,
    lastModified: doc.updatedAt ?? undefined,
    faqs: normalizeFaqs(doc.faqs),
  };
};

const getMarkdownFileNames = (): string[] => {
  try {
    return fs
      .readdirSync(contentDirectory)
      .filter((fileName) => fileName.endsWith(".md"));
  } catch {
    return [];
  }
};

const getSortedMarkdownPosts = (): BlogPost[] => {
  const fileNames = getMarkdownFileNames();

  const posts = fileNames.map((fileName, index) => {
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const fileStats = fs.statSync(fullPath);
    const matterResult = matter(fileContents);
    const data = matterResult.data as Partial<BlogPost>;

    return {
      id: index + 1,
      title: data.title ?? "",
      slug: data.slug ?? "",
      excerpt: data.excerpt ?? "",
      category:
        typeof data.category === "string" && isBlogCategory(data.category)
          ? data.category
          : defaultBlogCategory,
      image: data.image ? normalizeImageUrl(data.image) : defaultBlogImage,
      date: data.date ?? new Date().toISOString(),
      readTime: typeof data.readTime === "number" ? data.readTime : 5,
      lastModified: fileStats.mtime.toISOString(),
      faqs: Array.isArray(data.faqs) ? data.faqs : undefined,
    } satisfies BlogPost;
  });

  return posts.sort((a, b) => parseDateTimestamp(b.date) - parseDateTimestamp(a.date));
};

const getMarkdownPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const fileNames = getMarkdownFileNames();
  const matchingFile = fileNames.find((fileName) => {
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return matterResult.data.slug === slug;
  });

  if (!matchingFile) {
    return null;
  }

  const fullPath = path.join(contentDirectory, matchingFile);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const fileStats = fs.statSync(fullPath);
  const matterResult = matter(fileContents);
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  const data = matterResult.data as Partial<BlogPost>;
  const allPosts = getSortedMarkdownPosts();
  const postIndex = allPosts.findIndex((post) => post.slug === slug);

  return {
    id: postIndex >= 0 ? postIndex + 1 : 1,
    title: data.title ?? "",
    slug: data.slug ?? slug,
    excerpt: data.excerpt ?? "",
    category:
      typeof data.category === "string" && isBlogCategory(data.category)
        ? data.category
        : defaultBlogCategory,
    image: data.image ? normalizeImageUrl(data.image) : defaultBlogImage,
    date: data.date ?? new Date().toISOString(),
    readTime: typeof data.readTime === "number" ? data.readTime : 5,
    lastModified: fileStats.mtime.toISOString(),
    faqs: Array.isArray(data.faqs) ? data.faqs : undefined,
    content: contentHtml,
  };
};

export const getSortedBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const markdownPosts = getSortedMarkdownPosts();

  try {
    const payload = await getPayloadClient();
    if (!payload) {
      return markdownPosts;
    }

    const result = await payload.find({
      collection: "blog-posts",
      depth: 1,
      limit: 300,
      pagination: false,
      sort: "-date",
    });

    const cmsPosts = (result.docs as BlogPostDoc[])
      .map(mapPayloadDocToSummary)
      .filter((post): post is BlogPost => Boolean(post))
      .sort((a, b) => parseDateTimestamp(b.date) - parseDateTimestamp(a.date));

    if (cmsPosts.length === 0) {
      return markdownPosts;
    }

    const postsBySlug = new Map<string, BlogPost>();
    markdownPosts.forEach((post) => postsBySlug.set(post.slug, post));
    cmsPosts.forEach((post) => postsBySlug.set(post.slug, post));

    return Array.from(postsBySlug.values())
      .sort((a, b) => parseDateTimestamp(b.date) - parseDateTimestamp(a.date))
      .map((post, index) => ({
        ...post,
        id: index + 1,
      }));
  } catch (error) {
    console.error("[blog] Failed to fetch posts from Payload:", error);
  }

  return markdownPosts;
});

export const getBlogPostBySlug = cache(async (slug: string): Promise<BlogPost | null> => {
  try {
    const payload = await getPayloadClient();

    if (payload) {
      const result = await payload.find({
        collection: "blog-posts",
        depth: 1,
        limit: 1,
        pagination: false,
        where: {
          slug: {
            equals: slug,
          },
        },
      });

      const doc = (result.docs as BlogPostDoc[])[0];
      if (doc) {
        const mapped = mapPayloadDocToSummary(doc);

        if (mapped) {
          return {
            ...mapped,
            content: typeof doc.content === "string" ? doc.content : undefined,
            contentLexical:
              doc.content && typeof doc.content === "object" && "root" in doc.content
                ? (doc.content as LexicalContent)
                : undefined,
          };
        }
      }
    }
  } catch (error) {
    console.error(`[blog] Failed to fetch post "${slug}" from Payload:`, error);
  }

  return getMarkdownPostBySlug(slug);
});

export const getAllBlogSlugs = cache(async (): Promise<Array<{ slug: string }>> => {
  const posts = await getSortedBlogPosts();

  return posts
    .map((post) => post.slug)
    .filter((slug, index, array) => slug && array.indexOf(slug) === index)
    .map((slug) => ({ slug }));
});
