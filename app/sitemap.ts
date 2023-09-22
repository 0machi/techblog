import { MetadataRoute } from 'next'
import { fetchArticleList } from '@/libs/microcms/article'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { contents } = await fetchArticleList()

  const paths = contents.map((article) => {
    return {
      articleId: article.id,
    }
  })

  const articleMap = paths.map((path) => {
    return {
      url: `https://tech.shinaps.jp/articles/${path.articleId}`,
      lastModified: new Date(),
    }
  })

  return [
    {
      url: 'https://tech.shinaps.jp',
      lastModified: new Date(),
    },
    ...articleMap,
  ]
}
