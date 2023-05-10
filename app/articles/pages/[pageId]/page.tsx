import ArticleListContainer from '@/components/container/articleList/articleListContainer'
import { fetchArticleList } from '@/libs/microcms/article'
import { getPaginationCount } from '@/libs/pagination'

export const dynamicParams = false

export async function generateStaticParams() {
  const { totalCount } = await fetchArticleList()

  const range = (paginationCount: number) => [...Array(paginationCount)].map((_, i) => 1 + i)
  const paginationCount = getPaginationCount(totalCount)
  const paths = range(paginationCount).map((pageId) => {
    return {
      pageId: pageId.toString(),
    }
  })
  return [...paths]
}

export default ArticleListContainer
