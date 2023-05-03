import { load } from 'cheerio'
import hljs from 'highlight.js'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import gfm from 'remark-gfm'
import 'highlight.js/styles/github-dark.css'
import { getBlogDetail, getBlogList } from '../../libs/microcms'

export async function generateStaticParams() {
  const { contents } = await getBlogList()

  const paths = contents.map((blog) => {
    return {
      blogId: blog.id,
    }
  })

  return [...paths]
}

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

export default async function StaticDetailPage({
  params: { blogId },
}: {
  params: { blogId: string }
}) {
  const blog = await getBlogDetail(blogId)

  if (!blog) {
    notFound()
  }

  const blogTitle = `<h1>${blog.title}</h1>`
  const blogContent = blog.content
  const blogHtml = blogTitle + blogContent
  const highlightedBlogHtml = highlightCodeBlock(blogHtml)

  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[gfm]}
      className='prose prose-stone mt-5 max-w-4xl m-auto'
    >
      {highlightedBlogHtml}
    </ReactMarkdown>
  )
}
