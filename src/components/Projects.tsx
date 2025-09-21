"use client"

import Image from "next/image"
import { IoIosLink, IoLogoGithub } from "react-icons/io";
import { SimpleTooltip } from "./ui/tooltip";

function Projects() {

  return (
    <div className="py-20">
      <div className="px-10 sm:px-20 dark:text-white text-black max-w-3xl mx-auto">
        <div className="text-2xl sm:text-3xl font-medium tracking-tight leading-normal">Projects</div>
        <div className="text-sm opacity-70">Selected work featuring full-stack apps, UI polish, and performance.</div>
      </div>
      <div className="w-[90%] mt-10 border dark:border-white/30 border-black/30 rounded-md px-4 py-10 max-w-3xl mx-auto">
        
        <div className="flex py-2 pb-3 place-items-center dark:bg-black/30 bg-white dark:hover:bg-[#262626]/20 hover:bg-gray-300/20 cursor-pointer rounded-md w-full sm:px-10 gap-4 sm:gap-10 mx-auto overflow-hidden">
          <div>
            <Image className="px-2 pt-2.5 max-w-[150px] w-[150px] h-[90px] rounded-xl [object-position:0_-13px] object-cover" src="/projectfunding.png" width={565} height={275} alt="ProjectFunding Preview" />
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-3 dark:text-white text-black">
            <div className="text-md font-medium">Project Funding</div>
            <div className="text-sm opacity-70 w-[70%] sm:w-full max-w-xs">A Website for raise funds.</div>
            <div className="gap-2 hidden md:block">
              <div className="flex gap-2 dark:text-slate-300 text-neutral-800 whitespace-nowrap">
                <div className="text-xs sm:text-sm rounded-full dark:bg-[#262626] bg-gray-300 w-fit h-fit px-2 sm:px-3 py-1">Next.js</div>
                <div className="text-xs sm:text-sm rounded-full dark:bg-[#262626] bg-gray-300 w-fit h-fit px-2 sm:px-3 py-1">Typescript</div>
                <div className="text-xs sm:text-sm rounded-full dark:bg-[#262626] bg-gray-300 w-fit h-fit px-2 sm:px-3 py-1">Tailwind CSS</div>
              </div>
            </div>
          </div>
          <div className="flex py-2 gap-6 lg:pl-10 overflow-hidden flex-shrink-0 pr-8">
            <SimpleTooltip content="Open Project Link">
            <a onClick={() => new Audio('/switchtab.mp3').play()} href={'https://projectfunding.vercel.app'} target="_blank" rel="noopener noreferrer" className="flex items-center dark:text-white text-black lg:px-3 lg:py-1.5 cursor-pointer">
              <IoIosLink size={25} />
            </a>
            </SimpleTooltip>
            <SimpleTooltip content="View Source Code">
            <a onClick={() => new Audio('/switchtab.mp3').play()} href={'https://github.com/ashishxjhaa/Project-Funding'} target="_blank" rel="noopener noreferrer" className="flex items-center dark:text-white text-black lg:px-3 lg:py-1.5 cursor-pointer">
              <IoLogoGithub size={25} />
            </a>
            </SimpleTooltip>
          </div>
          </div>
        </div>

        <div className="flex py-2 pb-3 place-items-center dark:bg-black/30 bg-white dark:hover:bg-[#262626]/20 hover:bg-gray-300/20 cursor-pointer rounded-md w-full sm:px-10 gap-4 sm:gap-10 mx-auto overflow-hidden">
          <div>
            <Image className="px-2 pt-2.5 max-w-[150px] w-[150px] h-[90px] rounded-xl [object-position:0_-13px] object-cover" src="/reportpiracy.png" width={565} height={275} alt="ReportPiracy Preview" />
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-3 dark:text-white text-black">
            <div className="text-md font-medium">Report Piracy</div>
            <div className="text-sm opacity-70 w-[70%] sm:w-full max-w-xs">Users can report pirated content.</div>
            <div className="gap-2 hidden md:block">
              <div className="flex gap-2 dark:text-slate-300 text-neutral-800 whitespace-nowrap">
                <div className="text-xs sm:text-sm rounded-full dark:bg-[#262626] bg-gray-300 w-fit h-fit px-2 sm:px-3 py-1">React.js</div>
                <div className="text-xs sm:text-sm rounded-full dark:bg-[#262626] bg-gray-300 w-fit h-fit px-2 sm:px-3 py-1">Tailwind CSS</div>
                <div className="text-xs sm:text-sm rounded-full dark:bg-[#262626] bg-gray-300 w-fit h-fit px-2 sm:px-3 py-1">Express</div>
              </div>
            </div>
          </div>
          <div className="flex py-2 gap-6 lg:pl-10 overflow-hidden flex-shrink-0 pr-8">
            <SimpleTooltip content="Open Project Link">
            <a onClick={() => new Audio('/switchtab.mp3').play()} href={'https://reportpiracy.vercel.app'} target="_blank" rel="noopener noreferrer" className="flex items-center dark:text-white text-black lg:px-3 lg:py-1.5 cursor-pointer">
              <IoIosLink size={25} />
            </a>
            </SimpleTooltip>
            <SimpleTooltip content="View Source Code">
            <a onClick={() => new Audio('/switchtab.mp3').play()} href={'https://github.com/ashishxjhaa/Report-Piracy'} target="_blank" rel="noopener noreferrer" className="flex items-center dark:text-white text-black lg:px-3 lg:py-1.5 cursor-pointer">
              <IoLogoGithub size={25} />
            </a>
            </SimpleTooltip>
          </div>
          </div>
        </div>

        <div className="flex py-2 pb-3 place-items-center dark:bg-black/30 bg-white dark:hover:bg-[#262626]/20 hover:bg-gray-300/20 cursor-pointer rounded-md w-full sm:px-10 gap-4 sm:gap-10 mx-auto overflow-hidden">
          <div>
            <Image className="px-2 pt-2.5 max-w-[150px] w-[150px] h-[90px] rounded-xl [object-position:0_-13px] object-cover" src="/agently.png" width={565} height={275} alt="Agently Preview" />
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-3 dark:text-white text-black">
            <div className="text-md font-medium">Agently</div>
            <div className="text-sm opacity-70 w-[70%] sm:w-full max-w-xs">Create agent and assign task via lists.</div>
            <div className="gap-2 hidden md:block">
              <div className="flex gap-2 dark:text-slate-300 text-neutral-800 whitespace-nowrap">
                <div className="text-xs sm:text-sm rounded-full dark:bg-[#262626] bg-gray-300 w-fit h-fit px-2 sm:px-3 py-1">React.js</div>
                <div className="text-xs sm:text-sm rounded-full dark:bg-[#262626] bg-gray-300 w-fit h-fit px-2 sm:px-3 py-1">Javascript</div>
                <div className="text-xs sm:text-sm rounded-full dark:bg-[#262626] bg-gray-300 w-fit h-fit px-2 sm:px-3 py-1">Express</div>
              </div>
            </div>
          </div>
          <div className="flex py-2 gap-6 lg:pl-10 overflow-hidden flex-shrink-0 pr-8">
            <SimpleTooltip content="Open Project Link">
            <a onClick={() => new Audio('/switchtab.mp3').play()} href={'https://agently-sable.vercel.app'} target="_blank" rel="noopener noreferrer" className="flex items-center dark:text-white text-black lg:px-3 lg:py-1.5 cursor-pointer">
              <IoIosLink size={25} />
            </a>
            </SimpleTooltip>
            <SimpleTooltip content="View Source Code">
            <a onClick={() => new Audio('/switchtab.mp3').play()} href={'https://github.com/ashishxjhaa/agently'} target="_blank" rel="noopener noreferrer" className="flex items-center dark:text-white text-black lg:px-3 lg:py-1.5 cursor-pointer">
              <IoLogoGithub size={25} />
            </a>
            </SimpleTooltip>
          </div>
          </div>
        </div>

        <div className="flex py-2 pb-3 place-items-center dark:bg-black/30 bg-white dark:hover:bg-[#262626]/20 hover:bg-gray-300/20 cursor-pointer rounded-md w-full sm:px-10 gap-4 sm:gap-10 mx-auto overflow-hidden">
          <div>
            <Image className="px-2 pt-2.5 max-w-[150px] w-[150px] h-[90px] rounded-xl [object-position:0_-13px] object-cover" src="/ziya.png" width={565} height={275} alt="Ziya Preview" />
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-3 dark:text-white text-black">
            <div className="text-md font-medium">Ziya</div>
            <div className="text-sm opacity-70 w-[70%] sm:w-full max-w-xs">Just landing page of modern website.</div>
            <div className="gap-2 hidden md:block">
              <div className="flex gap-2 dark:text-slate-300 text-neutral-800 whitespace-nowrap">
                <div className="text-xs sm:text-sm rounded-full dark:bg-[#262626] bg-gray-300 w-fit h-fit px-2 sm:px-3 py-1">Next.js</div>
                <div className="text-xs sm:text-sm rounded-full dark:bg-[#262626] bg-gray-300 w-fit h-fit px-2 sm:px-3 py-1">Typescript</div>
                <div className="text-xs sm:text-sm rounded-full dark:bg-[#262626] bg-gray-300 w-fit h-fit px-2 sm:px-3 py-1">Tailwind CSS</div>
              </div>
            </div>
          </div>
          <div className="flex py-2 gap-6 lg:pl-10 overflow-hidden flex-shrink-0 pr-8">
            <SimpleTooltip content="Open Project Link">
            <a onClick={() => new Audio('/switchtab.mp3').play()} href={'https://ziya-nine.vercel.app'} target="_blank" rel="noopener noreferrer" className="flex items-center dark:text-white text-black lg:px-3 lg:py-1.5 cursor-pointer">
              <IoIosLink size={25} />
            </a>
            </SimpleTooltip>
            <SimpleTooltip content="View Source Code">
            <a onClick={() => new Audio('/switchtab.mp3').play()} href={'https://github.com/ashishxjhaa/ziya'} target="_blank" rel="noopener noreferrer" className="flex items-center dark:text-white text-black lg:px-3 lg:py-1.5 cursor-pointer">
              <IoLogoGithub size={25} />
            </a>
            </SimpleTooltip>
          </div>
          </div>
        </div>

        <div className="flex py-2 pb-3 place-items-center dark:bg-black/30 bg-white dark:hover:bg-[#262626]/20 hover:bg-gray-300/20 cursor-pointer rounded-md w-full sm:px-10 gap-4 sm:gap-10 mx-auto overflow-hidden">
          <div>
            <Image className="px-2 pt-2.5 max-w-[150px] w-[150px] h-[90px] rounded-xl [object-position:0_-13px] object-cover" src="/savetube.png" width={565} height={275} alt="SaveTube Preview" />
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-3 dark:text-white text-black">
            <div className="text-md font-medium">Save Tube</div>
            <div className="text-sm opacity-70 w-[70%] sm:w-full max-w-xs">You can download youtube video.</div>
            <div className="gap-2 hidden md:block">
              <div className="flex gap-2 dark:text-slate-300 text-neutral-800 whitespace-nowrap">
                <div className="text-xs sm:text-sm rounded-full dark:bg-[#262626] bg-gray-300 w-fit h-fit px-2 sm:px-3 py-1">Next.js</div>
                <div className="text-xs sm:text-sm rounded-full dark:bg-[#262626] bg-gray-300 w-fit h-fit px-2 sm:px-3 py-1">Typescript</div>
                <div className="text-xs sm:text-sm rounded-full dark:bg-[#262626] bg-gray-300 w-fit h-fit px-2 sm:px-3 py-1">Tailwind CSS</div>
              </div>
            </div>
          </div>
          <div className="flex py-2 gap-6 lg:pl-10 overflow-hidden flex-shrink-0 pr-8">
            <SimpleTooltip content="Open Project Link">
            <a onClick={() => new Audio('/switchtab.mp3').play()} href={'https://savetube.vercel.app'} target="_blank" rel="noopener noreferrer" className="flex items-center dark:text-white text-black lg:px-3 lg:py-1.5 cursor-pointer">
              <IoIosLink size={25} />
            </a>
            </SimpleTooltip>
            <SimpleTooltip content="View Source Code">
            <a onClick={() => new Audio('/switchtab.mp3').play()} href={'https://github.com/ashishxjhaa/SaveTube'} target="_blank" rel="noopener noreferrer" className="flex items-center dark:text-white text-black lg:px-3 lg:py-1.5 cursor-pointer">
              <IoLogoGithub size={25} />
            </a>
            </SimpleTooltip>
          </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects