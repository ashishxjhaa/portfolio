"use client"

import Image from "next/image"
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Mail } from "lucide-react";


function About() {

  return (
    <>
    <BookCall />
    <div className="flex justify-between mx-auto pt-25 w-[85%] max-w-4xl">
     <a href="mailto:ashishxyzjha@gmail.com" className="cursor-pointer w-fit h-fit flex items-center gap-5">
       <Mail className="w-4 sm:w-6 h-4 sm:h-6 text-[#4F47E5]" />
       <span className="h-1 w-1 rounded-full dark:bg-slate-400 bg-neutral-700" />
       <div className="text-sm opacity-75 dark:text-white text-black underline underline-offset-4">ashishxyzjha@gmail.com</div>
     </a>

      <div className="flex dark:text-slate-300 text-neutral-700">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-2 text-xs text-muted-foreground sm:text-sm">
          <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-[#34D399] shadow-[0_0_0_4px_rgba(52,211,153,0.15)]"></span>
          Open to work
        </span>
      </div>
    </div>

    <div className="flex">
      <div className="pt-20 mx-auto">
        <div>
          <div className="flex items-center font-bold text-2xl sm:text-4xl gap-5 tracking-wide dark:text-slate-300 text-neutral-700">
            {`Hi, I'm`} 
            <div className="relative w-18 h-18">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF8162] to-[#FEB57F] rounded-xl blur-xs opacity-40 -rotate-8"></div>
              <Image src="/logo.jpg" alt="Ashish" width={100} height={100} className="rounded-md relative w-18 h-18 z-10 -rotate-8" />
            </div>
            <div className="dark:text-slate-300 text-neutral-800">Ashish Jha!</div>
          </div>

          <div className="pt-2 flex items-center font-medium text-2xl sm:text-3xl gap-2 tracking-wide dark:text-slate-300 text-neutral-700">
            {`I'm a`} 
            <div className="dark:text-white text-black font-bold">Full Stack Engineer <span className="font-medium dark:text-slate-300 text-neutral-700">&</span></div>
          </div>
        </div>

        <div className="pt-5 text-sm max-w-sm md:max-w-lg lg:max-w-xl dark:text-white text-black opacity-85">I build web applications that look good, feel fast, and work flawlessly across devices.</div>

        <div className="flex gap-8">
          <div className="my-4 flex items-center justify-center gap-2 cursor-pointer rounded-full dark:bg-white bg-gray-200 hover:bg-gray-200 dark:hover:bg-white/90 w-fit h-fit px-6 py-3 mt-10">
            <a href="https://drive.google.com/file/d/1Ncqs8Zu-JHMWnibbNtgmfH-rJmsIkl4m/view?usp=sharing" target="_blank" className="font-medium text-md tracking-wide text-black dark:text-black" onClick={() => new Audio('/switchtab.mp3').play()}>View Resume</a>
          </div>
          
          <div data-cal-namespace="quick-chat" data-cal-link="ashishxjha/quickchat" data-cal-config='{"layout":"month_view"}' className="my-4 flex items-center justify-center gap-2 cursor-pointer rounded-full bg-[#4F47E5] hover:bg-[#4F47E5]/90 w-fit h-fit px-6 py-3 mt-10">
            <div className="font-medium text-md tracking-wide text-white">Book a call</div>
          </div>
        </div>

      </div>
    </div>

    <div className="px-10 pt-10 max-w-2xl mx-auto">
      <h2 className="text-lg sm:text-xl dark:text-white text-black font-bold">About</h2>
      <p className="text-sm dark:text-white text-black opacity-75 font-mono">
        {`Hello! I'm a Full Stack Web Developer. 
        Currently learning web3, building scalable SaaS and decentralized applications.
        I love turning ideas into products that bridge Web2 and Web3. 
        Beyond coding, I enjoy experimenting, sharing, and contributing to the developer ecosystem.
        Feel free to explore my portfolio and reach out - I'd love to connect!`}
      </p>
    </div>
   </>
  )
}

export default About


const BookCall = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "quick-chat" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return null;
}