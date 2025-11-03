import Image from "next/image"

export default function IndianCities() {
    return <div className="flex flex-col gap-5 items-center"> 
        <h2 className="text-3xl">Welcome to India</h2>
        <Image src="/IndiaTourism.jpg" width={300} height={200} alt="Indian Tourist places"/>
        <p>Explore the cities in India</p>
    </div>
}