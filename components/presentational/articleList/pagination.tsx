import Link from 'next/link'

type paginationProps = {
  paginationCount: number
  pageNumber: number
}

export default function Pagination({ paginationCount, pageNumber }: paginationProps) {
  return (
    <>
      <div
        className={`h-32 max-w-5xl max-lg:max-w-3xl mx-auto flex items-center justify-between border-x border-dashed border-slate-200`}
      >
        <ul className={`flex w-40 mx-auto justify-center items-center`}>
          {[...Array(paginationCount)].map((_, i) => {
            const pageIndex = i + 1
            const isActive = pageIndex === pageNumber
            return (
              <li key={i}>
                <Link href={`/articles/pages/${pageIndex}`}>
                  <span
                    className={`w-5 h-5 block text-center hover:text-violet-600 ${
                      isActive ? 'font-black text-violet-600' : ''
                    }`}
                  >
                    {pageIndex}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
