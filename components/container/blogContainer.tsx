import { notFound } from 'next/navigation'
import Blog from '@/components/presentational/blog'
import { highlightCodeBlock } from '@/libs/highlightjs'
import { getBlogDetail } from '@/libs/microcms'

export default async function BlogContainer({ params: { blogId } }: {
  params: { blogId: string }
}) {
  const blog = await getBlogDetail(blogId)

  if (!blog) notFound()

  const blogHtml = blog.content
  const highlightedBlogHtml = highlightCodeBlock(blogHtml)

  return <Blog blog={blog} html={highlightedBlogHtml} />
}
