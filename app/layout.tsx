'use client'
import './globals.css'
import { useEffect } from 'react'
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
  return (
    <html lang='jp'>
      <body>
        <Header serviceList={serviceList} />
        {children}
      </body>
    </html>
  )
}
