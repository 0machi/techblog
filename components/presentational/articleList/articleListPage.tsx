import ArticleList from '@/components/presentational/articleList/articleList'
import CategoryList from '@/components/presentational/category/categoryList'
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
      <CategoryList articleList={articleList} />
      <Pagination paginationCount={paginationCount} pageNumber={pageNumber} />
    </>
  )
}
