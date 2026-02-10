import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPost } from "./blog-post";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/lib/blog";

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
            title: "Artykuł nie znaleziony | ISO-DACH",
            description:
                "Przepraszamy, nie znaleziono artykułu o podanym adresie.",
        };
    }

    return {
        title: `${post.title} | ISO-DACH Blog`,
        description: post.excerpt,
        alternates: {
            canonical: `https://iso-dach.eu/blog/${post.slug}`,
        },
        openGraph: {
            type: "article",
            title: post.title,
            description: post.excerpt,
            url: `https://iso-dach.eu/blog/${post.slug}`,
            images: post.image ? [post.image] : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: post.image ? [post.image] : undefined,
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

    return <BlogPost post={post} />;
}

export function generateStaticParams() {
    // Pobierz wszystkie slugi z plików Markdown
    return getAllBlogSlugs();
}
