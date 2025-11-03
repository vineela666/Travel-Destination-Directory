import Link from "next/link"

interface NavItems {
    link: string,
    label: string
}

export function NavBar({ items }: { items: NavItems[] }) {

    return (
        <header className="p-3 text-center bg-[#deb887]">
            <nav className="flex justify-evenly ">
                {items.map((item) => (
                    <Link href={item.link} key={item.label}>{item.label}</Link>
                ))}
            </nav>
        </header>
    )
}
