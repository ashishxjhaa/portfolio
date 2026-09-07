"use client";

type Project = {
  title: string;
  description: string;
  video: string;
  liveUrl: string;
  githubUrl: string;
  demoUrl: string;
};

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

function Projects() {
  return (
    <div className="pt-16">
      <h2 className="font-sans text-zinc-500">Projects</h2>
      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title} className="flex flex-col">
            <div className="rounded-xl bg-zinc-200/80 p-2 dark:bg-zinc-800">
              <div className="aspect-[16/10] overflow-hidden rounded-lg">
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <h3 className="mt-2.5 text-[15px] font-medium dark:text-white text-black">
              {project.title}
            </h3>
            <p className="mt-0.5 text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400">
              {project.description}
            </p>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
