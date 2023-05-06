import type { MicroCMSQueries } from 'microcms-js-sdk';
import { createClient } from 'microcms-js-sdk';
import { microCMSConfig } from "@/config/micro-cms";
import type { Blog } from '@/types'


// API取得用のクライアントを作成
export const client = createClient({
    serviceDomain: microCMSConfig.serviceDomain,
    apiKey: microCMSConfig.apiKey,
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
