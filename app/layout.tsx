'use client'
import '@/styles/globals.css'
import React, { useEffect } from 'react'
import Footer from '@/app/footer'
import Header from '@/app/header'
import HorizontalLine from '@/components/presentational/horizontalLine'
import { contactList } from '@/config/contactList'
import { serviceList } from '@/config/serviceList'
import { robotoRegular } from '@/styles/fonts'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // @ts-ignore
    import('preline')
  }, [])
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
