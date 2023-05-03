import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeToc from 'rehype-toc'
import gfm from 'remark-gfm'
import type { Blog } from '../../types/index'

type blogProps = {
  blog: Blog
  html: string
}

export default function Blog({ blog, html }: blogProps) {
  const tocOptions = {
    headings: 'h2',
    cssClasses: {
      toc: 'prose-toc',
      list: 'prose',
      listItem: 'prose-toc-list-item',
      link: 'prose-toc-link',
    },
  }

  return (
    <div className='prose prose-stone mt-5 max-w-4xl m-auto'>
      <h1>{blog.title}</h1>
      <h2>目次</h2>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeSlug, [rehypeToc, tocOptions]]}
        remarkPlugins={[gfm]}
      >
        {html}
      </ReactMarkdown>
    </div>
  )
}
