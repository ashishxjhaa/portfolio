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

      <div className="flex items-center gap-3">
        <a
          href="https://github.com/ashishxjhaa"
          onClick={() => new Audio("/switchtab.mp3").play()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 mx-4 relative group transition-opacity opacity-70 hover:opacity-100"
        >
          <span className="dark:text-white text-black opacity-70 group-hover:opacity-100 flex items-center font-bold gap-2 transition-transform duration-500 ease-in-out group-hover:-translate-x-2">
            <FaGithub />
            <div className="hidden sm:block dark:text-white text-black opacity-70 group-hover:opacity-100">
              GitHub
            </div>
          </span>
          <IconArrowUpRight
            size={48}
            strokeWidth={1}
            className="absolute h-[20px] -right-8 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 dark:text-white text-black"
          />
        </a>
        <ThemeButton />
      </div>
    </div>
  );
}

export default Navbar;
