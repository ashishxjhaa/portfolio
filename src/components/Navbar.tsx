"use client";

import { ThemeButton } from "./ThemeButton";
import { FaGithub } from "react-icons/fa";
import { IconArrowUpRight } from "@tabler/icons-react";

function Navbar() {
  return (
    <div className="flex items-start justify-between pt-20">
      <div>
        <div className="text-lg font-semibold dark:text-white text-black">
          Ashish Jha
        </div>
        <div className="text-sm text-neutral-500 dark:text-neutral-400">
          Full-Stack AI Engineer
        </div>
      </div>

      <div className="flex items-center gap-8">
        <a
          href="https://github.com/ashishxjhaa"
          onClick={() => new Audio("/switchtab.mp3").play()}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mx-4 flex items-center gap-2 opacity-70 transition-opacity hover:opacity-100"
        >
          <span className="flex items-center gap-2 font-bold text-black opacity-70 transition-transform duration-500 ease-in-out group-hover:-translate-x-2 group-hover:opacity-100 dark:text-white">
            <FaGithub />
            <div className="text-xs font-bold uppercase tracking-widest opacity-70 group-hover:opacity-100 sm:text-sm">
              GitHub
            </div>
          </span>
          <IconArrowUpRight
            size={48}
            strokeWidth={1}
            className="absolute -right-8 h-5.5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 dark:text-white text-black"
          />
        </a>
        <ThemeButton />
      </div>
    </div>
  );
}

export default Navbar;
