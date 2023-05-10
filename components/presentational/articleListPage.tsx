import ArticleList from '@/components/presentational/articleListPage/articleList'
import Pagination from '@/components/presentational/pagination'
import HorizontalLine from '@/components/presentational/ui/horizontalLine'
import Title from '@/components/presentational/ui/title'
import type { Article } from '@/types'

type ArticleListPageProps = {
  articleList: Article[]
  paginationCount: number
}

export default function ArticleListPage({ articleList, paginationCount }: ArticleListPageProps) {
  return (
    <>
      <Title />
      <HorizontalLine />
      <ArticleList articleList={articleList} />
      <Pagination paginationCount={paginationCount} />
    </>
  )
}
