import { notFound } from 'next/navigation'
import ArticleListPage from '@/components/presentational/articleList/articleListPage'
import { fetchArticleListByPage } from '@/libs/microcms'
import { getPaginationCount } from '@/libs/pagination'

export default async function ArticleListContainerByAuthor({
  params: { pageId, author },
}: {
  params: { pageId: string; author: string }
}) {
  const pageIdNumber = Number(pageId) || 1
  const { contents, totalCount } = await fetchArticleListByPage(pageIdNumber, {
    filters: `author[equals]${author}`,
  })

  if (!contents || contents.length === 0) return <h1>No contents</h1>

  const paginationCount = getPaginationCount(totalCount)
  if (paginationCount < pageIdNumber) return notFound()

  return <ArticleListPage articleList={contents} paginationCount={paginationCount} />
}
