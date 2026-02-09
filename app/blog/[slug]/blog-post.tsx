"use client";

import Link from "next/link";
import Image from "next/image";
import {
    ArrowLeft,
    CalendarIcon,
    Clock,
    Facebook,
    Linkedin,
    Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BlogPost as BlogPostType } from "@/lib/blog";

interface BlogPostProps {
    post: BlogPostType;
}

export function BlogPost({ post }: BlogPostProps) {
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

    // Funkcje do udostępniania artykułu na różnych platformach
    const shareOnFacebook = () => {
        const url = encodeURIComponent(window.location.href);
        window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            "_blank"
        );
    };

    const shareOnTwitter = () => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(post.title);
        window.open(
            `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
            "_blank"
        );
    };

    const shareOnLinkedIn = () => {
        const url = encodeURIComponent(window.location.href);
        window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
            "_blank"
        );
    };

    return (
        <div className="min-h-screen marketing-page">
            {/* Hero section */}
            <div className="marketing-hero py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {post.title}
                        </h1>
                        <p className="text-white/80 mb-6">{post.excerpt}</p>
                        <div className="flex items-center justify-center text-white/70 text-sm">
                            <CalendarIcon size={14} className="mr-1" />
                            <span>{formatDate(post.date)}</span>
                            <span className="mx-3">•</span>
                            <Clock size={14} className="mr-1" />
                            <span>{post.readTime} min czytania</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Article content */}
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto">
                    {/* Back to blog button */}
                    <div className="mb-8">
                        <Button asChild variant="outline" size="sm">
                            <Link href="/blog" className="flex items-center">
                                <ArrowLeft size={16} className="mr-2" />
                                Powrót do bloga
                            </Link>
                        </Button>
                    </div>

                    {/* Featured image */}
                    <div className="relative h-64 md:h-96 mb-8 marketing-image-frame">
                        <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Article body */}
                    <article className="prose prose-lg max-w-none">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: post.content || "",
                            }}
                        />
                    </article>

                    {/* Share buttons */}
                    <div className="mt-12 border-t border-primary/10 pt-6">
                        <div className="flex flex-wrap justify-end items-center gap-2">
                            <span className="mr-2 text-muted-foreground">
                                Udostępnij:
                            </span>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={shareOnFacebook}
                                className="rounded-full bg-white hover:bg-blue-100 hover:text-blue-600 border-gray-200"
                            >
                                <Facebook size={18} />
                                <span className="sr-only">
                                    Udostępnij na Facebooku
                                </span>
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={shareOnTwitter}
                                className="rounded-full bg-white hover:bg-blue-50 hover:text-blue-400 border-gray-200"
                            >
                                <Twitter size={18} />
                                <span className="sr-only">
                                    Udostępnij na X (Twitter)
                                </span>
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={shareOnLinkedIn}
                                className="rounded-full bg-white hover:bg-blue-50 hover:text-blue-700 border-gray-200"
                            >
                                <Linkedin size={18} />
                                <span className="sr-only">
                                    Udostępnij na LinkedIn
                                </span>
                            </Button>
                        </div>
                    </div>

                    {/* Related articles placeholder */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold mb-6">
                            Powiązane artykuły
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Placeholder for related articles */}
                            <div className="marketing-surface p-6">
                                <h3 className="text-lg font-semibold mb-2">
                                    Artykuły powiązane pojawią się tutaj
                                </h3>
                                <p className="text-muted-foreground">
                                    W przyszłości będziemy wyświetlać tutaj
                                    artykuły powiązane z tematyką tego wpisu.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
