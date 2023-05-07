import ArticleList from '@/components/presentational/articleList'
import HorizontalLine from '@/components/presentational/horizontalLine'
import Pagination from '@/components/presentational/pagination'
import Title from '@/components/presentational/title'
import { Article } from '@/types'

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
