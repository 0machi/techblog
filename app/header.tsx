import Image from 'next/image'
import HeaderBorder from '@/components/presentational/headerBorder'
import { github, twitter } from '@/config/contactList'
import { robotoBold } from '@/styles/fonts'

export default function Header() {
  const linkToOurServices = ''

  return (
    <header>
      <div
        className={`h-16 max-w-5xl max-lg:max-w-3xl mx-auto flex justify-between items-center border-x border-dashed border-slate-200`}
      >
        <h1 className={`${robotoBold.className} text-2xl px-3`}>shinaps</h1>
        {linkToOurServices && (
          <a href={linkToOurServices} className={`px-3`}>
            Our services
          </a>
        )}
        <div className={`flex justify-center items-baseline gap-4 px-3`}>
          <a href={twitter.url} target='_blank' rel='noopener noreferrer'>
            <Image src='/twitter-icon.svg' width={22} height={22} alt='github icon' />
          </a>
          <a href={github.url} target='_blank' rel='noopener noreferrer'>
            <Image src='/github-icon.svg' width={20} height={20} alt='github icon' />
          </a>
        </div>
      </div>
      <HeaderBorder />
    </header>
  )
}
