import Link from 'next/link'
import React from 'react'
import { formatDate } from '@/libs/dayjs'
import { robotoBold, robotoMonoRegular, robotoRegular } from '@/styles/fonts'
import { Article } from '@/types'

type ArticleCardDetailProps = {
  article: Article
}

export default function ArticleCardDetail({ article }: ArticleCardDetailProps) {
  return (
    <div className={`max-w-[624px] grow`}>
      <div className={`max-w-[624px] p-3 mx-auto`}>
        <Link href={`/articles/${article.id}`}>
          <h2 className={`${robotoBold.className} p-3 text-xl`}>
            {article.title}
          </h2>
        </Link>
        <h2 className={`${robotoRegular.className} p-3 text-sm`}>
          {article.summary}
        </h2>
        <ul className={`${robotoMonoRegular.className} p-3 text-sm text-neutral-400`}>
          <li className={`py-0.5`}>
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
          <li className={`py-0.5`}>
            created_at: {formatDate(article.createdAt, 'YYYY.MM.DD')}
          </li>
        </ul>
      </div>
    </div>
  )
}