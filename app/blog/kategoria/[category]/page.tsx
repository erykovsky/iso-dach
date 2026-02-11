import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogList } from "@/app/blog/blog-list";
import { WebPageSchema } from "@/components/schema/webpage-schema";
import { getSortedBlogPosts } from "@/lib/blog";
import {
  BLOG_CATEGORIES,
  getBlogCategoryDescription,
  getBlogCategoryName,
  isBlogCategory,
} from "@/lib/blog-categories";

type CategoryPageParams = {
  category: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<CategoryPageParams>;
}): Promise<Metadata> {
  const { category } = await params;

  if (!isBlogCategory(category)) {
    return {
      title: "Kategoria nie znaleziona",
      description: "Nie znaleziono wskazanej kategorii artykułów.",
    };
  }

  const categoryName = getBlogCategoryName(category);
  const categoryDescription = getBlogCategoryDescription(category);
  const categoryUrl = `https://iso-dach.eu/blog/kategoria/${category}`;

  return {
    title: `${categoryName} | Blog ISO-DACH`,
    description: categoryDescription,
    alternates: {
      canonical: categoryUrl,
    },
    openGraph: {
      title: `${categoryName} | Blog ISO-DACH`,
      description: categoryDescription,
      url: categoryUrl,
      type: "website",
    },
  };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<CategoryPageParams>;
}) {
  const { category } = await params;

  if (!isBlogCategory(category)) {
    notFound();
  }

  const posts = getSortedBlogPosts();
  const categoryName = getBlogCategoryName(category);
  const categoryDescription = getBlogCategoryDescription(category);
  const categoryUrl = `https://iso-dach.eu/blog/kategoria/${category}`;

  return (
    <>
      <WebPageSchema
        title={`Blog: ${categoryName}`}
        description={categoryDescription}
        url={categoryUrl}
        breadcrumbs={[
          { name: "Strona główna", url: "https://iso-dach.eu" },
          { name: "Blog", url: "https://iso-dach.eu/blog" },
          { name: categoryName, url: categoryUrl },
        ]}
      />
      <BlogList posts={posts} activeCategory={category} />
    </>
  );
}

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({ category: category.id }));
}
