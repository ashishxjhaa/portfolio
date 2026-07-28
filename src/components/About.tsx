"use client";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Mail } from "lucide-react";

function About() {
  return (
    <>
      <BookCall />
      <div className="flex justify-between mx-auto mt-20 pt-10 w-[85%] max-w-3xl">
        <a
          href="mailto:ashishxyzjha@gmail.com"
          className="cursor-pointer w-fit h-fit flex items-center gap-5"
        >
          <Mail className="w-4 sm:w-6 h-4 sm:h-6 text-[#4F47E5]" />
          <span className="h-1 w-1 rounded-full dark:bg-slate-400 bg-neutral-700" />
          <div className="text-sm opacity-75 dark:text-white text-black underline underline-offset-4">
            ashishxyzjha@gmail.com
          </div>
        </a>
        <div className="hidden sm:flex dark:text-slate-300 text-neutral-700">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-2 text-xs text-muted-foreground sm:text-sm whitespace-nowrap">
            <span
              aria-hidden="true"
              className="inline-block h-2.5 w-2.5 rounded-full bg-[#34D399] shadow-[0_0_0_4px_rgba(52,211,153,0.15)]"
            ></span>
            Open to work
          </span>
        </div>
      </div>

      <div className="px-10 sm:px-18 pt-10 max-w-4xl mx-auto flex flex-col gap-6.5">
        <h2 className="text-2xl dark:text-white text-black sm:text-4xl font-medium tracking-tight leading-normal">
          About
        </h2>
        <p className="text-md dark:text-white/85 text-black/85 font-sans">
          Hi, I'm Ashish Jha — a Full-Stack Developer who builds fast, scalable
          applications from idea to deployment. I work primarily with Next.js,
          React, TypeScript, and Express.js on the frontend and backend, and
          Prisma with PostgreSQL for data. I care about clean, maintainable code
          as much as clean, intuitive UI — and I like shipping things that
          actually get used.
        </p>
      </div>

      <div className="flex">
        <div className="pt-8 mx-auto">
          <div className="flex gap-8 px-4">
            <div className="my-4 flex items-center justify-center gap-2 cursor-pointer rounded-full dark:bg-white bg-gray-200 hover:bg-gray-200 dark:hover:bg-white/90 w-fit h-fit px-4 py-1.5">
              <a
                href="/Ashish-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-md tracking-wide text-black dark:text-black"
                onClick={() => new Audio("/switchtab.mp3").play()}
              >
                View Resume
              </a>
            </div>
            <div
              data-cal-namespace="quick-chat"
              data-cal-link="ashishxjha/quickchat"
              data-cal-config='{"layout":"month_view"}'
              className="my-4 flex items-center justify-center gap-2 cursor-pointer rounded-full bg-[#4F47E5] hover:bg-[#4F47E5]/90 w-fit h-fit px-4 py-1.5"
            >
              <div className="font-medium text-md tracking-wide text-white">
                Book a call
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

const BookCall = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "quick-chat" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return null;
};
