"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { BlogPost } from "@/lib/blog";
import {
    BLOG_ALL_CATEGORY_ID,
    BLOG_CATEGORIES,
    getBlogCategoryName,
} from "@/lib/blog-categories";

interface BlogListProps {
    posts: BlogPost[];
    activeCategory?: string;
}

export function BlogList({
    posts,
    activeCategory = BLOG_ALL_CATEGORY_ID,
}: BlogListProps) {
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
                activeCategory === BLOG_ALL_CATEGORY_ID ||
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
        <div className="min-h-screen marketing-page">
            <section className="marketing-hero py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl text-center">
<h1 className="text-4xl font-bold text-white md:text-5xl">
                            Blog ISO-DACH
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-white/85">
                            Artykuły, porady i aktualności ze świata ocieplania i
                            termomodernizacji budynków.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-shell py-10 md:py-14">
                <div className="section-inner container mx-auto px-4">
                    <div className="soft-card mb-8 rounded-2xl p-4 md:p-5">
                        <div className="mx-auto max-w-md">
                            <Input
                                type="text"
                                placeholder="Szukaj artykułów..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="h-10 border-primary/15 bg-white/90"
                            />
                        </div>
                        <div className="mt-4 flex flex-wrap justify-center gap-2 md:gap-3">
                            {[
                                { id: BLOG_ALL_CATEGORY_ID, name: "Wszystkie" },
                                ...BLOG_CATEGORIES,
                            ].map((category) => (
                                <Link
                                    key={category.id}
                                    href={
                                        category.id === BLOG_ALL_CATEGORY_ID
                                            ? "/blog"
                                            : `/blog/kategoria/${category.id}`
                                    }
                                    className={`${
                                        activeCategory === category.id
                                            ? "pill-filter-active"
                                            : "pill-filter"
                                    }`}
                                >
                                    {category.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {filteredPosts.map((post) => (
                            <article
                                key={post.id}
                                className="marketing-tile flex flex-col"
                            >
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="group block"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={post.image || "/placeholder.svg"}
                                            alt={post.title || ""}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/35 to-transparent" />
                                        <span className="absolute right-3 top-3 rounded-full border border-white/50 bg-white/88 px-2.5 py-1 text-[11px] font-semibold text-primary shadow-sm backdrop-blur-sm">
                                            {getBlogCategoryName(post.category)}
                                        </span>
                                    </div>
                                </Link>
                                <div className="flex grow flex-col p-5 md:p-6">
                                    <div className="mb-3 flex items-center text-sm text-muted-foreground">
                                        <CalendarIcon size={14} className="mr-1" />
                                        <span>{formatDate(post.date)}</span>
                                        <span className="mx-2">•</span>
                                        <Clock size={14} className="mr-1" />
                                        <span>
                                            {post.readTime || 5} min czytania
                                        </span>
                                    </div>
                                    <h2 className="mb-3 text-xl font-semibold hover:text-primary transition-colors">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="mb-5 grow text-sm leading-relaxed text-muted-foreground md:text-base">
                                        {post.excerpt}
                                    </p>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="mt-auto w-full border-primary/20 hover:bg-primary/5"
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
                        <div className="py-12 text-center">
                            <p className="text-gray-500">
                                Nie znaleziono artykułów spełniających kryteria
                                wyszukiwania.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
