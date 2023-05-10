import 'server-only'
import type { MicroCMSQueries } from 'microcms-js-sdk'
import { microCMSConfig } from '@/config/microCms'
import { client } from '@/libs/microcms/client'
import type { Article } from '@/types'


const endpoint = 'articles'
const perPage = Number(microCMSConfig.perPage)

export const fetchArticleList = async (queries?: MicroCMSQueries) => {
  const articleList = await client.getList<Article>({
    endpoint,
    queries,
  })

  return articleList
}

export const fetchArticleListByPage = async (pageId: number, queries?: MicroCMSQueries) => {
  const articleList = await client.getList<Article>({
    endpoint,
    queries: {
      ...queries,
      offset: (pageId - 1) * perPage,
      limit: perPage,
    },
  })

  return articleList
}

export const fetchArticle = async (contentId: string, queries?: MicroCMSQueries) => {
  const article = await client.getListDetail<Article>({
    endpoint,
    contentId,
    queries,
  })

  return article
}
