import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeToc from 'rehype-toc'
import gfm from 'remark-gfm'
import { formatDate } from '@/libs/dayjs'
import { robotoBold, robotoMonoRegular } from '@/styles/fonts'
import type { Article } from '@/types'

type ArticleProps = {
  article: Article
  html: string
}

export default function Article({ article, html }: ArticleProps) {
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
    <>
      <div className={`prose prose-stone p-3 max-w-5xl mx-auto border-x border-dashed border-slate-200`}>
        <div className={`max-w-3xl mx-auto pt-12 pb-6`}>
          <h1 className={`${robotoBold.className}`}>{article.title}</h1>
          <ul className={`${robotoMonoRegular.className} p-3 text-sm text-neutral-400 list-none`}>
            <li className={`py-0.5 pl-0`}>
              author: <span className={`hover:text-violet-600 cursor-pointer`}>{article.author}</span>
            </li>
            {article.categories.length > 0 &&
              (
                <li className={`py-0.5 pl-0`}>
                  categories: {
                  article.categories.map((category, index, array) => {
                    const isLast = index === array.length - 1
                    return (
                      <>
                    <span key={category.id}
                          className={`hover:text-violet-600 cursor-pointer`}>{category.name}</span>{!isLast ? ', ' : ''}
                      </>
                    )
                  })
                }
                </li>
              )
            }

            <li className={`py-0.5 pl-0`}>
              created_at: {formatDate(article.createdAt, 'YYYY.MM.DD')}
            </li>
            <li className={`py-0.5 pl-0`}>
              updated_at: {formatDate(article.revisedAt || article.createdAt, 'YYYY.MM.DD')}
            </li>
          </ul>


          <h2>目次</h2>
          <ReactMarkdown
            rehypePlugins={[ rehypeRaw, rehypeSlug, [ rehypeToc, tocOptions ] ]}
            remarkPlugins={[ gfm ]}
          >
            {html}
          </ReactMarkdown>
        </div>

      </div>
    </>
  )
}
