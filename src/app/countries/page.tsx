import Link from "next/link";

export default function CountriesList() {
    return <>
        <h1 className="font-bold text-xl">Countries List to explore</h1>
        <ul className="list-none">
            <li><Link href={'/country/india'}>India</Link></li>
            <li><Link href={'/country/france'}>France</Link></li>
            <li><Link href={'/country/america'}>America</Link></li>
            <li><Link href={'/country/greece'}>Greece</Link></li>
        </ul>
    </>
}