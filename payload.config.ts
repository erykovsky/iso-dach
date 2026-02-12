import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { Users } from "./payload/collections/users";
import { Media } from "./payload/collections/media";
import { GalleryItems } from "./payload/collections/gallery-items";
import { BlogPosts } from "./payload/collections/blog-posts";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const payloadSecret = process.env.PAYLOAD_SECRET || "change-me-in-production";
const normalizeDatabaseUrl = (value: string | undefined): string | undefined => {
  if (!value) {
    return value;
  }

  try {
    const url = new URL(value);
    const sslmode = url.searchParams.get("sslmode")?.toLowerCase();

    if (
      sslmode &&
      ["prefer", "require", "verify-ca"].includes(sslmode) &&
      !url.searchParams.has("uselibpqcompat")
    ) {
      url.searchParams.set("sslmode", "verify-full");
      return url.toString();
    }

    return value;
  } catch {
    return value.replace(
      /([?&]sslmode=)(prefer|require|verify-ca)(?=(&|$))/i,
      "$1verify-full",
    );
  }
};

const databaseUrl = normalizeDatabaseUrl(process.env.DATABASE_URL);

export default buildConfig({
  secret: payloadSecret,
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: dirname,
    },
  },
  editor: lexicalEditor(),
  collections: [Users, Media, GalleryItems, BlogPosts],
  endpoints: [],
  db: postgresAdapter({
    pool: {
      connectionString: databaseUrl,
    },
  }),
  plugins: [
    vercelBlobStorage({
      token: process.env.BLOB_READ_WRITE_TOKEN,
      collections: {
        media: true,
      },
    }),
  ],
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
