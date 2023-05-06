import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeToc from 'rehype-toc'
import gfm from 'remark-gfm'
import { formatDate } from '@/libs/dayjs'
import type { Blog } from '@/types'

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
        <div className='prose prose-stone'>
            <h1>{blog.title}</h1>
            <p>著者 {blog.author}</p>
            <p>投稿日 {formatDate(blog.createdAt, 'YYYY-MM-DD')}</p>
            <p>更新日 {formatDate(blog.revisedAt || blog.createdAt, 'YYYY-MM-DD')}</p>
            <p>カテゴリ {blog.categories.map((categorie) => `#${categorie.name}`).join(', ')}</p>
            <h2>目次</h2>
            <ReactMarkdown
                rehypePlugins={[ rehypeRaw, rehypeSlug, [ rehypeToc, tocOptions ] ]}
                remarkPlugins={[ gfm ]}
            >
                {html}
            </ReactMarkdown>
        </div>
    )
}
