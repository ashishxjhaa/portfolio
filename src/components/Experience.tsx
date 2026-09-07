const experiences = [
  {
    company: "Betterstacks",
    role: "Full Stack Web Developer",
    duration: "Feb 2026 - Aug 2026",
    highlights: [
      "Owned delivery of production features across frontend and backend in a live SaaS environment",
      "Integrated LLM-backed product flows with usage analytics under real release pressure",
      "Hardened platform reliability: shared components, responsiveness, and UX polish on core screens",
    ],
  },
  {
    company: "Betterstacks",
    role: "Full Stack Web Developer",
    duration: "Oct 2025 - Dec 2025",
    highlights: [
      "Built an AI resume-roaster end-to-end: product flow, LLM integration, and usage analytics",
      "Shipped a QR profile generator and AI voice-calling system that auto-fills profiles from live calls",
      "Improved frontend quality across the platform: layout, responsiveness, and component polish",
    ],
  },
];

function Experience() {
  return (
    <div className="pt-16">
      <h2 className="font-sans text-zinc-500">Experience</h2>
      <div className="mt-4 flex flex-col gap-5">
        {experiences.map((exp) => (
          <div key={`${exp.company}-${exp.duration}`}>
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-[15px] font-medium whitespace-nowrap dark:text-white text-black">
                {exp.company}
                <span className="ml-3 font-normal text-zinc-500 dark:text-zinc-400">
                  {exp.role}
                </span>
              </p>
              <p className="m-0 shrink-0 text-sm whitespace-nowrap text-zinc-500 dark:text-zinc-400">
                {exp.duration}
              </p>
            </div>
            <ul className="mt-2 list-disc space-y-0.5 pl-5">
              {exp.highlights.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed dark:text-white/80 text-black/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
