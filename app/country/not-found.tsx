"use client"
import { usePathname } from "next/navigation"

export default function CountryNotFound(){

    const pathname=usePathname()
    const countryId=pathname.split("/")[2]
    return <>
        <h1>Details Not Found for the {countryId}</h1>    
    </>
}