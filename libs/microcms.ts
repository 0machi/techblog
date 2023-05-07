import type { MicroCMSQueries } from 'microcms-js-sdk'
import { createClient } from 'microcms-js-sdk'
import { MicroCMSListResponse } from 'microcms-js-sdk/dist/cjs/types'
import { microCMSConfig } from '@/config/microCms'
import type { Article, Category } from '@/types'

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: microCMSConfig.serviceDomain,
  apiKey: microCMSConfig.apiKey,
})

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

export const fetchArticlesByAuthorName = async (name: string) => {
  const articleList = await client.get<MicroCMSListResponse<Article>>({
    endpoint: 'articles',
    queries: { filters: `author[equals]${name}` },
  })

  return articleList
}
