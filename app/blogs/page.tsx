import Link from 'next/link'
import { getBlogList } from '../libs/microcms'

export default async function StaticPage() {
  const { contents } = await getBlogList()

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>
  }

  return (
    <div>
      <ul>
        {contents.map((blog) => {
          return (
            <li key={blog.id}>
              <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
