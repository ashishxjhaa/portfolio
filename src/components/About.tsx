"use client"

import Image from "next/image"
import { easeInOut, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";


function About() {

  return (
    <>
    <BookCall />
    <div className="py-8 pb-18 pl-15 pt-8 sm:pt-10 md:pt-45 flex flex-col md:flex-row md:justify-between items-start max-w-4xl mx-auto">
      <div className="pt-15">
        <div className="mb-6 my-2 rounded-2xl bg-[#DDFE9C]/80 w-fit h-fit px-2.5 py-1 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-icon lucide-code h-3 w-3 text-black"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>
          <div className="text-black font-bold text-xs">FULL STACK WEB DEVELOPER</div>
        </div>
        <div>
          <div className="font-medium text-2xl tracking-wide dark:text-slate-300 text-neutral-700 pb-1">{`Hi, I'm`} <span className="dark:text-white text-black font-mono">Ashish Jha</span></div>
          <div className="flex items-center gap-1.5 dark:text-slate-300 text-neutral-700"><span>18</span><span className="h-1 w-1 rounded-full dark:bg-slate-400 bg-neutral-700" />Bihar, INDIA <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-2 py-1 text-xs text-muted-foreground sm:px-3 sm:py-1.5 sm:text-sm"><span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-[#34D399] shadow-[0_0_0_4px_rgba(52,211,153,0.15)]"></span>Open to work</span></div>
        </div>
        <div className="py-1 my-3 sm:pr-2">
          <Typewrite examples={[
            "I am a full stack developer",
            "I am a MERN stack developer",
            "I know Typescript & Next.js",
            "I can build cool projects",
          ]} />
          <hr className="border-gray-600 w-110" />
        </div>
        <div className="text-sm max-w-120 dark:text-gray-100 text-neutral-800">{`Feel free to explore my portfolio and reach out - I'd love to connect!`}</div>

        <div className="flex gap-8">
          <motion.div whileHover={{ x: 10, transition: { type: "spring", stiffness: 200 } }} className="my-4 flex items-center justify-center gap-2 cursor-pointer rounded-full dark:bg-white bg-gray-200 w-fit h-fit px-6 py-3 mt-10">
            <a href="https://drive.google.com/file/d/1Ncqs8Zu-JHMWnibbNtgmfH-rJmsIkl4m/view?usp=sharing" target="_blank" className="font-medium text-md tracking-wide text-black dark:text-black" onClick={() => new Audio('/switchtab.mp3').play()}>View Resume</a>
          </motion.div>
          
          <div data-cal-namespace="quick-chat" data-cal-link="ashishxjha/quickchat" data-cal-config='{"layout":"month_view"}' className="my-4 flex items-center justify-center gap-2 cursor-pointer rounded-full bg-[#4F47E5] hover:bg-[#4F47E5]/90 w-fit h-fit px-6 py-3 mt-10">
            <div className="font-medium text-md tracking-wide text-white">Book a call</div>
          </div>
        </div>

      </div>

      <div className="mx-auto mt-10 md:mt-0 md:mx-0">
        <div className="relative w-40 h-40 sm:w-70 sm:h-70 mr-0 sm:mr-30 mt-15 md:pl-8">
        <div className="relative w-40 h-40 sm:h-70 sm:w-70">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FF8162] to-[#FEB57F] rounded-3xl blur-sm opacity-75 -rotate-8"></div>
            <Image src="/logo.jpg" alt="Ashish" width={100} height={100} className="rounded-3xl relative w-40 h-40 sm:h-70 sm:w-70 z-10 -rotate-8" />
          </div>
        </div>
      </div>
    </div>
   </>
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
    <span className="ml-3 dark:text-white text-black">
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
          className="absolute bottom-[3px] left-[1px] right-0 top-[3px] dark:bg-white bg-black" />
      </motion.span>
      )
     })}
    </span>
  </p>
}

const BookCall = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "quick-chat" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return null;
}