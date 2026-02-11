"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    ArrowLeft,
    ArrowRight,
    CalendarIcon,
    Clock,
    Facebook,
    HelpCircle,
    Linkedin,
    Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BlogPost as BlogPostType } from "@/lib/blog";
import { getBlogCategoryName } from "@/lib/blog-categories";

interface BlogPostProps {
    post: BlogPostType;
}

type RelatedLink = {
    href: string;
    label: string;
};

const relatedLinksByCategory: Record<string, RelatedLink[]> = {
    porady: [
        { href: "/kontakt", label: "Bezpłatna wycena" },
        { href: "/termowizja", label: "Badania termowizyjne" },
        { href: "/termomodernizacja", label: "Termomodernizacja" },
    ],
    technologie: [
        {
            href: "/ocieplenie-scian-z-pustka-powietrzna",
            label: "Ocieplenie ścian z pustką powietrzną",
        },
        { href: "/izolacja-poddaszy", label: "Izolacja poddaszy" },
        { href: "/ocieplanie-stropodachu", label: "Ocieplanie stropodachu" },
    ],
    realizacje: [
        { href: "/galeria", label: "Galeria realizacji" },
        { href: "/naprawa-ocieplenia-poddasza", label: "Naprawa ocieplenia poddasza" },
        { href: "/naprawa-izolacji-po-kunach", label: "Naprawa izolacji po kunach" },
    ],
    dotacje: [
        { href: "/termomodernizacja", label: "Termomodernizacja" },
        { href: "/cennik", label: "Cennik usług" },
        { href: "/kontakt", label: "Kontakt i wycena" },
    ],
};

const relatedLinksBySlug: Record<string, RelatedLink[]> = {
    "ile-kosztuje-ocieplenie-poddasza-celuloza-2026": [
        { href: "/izolacja-poddaszy", label: "Ocieplenie poddasza celulozą" },
        { href: "/cennik", label: "Cennik ocieplenia" },
        { href: "/kontakt", label: "Poproś o wycenę" },
    ],
    "jak-naprawic-izolacje-po-kunach-bez-zrywania-poddasza": [
        { href: "/naprawa-izolacji-po-kunach", label: "Naprawa izolacji po kunach" },
        { href: "/naprawa-ocieplenia-poddasza", label: "Naprawa ocieplenia poddasza" },
        { href: "/termowizja", label: "Diagnostyka termowizyjna" },
    ],
    "kiedy-warto-zrobic-badanie-termowizyjne-domu": [
        { href: "/termowizja", label: "Umów badanie termowizyjne" },
        { href: "/izolacja-poddaszy", label: "Izolacja poddaszy" },
        { href: "/ocieplanie-stropodachu", label: "Ocieplanie stropodachu" },
    ],
    "ocieplenie-scian-z-pustka-powietrzna-jak-to-wyglada": [
        {
            href: "/ocieplenie-scian-z-pustka-powietrzna",
            label: "Usługa: ściany z pustką powietrzną",
        },
        { href: "/termomodernizacja", label: "Kompleksowa termomodernizacja" },
        { href: "/kontakt", label: "Zapytaj o realizację" },
    ],
    "ocieplanie-stropodachu-w-starym-budynku-co-warto-wiedziec": [
        { href: "/ocieplanie-stropodachu", label: "Usługa: ocieplanie stropodachu" },
        { href: "/termowizja", label: "Termowizja przed realizacją" },
        { href: "/kontakt", label: "Wycena dla budynku" },
    ],
    "dofinansowanie-termomodernizacji-2026-jak-przygotowac-wniosek": [
        { href: "/termomodernizacja", label: "Zakres termomodernizacji" },
        { href: "/cennik", label: "Orientacyjny cennik" },
        { href: "/kontakt", label: "Konsultacja i wycena" },
    ],
    "realizacja-ocieplenia-poddasza-zachodniopomorskie-jak-wyglada": [
        { href: "/izolacja-poddaszy", label: "Usługa: izolacja poddaszy" },
        { href: "/galeria", label: "Zobacz realizacje" },
        { href: "/kontakt", label: "Zapytaj o termin" },
    ],
};

export function BlogPost({ post }: BlogPostProps) {
    const publishedDateIso = (() => {
        try {
            return new Date(post.date).toISOString();
        } catch {
            return post.date;
        }
    })();

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

    const relatedLinks = (() => {
        const links = [
            ...(relatedLinksBySlug[post.slug] ?? []),
            ...(relatedLinksByCategory[post.category] ?? []),
        ];

        const unique = new Map<string, RelatedLink>();
        links.forEach((link) => {
            if (!unique.has(link.href)) {
                unique.set(link.href, link);
            }
        });

        return Array.from(unique.values()).slice(0, 4);
    })();
    const articleFaqs = post.faqs?.filter((faq) => faq.question && faq.answer) ?? [];

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
                            <time dateTime={publishedDateIso}>{formatDate(post.date)}</time>
                            <span className="mx-3">•</span>
                            <Clock size={14} className="mr-1" />
                            <span>{post.readTime} min czytania</span>
                            <span className="mx-3">•</span>
                            <span>{getBlogCategoryName(post.category)}</span>
                            <span className="mx-3">•</span>
                            <span>
                                Autor:{" "}
                                <Link href="/o-nas" rel="author" className="underline decoration-white/40 underline-offset-2">
                                    Zespół ISO-DACH
                                </Link>
                            </span>
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
                                loading="eager"
                                fetchPriority="high"
                                quality={70}
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

                        {articleFaqs.length > 0 && (
                            <section className="mt-6 rounded-2xl border border-primary/12 bg-white/85 p-5 sm:p-6">
                                <h2 className="text-xl font-semibold text-primary">
                                    Najczęściej zadawane pytania
                                </h2>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Szybkie odpowiedzi na najczęstsze pytania związane z tym tematem.
                                </p>
                                <Accordion type="single" collapsible className="mt-4 w-full">
                                    {articleFaqs.map((faq, index) => (
                                        <AccordionItem key={`${faq.question}-${index}`} value={`faq-${index}`}>
                                            <AccordionTrigger className="text-left">
                                                <span className="inline-flex items-start gap-2">
                                                    <HelpCircle
                                                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                                                        aria-hidden="true"
                                                    />
                                                    <span>{faq.question}</span>
                                                </span>
                                            </AccordionTrigger>
                                            <AccordionContent className="pl-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </section>
                        )}

                        {relatedLinks.length > 0 && (
                            <aside className="mt-6 rounded-2xl border border-primary/12 bg-white/85 p-5 sm:p-6">
                                <h2 className="text-xl font-semibold text-primary">
                                    Powiązane usługi
                                </h2>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Najczęściej wybierane usługi powiązane z tym tematem.
                                </p>
                                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                                    {relatedLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="brand-focus inline-flex items-center justify-between rounded-xl border border-primary/15 bg-white px-3.5 py-2.5 text-sm font-medium text-primary transition hover:bg-primary/5"
                                        >
                                            <span>{link.label}</span>
                                            <ArrowRight className="h-4 w-4 shrink-0" />
                                        </Link>
                                    ))}
                                </div>
                            </aside>
                        )}

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
