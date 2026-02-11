import type { Metadata } from "next";
import { BlogList } from "./blog-list";
import { getSortedBlogPosts } from "@/lib/blog";
import { WebPageSchema } from "@/components/schema/webpage-schema";
import { BLOG_ALL_CATEGORY_ID } from "@/lib/blog-categories";

export const metadata: Metadata = {
    title: "Blog",
    description:
        "Artykuły i porady na temat ocieplania, termomodernizacji i efektywności energetycznej budynków.",
    alternates: {
        canonical: "https://iso-dach.eu/blog",
    },
};

export default function BlogPage() {
    // Pobierz posty z plików Markdown po stronie serwera
    const posts = getSortedBlogPosts();

    // Przekaż posty do komponentu BlogList
    return (
        <>
            <WebPageSchema
                title="Blog ISO-DACH"
                description="Artykuły, poradniki i aktualności ze świata ocieplania, izolacji i termomodernizacji."
                url="https://iso-dach.eu/blog"
                breadcrumbs={[
                    { name: "Strona główna", url: "https://iso-dach.eu" },
                    { name: "Blog", url: "https://iso-dach.eu/blog" },
                ]}
            />
            <BlogList posts={posts} activeCategory={BLOG_ALL_CATEGORY_ID} />
        </>
    );
}
