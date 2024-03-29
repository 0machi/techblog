import Link from 'next/link'
import { font } from '@/fonts'

export default function Title() {
  return (
    <div
      className={`h-[72px] max-w-5xl max-lg:max-w-3xl mx-auto flex items-end border-x border-dashed border-slate-200`}
    >
      <Link href={'/'}>
        <h2 className={`${font.JP_BOLD} text-violet-600 p-3 text-lg hover:text-black`}>
          Tech Blog
        </h2>
      </Link>
    </div>
  )
}
