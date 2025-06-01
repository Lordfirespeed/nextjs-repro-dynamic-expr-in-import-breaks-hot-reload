import { globContent } from "@/lib/glob-content"
import type { BlogPost, BlogPostSlug } from "@/lib/types/blog-post"

const blogPostModuleNames = await globContent("blog-posts")

// why this dynamic import works:
// https://webpack.js.org/api/module-methods/#dynamic-expressions-in-import
const blogPostModules: { default: BlogPost }[] = await Promise.all(
  blogPostModuleNames.map((name) => import(`@/content/blog-posts/${name}`)),
)
const blogPosts = blogPostModules.map((module) => module.default)
const blogPostsMap = new Map<string, BlogPost>(blogPosts.map((blogPost) => [blogPost.slug, blogPost]))

export function getBlogPostSlugs(): BlogPostSlug[] {
  return Array.from(blogPostsMap.keys()) as BlogPostSlug[]
}

export function getBlogPostBySlug(slug: BlogPostSlug): Readonly<BlogPost>
export function getBlogPostBySlug(slug: string): Readonly<BlogPost> | undefined
export function getBlogPostBySlug(slug: string): Readonly<BlogPost> | undefined {
  return blogPostsMap.get(slug)
}
