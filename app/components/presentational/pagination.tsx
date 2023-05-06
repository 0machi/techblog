import Link from 'next/link'

type paginationProps = {
    paginationCount: number
    pageId: number
}

export default function Pagination({ paginationCount, pageId, }: paginationProps) {
    return (
        <nav>
            {[ ...Array(paginationCount) ].map((_, i) => {
                return (
                    <Link
                        key={i}
                        href={`/blogs/pages/${i + 1}`}
                    >
                        {i + 1}
                    </Link>
                )
            })}
        </nav>
    )
}
