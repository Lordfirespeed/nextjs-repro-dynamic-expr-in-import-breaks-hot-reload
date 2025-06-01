import { defineBlogPost } from "@/lib/blog-posts/define-blog-post";

export default defineBlogPost({
  slug: "foo",
  title: "Foo strikes again",
  date: new Date(2025, 3, 5),
  content: () => (
    <p>Hello from foo!</p>
  )
})
