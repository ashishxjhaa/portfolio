"use client"

import Image from "next/image"

function Projects() {

  return (
    <div className="mx-10 py-30">
      <div className="text-5xl max-sm:text-3xl max-md:text-4xl font-bold tracking-tight leading-normal text-center bg-gradient-to-b from-[#DDFE9C]/90 to-[#DDFE9C] bg-clip-text text-transparent">
        Projects
      </div>
      <div className="pt-10 flex flex-col lg:flex-row gap-10 justify-center items-center">
      <div className="flex">
        <div className="w-full max-w-[565px] h-auto sm:w-[565px] sm:h-[400px] bg-black rounded-lg border-3 border-gray-700 hover:border-[#DDFE9C]/80 group">
          <Image className="px-2 pt-2.5 w-full h-[275px] rounded-2xl [object-position:0_-33px] hover:scale-95 transition-all duration-400 ease-out object-cover cursor-pointer" src="/projectfunding.png" width={565} height={275} alt="ProjectFunding Preview" />
          <div className="flex justify-between px-4 py-2">
            <div className="font-bold text-xl group-hover:text-[#DDFE9C]">Project Funding</div>
            <div className="flex gap-3">
              <a href={'https://github.com/ashishxjhaa/Project-Funding'} target="_blank" rel="noopener noreferrer" className="rounded-sm bg-[#262626] hover:bg-[#DDFE9C] hover:text-black px-3 py-1.5 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-icon lucide-code"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>
              </a>
              <a href={'https://projectfunding.vercel.app'} target="_blank" rel="noopener noreferrer" className="rounded-sm bg-[#262626] hover:bg-[#DDFE9C] hover:text-black px-3 py-1.5 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </a>
            </div>
          </div>
          <div className="mx-5 gap-2 hidden sm:flex flex-col">
            <div className="font-mono text-sm text-slate-100">Tech Stack:</div>
            <div className="flex gap-2 text-slate-300">
            <div className=" text-sm rounded-sm bg-[#262626] w-fit h-fit px-1">Next.js</div>
            <div className=" text-sm rounded-sm bg-[#262626] w-fit h-fit px-1">Typescript</div>
            <div className=" text-sm rounded-sm bg-[#262626] w-fit h-fit px-1">Tailwind CSS</div>
            <div className=" text-sm rounded-sm bg-[#262626] w-fit h-fit px-1">MongoDB</div>
            <div className=" text-sm rounded-sm bg-[#262626] w-fit h-fit px-1">Zod</div>
            <div className=" text-sm rounded-sm bg-[#262626] w-fit h-fit px-1">JWT</div>
            <div className=" text-sm rounded-sm bg-[#262626] w-fit h-fit px-1">Node.js</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-full max-w-[565px] h-auto sm:w-[565px] sm:h-[400px] bg-black rounded-lg border-3 border-gray-700 hover:border-[#DDFE9C]/80 group">
          <Image className="px-2 pt-2.5 w-full h-[275px] rounded-2xl [object-position:0_-33px] hover:scale-95 transition-all duration-400 ease-out object-cover cursor-pointer" src="/reportpiracy.png" width={565} height={275} alt="ProjectFunding Preview" />
          <div className="flex justify-between px-4 py-2">
            <div className="font-bold text-xl group-hover:text-[#DDFE9C]">Report Piracy</div>
            <div className="flex gap-3">
              <a href={'https://github.com/ashishxjhaa/Report-Piracy'} target="_blank" rel="noopener noreferrer" className="rounded-sm bg-[#262626] hover:bg-[#DDFE9C] hover:text-black px-3 py-1.5 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-icon lucide-code"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>
              </a>
              <a href={'https://reportpiracy.vercel.app'} target="_blank" rel="noopener noreferrer" className="rounded-sm bg-[#262626] hover:bg-[#DDFE9C] hover:text-black px-3 py-1.5 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </a>
            </div>
          </div>
          <div className="mx-5 gap-2 hidden sm:flex flex-col">
            <div className="font-mono text-sm text-slate-100">Tech Stack:</div>
            <div className="flex gap-2 text-slate-300">
            <div className=" text-sm rounded-sm bg-[#262626] w-fit h-fit px-1">React.js</div>
            <div className=" text-sm rounded-sm bg-[#262626] w-fit h-fit px-1">Typescript</div>
            <div className=" text-sm rounded-sm bg-[#262626] w-fit h-fit px-1">Tailwind CSS</div>
            <div className=" text-sm rounded-sm bg-[#262626] w-fit h-fit px-1">Node.js</div>
            <div className=" text-sm rounded-sm bg-[#262626] w-fit h-fit px-1">Express</div>
            <div className=" text-sm rounded-sm bg-[#262626] w-fit h-fit px-1">MongoDB</div>
            <div className=" text-sm rounded-sm bg-[#262626] w-fit h-fit px-1">Zod</div>
            <div className=" text-sm rounded-sm bg-[#262626] w-fit h-fit px-1">jwt</div>
            </div>
          </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Projects