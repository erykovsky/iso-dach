import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Najnowsze trendy w izolacji dachów",
    excerpt:
      "Odkryj innowacyjne materiały i techniki, które rewolucjonizują izolację dachową w 2023 roku.",
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "Jak prawidłowo wentylować poddasze?",
    excerpt:
      "Poznaj kluczowe zasady efektywnej wentylacji poddasza, które pomogą Ci uniknąć problemów z wilgocią.",
    date: "2023-04-22",
  },
  {
    id: 3,
    title: "Ekologiczne rozwiązania w izolacji dachowej",
    excerpt:
      "Dowiedz się, jak możesz przyczynić się do ochrony środowiska, wybierając odpowiednie materiały izolacyjne.",
    date: "2023-03-10",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-burgundy hover:text-lime-green transition-colors"
                  >
                    Czytaj więcej
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
