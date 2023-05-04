import { notFound } from 'next/navigation'
import { getBlogList } from '../../libs/microcms'
import BlogList from '../presentational/blogList'
import Pagenation from '../presentational/pagenation'

const PER_PAGE = 2
export const getPagenationCount = (totalCount: number) => Math.ceil(totalCount / PER_PAGE)

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

  const pagenationCount = getPagenationCount(totalCount)
  if (pagenationCount < Number(pageId)) {
    return notFound()
  }

  return (
    <div>
      <BlogList blogList={contents} />
      <Pagenation pagenationCount={pagenationCount} />
    </div>
  )
}
