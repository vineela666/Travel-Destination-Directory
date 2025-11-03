import Link from "next/link";
import Image from "next/image";

interface CountryCardProps {
    name: string;
    code: string;
    color: string;
}

export default function CountryCard({ name, code, color }: CountryCardProps) {
    return (
        <li
            className={`${color} p-4 rounded-2xl text-white shadow-md 
                  hover:scale-105 hover:shadow-xl transition-transform duration-300`}
        >
            <Link href={`/country/${code}`} className="flex items-center gap-3">
                
                <div>
                    <h2 className="text-xl font-semibold">{name}</h2>
                    {/* <p className="text-sm opacity-80">Click to explore</p> */}
                </div>
            </Link>
        </li>
    );
}
