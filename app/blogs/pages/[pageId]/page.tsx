import BlogListContainer, { getPaginationCount, } from '@/app/components/container/blogListContainer'
import { getBlogList } from '@/app/libs/microcms'

export const dynamicParams = false

export async function generateStaticParams() {
    const { totalCount } = await getBlogList()

    const range = (paginationCount: number) => [ ...Array(paginationCount) ].map((_, i) => 1 + i)
    const paginationCount = getPaginationCount(totalCount)
    const paths = range(paginationCount).map((pageId) => {
        return {
            pageId: pageId.toString(),
        }
    })
    return [ ...paths ]
}

export default BlogListContainer
