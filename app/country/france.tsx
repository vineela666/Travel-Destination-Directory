import Image from "next/image"

export default function France() {
    return <div className="flex flex-col items-center gap-5">
        <h2 className="text-3xl">Welcome to France</h2>
        <Image src="/FranceTourism.jpg" alt="France Tourist Places" width={300} height={200}/>
        <p>Explore the cities in France</p>
    </div>
}