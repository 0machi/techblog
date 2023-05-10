import 'server-only'
import type { MicroCMSQueries } from 'microcms-js-sdk'
import { client } from '@/libs/microcms/client'
import type { Category } from '@/types'


const endpoint = 'categories'

export const fetchCategoryList = async (queries?: MicroCMSQueries) => {
    const categoryList = await client.getList<Category>({
        endpoint,
        queries,
    })

    return categoryList
}
