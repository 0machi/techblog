import { notFound } from 'next/navigation'
import ArticleList from '@/components/presentational/articleList'
import HorizontalLine from '@/components/presentational/horizontalLine'
import Pagination from '@/components/presentational/pagination'
import Title from '@/components/presentational/title'
import { fetchArticleList } from '@/libs/microcms'

const PER_PAGE = 2
export const getPaginationCount = (totalCount: number) => Math.ceil(totalCount / PER_PAGE)

export default async function ArticleListContainer({ params: { pageId } }: {
  params: { pageId: string }
}) {
  const { contents, totalCount } = await fetchArticleList({
    offset: (Number(pageId) - 1) * PER_PAGE,
    limit: PER_PAGE,
  })

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>
  }

  const paginationCount = getPaginationCount(totalCount)
  if (paginationCount < Number(pageId)) {
    return notFound()
  }

  return (
    <>
      <Title />
      <HorizontalLine />
      <ArticleList articleList={contents} />
      <Pagination paginationCount={paginationCount} pageId={Number(pageId)} />
    </>
  )
}
