import ArticleList from '@/components/presentational/articleList/articleList'
import Pagination from '@/components/presentational/articleList/pagination'
import HorizontalLine from '@/components/presentational/ui/horizontalLine'
import Title from '@/components/presentational/ui/title'
import type { Article } from '@/types'

type ArticleListPageProps = {
  articleList: Article[]
  paginationCount: number
  pageNumber: number
}

export default function ArticleListPage({
  articleList,
  paginationCount,
  pageNumber,
}: ArticleListPageProps) {
  return (
    <>
      <Title />
      <HorizontalLine />
      <ArticleList articleList={articleList} />
      <Pagination paginationCount={paginationCount} pageNumber={pageNumber} />
    </>
  )
}
