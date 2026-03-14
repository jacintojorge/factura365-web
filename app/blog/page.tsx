import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "Blog — Facturación, VeriFactu y fiscalidad para autónomos y pymes",
  description:
    "Artículos sobre facturación electrónica, VeriFactu, obligaciones fiscales y novedades de la AEAT para autónomos y pequeñas empresas.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Blog</h1>
      <p className="text-gray-500 mb-12">
        Facturación electrónica, VeriFactu, fiscalidad y todo lo que necesitas saber para gestionar tu negocio.
      </p>

      {posts.length === 0 ? (
        <p className="text-gray-400">Próximamente, los primeros artículos.</p>
      ) : (
        <ul className="divide-y divide-gray-100">
          {posts.map((post) => (
            <li key={post.slug} className="py-8">
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="flex items-center gap-3 mb-2">
                  {post.date && (
                    <time className="text-xs text-gray-400 font-medium">
                      {new Date(post.date).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  )}
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-blue-50 text-blue-600 font-medium px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="text-gray-500 text-sm leading-relaxed">{post.description}</p>
                )}
                <span className="mt-3 inline-flex items-center gap-1 text-sm text-blue-600 font-medium">
                  Leer artículo
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
