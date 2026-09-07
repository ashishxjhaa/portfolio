"use client";

import { useState } from "react";

type Project = {
  title: string;
  description: string;
  video: string;
  liveUrl: string;
  githubUrl: string;
  demoUrl: string;
};

type View = "list" | "grid";

const projects: Project[] = [
  {
    title: "Zuno",
    description:
      "An agentic AI website builder: describe what you want, pick a stack, and get a live preview you can push and publish.",
    video: "/projects/zuno.mp4",
    liveUrl: "https://zuno.ashishjha.xyz/",
    githubUrl: "https://github.com/ashishxjhaa/Zuno",
    demoUrl: "https://x.com/ashishxjha/status/2096617739490373868",
  },
  {
    title: "ShowHunt",
    description:
      "A voice AI product launch platform where Cody navigates, routes, and fills forms from any user query.",
    video: "/projects/showhunt.mp4",
    liveUrl: "https://showhunt.ashishjha.xyz/",
    githubUrl: "https://github.com/ashishxjhaa/showhunt",
    demoUrl: "https://x.com/ashishxjha/status/2095839165665747453",
  },
];

function Links({ project }: { project: Project }) {
  return (
    <div className="mt-2 flex items-center gap-3 text-[15px] text-zinc-500 dark:text-zinc-400">
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => new Audio("/switchtab.mp3").play()}
        className="transition-colors hover:text-[#ff5800]"
      >
        Live
      </a>
      <span aria-hidden className="text-zinc-300 dark:text-zinc-600">
        /
      </span>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => new Audio("/switchtab.mp3").play()}
        className="transition-colors hover:text-[#ff5800]"
      >
        GitHub
      </a>
      <span aria-hidden className="text-zinc-300 dark:text-zinc-600">
        /
      </span>
      <a
        href={project.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => new Audio("/switchtab.mp3").play()}
        className="transition-colors hover:text-[#ff5800]"
      >
        Demo
      </a>
    </div>
  );
}

function Video({ src }: { src: string }) {
  return (
    <div className="rounded-xl bg-zinc-200/80 p-2 dark:bg-zinc-800">
      <div className="aspect-[16/10] overflow-hidden rounded-lg">
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

function Projects() {
  const [view, setView] = useState<View>("grid");

  const changeView = (next: View) => {
    if (next === view) return;
    new Audio("/switchtab.mp3").play();
    setView(next);
  };

  return (
    <div className="pt-16">
      <div className="flex items-center justify-between">
        <h2 className="font-sans text-zinc-500">Projects</h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="List view"
            onClick={() => changeView("list")}
            className="cursor-pointer p-1.5"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect
                x="0"
                y="2"
                width="16"
                height="1.5"
                rx="0.75"
                className={
                  view === "list"
                    ? "fill-black dark:fill-white"
                    : "fill-zinc-400"
                }
              />
              <rect
                x="0"
                y="7.25"
                width="16"
                height="1.5"
                rx="0.75"
                className={
                  view === "list"
                    ? "fill-black dark:fill-white"
                    : "fill-zinc-400"
                }
              />
              <rect
                x="0"
                y="12.5"
                width="16"
                height="1.5"
                rx="0.75"
                className={
                  view === "list"
                    ? "fill-black dark:fill-white"
                    : "fill-zinc-400"
                }
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Grid view"
            onClick={() => changeView("grid")}
            className="cursor-pointer p-1.5"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect
                x="0"
                y="0"
                width="7"
                height="7"
                rx="1.5"
                className={
                  view === "grid"
                    ? "fill-black dark:fill-white"
                    : "fill-zinc-400"
                }
              />
              <rect
                x="9"
                y="0"
                width="7"
                height="7"
                rx="1.5"
                className={
                  view === "grid"
                    ? "fill-black dark:fill-white"
                    : "fill-zinc-400"
                }
              />
              <rect
                x="0"
                y="9"
                width="7"
                height="7"
                rx="1.5"
                className={
                  view === "grid"
                    ? "fill-black dark:fill-white"
                    : "fill-zinc-400"
                }
              />
              <rect
                x="9"
                y="9"
                width="7"
                height="7"
                rx="1.5"
                className={
                  view === "grid"
                    ? "fill-black dark:fill-white"
                    : "fill-zinc-400"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {view === "grid" ? (
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="flex flex-col">
              <Video src={project.video} />
              <h3 className="mt-2.5 text-[15px] font-medium dark:text-white text-black">
                {project.title}
              </h3>
              <p className="mt-0.5 text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                {project.description}
              </p>
              <Links project={project} />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col sm:flex-row sm:items-center gap-5"
            >
              <div className="w-full sm:w-[55%] shrink-0">
                <Video src={project.video} />
              </div>
              <div className="sm:w-[45%]">
                <h3 className="text-[15px] font-medium dark:text-white text-black">
                  {project.title}
                </h3>
                <p className="mt-0.5 text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {project.description}
                </p>
                <Links project={project} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
