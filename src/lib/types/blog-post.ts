import type * as React from "react"

type FC = React.FC<React.HTMLAttributes<HTMLElement>>

const isBlogPostSymbol = Symbol("is-blog-post")
export type BlogPostSlug = string & { [isBlogPostSymbol]: true }

export type BlogPostInput = {
  slug: string
  title: string
  date: Date
  content: FC
}

export type BlogPost = BlogPostInput & {
  slug: BlogPostSlug
}
