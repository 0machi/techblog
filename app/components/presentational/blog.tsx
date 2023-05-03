import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeToc from 'rehype-toc'
import gfm from 'remark-gfm'

export default function Blog({ blogTitle, blogHtml }: { blogTitle: string; blogHtml: string }) {
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
      <h1>{blogTitle}</h1>
      <h2>目次</h2>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeSlug, [rehypeToc, tocOptions]]}
        remarkPlugins={[gfm]}
      >
        {blogHtml}
      </ReactMarkdown>
    </div>
  )
}
