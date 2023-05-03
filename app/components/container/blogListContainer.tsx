import { getBlogList } from '../../libs/microcms'
import BlogList from '../presentational/blogList'

export default async function BlogListContainer() {
  const { contents } = await getBlogList()

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>
  }

  return <BlogList blogList={contents} />
}
