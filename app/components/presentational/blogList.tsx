import Link from 'next/link'

type blogListProps = {
  blogList: {
    id: string
    title: string
  }[]
}

export default function BlogList({ blogList }: blogListProps) {
  return (
    <div>
      <ul>
        {blogList.map((blog) => {
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
