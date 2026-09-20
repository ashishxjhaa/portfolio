const skillGroups = [
  {
    title: "Applied AI",
    lines: [
      [
        "LLMs",
        "Fine-tuning",
        "AI Agents",
        "Tool calling",
        "MCP",
        "RAG",
      ],
      [
        "Context",
        "Memory",
        "Voice AI",
        "Sandboxing",
        "Harness",
        "Evals",
      ],
    ],
  },
  {
    title: "Frontend",
    lines: [["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"]],
  },
  {
    title: "Backend",
    lines: [["Node.js", "Bun", "Express.js", "REST APIs", "WebSockets"]],
  },
  {
    title: "Databases",
    lines: [["PostgreSQL", "Prisma", "MongoDB", "Drizzle", "Redis"]],
  },
  {
    title: "DevOps & Tools",
    lines: [
      ["Git", "GitHub", "Docker", "Turborepo", "AWS (EC2 & S3)"],
      ["Nginx", "Vercel", "CI/CD"],
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
              {group.lines.map((line, lineIndex) => (
                <div key={lineIndex}>{line.join(" · ")}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
