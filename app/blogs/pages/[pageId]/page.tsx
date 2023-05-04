import BlogListContainer, {
  getPagenationCount,
} from '../../../components/container/blogListContainer'
import { getBlogList } from '../../../libs/microcms'

export const dynamicParams = false
export async function generateStaticParams() {
  const { totalCount } = await getBlogList()

  const range = (paginationCount: number) => [...Array(paginationCount)].map((_, i) => 1 + i)
  const pagenationCount = getPagenationCount(totalCount)
  const paths = range(pagenationCount)
  return [...paths]
}

export default BlogListContainer
