"use client";
import { GraduationCap } from "lucide-react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Education() {
  return (
    <div className="pb-20">
      <div className="px-10 sm:px-20 dark:text-white text-black max-w-4xl mx-auto">
        <div className="text-2xl sm:text-4xl font-medium tracking-tight leading-normal">
          Education
        </div>
      </div>

      <div className="w-[90%] mt-10 max-w-3xl mx-auto">
        <a
          onClick={() => new Audio("/switchtab.mp3").play()}
          href="https://shooliniuniversity.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 sm:gap-6 dark:bg-black/30 bg-white dark:hover:bg-[#262626]/20 hover:bg-gray-300/20 cursor-pointer rounded-md w-full px-6 sm:px-10 py-5 group"
        >
          <div
            aria-hidden="true"
            className="flex w-10 h-10 sm:w-13 sm:h-13 items-center justify-center rounded-full border dark:bg-neutral-800 bg-gray-100 dark:text-white/80 text-black/70"
          >
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex justify-between items-center w-full">
            <div>
              <div className="flex place-items-center gap-2 text-md font-medium dark:text-white text-black whitespace-nowrap">
                <span className="text-sm">Shoolini University</span>
                <span className="opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-6 transition-all duration-450">
                  <MdKeyboardDoubleArrowRight />
                </span>
              </div>
              <div className="text-xs sm:text-sm dark:text-white text-black opacity-85 whitespace-nowrap">
                Bachelor of Computer Applications
              </div>
            </div>
            <div className="opacity-75 dark:text-gray-300 text-neutral-700 whitespace-nowrap text-xs sm:text-md">
              2025 - 2028
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Education;
