import { notFound } from 'next/navigation'
import BlogList from "@/components/presentational/blogList";
import Pagination from '@/components/presentational/pagination'
import { getBlogList } from '@/libs/microcms'

const PER_PAGE = 2
export const getPaginationCount = (totalCount: number) => Math.ceil(totalCount / PER_PAGE)

export default async function BlogListContainer({
                                                    params: { pageId },
                                                }: {
    params: { pageId: string }
}) {
    const { contents, totalCount } = await getBlogList({
        offset: (Number(pageId) - 1) * PER_PAGE,
        limit: PER_PAGE,
    })

    if (!contents || contents.length === 0) {
        return <h1>No contents</h1>
    }

    const paginationCount = getPaginationCount(totalCount)
    if (paginationCount < Number(pageId)) {
        return notFound()
    }

    return (
        <div>
            <BlogList blogList={contents}/>
            <Pagination paginationCount={paginationCount} pageId={Number(pageId)}/>
        </div>
    )
}
