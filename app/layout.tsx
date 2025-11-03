import "./global.css"
import Link from "next/link"
import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"


export const metadata = {title: 'Travel Destination Directory'}

const NavItem = [
  { link: '/about', label: 'About' },
  { link: '/contactInfo', label: 'Contact' },
  { link: '/country', label: 'Country' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar items={NavItem} />
        <div style={{ padding: "10rem", textAlign: "center" }}>
          {children}
        </div>

        <Footer/>
      </body>
    </html>
  )
}
