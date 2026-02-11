import type { Metadata } from "next";
import { BlogList } from "./blog-list";
import { getSortedBlogPosts } from "@/lib/blog";
import { WebPageSchema } from "@/components/schema/webpage-schema";
import { BLOG_ALL_CATEGORY_ID } from "@/lib/blog-categories";

export const metadata: Metadata = {
    title: "Blog o izolacji i termomodernizacji",
    description:
        "Artykuły i praktyczne porady o ocieplaniu, termomodernizacji i poprawie efektywności energetycznej domów oraz budynków użytkowych.",
    keywords: [
        "blog o ociepleniu domu",
        "porady izolacja poddasza",
        "termomodernizacja poradnik",
        "mostki termiczne",
        "wełna celulozowa blog",
        "ISO-DACH blog",
    ],
    alternates: {
        canonical: "https://iso-dach.eu/blog",
    },
    openGraph: {
        title: "Blog o izolacji i termomodernizacji",
        description:
            "Artykuły i praktyczne porady o ocieplaniu, termomodernizacji i poprawie efektywności energetycznej budynków.",
        url: "https://iso-dach.eu/blog",
        type: "website",
        images: [
            {
                url: "/img/blog/1.jpg",
                width: 1200,
                height: 630,
                alt: "Blog ISO-DACH",
            },
        ],
    },
};

export default function BlogPage() {
    // Pobierz posty z plików Markdown po stronie serwera
    const posts = getSortedBlogPosts();

    // Przekaż posty do komponentu BlogList
    return (
        <>
            <WebPageSchema
                title="Blog"
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
