import type { Metadata } from "next";
import { BlogList } from "./blog-list";
import { getSortedBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
    title: "Blog | ISO-DACH",
    description:
        "Artykuły i porady na temat ocieplania, termomodernizacji i efektywności energetycznej budynków.",
    alternates: {
        canonical: "https://www.iso-dach.eu/blog",
    },
};

export default function BlogPage() {
    // Pobierz posty z plików Markdown po stronie serwera
    const posts = getSortedBlogPosts();

    // Przekaż posty do komponentu BlogList
    return <BlogList posts={posts} />;
}
