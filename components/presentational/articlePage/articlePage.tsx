import Article from '@/components/presentational/articlePage/article'
import HorizontalLine from '@/components/presentational/ui/horizontalLine'
import Title from '@/components/presentational/ui/title'
import type { Article as ArticleType, Toc } from '@/types'

type ArticlePageProps = {
  toc: Toc
  article: ArticleType
  html: string
}

export default function ArticlePage({ toc, article, html }: ArticlePageProps) {
  return (
    <>
      <Title />
      <HorizontalLine />
      <Article toc={toc} article={article} html={html} />
      <HorizontalLine />
    </>
  )
}
