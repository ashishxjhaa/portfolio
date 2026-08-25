"use client";

import { IoIosLink, IoLogoGithub } from "react-icons/io";
import { SimpleTooltip } from "./ui/tooltip";

const projects = [
  {
    title: "Zuno",
    description:
      "Chat-only AI website builder: describe a site, get a live Vite + React + TypeScript preview, then iterate entirely through conversation.",
    liveUrl: "https://zuno-web.vercel.app/",
    githubUrl: "https://github.com/ashishxjhaa/Zuno",
  },
  {
    title: "Back It",
    description:
      "A product launch platform where developers list projects, get discovered, and grow through community upvotes, hearts, and saves.",
    liveUrl: "https://back-it-two.vercel.app",
    githubUrl: "https://github.com/ashishxjhaa/BackIt",
  },
  {
    title: "Echo",
    description:
      "An AI-powered customer support platform: embed a chat widget, train it on your docs, and take over from an operator inbox when needed.",
    liveUrl: "https://echo-chatt.vercel.app",
    githubUrl: "https://github.com/ashishxjhaa/Echo",
  },
];

function Projects() {
  return (
    <div className="pt-20">
      <div className="px-10 sm:px-20 dark:text-white text-black max-w-4xl mx-auto">
        <div className="text-2xl sm:text-3xl font-medium tracking-tight leading-normal">
          Projects
        </div>
      </div>
      <div className="w-[90%] mt-10 max-w-3xl mx-auto flex flex-col gap-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex items-center justify-between dark:bg-black/30 bg-white dark:hover:bg-[#262626]/20 hover:bg-gray-300/20 cursor-pointer rounded-md w-full px-6 sm:px-10 py-5 gap-4 sm:gap-10 mx-auto"
          >
            <div className="flex flex-col gap-3 dark:text-white text-black">
              <div className="text-md font-medium">{project.title}</div>
              <div className="text-sm opacity-70 max-w-xs">
                {project.description}
              </div>
            </div>

            <div className="flex gap-6 flex-shrink-0">
              <SimpleTooltip content="Open Project Link">
                <a
                  onClick={() => new Audio("/switchtab.mp3").play()}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center dark:text-white text-black cursor-pointer"
                >
                  <IoIosLink size={25} />
                </a>
              </SimpleTooltip>
              <SimpleTooltip content="View Source Code">
                <a
                  onClick={() => new Audio("/switchtab.mp3").play()}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center dark:text-white text-black cursor-pointer"
                >
                  <IoLogoGithub size={25} />
                </a>
              </SimpleTooltip>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
