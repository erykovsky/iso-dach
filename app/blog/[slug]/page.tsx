import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPost } from "./blog-post";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/lib/blog";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    // Pobierz post z pliku Markdown na podstawie sluga
    const post = await getBlogPostBySlug(params.slug);

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
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: { slug: string };
}) {
    // Pobierz post z pliku Markdown na podstawie sluga
    const post = await getBlogPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return <BlogPost post={post} />;
}

export function generateStaticParams() {
    // Pobierz wszystkie slugi z plików Markdown
    const paths = getAllBlogSlugs();
    return paths;
}
