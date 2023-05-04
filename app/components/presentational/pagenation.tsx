import Link from 'next/link'

export default function Pagination({ pagenationCount }: { pagenationCount: number }) {
  return (
    <ul>
      {[...Array(pagenationCount)].map((_, i) => {
        return (
          <li key={i}>
            <Link href={`/blogs/pages/${i + 1}`}>{i + 1}</Link>
          </li>
        )
      })}
    </ul>
  )
}
