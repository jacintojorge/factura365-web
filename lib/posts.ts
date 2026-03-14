import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDir = path.join(process.cwd(), "content/posts")

export interface PostMeta {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return []

  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "")
      const raw = fs.readFileSync(path.join(postsDir, file), "utf-8")
      const { data } = matter(raw)
      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        date: data.date ?? "",
        tags: data.tags ?? [],
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): { meta: PostMeta; content: string } | null {
  for (const ext of ["mdx", "md"]) {
    const filePath = path.join(postsDir, `${slug}.${ext}`)
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8")
      const { data, content } = matter(raw)
      return {
        meta: {
          slug,
          title: data.title ?? slug,
          description: data.description ?? "",
          date: data.date ?? "",
          tags: data.tags ?? [],
        },
        content,
      }
    }
  }
  return null
}
