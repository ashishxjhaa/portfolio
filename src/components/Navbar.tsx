import Image from "next/image"


function Navbar() {
  return (
    <div className="mx-4 px-4 h-15 py-3 w-80% bg-black rounded-xl">
        <div className="flex justify-between">
        <div className="flex justify-center items-center cursor-pointer gap-3">
            <Image src='/logo.jpg' alt="Profile" width={24} height={24} className="rounded-full" />
            <div className="text-xl font-bold">ASHISH</div>
        </div>
        <div className="flex border border-gray-400 hover:border-[#DAED6D] p-1 px-3 rounded-lg rounded-tl-none cursor-pointer gap-1 group hover:bg-[#DAED6D] hover:text-black">
            <div className="font-semibold">Hire me</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-forward-icon lucide-forward transform transition-transform duration-1200 group-hover:translate-x-1"><path d="m15 17 5-5-5-5"/><path d="M4 18v-2a4 4 0 0 1 4-4h12"/></svg>
        </div>
        </div>
    </div>
  )
}

export default Navbar