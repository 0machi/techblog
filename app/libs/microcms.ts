import { createClient } from 'microcms-js-sdk';
import type { MicroCMSQueries, MicroCMSImage, MicroCMSDate } from 'microcms-js-sdk';

// カテゴリの型定義
export type Category = {
  id: string;
  name: string;
} & MicroCMSDate;

// ブログの型定義
export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
  category: Category;
} & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

const endpoint = 'blogs';

// ブログ一覧を取得
export const getBlogList = async (queries?: MicroCMSQueries) => {
  const blogList = await client.getList<Blog>({
    endpoint,
    queries,
  });

  return blogList;
};

// ブログの詳細を取得
export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const blogDetail = await client.getListDetail<Blog>({
    endpoint,
    contentId,
    queries,
  });

  return blogDetail;
};
