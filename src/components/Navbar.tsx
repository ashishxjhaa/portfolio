"use client"

import Image from "next/image"
import { motion } from "framer-motion";
import { ThemeButton } from "./ThemeButton";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IconArrowUpRight } from "@tabler/icons-react";


function Navbar() {

  return (
    <div className="fixed top-4 left-4 right-4 py-3 mx-auto px-4 h-15 w-[90%] max-w-4xl dark:bg-[#2C2125]/40 bg-white/60 backdrop-blur-md rounded-xl z-50">
        <div className="flex justify-between">
          <div className="flex justify-center items-center cursor-pointer gap-3">
            <motion.a href="https://ashishxjha.vercel.app" onHoverStart={() => {new Audio('/hover.mp3').play()}} whileHover={{ rotate: -360, scale: 1.15 }} transition={{ duration: 0.7 }}>
              <Image src='/logo.jpg' alt="Profile" width={35} height={35} className="rounded-md" />
            </motion.a>
            <div className="text-xl font-bold dark:text-white text-black">ASHISH</div>
          </div>

          <div className="flex justify-end gap-3">

            <Link href="https://x.com/ashishxjha" onClick={() => new Audio("/switchtab.mp3").play()} target="_blank" className="flex items-center gap-2 mx-4 relative group transition-opacity opacity-70 hover:opacity-100">
              <span className="dark:text-white text-black opacity-70 group-hover:opacity-100 flex items-center font-bold gap-2 transition-transform duration-500 ease-in-out group-hover:-translate-x-2">
                <FaXTwitter />
                <div className="dark:text-white text-black opacity-70 group-hover:opacity-100">Twitter</div>
              </span>
              <IconArrowUpRight size={48} strokeWidth={1} className="absolute h-[20px] -right-8 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 dark:text-white text-black" />
            </Link>


            <Link href="https://github.com/ashishxjhaa" onClick={() => new Audio("/switchtab.mp3").play()} target="_blank" className="flex items-center gap-2 mx-4 relative group transition-opacity opacity-70 hover:opacity-100">
              <span className="dark:text-white text-black opacity-70 group-hover:opacity-100 flex items-center font-bold gap-2 transition-transform duration-500 ease-in-out group-hover:-translate-x-2">
                <FaGithub />
                <div className="dark:text-white text-black opacity-70 group-hover:opacity-100">GitHub</div>
              </span>
              <IconArrowUpRight size={48} strokeWidth={1} className="absolute h-[20px] -right-8 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 dark:text-white text-black" />
            </Link>

            <ThemeButton />
          </div>

        </div>
      </div>
  )
}

export default Navbar