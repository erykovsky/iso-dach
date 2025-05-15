import { Metadata } from "next";
import { BlogList } from "./blog-list";

export const metadata: Metadata = {
 title: "Blog | ISO-DACH",
 description:
  "Artykuły i porady na temat ocieplania, termomodernizacji i efektywności energetycznej budynków.",
};

export default function BlogPage() {
 return <BlogList />;
}
