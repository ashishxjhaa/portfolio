"use client"

import Image from "next/image"
import { easeInOut, motion } from "framer-motion";
import { useEffect, useState } from "react";


function About() {
  return (
    <div className="py-8 pl-15 flex flex-col md:flex-row md:justify-between items-start">
      <div className="pt-15">
        <div className="mb-6 my-2 rounded-2xl bg-[#DDFE9C]/80 w-fit h-fit px-2.5 py-1 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-icon lucide-code h-3 w-3 text-black"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>
          <div className="text-black font-bold text-xs">SOFTWARE DEVELOPER</div>
        </div>
        <div className="font-bold text-3xl tracking-widest">
          <div>{`Hello, I'm`}</div>
          <div>Ashish Jha</div>
        </div>
        <div className="py-2 my-5 sm:pr-2">
          <Typewrite examples={[
            "I am a full stack developer",
            "I am a MERN stack developer",
            "I know Typescript & Next.js",
            "I can build cool projects",
          ]} />
          <hr className="border-gray-600 w-65 sm:w-80" />
        </div>
        <div className="max-w-65 sm:max-w-85 text-gray-100">{`Welcome to my Portfolio! I'm always learning, improving, and open for exciting opportunities where I can grow and add value.`}</div>
        <motion.div whileHover={{ x: 10, transition: { type: "spring", stiffness: 200 } }} className="my-4 flex items-center justify-center gap-2 cursor-pointer border-2 border-[#FEB57F] hover:border-[#FF8162] rounded-lg w-fit h-fit px-3 py-1.5 mt-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text-icon lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
          <a href="https://drive.google.com/file/d/19-aqXYL5KgRLZWTFl2a8U_da8sVfGAeD/view?usp=sharing" target="_blank" className="font-bold tracking-wide">Resume</a>
        </motion.div>
      </div>

      <div className="mx-auto mt-10 md:mt-0 md:mx-0">
        <div className="relative w-40 h-40 sm:w-70 sm:h-70 mr-0 sm:mr-30 mt-15 duration-300 cursor-pointer hover:scale-110 hover:-translate-y-2">
        <div className="relative w-40 h-40 sm:h-70 sm:w-70">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FF8162] to-[#FEB57F] rounded-full blur-sm opacity-75"></div>
            <Image src="/logo.jpg" alt="Ashish" width={100} height={100} className="rounded-full relative w-40 h-40 sm:h-70 sm:w-70 z-10" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 sm:w-70 sm:h-70 rounded-full border-4 border-[#DDFE9C] z-10"></div>
          </div>
        <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
        <Image src='/react.svg' className="absolute top-[-50px] sm:top-[-70px] left-1/2 -translate-x-1/2 h-10 w-10" width={100} height={100} alt="React" />
        <Image src='/typescript.svg' className="absolute right-[-50px] sm:right-[-70px] top-1/2 -translate-y-1/2 h-10 w-10" width={100} height={100} alt="Typescript" />
        <Image src='/next-js.svg' className="absolute bottom-[-50px] sm:bottom-[-70px] left-1/2 -translate-x-1/2 h-10 w-10 bg-white px-0.5" width={100} height={100} alt="Next-js" />
        <Image src='/javascript.svg' className="absolute left-[-50px] sm:left-[-70px] top-1/2 -translate-y-1/2 h-10 w-10" width={100} height={100} alt="javascript" />
        </div>
        </div>
        </div>
    </div>
  )
}

export default About


const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.145;
const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;
const SWAP_DELAY_IN_MS = 5500;


const Typewrite = ({ examples }: { examples: string[] }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((pv) => (pv + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, []);

  return <p className="mb-2.5 text-sm font-light uppercase">
    <span className="inline-block h-2.5 w-2.5 bg-[#FF8162]" />
    <span className="ml-3">
      :{" "}
     {examples[exampleIndex].split("").map((l, i) => {
      return ( 
      <motion.span 
        initial={{ opacity: 1, }} animate={{ opacity: 0, }} transition={{ delay: FADE_DELAY, duration: MAIN_FADE_DURATION, ease: easeInOut, }}
        className="relative" key={`${exampleIndex}-${i}`}>
        <motion.span
        initial={{ opacity: 0, }} animate={{ opacity: 1, }} transition={{ delay: i * LETTER_DELAY, duration: 0, }}
        >{l}</motion.span>
        <motion.span
          initial={{ opacity: 0, }} animate={{ opacity: [0, 1, 0], }} transition={{ delay: i * LETTER_DELAY, times: [0, 0.1, 1], duration: BOX_FADE_DURATION, ease: easeInOut, }}
          className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-white" />
      </motion.span>
      )
     })}
    </span>
  </p>
}