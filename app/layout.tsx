import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import Footer from '@/app/footer'
import Header from '@/app/header'
import HorizontalLine from '@/components/presentational/ui/horizontalLine'
import { contactList } from '@/config/contactList'
import { serviceList } from '@/config/serviceList'
import { fontVariables } from '@/fonts'
import { robotoRegular } from '@/styles/fonts'

const siteName = 'shinaps tech blog'
const description = 'shinaps tech blog'
const url = 'https://tech.shinaps.jp/'

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    site: '@sh1n4ps',
    creator: '@sh1n4ps',
  },
  // verification: {
  //   google: 'サーチコンソールのやつ',
  // },
  alternates: {
    canonical: url,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='jp' className={`${robotoRegular.className} bg-white ${fontVariables.join(' ')}`}>
      <body>
        <Header />
        {children}
        <Footer serviceList={serviceList} contactList={contactList} />
        <HorizontalLine />
        <div
          className={`max-w-5xl max-lg:max-w-3xl h-8 mx-auto border-x border-dashed border-slate-200`}
        />
        <Analytics />
      </body>
    </html>
  )
}
