"use client";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Convex", "REST APIs", "WebSockets"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Drizzle", "Redis"],
  },
  {
    title: "Applied AI",
    skills: ["LLMs", "RAG", "Embeddings", "AI Agents", "MCP", "Sandboxing"],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Turborepo",
      "AWS",
      "CI/CD",
      "CDN",
      "Postman",
    ],
  },
];

function Skills() {
  return (
    <div className="pt-20">
      <div className="px-10 sm:px-20 dark:text-white text-black max-w-4xl mx-auto">
        <div className="text-2xl sm:text-4xl font-medium tracking-tight leading-normal">
          Skills
        </div>
      </div>
      <div className="w-[90%] mt-10 max-w-3xl mx-auto dark:bg-black/30 bg-white rounded-md px-6 sm:px-10 py-6 flex flex-col gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4"
          >
            <div className="text-sm font-medium dark:text-white text-black w-32 shrink-0">
              {group.title}
            </div>
            <div className="text-sm dark:text-white/75 text-black/75 leading-relaxed">
              {group.skills.join(" · ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
