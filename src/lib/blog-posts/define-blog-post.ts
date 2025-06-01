import type { BlogPost, BlogPostInput } from "@/lib/types/blog-post"

export function defineBlogPost(input: BlogPostInput): BlogPost {
  return input satisfies Omit<BlogPost, "slug"> as BlogPost
}
