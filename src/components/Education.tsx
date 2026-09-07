"use client";

import Image from "next/image";

function Education() {
  return (
    <div className="pt-16 pb-20">
      <h2 className="font-sans text-zinc-500">Education</h2>
      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <Image
            src="/education/shoolini.png"
            alt="Shoolini University"
            width={870}
            height={450}
            quality={100}
            className="h-10 w-auto shrink-0 rounded-md bg-black object-contain px-1.5 py-1"
          />
          <div className="min-w-0">
            <a
              href="https://shooliniuniversity.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => new Audio("/switchtab.mp3").play()}
              className="text-[15px] font-medium dark:text-white text-black transition-colors hover:text-[#2F6BFF]"
            >
              Shoolini University
            </a>
            <div className="text-[15px] text-zinc-500 dark:text-zinc-400">
              Bachelor of Computer Applications
            </div>
          </div>
        </div>
        <div className="shrink-0 text-sm text-zinc-500 dark:text-zinc-400">
          2025 - 2028
        </div>
      </div>
    </div>
  );
}

export default Education;
