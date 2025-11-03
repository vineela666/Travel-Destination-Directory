export default function ContactInfo() {
    return <>
        <div className="flex flex-col  justify-self-center items-center w-70 p-5  rounded-xl shadow-2xl">
            <h1 className="p-5 font-serif text-xl">Contact Info</h1> 
            <input className="border  rounded-xl " type="text"  placeholder="Full name"/><br/>
            <input className="border rounded-xl" type="email"  placeholder="E-mail"/><br/>
            <textarea className="border rounded-xl" placeholder="Message"/><br/>
            <button className="border w-20 " type="submit">Submit</button>
        </div>

    </>
}