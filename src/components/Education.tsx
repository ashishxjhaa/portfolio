"use client"

import Image from "next/image"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


function Education() {

    return (
        <div className="mx-10">
            <div className="dark:text-white text-black max-w-xl mx-auto">
                <div className="text-2xl sm:text-4xl font-medium tracking-tight leading-normal">Education</div>
            </div>
            <a onClick={() => new Audio('/switchtab.mp3').play()} href="https://shooliniuniversity.com" target="_blank" className="flex gap-3 sm:gap-5 max-w-xl mx-auto pt-6 group">
                <div>
                    <Image src="/shooliniuniversity.jpeg" width={100} height={100} alt="University" className="w-10 h-10 sm:w-13 sm:h-13 rounded-full object-cover border" />
                </div>
                <div className="flex justify-between w-[80%] sm:w-[85%]">
                <div>
                    <div className="flex place-items-center gap-2 text-md font-medium dark:text-white text-black whitespace-nowrap">
                        <span className="text-sm">Shoolini University</span>
                        <span className="opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-6 transition-all duration-450"><MdKeyboardDoubleArrowRight /></span>
                    </div>
                    <div className="text-xs sm:text-sm dark:text-white text-black opacity-85 whitespace-nowrap">Bachelor of Computer Applications</div>
                </div>
                <div className="opacity-75 dark:text-gray-300 text-neutral-700 whitespace-nowrap text-xs sm:text-md">2025 - 2028</div>
                </div>
            </a>
        </div>
    )
}

export default Education