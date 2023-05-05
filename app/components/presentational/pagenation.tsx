import Link from 'next/link'

export default function Pagination({
  pagenationCount,
  pageId,
}: {
  pagenationCount: number
  pageId: number
}) {
  return (
    <nav className='flex justify-center items-center space-x-2'>
      {[...Array(pagenationCount)].map((_, i) => {
        return (
          <Link
            key={i}
            href={`/blogs/pages/${i + 1}`}
            className={`my-[2%] mx-[0.5%] w-8 h-8 inline-flex justify-center items-center text-sm font-medium ${
              pageId === i + 1 ? 'bg-indigo-500 text-white rounded-full' : ''
            }`}
          >
            {i + 1}
          </Link>
        )
      })}
    </nav>
  )
}
