"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { BlogPost } from "@/lib/blog";

// Kategorie artykułów
const categories = [
    { id: "wszystkie", name: "Wszystkie" },
    { id: "porady", name: "Porady" },
    { id: "technologie", name: "Technologie" },
    { id: "dotacje", name: "Dotacje" },
    { id: "realizacje", name: "Realizacje" },
];

interface BlogListProps {
    posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
    const [activeCategory, setActiveCategory] = useState("wszystkie");
    const [searchQuery, setSearchQuery] = useState("");

    // Użyj przekazanych postów lub fallbackPosts jeśli posts jest undefined
    const blogPosts = posts;

    // Sortuj artykuły od najnowszych do najstarszych
    const sortedBlogPosts = [...blogPosts].sort((a, b) => {
        // Konwertuj daty na obiekty Date
        const dateA = new Date(a.date || 0);
        const dateB = new Date(b.date || 0);
        // Sortuj malejąco (od najnowszych do najstarszych)
        return dateB.getTime() - dateA.getTime();
    });

    // Filtrowanie artykułów według kategorii i wyszukiwania
    const filteredPosts = sortedBlogPosts
        .filter(
            (post) =>
                activeCategory === "wszystkie" ||
                post.category === activeCategory
        )
        .filter(
            (post) =>
                (post.title?.toLowerCase() || "").includes(
                    searchQuery.toLowerCase()
                ) ||
                (post.excerpt?.toLowerCase() || "").includes(
                    searchQuery.toLowerCase()
                )
        );

    // Formatowanie daty
    const formatDate = (dateString: string) => {
        if (!dateString) return "";
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString("pl-PL", {
                day: "numeric",
                month: "long",
                year: "numeric",
            });
        } catch (error) {
            console.error("Error formatting date:", error);
            return dateString;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-primary py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-white text-center">
                        Blog ISO-DACH
                    </h1>
                    <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto">
                        Artykuły, porady i aktualności ze świata ocieplania i
                        termomodernizacji budynków. Dzielimy się wiedzą i
                        doświadczeniem.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                {/* Wyszukiwarka */}
                <div className="mb-8">
                    <Input
                        type="text"
                        placeholder="Szukaj artykułów..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="max-w-md mx-auto"
                    />
                </div>

                {/* Filtry kategorii */}
                <div className="mb-10">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                                    activeCategory === category.id
                                        ? "bg-primary text-white shadow-md"
                                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                                }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Lista artykułów */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
                        >
                            <Link
                                href={`/blog/${post.slug}`}
                                className="block relative h-48"
                            >
                                <Image
                                    src={post.image || "/placeholder.svg"}
                                    alt={post.title || ""}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
                                    {categories.find(
                                        (c) => c.id === post.category
                                    )?.name || "Inne"}
                                </div>
                            </Link>
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex items-center text-gray-500 text-sm mb-3">
                                    <CalendarIcon size={14} className="mr-1" />
                                    <span>{formatDate(post.date)}</span>
                                    <span className="mx-2">•</span>
                                    <Clock size={14} className="mr-1" />
                                    <span>
                                        {post.readTime || 5} min czytania
                                    </span>
                                </div>
                                <h2 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-gray-600 mb-4 flex-grow">
                                    {post.excerpt}
                                </p>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="w-full mt-auto"
                                >
                                    <Link href={`/blog/${post.slug}`}>
                                        Czytaj więcej
                                    </Link>
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">
                            Nie znaleziono artykułów spełniających kryteria
                            wyszukiwania.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
