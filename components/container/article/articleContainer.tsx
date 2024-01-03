import { notFound } from 'next/navigation'
import ArticlePage from '@/components/presentational/article/articlePage'
import { highlightCode } from '@/libs/highlightjs'
import { getToc } from '@/libs/markdown'
import { fetchArticle } from '@/libs/microcms/article'

type Props = {
  params: { articleId: string }
}

export default async function ArticleContainer({ params }: Props) {
  const article = await fetchArticle(params.articleId)

  if (!article) notFound()

  const articleHtml = article.content
  const highlightedArticleHtml = highlightCode(articleHtml)
  const toc = getToc(articleHtml)

  return <ArticlePage toc={toc} article={article} html={highlightedArticleHtml} />
}
