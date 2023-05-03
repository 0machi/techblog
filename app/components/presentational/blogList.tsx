import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '../../libs/dayjs'
import type { Blog } from '../../types/index'

type blogListProps = {
  blogList: Blog[]
}

export default function BlogList({ blogList }: blogListProps) {
  return (
    <div>
      <ul>
        {blogList.map((blog) => {
          return (
            <li key={blog.id}>
              <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
              <Link href={`/blogs/${blog.id}`}>
                {blog.eyecatch ? (
                  <Image
                    src={blog.eyecatch.url}
                    width={blog.eyecatch.width}
                    height={blog.eyecatch.height}
                    style={{
                      width: '30%',
                      height: 'auto',
                    }}
                    alt='eyecatch'
                  />
                ) : (
                  <Image src='/noimage.png' alt='No Image' />
                )}
                {blog.title}
              </Link>
              <p>著者 {blog.author}</p>
              <p>投稿日 {formatDate(blog.createdAt, 'YYYY-MM-DD')}</p>
              カテゴリ {blog.categories.map((categorie) => `#${categorie.name}`).join(', ')}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
