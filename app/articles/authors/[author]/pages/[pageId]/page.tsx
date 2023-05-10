import ArticleListContainerByAuthor from '@/components/container/articleList/articleListContainerByAuthor'
import { fetchArticleList } from '@/libs/microcms/article'
import { getPaginationCount } from '@/libs/pagination'

export const dynamicParams = false

export async function generateStaticParams() {
  const { contents } = await fetchArticleList()
  const authors = Array.from(new Set(contents.map((content) => content.author)))

  const range = (paginationCount: number) => [...Array(paginationCount)].map((_, i) => 1 + i)

  const paths: { author: string; pageId: string }[] = []
  for (const author of authors) {
    const totalCount = contents.filter((content) => content.author === author).length
    const paginationCount = getPaginationCount(totalCount)
    for (const pageId of range(paginationCount)) {
      paths.push({
        author,
        pageId: pageId.toString(),
      })
    }
  }
  return [...paths]
}

export default ArticleListContainerByAuthor
