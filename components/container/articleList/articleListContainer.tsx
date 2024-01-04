import { notFound } from 'next/navigation'
import ArticleListPage from '@/components/presentational/articleList/articleListPage'
import { fetchArticleListByPage } from '@/libs/microcms/article'
import { getPaginationCount } from '@/libs/pagination'

export default async function ArticleListContainer({
  params: { pageId },
}: {
  params: { pageId: string }
}) {
  const pageNumber = Number(pageId) || 1
  const { contents, totalCount } = await fetchArticleListByPage(pageNumber)

  if (!contents || contents.length === 0) return <h1>No contents</h1>

  const paginationCount = getPaginationCount(totalCount)

  if (paginationCount < pageNumber) return notFound()

  return (
    <ArticleListPage
      articleList={contents}
      paginationCount={paginationCount}
      pageNumber={pageNumber}
    />
  )
}
