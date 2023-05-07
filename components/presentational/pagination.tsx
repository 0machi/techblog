import Link from 'next/link'
import HorizontalLine from '@/components/presentational/horizontalLine'

type paginationProps = {
  paginationCount: number
}

export default function Pagination({ paginationCount }: paginationProps) {
  return (
    <>
      <div
        className={`h-32 max-w-5xl max-lg:max-w-3xl mx-auto flex items-center justify-between border-x border-dashed border-slate-200`}
      >
        <ul className={`flex w-40 mx-auto justify-center items-center`}>
          {[...Array(paginationCount)].map((_, i) => {
            return (
              <li key={i}>
                <Link href={`/articles/pages/${i + 1}`}>
                  <span className={`w-5 h-5 block text-center hover:text-violet-600`}>{i + 1}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <HorizontalLine />
    </>
  )
}
