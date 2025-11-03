export default function ContactInfo() {
    return <>
        <div className="flex flex-col gap-4 w-100   bg-cyan-500">
            <h1>Contact Info</h1>
            <input type="text"  placeholder="Full name"/><br/>
            <input type="email"  placeholder="E-mail"/><br/>
            <textarea placeholder="Message"/><br/>
            <button type="submit">Submit</button>
        </div>

    </>
}