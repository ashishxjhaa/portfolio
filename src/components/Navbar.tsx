"use client"

import Image from "next/image"


function Navbar({ active, setActive }: { active: string; setActive: (val: string) => void }) {
  return (
    <div className="fixed top-3 left-4 right-4 py-3 mx-auto px-4 h-15 bg-black rounded-xl z-50">
        <div className="flex justify-between">
        <div className="flex justify-center items-center cursor-pointer gap-3">
          <Image src='/logo.jpg' alt="Profile" width={24} height={24} className="rounded-full" />
          <div className="text-xl font-bold">ASHISH</div>
        </div>

        <div className="flex justify-end gap-3">
        <a href="#about" onClick={() => setActive("about")} className={`flex items-center gap-3 cursor-pointer rounded-sm px-4 py-2 ${active === "about" ? "bg-[#F5E901] text-black" : "hover:bg-[#DAED6D] hover:text-black"}`}>
          <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
          <div className="font-semibold">About</div>
        </a>
        <a href="#skills" onClick={() => setActive("skills")} className={`flex items-center gap-3 cursor-pointer rounded-sm px-4 py-2 ${active === "skills" ? "bg-[#F5E901] text-black" : "hover:bg-[#DAED6D] hover:text-black"}`}>
          <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
          <div className="font-semibold">Skills</div>
        </a>
        <a href="#projects" onClick={() => setActive("projects")} className={`flex items-center gap-3 cursor-pointer rounded-sm px-4 py-2 ${active === "projects" ? "bg-[#F5E901] text-black" : "hover:bg-[#DAED6D] hover:text-black"}`}>
          <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
          <div className="font-semibold">Projects</div>
        </a>
        <a href="#experience" onClick={() => setActive("experience")} className={`flex items-center gap-3 cursor-pointer rounded-sm px-4 py-2 ${active === "experience" ? "bg-[#F5E901] text-black" : "hover:bg-[#DAED6D] hover:text-black"}`}>
          <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
          <div className="font-semibold">Experience</div>
        </a>
        <a href="#contact" onClick={() => setActive("contact")} className={`flex items-center gap-3 cursor-pointer rounded-sm px-4 py-2 ${active === "contact" ? "bg-[#F5E901] text-black" : "hover:bg-[#DAED6D] hover:text-black"}`}>
          <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
          <div className="font-semibold">Contact</div>
        </a>
        </div>


        {/* <div className="flex border border-gray-400 hover:border-[#DAED6D] py-2 px-3 rounded-lg rounded-tl-none cursor-pointer gap-1 group hover:bg-[#DAED6D] hover:text-black">
          <div className="font-semibold">Hire me</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-forward-icon lucide-forward transform transition-transform duration-1200 group-hover:translate-x-1"><path d="m15 17 5-5-5-5"/><path d="M4 18v-2a4 4 0 0 1 4-4h12"/></svg>
        </div> */}
        </div>
    </div>
  )
}

export default Navbar