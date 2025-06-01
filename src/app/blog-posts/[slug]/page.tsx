import type { Metadata } from "next"
import { notFound } from "next/navigation"
import type * as React from "react"

import { getBlogPostSlugs, getBlogPostBySlug } from "@/lib/blog-posts"

type BlogPostPageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params
  const blogPost = getBlogPostBySlug(params.slug)

  if (blogPost == null) return notFound()

  const BlogPostContent = blogPost.content

  return (
    <main className="container py-6 lg:py-8">
      <h1>Site Title</h1>
      <article className="mb-32">
        <h2>{blogPost.title}</h2>
        <p>Date: {blogPost.date.toISOString()}</p>
        
        <div className="max-w-2xl mx-auto text-lg space-y-6">
          <BlogPostContent />
        </div>
      </article>
    </main>
  )
}

export async function generateMetadata(props: BlogPostPageProps): Promise<Metadata> {
  const params = await props.params
  const blogPost = getBlogPostBySlug(params.slug)

  if (blogPost == null) return notFound()

  const { title } = blogPost

  return {
    title,
    description: "this is a blog post",
    openGraph: {
      title,
      description: "this is a blog post",
    },
  }
}

export async function generateStaticParams() {
  const blogPostSlugs = getBlogPostSlugs()

  return blogPostSlugs.map((slug) => ({ slug }))
}
