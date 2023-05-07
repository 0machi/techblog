import { notFound } from 'next/navigation'
import ArticleList from '@/components/presentational/articleList'
import HorizontalLine from '@/components/presentational/horizontalLine'
import Pagination from '@/components/presentational/pagination'
import Title from '@/components/presentational/title'
import { fetchArticleListByPage } from '@/libs/microcms'
import { getPaginationCount } from '@/libs/pagination'

export default async function ArticleListContainerByCategory({
  params: { pageId, categoryId },
}: {
  params: { pageId: string; categoryId: string }
}) {
  const pageIdNumber = Number(pageId) || 1
  const { contents, totalCount } = await fetchArticleListByPage(pageIdNumber, {
    filters: `categories[contains]${categoryId}`,
  })

  if (!contents || contents.length === 0) return <h1>No contents</h1>

  const paginationCount = getPaginationCount(totalCount)
  if (paginationCount < pageIdNumber) return notFound()

  return (
    <>
      <Title />
      <HorizontalLine />
      <ArticleList articleList={contents} />
      <Pagination paginationCount={paginationCount} pageId={pageIdNumber} />
    </>
  )
}
