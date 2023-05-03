import Link from 'next/link'
import { getBlogList } from '../libs/microcms'

export default async function StaticPage() {
  const { contents } = await getBlogList()

  // ページの生成された時間を取得
  const time = new Date().toLocaleString()

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>
  }

  return (
    <div>
      <h1>{time}</h1>
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
