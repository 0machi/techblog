import ArticleListContainerByCategory, {
  getPaginationCount,
} from '@/components/container/articleListContainerByCategory'
import { fetchArticleList, fetchCategoryList } from '@/libs/microcms'

export const dynamicParams = false

export async function generateStaticParams() {
  const { totalCount } = await fetchArticleList()
  const { contents } = await fetchCategoryList()

  const range = (paginationCount: number) => [...Array(paginationCount)].map((_, i) => 1 + i)
  const paginationCount = getPaginationCount(totalCount)
  let paths: { categoryId: string; pageId: string }[] = []

  for (const category of contents) {
    for (const pageId of range(paginationCount)) {
      paths.push({
        categoryId: category.id,
        pageId: pageId.toString(),
      })
    }
  }
  return [...paths]
}

export default ArticleListContainerByCategory
