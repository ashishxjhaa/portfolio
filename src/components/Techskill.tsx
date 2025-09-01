"use client"

import Image from "next/image"
import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AnimatePresence, motion } from "framer-motion";


function Techskill() {
  return (
    <div className="pt-5 px-4">
      <div className="mt-35 text-5xl max-sm:text-3xl max-md:text-4xl font-bold tracking-tight leading-normal text-center bg-gradient-to-b from-[#DDFE9C]/90 to-[#DDFE9C] bg-clip-text text-transparent">
        Skills
      </div>
      <p className="font-medium mx-auto max-w-3xl text-center text-gray-300 mb-8 text-xs sm:text-lg leading-relaxed">
        I have a solid foundation in Full-stack web development using the MERN stack, Next.js, and TypeScript.
        I enjoy building scalable & user-friendly applications.
      </p>

      <div className="hidden sm:flex mx-auto max-w-3xl border border-[#DDFE9C] rounded-md px-5 py-2.5 gap-4 mb-20">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb-icon lucide-lightbulb text-yellow-300"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
        <div><span className="font-bold">Suggestion:</span> Hover over any skill to see my proficiency level.</div>
      </div>

      <div className="space-y-15 pt-4">
      <div className="relative border border-gray-500 rounded-xl p-8 pt-10">
        <span className="absolute -top-4 left-6 bg-black px-3 text-lg font-semibold text-gray-200">Programming Languages</span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 sm:gap-15 justify-center">
          <SkillBox img="/javascript.svg" label="JavaScript" maxValue={85} />
          <SkillBox img="/typescript.svg" label="TypeScript" maxValue={80} />
          <SkillBox img="/java.svg" label="Java" maxValue={75} />
        </div>
      </div>

      <div className="relative border border-gray-500 rounded-xl p-8 pt-10">
        <span className="absolute -top-4 left-6 bg-black px-3 text-lg font-semibold text-gray-200">Development</span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 sm:gap-15 justify-center">
          <SkillBox img="/html-1.svg" label="HTML 5" maxValue={95} />
          <SkillBox img="/css-3.svg" label="CSS 3" maxValue={80} />
          <SkillBox img="/nodejs-icon.svg" label="Node.js" maxValue={85} />
        </div>
      </div>

      <div className="relative border border-gray-500 rounded-xl p-8 pt-10">
        <span className="absolute -top-4 left-6 bg-black px-3 text-lg font-semibold text-gray-200">Databases</span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 sm:gap-15 justify-center">
          <SkillBox img="/mongodb-icon-1.svg" label="MongoDB" maxValue={80} />
          <SkillBox img="/postgresql.svg" label="PostgreSQL" maxValue={70} />
        </div>
      </div>

      <div className="relative border border-gray-500 rounded-xl p-8 pt-10">
        <span className="absolute -top-4 left-6 bg-black px-3 text-lg font-semibold text-gray-200">Frameworks</span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 sm:gap-15 justify-center">
          <SkillBox img="/next-js.svg" label="Next.js" maxValue={80} withBg />
          <SkillBox img="/expressjs.svg" label="Express.js" maxValue={85} withBg />
          <SkillBox img="/tailwind-css-2.svg" label="Tailwind CSS" maxValue={90} />
          <SkillBox img="/ejs-svgrepo-com.svg" label="EJS" maxValue={75} />
        </div>
      </div>

      <div className="relative border border-gray-500 rounded-xl p-8 pt-10">
        <span className="absolute -top-4 left-6 bg-black px-3 text-lg font-semibold text-gray-200">Libraries</span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 sm:gap-15 justify-center">
          <SkillBox img="/react.svg" label="React.js" maxValue={85} />
          <SkillBox img="/socket-io.svg" label="Socket.Io" maxValue={70} />
        </div>
      </div>

      <div className="relative border border-gray-500 rounded-xl p-8 pt-10">
        <span className="absolute -top-4 left-6 bg-black px-3 text-lg font-semibold text-gray-200">Tools</span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 sm:gap-15 justify-center">
          <SkillBox img="/git-icon.svg" label="Git" maxValue={80} />
          <SkillBox img="/github-icon-1.svg" label="GitHub" maxValue={65} />
          <SkillBox img="/postman.svg" label="Postman" maxValue={90} />
          <SkillBox img="/visual-studio-code-1.svg" label="VS Code" maxValue={95} />
        </div>
      </div>

      <div className="relative border border-gray-500 rounded-xl p-8 pt-10">
        <span className="absolute -top-4 left-6 bg-black px-3 text-lg font-semibold text-gray-200">Protocols</span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 sm:gap-15 justify-center">
          <SkillBox img="/websocket.svg" label="WebSocket" maxValue={75} withBg />
        </div>
      </div>
      </div>

    </div>
  )
}

export default Techskill

function SkillBox({ img, label, maxValue, withBg }: { img: string; label: string; maxValue: number; withBg?: boolean }) {
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);

  const startProgress = () => {
    setHovered(true);
    setProgress(0);
    let value = 50;
    const interval = setInterval(() => {
      value += 5;
      setProgress(value);
      if (value >= maxValue) clearInterval(interval);
    }, 50);
  };

  return (
    <motion.div onMouseEnter={startProgress} onMouseLeave={() => setHovered(false)} className="relative flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer w-32 h-32 overflow-hidden transition-all duration-300 hover:shadow-xl">
      <AnimatePresence mode="wait">
      {!hovered ? (
        <motion.div className="flex flex-col items-center justify-center text-center">
          <div className={withBg ? "bg-white" : ""}>
          <Image src={img} alt={label} className="w-14 h-14 object-contain" width={10} height={10} />
          </div>
          <p className="text-white text-sm font-semibold mt-2">{label}</p>
        </motion.div>
      ) : (
        <motion.div className="w-24 h-24">
          <CircularProgressbar
            value={progress}
            maxValue={100}
            text={`${progress}%`}
            styles={buildStyles({
              textColor: "#fff",
              pathColor: "#2ecc71",
              trailColor: "rgba(46,204,113,0.2)",
              textSize: "18px",
              pathTransitionDuration: 0.5,
            })}
          />
        </motion.div>
      )}
      </AnimatePresence>
    </motion.div>
  );
}
