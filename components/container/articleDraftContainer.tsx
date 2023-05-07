import { notFound, redirect } from 'next/navigation'
import ArticlePage from '@/components/presentational/articlePage'
import { highlightCodeBlock } from '@/libs/highlightjs'
import { fetchArticle } from '@/libs/microcms'

export default async function ArticleContainer({
  params: { articleId },
  searchParams: { draftKey },
}: {
  params: { articleId: string }
  searchParams: { draftKey?: string }
}) {
  // 変更せずにプレビューを表示する場合
  if (typeof draftKey !== 'string' || draftKey === '') {
    redirect(`/articles/${articleId}`)
  }

  const article = await fetchArticle(articleId, { draftKey })

  if (!article) notFound()

  const articleHtml = article.content
  const highlightedArticleHtml = highlightCodeBlock(articleHtml)

  return <ArticlePage article={article} html={highlightedArticleHtml} />
}
