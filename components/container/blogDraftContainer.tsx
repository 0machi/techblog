import { notFound, redirect } from 'next/navigation'
import Blog from '@/components/presentational/blog'
import { highlightCodeBlock } from '@/libs/highlightjs'
import { getBlogDetail } from '@/libs/microcms'

export default async function BlogContainer({
                                                params: { blogId },
                                                searchParams: { draftKey },
                                            }: {
    params: { blogId: string }
    searchParams: { draftKey?: string }
}) {
    // 変更せずにプレビューを表示する場合
    if (typeof draftKey !== 'string' || draftKey === '') {
        redirect(`/blogs/${blogId}`)
    }

    const blog = await getBlogDetail(blogId, { draftKey })

    if (!blog) notFound()

    const blogHtml = blog.content
    const highlightedBlogHtml = highlightCodeBlock(blogHtml)

    return <Blog blog={blog} html={highlightedBlogHtml}/>
}
