import ArticleContainer from '@/components/container/article/articleContainer'
import { fetchArticleList } from '@/libs/microcms/microcms'

export const dynamicParams = false

export async function generateStaticParams() {
  const { contents } = await fetchArticleList()

  const paths = contents.map((article) => {
    return {
      articleId: article.id,
    }
  })

  return [...paths]
}

export default ArticleContainer
