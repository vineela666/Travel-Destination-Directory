import Image from "next/image";

export default function America() {
    return <div className="flex flex-col items-center gap-5">
        <h2 className="text-3xl">Welcome to America</h2>
        <Image src="/America.jpg" alt="American Tourist Places" width={300} height={50} />
        <p>Explore the cities in America</p>
    </div>
}