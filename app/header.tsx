import HeaderBorder from '@/components/presentational/headerBorder'
import { robotoBold } from '@/styles/fonts'

export default function Header() {
  const linkToOurServices = ''

  return (
    <header>
      <div
        className={`h-16 max-w-5xl max-lg:max-w-3xl mx-auto flex justify-between items-center border-x border-dashed border-slate-200`}>
        <h1 className={`${robotoBold.className} text-2xl px-3`}>shinaps</h1>
        {linkToOurServices && (
          <a href={linkToOurServices} className={`px-3`}>Our services</a>
        )}
      </div>
      <HeaderBorder />
    </header>
  )
}