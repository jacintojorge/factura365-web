import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getAllPosts, getPostBySlug } from "@/lib/posts"
import { MDXRemote } from "next-mdx-remote/rsc"
import VeriFactuTimeline from "@/components/VeriFactuTimeline"

const mdxComponents = { VeriFactuTimeline }

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.meta.title,
    description: post.meta.description,
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const { meta, content } = post

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/blog" className="hover:text-gray-600">Blog</Link>
        <span>/</span>
        <span className="text-gray-600 truncate">{meta.title}</span>
      </div>

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {meta.tags.map((tag) => (
            <span key={tag} className="text-xs bg-blue-50 text-blue-600 font-medium px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
          {meta.title}
        </h1>
        {meta.description && (
          <p className="text-gray-500 text-lg leading-relaxed">{meta.description}</p>
        )}
        {meta.date && (
          <time className="block mt-4 text-sm text-gray-400">
            {new Date(meta.date).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        )}
      </header>

      {/* Contenido MDX */}
      <article className="prose prose-gray prose-blue max-w-none">
        <MDXRemote source={content} components={mdxComponents} />
      </article>

      {/* Footer del post */}
      <div className="mt-16 pt-8 border-t border-gray-100 text-center">
        <p className="text-gray-500 mb-4">¿Quieres facturar con VeriFactu sin complicaciones?</p>
        <Link
          href="/#precios"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
        >
          Ver planes de Factura365
        </Link>
      </div>
    </div>
  )
}
