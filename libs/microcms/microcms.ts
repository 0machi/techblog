import 'server-only'
import type { MicroCMSQueries } from 'microcms-js-sdk'
import { microCMSConfig } from '@/config/microCms'
import { client } from '@/libs/microcms/client'
import type { Article, Category } from '@/types'


const articleEndpoint = 'articles'
const categoryEndpoint = 'categories'
const perPage = Number(microCMSConfig.perPage)

// ブログ一覧を取得
export const fetchArticleList = async (queries?: MicroCMSQueries) => {
  const articleList = await client.getList<Article>({
    endpoint: articleEndpoint,
    queries,
  })

  return articleList
}

export const fetchArticleListByPage = async (pageId: number, queries?: MicroCMSQueries) => {
  const articleList = await client.getList<Article>({
    endpoint: articleEndpoint,
    queries: {
      ...queries,
      offset: (pageId - 1) * perPage,
      limit: perPage,
    },
  })

  return articleList
}

// ブログの詳細を取得
export const fetchArticle = async (contentId: string, queries?: MicroCMSQueries) => {
  const article = await client.getListDetail<Article>({
    endpoint: articleEndpoint,
    contentId,
    queries,
  })

  return article
}

export const fetchCategoryList = async (queries?: MicroCMSQueries) => {
  const categoryList = await client.getList<Category>({
    endpoint: categoryEndpoint,
    queries,
  })

  return categoryList
}
