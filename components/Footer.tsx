import Image from "next/image";
import { NavBar } from "./NavBar";

export const websiteList = [
    { link: "https://instagram.com", label: "@instagram" },
    { link: "htpps://twitter.com", label: "@twitter" },
    { link: "https://facebook.com", label: "@facebook" }
]
export function Footer() {
    return (
        <footer className="grid grid-cols-4 p-3 p-10 bg-[#deb887] ">
            <div>
                <Image src="/travelLogo.png" alt="logo" width={100} height={100} />
                <div>@travelDestinations.com    </div>
            </div>
            <input
                className="w-full h-5 px-3 py-3 bg-white border-white focus:visible focus:outline-[#deb887]"
                type="text" />
            <div>
                <p className="text-center font-bold">Explore us:</p>
                <NavBar items={websiteList} />
            </div>
            <div>
                <p className="font-bold">Travel Destination Directory</p>
                <p>
                Phn:(555) 555-5555<br/>
                Email:travel@gmail.com<br/>
                <a href="#">Location</a>
                </p>
            </div>

        </footer>
    )
}