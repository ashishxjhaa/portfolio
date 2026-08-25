"use client";

const experiences = [
  {
    company: "Betterstacks",
    role: "Software Development Intern",
    duration: "Jun 2026 - Aug 2026",
    highlights: [
      "Built an AI resume-roaster end-to-end: product flow, LLM integration, and usage analytics",
      "Shipped a QR profile generator and AI voice-calling system that auto-fills profiles from live calls",
      "Hardened frontend quality across the platform: layout, responsiveness, and component polish",
    ],
  },
  {
    company: "Betterstacks",
    role: "Full Stack Web Developer",
    duration: "Oct 2025 - Jan 2026",
    highlights: [
      "Owned delivery of production features across frontend and backend in a live SaaS environment",
      "Shipped reliable user-facing work under real release pressure with strong UX polish",
    ],
  },
];

function Experience() {
  return (
    <div className="pt-20">
      <div className="px-10 sm:px-20 dark:text-white text-black max-w-4xl mx-auto">
        <div className="text-2xl sm:text-4xl font-medium tracking-tight leading-normal">
          Experience
        </div>
      </div>
      <div className="w-[90%] mt-10 max-w-3xl mx-auto flex flex-col gap-3">
        {experiences.map((exp) => (
          <div
            key={`${exp.company}-${exp.role}`}
            className="dark:bg-black/30 bg-white rounded-md w-full px-6 sm:px-10 py-5"
          >
            <div className="flex justify-between items-start w-full gap-4">
              <div className="flex flex-col gap-1.5">
                <div className="text-md font-medium dark:text-white text-black">
                  <span className="text-sm">{exp.company}</span>
                </div>
                <div className="text-xs sm:text-sm dark:text-white/85 text-black/85">
                  {exp.role}
                </div>
              </div>
              <div className="opacity-75 dark:text-gray-300 text-neutral-700 whitespace-nowrap text-xs sm:text-md">
                {exp.duration}
              </div>
            </div>
            <ul className="mt-3 flex flex-col gap-1.5 list-disc pl-4">
              {exp.highlights.map((item) => (
                <li
                  key={item}
                  className="text-xs sm:text-sm dark:text-white/70 text-black/70 leading-relaxed"
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
