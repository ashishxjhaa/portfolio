"use client";

const experiences = [
  {
    company: "Betterstacks",
    role: "Software Development Intern",
    duration: "Jun 2026 - Aug 2026",
  },
  {
    company: "Betterstacks",
    role: "Full Stack Web Developer",
    duration: "Oct 2025 - Jan 2026",
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
            className="flex items-center gap-4 sm:gap-6 dark:bg-black/30 bg-white rounded-md w-full px-6 sm:px-10 py-5"
          >
            <div className="flex justify-between items-start w-full">
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
          </div>
        ))}
      </div>
    </div>
  );
}
export default Experience;
