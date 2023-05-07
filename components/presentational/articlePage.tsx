import Article from '@/components/presentational/article'
import HorizontalLine from '@/components/presentational/horizontalLine'
import Title from '@/components/presentational/title'
import type { Article as ArticleType } from '@/types'

type ArticlePageProps = {
  article: ArticleType
  html: string
}

export default function ArticlePage({ article, html }: ArticlePageProps) {
  return (
    <>
      <Title />
      <HorizontalLine />
      <Article article={article} html={html} />
      <HorizontalLine />
    </>
  )
}
