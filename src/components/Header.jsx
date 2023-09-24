import Link from "next/link"

export const Header = () => {
    return (
        <header className="flex items-center justify-between py-6">
            <span><Link href={'/'}>DONA</Link></span>

            <nav>
                <ul className="flex items-center justify-between gap-4">
                    <li><Link href={'/users'}>users</Link></li>
                    <li><Link href={'/todos'}>todos</Link></li>
                </ul>
            </nav>
        </header>
    )
}