import Image from "next/image";

export default function Greece() {
    return <div className="flex flex-col items-center gap-5">
        <h2 className="text-3xl">Welcome to Greece</h2>
        <Image src="/Greece.jpg" alt="Greece Tourist Places" width={300} height={50} />
        <p>Explore the cities in Greece</p>
    </div>
}