'use client'
import './globals.css'
import { useEffect } from 'react'
import Footer from './footer'
import Header from './header'
import type { Service } from './types/index'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // @ts-ignore
    import('preline')
  }, [])
  const serviceList: Service[] = [
    { name: 'namewise', url: 'https://namewise.jp/' },
    { name: 'imakita-sangyo', url: 'https://lin.ee/IDmwlB7' },
  ]
  const contactList: Service[] = [
    { name: 'Twitter', url: 'https://twitter.com/sh1n4ps' },
    { name: 'GitHub', url: 'https://github.com/sh1n4ps' },
  ]
  return (
    <html lang='jp'>
      <body>
        <Header serviceList={serviceList} />
        {children}
        <Footer serviceList={serviceList} contactList={contactList} />
      </body>
    </html>
  )
}
