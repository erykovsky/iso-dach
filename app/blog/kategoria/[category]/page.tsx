import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogList } from "@/app/blog/blog-list";
import { WebPageSchema } from "@/components/schema/webpage-schema";
import { getSortedBlogPosts } from "@/lib/blog";
import {
  getBlogCategoryDescription,
  getBlogCategoryName,
  isBlogCategory,
} from "@/lib/blog-categories";

export const dynamic = "force-dynamic";

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
    title: `${categoryName}: artykuły i poradniki`,
    description: categoryDescription,
    keywords: [
      `${categoryName.toLowerCase()} blog`,
      `${categoryName.toLowerCase()} porady`,
      "ocieplanie i izolacje",
      "termomodernizacja",
      "ISO-DACH blog",
    ],
    alternates: {
      canonical: categoryUrl,
    },
    openGraph: {
      title: `${categoryName}: artykuły i poradniki`,
      description: categoryDescription,
      url: categoryUrl,
      type: "website",
      images: [
        {
          url: "/img/blog/1.jpg",
          width: 1200,
          height: 630,
          alt: `Kategoria bloga: ${categoryName}`,
        },
      ],
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

  const posts = await getSortedBlogPosts();
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
