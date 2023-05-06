import BlogContainer from '@/components/container/blogContainer'
import { getBlogList } from '@/libs/microcms'

export const dynamicParams = false

export async function generateStaticParams() {
  const { contents } = await getBlogList()

  const paths = contents.map((blog) => {
    return {
      blogId: blog.id,
    }
  })

  return [ ...paths ]
}

export default BlogContainer
