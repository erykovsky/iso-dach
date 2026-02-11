import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content/blog");

export type BlogPost = {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    category: string;
    image: string;
    date: string;
    readTime: number;
    lastModified?: string;
    content?: string;
};

export function getSortedBlogPosts(): BlogPost[] {
    try {
        // Get file names under /content/blog
        const fileNames = fs.readdirSync(contentDirectory);
        const allPostsData = fileNames
            .filter((fileName) => fileName.endsWith(".md"))
            .map((fileName, index) => {
                // Read markdown file as string
                const fullPath = path.join(contentDirectory, fileName);
                const fileContents = fs.readFileSync(fullPath, "utf8");
                const fileStats = fs.statSync(fullPath);

                // Use gray-matter to parse the post metadata section
                const matterResult = matter(fileContents);

                // Combine the data with the id
                return {
                    id: index + 1,
                    ...(matterResult.data as Omit<BlogPost, "id" | "content">),
                    lastModified: fileStats.mtime.toISOString(),
                };
            });

        // Sort posts by date
        return allPostsData.sort((a, b) => {
            if (a.date < b.date) {
                return 1;
            } else {
                return -1;
            }
        });
    } catch (error) {
        console.error("Error getting sorted blog posts:", error);
        return [];
    }
}

export async function getBlogPostBySlug(
    slug: string
): Promise<BlogPost | null> {
    try {
        const fileNames = fs.readdirSync(contentDirectory);
        let fileName: string | null = null;

        for (const candidate of fileNames.filter((name) =>
            name.endsWith(".md")
        )) {
            const fullPath = path.join(contentDirectory, candidate);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const matterResult = matter(fileContents);

            if (matterResult.data.slug === slug) {
                fileName = candidate;
                break;
            }
        }

        if (!fileName) {
            return null;
        }

        const fullPath = path.join(contentDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const fileStats = fs.statSync(fullPath);

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
            .use(html)
            .process(matterResult.content);
        const contentHtml = processedContent.toString();

        // Find the index of the post in the sorted list
        const allPosts = getSortedBlogPosts();
        const postIndex = allPosts.findIndex((post) => post.slug === slug);

        // Combine the data with the id and contentHtml
        return {
            id: postIndex + 1,
            ...(matterResult.data as Omit<BlogPost, "id" | "content">),
            lastModified: fileStats.mtime.toISOString(),
            content: contentHtml,
        };
    } catch (error) {
        console.error(`Error getting blog post by slug ${slug}:`, error);
        return null;
    }
}

export function getAllBlogSlugs() {
    try {
        const fileNames = fs.readdirSync(contentDirectory);

        return fileNames
            .filter((fileName) => fileName.endsWith(".md"))
            .map((fileName) => {
                const fullPath = path.join(contentDirectory, fileName);
                const fileContents = fs.readFileSync(fullPath, "utf8");
                const matterResult = matter(fileContents);

                return {
                    slug: matterResult.data.slug,
                };
            });
    } catch (error) {
        console.error("Error getting all blog slugs:", error);
        return [];
    }
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
    return getSortedBlogPosts().filter((post) => post.category === category);
}
