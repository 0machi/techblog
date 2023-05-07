import { notFound } from 'next/navigation'
import ArticlePage from '@/components/presentational/articlePage'
import { highlightCodeBlock } from '@/libs/highlightjs'
import { fetchArticle } from '@/libs/microcms'

export default async function ArticleContainer({
  params: { articleId },
}: {
  params: { articleId: string }
}) {
  const article = await fetchArticle(articleId)

  if (!article) notFound()

  const articleHtml = article.content
  const highlightedArticleHtml = highlightCodeBlock(articleHtml)

  return <ArticlePage article={article} html={highlightedArticleHtml} />
}
