"use client"

import Image from "next/image"
import { SiExpress } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { SimpleTooltip } from "@/components/ui/tooltip";

function Techskill() {
  return (
    <div className="pt-15 px-4">
      <div className="text-5xl max-sm:text-3xl max-md:text-4xl font-bold tracking-tight leading-normal text-center bg-gradient-to-b from-[#DDFE9C]/90 to-[#DDFE9C] bg-clip-text dark:text-transparent text-black">
        Skills
      </div>
      <div className="mt-10 relative border border-gray-500 rounded-xl p-8 pt-10 sm:w-[90%] mx-auto">
        <span className="absolute -top-4 left-6 dark:bg-black bg-gray-200 px-3 text-lg font-semibold dark:text-gray-200 text-neutral-700">Tech Stack</span>
        <div className="grid grid-cols-6 lg:grid-cols-9 gap-4 sm:gap-10 justify-items-center">
          
          <TechIcon label="JavaScript">
            <Image src="/javascript.svg" alt="JavaScript" className="w-12 h-12 object-contain" width={48} height={48} />
          </TechIcon>

          <TechIcon label="TypeScript">
            <Image src="/typescript.svg" alt="TypeScript" className="w-12 h-12 object-contain" width={48} height={48} />
          </TechIcon>

          <TechIcon label="Java">
            <Image src="/java.svg" alt="Java" className="w-12 h-12 object-contain" width={48} height={48} />
          </TechIcon>

          <TechIcon label="HTML 5">
            <Image src="/html-1.svg" alt="HTML 5" className="w-12 h-12 object-contain" width={48} height={48} />
          </TechIcon>

          <TechIcon label="CSS 3">
            <Image src="/css-3.svg" alt="CSS 3" className="w-12 h-12 object-contain" width={48} height={48} />
          </TechIcon>

          <TechIcon label="Node.js">
            <Image src="/nodejs-icon.svg" alt="Node.js" className="w-12 h-12 object-contain" width={48} height={48} />
          </TechIcon>

          <TechIcon label="MongoDB">
            <Image src="/mongodb-icon-1.svg" alt="MongoDB" className="w-12 h-12 object-contain" width={48} height={48} />
          </TechIcon>

          <TechIcon label="PostgreSQL">
            <Image src="/postgresql.svg" alt="PostgreSQL" className="w-12 h-12 object-contain" width={48} height={48} />
          </TechIcon>

          <TechIcon label="Next.js">
            <Image src="/nextjs.svg" alt="Next.js" className="w-12 h-12 object-contain" width={48} height={48} />
          </TechIcon>

          <TechIcon label="Express">
            <SiExpress size={48} />
          </TechIcon>

          <TechIcon label="Tailwind CSS">
            <Image src="/tailwind-css-2.svg" alt="Tailwind CSS" className="w-12 h-12 object-contain" width={48} height={48} />
          </TechIcon>

          <TechIcon label="EJS">
            <Image src="/ejs-svgrepo-com.svg" alt="EJS" className="w-12 h-12 object-contain" width={48} height={48} />
          </TechIcon>

          <TechIcon label="React.js">
            <Image src="/react.svg" alt="React.js" className="w-12 h-12 object-contain" width={48} height={48} />
          </TechIcon>

          <TechIcon label="Socket.Io">
            <Image src="/socket-io.svg" alt="Socket.Io" className="w-12 h-12 object-contain" width={48} height={48} />
          </TechIcon>

          <TechIcon label="Git">
            <Image src="/git-icon.svg" alt="Git" className="w-12 h-12 object-contain" width={48} height={48} />
          </TechIcon>

          <TechIcon label="GitHub">
            <FaGithubSquare size={48} />
          </TechIcon>

          <TechIcon label="Postman">
            <Image src="/postman.svg" alt="Postman" className="w-12 h-12 object-contain" width={48} height={48} />
          </TechIcon>

          <TechIcon label="VS Code">
            <Image src="/visual-studio-code-1.svg" alt="VS Code" className="w-12 h-12 object-contain" width={48} height={48} />
          </TechIcon>

          <TechIcon label="Framer Motion">
            <Image src="/motion.svg" alt="Framer Motion" className="w-12 h-12 object-contain" width={48} height={48}  />
          </TechIcon>
        </div>
      </div>

    </div>
  )
}

export default Techskill


function TechIcon({ children, label }: { children: React.ReactNode; label: string }) {
  const playSound = () => new Audio("/hover.mp3").play();
  return (
    <SimpleTooltip content={label}>
      <div onMouseEnter={playSound} className="cursor-pointer flex items-center justify-center">
        {children}
      </div>
    </SimpleTooltip>
  );
}
