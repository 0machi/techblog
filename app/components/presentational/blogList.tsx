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
      {blogList.map((blog) => {
        return (
          <div key={blog.id} className='bg-white border shadow-sm sm:flex'>
            <div className='flex-shrink-0 py-[1.5%] pl-[3%]'>
              <Link href={`/blogs/${blog.id}`}>
                {blog.eyecatch ? (
                  <Image
                    className='h-full w-full'
                    src={blog.eyecatch.url}
                    width={blog.eyecatch.width}
                    height={blog.eyecatch.height}
                    alt='eyecatch'
                  />
                ) : (
                  <Image className='h-full w-full' src='/noimage.png' alt='No Image' />
                )}
              </Link>
            </div>
            <div className='flex flex-wrap py-[1.5%] px-[3%]'>
              <div className='flex flex-col w-full h-full'>
                <Link href={`/blogs/${blog.id}`}>
                  <h1 className='text-2xl font-bold'>{blog.title}</h1>
                </Link>
                <p className='mt-[6%]'>{blog.summary}</p>
                <div className='mt-auto'>
                  <p className='text-xs'>著者 {blog.author}</p>
                  <p className='text-xs'>投稿日 {formatDate(blog.createdAt, 'YYYY-MM-DD')}</p>
                  <p className='text-xs'>
                    カテゴリ {blog.categories.map((categorie) => `#${categorie.name}`).join(', ')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
