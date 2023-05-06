import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import HeaderBorder from '@/components/presentational/headerBorder'
import { robotoBold } from '@/styles/fonts'

export default function Header() {
  return (
    <header>
      <div
        className={`h-16 max-w-5xl mx-auto flex justify-between items-center border-x border-dashed border-slate-200`}>
        <h1 className={`${robotoBold.className} text-2xl px-3`}>shinaps</h1>
        <a href='#' className={`px-3`}>Our services <NavigateNextIcon fontSize={`small`} /></a>
      </div>
      <HeaderBorder />
    </header>
  )
}