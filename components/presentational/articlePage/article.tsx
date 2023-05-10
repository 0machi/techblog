import Link from 'next/link'
import React from 'react'
import { formatDate } from '@/libs/dayjs'
import { robotoBold, robotoMonoRegular } from '@/styles/fonts'
import type { Article, Toc } from '@/types'

type ArticleProps = {
  toc: Toc
  article: Article
  html: string
}

export default function Article({ toc, article, html }: ArticleProps) {
  return (
    <>
      <div
        className={`prose prose-stone p-3 max-w-5xl max-lg:max-w-3xl mx-auto border-x border-dashed border-slate-200`}
      >
        <div className={`max-w-3xl mx-auto pt-12 pb-6`}>
          <h1 className={`${robotoBold.className}`}>{article.title}</h1>
          <ul className={`${robotoMonoRegular.className} p-3 text-sm text-neutral-400 list-none`}>
            <li className={`py-0.5 pl-0`}>
              author:{' '}
              <Link
                href={`/articles/authors/${article.author}/pages/1`}
                className={`${robotoMonoRegular.className} no-underline text-neutral-400`}
              >
                <span className={`hover:text-violet-600 cursor-pointer`}>{article.author}</span>
              </Link>
            </li>
            {article.categories.length > 0 && (
              <li className={`py-0.5 pl-0`}>
                categories:{' '}
                {article.categories.map((category, index, array) => {
                  const isLast = index === array.length - 1
                  return (
                    <>
                      <Link
                        href={`/articles/categories/${category.id}/pages/1`}
                        className={`${robotoMonoRegular.className} no-underline text-neutral-400`}
                      >
                        <span key={category.id} className={`hover:text-violet-600 cursor-pointer`}>
                          {category.name}
                        </span>
                      </Link>
                      {!isLast ? ', ' : ''}
                    </>
                  )
                })}
              </li>
            )}

            <li className={`py-0.5 pl-0`}>
              created_at: {formatDate(article.createdAt, 'YYYY.MM.DD')}
            </li>
            <li className={`py-0.5 pl-0`}>
              updated_at: {formatDate(article.revisedAt || article.createdAt, 'YYYY.MM.DD')}
            </li>
          </ul>

          <h2>目次</h2>
          <ul className={`pl-4`}>
            {toc.map((item) => (
              <li key={item.id} className={`list-none pl-0`}>
                <a href={`#${item.id}`} className={`hover:text-violet-600 no-underline text-base`}>
                  - {item.text}
                </a>
              </li>
            ))}
          </ul>

          <div dangerouslySetInnerHTML={{ __html: html }} id={`article-html`} />
        </div>
      </div>
    </>
  )
}
