"use client";

const skillGroups = [
  {
    title: "Applied AI",
    skills: [
      "LLMs",
      "AI Agents",
      "Voice AI",
      "Sandboxing",
      "Tool calling",
      "RAG",
    ],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Bun", "Express.js", "REST APIs", "WebSockets"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "Prisma", "MongoDB", "Drizzle", "Redis"],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Turborepo",
      "AWS (EC2 & S3)",
      "Nginx",
      "Vercel",
      "CI/CD",
    ],
  },
];

function Skills() {
  return (
    <div className="pt-16">
      <h2 className="font-sans text-zinc-500">Skills</h2>
      <div className="mt-4 flex flex-col gap-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4"
          >
            <div className="text-[15px] font-medium dark:text-white text-black sm:w-40 shrink-0">
              {group.title}
            </div>
            <div className="text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400">
              {group.skills.join(" · ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
