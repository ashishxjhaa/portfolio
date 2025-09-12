"use client"

import Image from "next/image"
import { useState } from "react";
import { motion } from "framer-motion";
import { ThemeButton } from "./ThemeButton";


function Navbar({ active, setActive }: { active: string; setActive: (val: string) => void }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed top-4 left-4 right-4 py-3 mx-auto px-4 h-15 bg-[#2C2125]/40 backdrop-blur-md rounded-xl z-50">
        <div className="flex justify-between">
          <div className="flex justify-center items-center cursor-pointer gap-3">
            <motion.a href="https://ashishxjha.vercel.app" onHoverStart={() => {new Audio('/hover.mp3').play()}} whileHover={{ rotate: -360, scale: 1.15 }} transition={{ duration: 0.7 }}>
              <Image src='/logo.jpg' alt="Profile" width={35} height={35} className="rounded-md" />
            </motion.a>
            <div className="text-xl font-bold dark:text-white text-black">ASHISH</div>
          </div>

          <div className="hidden md:flex justify-end gap-3">
            <motion.a href="#about" onClick={() => { setActive("about"); new Audio('/switchtab.mp3').play()}} className={`flex items-center gap-3 cursor-pointer rounded-sm px-4 py-2 transform transition-all duration-500 text-black dark:text-white ${active === "about" ? "bg-[#F5E901] text-black" : "hover:bg-[#DAED6D] dark:hover:text-black"}`}>
              <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
              <div className={`font-semibold ${active === "about" ? "text-black" : "" }`}>About</div>
            </motion.a>
            <motion.a href="#skills" onClick={() => { setActive("skills"); new Audio('/switchtab.mp3').play()}} className={`flex items-center gap-3 cursor-pointer rounded-sm px-4 py-2 transform transition-all duration-500 text-black dark:text-white ${active === "skills" ? "bg-[#F5E901] text-black" : "hover:bg-[#DAED6D] dark:hover:text-black"}`}>
              <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
              <div className={`font-semibold ${active === "skills" ? "text-black" : "" }`}>Skills</div>
            </motion.a>
            <motion.a href="#projects" onClick={() => { setActive("projects"); new Audio('/switchtab.mp3').play()}} className={`flex items-center gap-3 cursor-pointer rounded-sm px-4 py-2 transform transition-all duration-500 text-black dark:text-white ${active === "projects" ? "bg-[#F5E901] text-black" : "hover:bg-[#DAED6D] dark:hover:text-black"}`}>
              <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
              <div className={`font-semibold ${active === "projects" ? "text-black" : "" }`}>Projects</div>
            </motion.a>
            <motion.a href="#experience" onClick={() => { setActive("experience"); new Audio('/switchtab.mp3').play()}} className={`flex items-center gap-3 cursor-pointer rounded-sm px-4 py-2 transform transition-all duration-500 text-black dark:text-white ${active === "experience" ? "bg-[#F5E901] text-black" : "hover:bg-[#DAED6D] dark:hover:text-black"}`}>
              <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
              <div className={`font-semibold ${active === "experience" ? "text-black" : "" }`}>Experience</div>
            </motion.a>
            <motion.a href="#contact" onClick={() => { setActive("contact"); new Audio('/switchtab.mp3').play()}} className={`flex items-center gap-3 cursor-pointer rounded-sm px-4 py-2 transform transition-all duration-500 text-black dark:text-white ${active === "contact" ? "bg-[#F5E901] text-black" : "hover:bg-[#DAED6D] dark:hover:text-black"}`}>
              <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
              <div className={`font-semibold ${active === "contact" ? "text-black" : "" }`}>Contact</div>
            </motion.a>

            <ThemeButton />
          </div>

          <div className="flex md:hidden items-center cursor-pointer pr-4 gap-4">
            <div onClick={() => setOpen(!open)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu text-white"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
            </div>
            <ThemeButton />
          </div>

        </div>

        {open && (
          <div className="flex flex-col mt-3 py-3 gap-2 md:hidden dark:bg-black bg-gray-100">
            <motion.a href="#about" onClick={() => setActive("about")} className={`flex items-center gap-3 cursor-pointer rounded-sm w-80 self-center px-4 py-2 transform transition-all duration-500 border border-[#DAED6D] text-black dark:text-white ${active === "about" ? "bg-[#F5E901] text-black" : "hover:bg-[#DAED6D] dark:hover:text-black"}`}>
              <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
              <div className={`font-semibold ${active === "about" ? "text-black" : "" }`}>About</div>
            </motion.a>
            <motion.a href="#skills" onClick={() => setActive("skills")} className={`flex items-center gap-3 cursor-pointer rounded-sm w-80 self-center px-4 py-2 transform transition-all duration-500 border border-[#DAED6D] text-black dark:text-white ${active === "skills" ? "bg-[#F5E901] text-black" : "hover:bg-[#DAED6D] dark:hover:text-black"}`}>
              <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
              <div className={`font-semibold ${active === "skills" ? "text-black" : "" }`}>Skills</div>
            </motion.a>
            <motion.a href="#projects" onClick={() => setActive("projects")} className={`flex items-center gap-3 cursor-pointer rounded-sm w-80 self-center px-4 py-2 transform transition-all duration-500 border border-[#DAED6D] text-black dark:text-white ${active === "projects" ? "bg-[#F5E901] text-black" : "hover:bg-[#DAED6D] dark:hover:text-black"}`}>
              <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
              <div className={`font-semibold ${active === "projects" ? "text-black" : "" }`}>Projects</div>
            </motion.a>
            <motion.a href="#experience" onClick={() => setActive("experience")} className={`flex items-center gap-3 cursor-pointer rounded-sm w-80 self-center px-4 py-2 transform transition-all duration-500 border border-[#DAED6D] text-black dark:text-white ${active === "experience" ? "bg-[#F5E901] text-black" : "hover:bg-[#DAED6D] dark:hover:text-black"}`}>
              <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
              <div className={`font-semibold ${active === "experience" ? "text-black" : "" }`}>Experience</div>
            </motion.a>
            <motion.a href="#contact" onClick={() => setActive("contact")} className={`flex items-center gap-3 cursor-pointer rounded-sm px-4 w-80 self-center py-2 transform transition-all duration-500 border border-[#DAED6D] text-black dark:text-white ${active === "contact" ? "bg-[#F5E901] text-black" : "hover:bg-[#DAED6D] dark:hover:text-black"}`}>
              <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
              <div className={`font-semibold ${active === "contact" ? "text-black" : "" }`}>Contact</div>
            </motion.a>
          </div>
        )}
      </div>
  )
}

export default Navbar