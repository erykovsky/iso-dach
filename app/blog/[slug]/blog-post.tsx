"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
 CalendarIcon,
 Clock,
 ChevronLeft,
 Facebook,
 Twitter,
 Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type BlogPostProps = {
 post: {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: number;
  content: string;
 };
};

export function BlogPost({ post }: BlogPostProps) {
 const [currentUrl, setCurrentUrl] = useState("");

 useEffect(() => {
  setCurrentUrl(window.location.href);
 }, []);

 // Formatowanie daty
 const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("pl-PL", {
   day: "numeric",
   month: "long",
   year: "numeric",
  });
 };

 const shareOnFacebook = () => {
  window.open(
   `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    currentUrl
   )}`,
   "_blank"
  );
 };

 const shareOnTwitter = () => {
  window.open(
   `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    currentUrl
   )}&text=${encodeURIComponent(post.title)}`,
   "_blank"
  );
 };

 const shareOnLinkedin = () => {
  window.open(
   `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    currentUrl
   )}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(
    post.excerpt
   )}`,
   "_blank"
  );
 };

 return (
  <div className="min-h-screen bg-gray-50">
   <article className="container mx-auto px-4 py-12">
    <div className="max-w-4xl mx-auto">
     {/* Nawigacja powrotu */}
     <div className="mb-8">
      <Button
       variant="ghost"
       asChild
       className="flex items-center text-gray-600 hover:text-primary"
      >
       <Link href="/blog">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Powrót do bloga
       </Link>
      </Button>
     </div>

     {/* Nagłówek artykułu */}
     <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
       {post.title}
      </h1>
      <div className="flex flex-wrap items-center text-gray-500 text-sm mb-6">
       <CalendarIcon size={16} className="mr-1" />
       <span>{formatDate(post.date)}</span>
       <span className="mx-2">•</span>
       <Clock size={16} className="mr-1" />
       <span>{post.readTime} min czytania</span>
       <span className="mx-2">•</span>
       <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
        {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
       </span>
      </div>
     </div>

     {/* Obrazek główny */}
     <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
      <Image
       src={post.image || "/placeholder.svg"}
       alt={post.title}
       fill
       className="object-cover"
      />
     </div>

     {/* Treść artykułu */}
     <div
      className="prose prose-lg max-w-none mb-12"
      dangerouslySetInnerHTML={{ __html: post.content }}
     />

     {/* Przyciski udostępniania */}
     <div className="border-t border-b border-gray-200 py-6 my-8">
      <div className="flex items-center justify-between">
       <div className="text-gray-700 font-medium">Udostępnij ten artykuł:</div>
       <div className="flex space-x-2">
        <button
         onClick={shareOnFacebook}
         className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition-colors"
         aria-label="Udostępnij na Facebook"
        >
         <Facebook size={20} />
        </button>
        <button
         onClick={shareOnTwitter}
         className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-400 transition-colors"
         aria-label="Udostępnij na Twitter"
        >
         <Twitter size={20} />
        </button>
        <button
         onClick={shareOnLinkedin}
         className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-700 transition-colors"
         aria-label="Udostępnij na LinkedIn"
        >
         <Linkedin size={20} />
        </button>
       </div>
      </div>
     </div>

     {/* CTA */}
     <div className="bg-primary/5 rounded-lg p-6 md:p-8 text-center">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">
       Potrzebujesz profesjonalnej termomodernizacji?
      </h2>
      <p className="text-gray-700 mb-6">
       Nasi eksperci pomogą Ci wybrać najlepsze rozwiązania dla Twojego domu.
       Skontaktuj się z nami, aby otrzymać bezpłatną wycenę.
      </p>
      <Button size="lg" asChild>
       <Link href="/kontakt">Skontaktuj się z nami</Link>
      </Button>
     </div>
    </div>
   </article>
  </div>
 );
}
