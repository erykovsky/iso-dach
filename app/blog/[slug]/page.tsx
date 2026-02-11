import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPost } from "./blog-post";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/lib/blog";
import { ArticleSchema } from "@/components/schema/article-schema";
import { FAQPageSchema } from "@/components/schema/faq-schema";
import { getBlogCategoryName } from "@/lib/blog-categories";

const MAX_TITLE_LENGTH = 48;
const MIN_DESCRIPTION_LENGTH = 120;
const MAX_DESCRIPTION_LENGTH = 160;

const shortenAtWord = (value: string, maxLength: number) => {
  const trimmed = value.trim();
  if (trimmed.length <= maxLength) {
    return trimmed;
  }

  const shortened = trimmed.slice(0, maxLength - 1);
  const lastSpace = shortened.lastIndexOf(" ");
  const safeValue = lastSpace > 20 ? shortened.slice(0, lastSpace) : shortened;
  return `${safeValue}…`;
};

const buildSeoTitle = (title: string) => shortenAtWord(title, MAX_TITLE_LENGTH);

const buildSeoDescription = (excerpt: string, title: string) => {
  const normalizedExcerpt = excerpt.trim();
  if (normalizedExcerpt.length >= MIN_DESCRIPTION_LENGTH) {
    return shortenAtWord(normalizedExcerpt, MAX_DESCRIPTION_LENGTH);
  }

  const supplement = `Dowiedz się, jak podejść do tematu: ${title.toLowerCase()}.`;
  const combined = `${normalizedExcerpt} ${supplement}`.trim();
  return shortenAtWord(combined, MAX_DESCRIPTION_LENGTH);
};

const toIsoDateTime = (value: string) => {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return parsed.toISOString();
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    // Pobierz post z pliku Markdown na podstawie sluga
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        return {
            title: "Artykuł nie został znaleziony",
            description:
                "Przepraszamy, nie znaleziono artykułu o podanym adresie.",
        };
    }

    const seoTitle = buildSeoTitle(post.title);
    const seoDescription = buildSeoDescription(post.excerpt, post.title);
    const seoImage = post.image
      ? post.image.startsWith("http")
        ? post.image
        : `https://iso-dach.eu${post.image}`
      : undefined;

    const publishedTime = toIsoDateTime(post.date);
    const modifiedTime = toIsoDateTime(post.lastModified ?? post.date);

    return {
        title: seoTitle,
        description: seoDescription,
        authors: [{ name: "Zespół ISO-DACH" }],
        keywords: [
            post.title,
            `${getBlogCategoryName(post.category)} blog`,
            "ocieplanie i izolacje",
            "poradnik termomodernizacji",
            "ISO-DACH",
        ],
        alternates: {
            canonical: `https://iso-dach.eu/blog/${post.slug}`,
        },
        openGraph: {
            type: "article",
            title: seoTitle,
            description: seoDescription,
            url: `https://iso-dach.eu/blog/${post.slug}`,
            publishedTime,
            modifiedTime,
            authors: ["ISO-DACH"],
            images: seoImage ? [seoImage] : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: seoTitle,
            description: seoDescription,
            images: seoImage ? [seoImage] : undefined,
        },
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    // Pobierz post z pliku Markdown na podstawie sluga
    const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleUrl = `https://iso-dach.eu/blog/${post.slug}`;
  const articleImage = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `https://iso-dach.eu${post.image}`
    : undefined;
  const articleFaqs =
    post.faqs?.filter((faq) => faq.question && faq.answer) ?? [];
  const articlePublishedAt = toIsoDateTime(post.date);
  const articleModifiedAt = toIsoDateTime(post.lastModified ?? post.date);

  return (
    <>
      <ArticleSchema
        headline={post.title}
        description={post.excerpt}
        url={articleUrl}
        datePublished={articlePublishedAt}
        dateModified={articleModifiedAt}
        image={articleImage}
      />
      {articleFaqs.length > 0 ? <FAQPageSchema faqs={articleFaqs} /> : null}
      <BlogPost post={post} />
    </>
  );
}

export function generateStaticParams() {
    // Pobierz wszystkie slugi z plików Markdown
    return getAllBlogSlugs();
}
