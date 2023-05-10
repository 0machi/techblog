import React from 'react'
import ArticleCard from '@/components/presentational/articleListPage/articleCard'
import type { Article } from '@/types'

type ArticleListProps = {
  articleList: Article[]
}

export default function ArticleList({ articleList }: ArticleListProps) {
  return (
    <div>
      {articleList.map((article, index) => {
        return <ArticleCard key={index} article={article} isEven={index % 2 === 0} />
      })}
    </div>
  )
}
