"use client";

import Image from "next/image";
import { IoIosLink, IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { SimpleTooltip } from "./ui/tooltip";

type Project = {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  demoUrl?: string;
};

const projects: Project[] = [
  {
    title: "Zuno",
    description:
      "Chat-only AI website builder: describe a site, get a live Vite + React + TypeScript preview, then iterate entirely through conversation.",
    image: "/projects/zuno.jpg",
    liveUrl: "https://zuno-web.vercel.app/",
    githubUrl: "https://github.com/ashishxjhaa/Zuno",
    demoUrl: "https://x.com/ashishxjha/status/2091464971934945340",
  },
  {
    title: "Back It",
    description:
      "A product launch platform where developers list projects, get discovered, and grow through community upvotes, hearts, and saves.",
    image: "/projects/back-it.jpg",
    liveUrl: "https://back-it-two.vercel.app",
    githubUrl: "https://github.com/ashishxjhaa/BackIt",
  },
  {
    title: "Echo",
    description:
      "An AI-powered customer support platform: embed a chat widget, train it on your docs, and take over from an operator inbox when needed.",
    image: "/projects/echo-v2.jpg",
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
      <div className="w-[90%] mt-10 max-w-3xl mx-auto flex flex-col gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col sm:flex-row sm:items-stretch dark:bg-black/30 bg-white dark:hover:bg-[#262626]/20 hover:bg-gray-300/20 rounded-md w-full overflow-hidden mx-auto"
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => new Audio("/switchtab.mp3").play()}
              className="relative w-full sm:w-[55%] aspect-[16/10] overflow-hidden shrink-0 sm:border-r dark:border-white/5 border-black/5 order-1"
            >
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-width: 640px) 90vw, 420px"
                className="object-cover object-top transition-transform duration-500 ease-out hover:scale-[1.02]"
              />
            </a>

            <div className="flex flex-col justify-between gap-4 px-6 sm:px-8 py-5 sm:w-[45%] order-2 self-stretch">
              <div className="flex flex-col gap-2 dark:text-white text-black">
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="text-md font-medium">{project.title}</div>
                  {project.demoUrl ? (
                    <a
                      onClick={() => new Audio("/switchtab.mp3").play()}
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#ff5800] hover:opacity-80"
                    >
                      <FaXTwitter size={12} />
                      Watch demo
                    </a>
                  ) : null}
                </div>
                <div className="text-sm opacity-70 leading-relaxed">
                  {project.description}
                </div>
              </div>

              <div className="flex gap-5">
                <SimpleTooltip content="Open Project Link">
                  <a
                    onClick={() => new Audio("/switchtab.mp3").play()}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center dark:text-white text-black cursor-pointer"
                  >
                    <IoIosLink size={22} />
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
                    <IoLogoGithub size={22} />
                  </a>
                </SimpleTooltip>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
