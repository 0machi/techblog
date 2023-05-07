import '@/styles/globals.css'
import { Metadata } from 'next'
import Footer from '@/app/footer'
import Header from '@/app/header'
import HorizontalLine from '@/components/presentational/horizontalLine'
import { contactList } from '@/config/contactList'
import { serviceList } from '@/config/serviceList'
import { robotoRegular } from '@/styles/fonts'

const siteName = 'shinaps tech blog'
const description = 'shinaps tech blog'
const url = 'https://shinaps-techblog.vercel.app/'

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
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
    <html lang='jp' className={`${robotoRegular.className} bg-white`}>
    <body>
    <Header />
    {children}
    <Footer serviceList={serviceList} contactList={contactList} />
    <HorizontalLine />
    <div className={`max-w-5xl h-8 mx-auto border-x border-dashed border-slate-200`} />
    </body>
    </html>
  )
}
