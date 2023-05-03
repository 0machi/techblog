import { load } from 'cheerio'
import hljs from 'highlight.js'
import { notFound } from 'next/navigation'
import 'highlight.js/styles/github-dark.css'
import Blog from '../../components/presentational/blog'
import { getBlogDetail } from '../../libs/microcms'

function highlightCodeBlock(html: string): string {
  const $ = load(html)
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })
  const highlightedHtml = $.html()
  return highlightedHtml
}

export default async function BlogContainer({
  params: { blogId },
}: {
  params: { blogId: string }
}) {
  const blog = await getBlogDetail(blogId)

  if (!blog) notFound()

  const blogHtml = blog.content
  const highlightedBlogHtml = highlightCodeBlock(blogHtml)

  return <Blog blog={blog} html={highlightedBlogHtml} />
}
