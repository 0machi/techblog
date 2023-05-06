import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <nav>
                <div><Link href='/blogs/pages/1'>shinaps</Link></div>
                <div>
                    <div>
                        <div>
                            <button type='button'>Our Services</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
