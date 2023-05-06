import { notFound } from 'next/navigation'
import Article from '@/components/presentational/article'
import HorizontalLine from '@/components/presentational/horizontalLine'
import Title from '@/components/presentational/title'
import { highlightCodeBlock } from '@/libs/highlightjs'
import { fetchArticle } from '@/libs/microcms'

export default async function ArticleContainer({ params: { articleId } }: {
  params: { articleId: string }
}) {
  const article = await fetchArticle(articleId)

  if (!article) notFound()

  const articleHtml = article.content
  const highlightedArticleHtml = highlightCodeBlock(articleHtml)

  return (
    <>
      <Title />
      <HorizontalLine />
      <Article article={article} html={highlightedArticleHtml} />
      <HorizontalLine />
    </>
  )
}
