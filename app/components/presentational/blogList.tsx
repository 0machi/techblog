import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/app/libs/dayjs'
import type { Blog } from '@/app/types'

type blogListProps = {
    blogList: Blog[]
}

export default function BlogList({ blogList }: blogListProps) {
    return (
        <div>
            {blogList.map((blog) => {
                return (
                    <div key={blog.id}>
                        <div>
                            <Link href={`/blogs/${blog.id}`}>
                                {blog.eyecatch ? (
                                    <Image
                                        src={blog.eyecatch.url}
                                        width={blog.eyecatch.width}
                                        height={blog.eyecatch.height}
                                        alt='eyecatch'
                                    />
                                ) : (
                                    <Image src='/noimage.png' alt='No Image'/>
                                )}
                            </Link>
                        </div>
                        <div>
                            <div>
                                <Link href={`/blogs/${blog.id}`}>
                                    <h1>{blog.title}</h1>
                                </Link>
                                <p>{blog.summary}</p>
                                <div>
                                    <p>created_at: {formatDate(blog.createdAt, 'YYYY.MM.DD')}</p>
                                    <p>author: {blog.author}</p>
                                    <p>
                                        tags: {blog.categories.map((category) => `${category.name}`).join(', ')}
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
