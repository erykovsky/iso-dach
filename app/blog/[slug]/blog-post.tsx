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
import { getBlogCategoryName } from "@/lib/blog-categories";

interface BlogPostProps {
    post: BlogPostType;
}

export function BlogPost({ post }: BlogPostProps) {
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
            <section className="marketing-hero py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl text-center">
<h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                            {post.title}
                        </h1>
                        <p className="mb-6 text-white/85">{post.excerpt}</p>
                        <div className="flex flex-wrap items-center justify-center gap-y-1 text-sm text-white/70">
                            <CalendarIcon size={14} className="mr-1" />
                            <span>{formatDate(post.date)}</span>
                            <span className="mx-3">•</span>
                            <Clock size={14} className="mr-1" />
                            <span>{post.readTime} min czytania</span>
                            <span className="mx-3">•</span>
                            <span>{getBlogCategoryName(post.category)}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-shell py-10 md:py-14">
                <div className="section-inner container mx-auto px-4">
                    <div className="mx-auto max-w-3xl">
                        <div className="mb-8">
                            <Button
                                asChild
                                variant="outline"
                                size="sm"
                                className="border-primary/20"
                            >
                                <Link href="/blog" className="flex items-center">
                                    <ArrowLeft size={16} className="mr-2" />
                                    Powrót do bloga
                                </Link>
                            </Button>
                        </div>

                        <div className="relative mb-8 h-64 marketing-image-frame md:h-96">
                            <Image
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 768px"
                                priority
                            />
                        </div>

                        <article className="marketing-surface p-5 sm:p-6 md:p-8">
                            <div
                                className="prose prose-lg max-w-none"
                                dangerouslySetInnerHTML={{
                                    __html: post.content || "",
                                }}
                            />
                        </article>

                        <div className="mt-8 border-t border-primary/10 pt-6">
                            <div className="flex flex-wrap items-center justify-end gap-2">
                                <span className="mr-2 text-sm text-muted-foreground">
                                    Udostępnij:
                                </span>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={shareOnFacebook}
                                    className="rounded-full border-primary/20 bg-white hover:bg-primary/5 hover:text-primary"
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
                                    className="rounded-full border-primary/20 bg-white hover:bg-primary/5 hover:text-primary"
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
                                    className="rounded-full border-primary/20 bg-white hover:bg-primary/5 hover:text-primary"
                                >
                                    <Linkedin size={18} />
                                    <span className="sr-only">
                                        Udostępnij na LinkedIn
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
