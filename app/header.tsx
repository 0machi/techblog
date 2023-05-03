import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <a>shinaps</a>
      <br />
      <Link href='/blogs'>Tech Blog</Link>
      <br />
      <a>Our Services</a>
    </header>
  )
}
