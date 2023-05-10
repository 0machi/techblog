import { notFound } from 'next/navigation'
import ArticlePage from '@/components/presentational/articlePage/articlePage'
import { highlightCodeBlock } from '@/libs/highlightjs'
import { getToc } from '@/libs/markdown'
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
  const toc = getToc(articleHtml)

  return <ArticlePage toc={toc} article={article} html={highlightedArticleHtml} />
}
