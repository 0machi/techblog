import type { MicroCMSQueries } from 'microcms-js-sdk'
import { createClient } from 'microcms-js-sdk'
import { microCMSConfig } from '@/config/microCms'
import type { Article } from '@/types'


// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: microCMSConfig.serviceDomain,
  apiKey: microCMSConfig.apiKey,
})

const endpoint = 'articles'

// ブログ一覧を取得
export const fetchArticleList = async (queries?: MicroCMSQueries) => {
  const articleList = await client.getList<Article>({
    endpoint,
    queries,
  })

  return articleList
}

// ブログの詳細を取得
export const fetchArticle = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  const article = await client.getListDetail<Article>({
    endpoint,
    contentId,
    queries,
  })

  return article
}
