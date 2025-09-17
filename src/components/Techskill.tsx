

function Techskill() {
  return (
    <div className="pt-15 px-4">
      <div className="mt-10 relative border border-gray-500 rounded-xl p-8 pt-10 w-[75%] max-w-3xl mx-auto">
        <span className="absolute -top-4 left-6 dark:bg-black bg-gray-200 px-3 text-lg font-semibold dark:text-white text-black">Tech Stack</span>
        <div className="flex flex-wrap gap-2">
          <TechIcon label="React"></TechIcon>
          <TechIcon label="Next.js"></TechIcon>
          <TechIcon label="TypeScript"></TechIcon>
          <TechIcon label="Tailwind CSS"></TechIcon>
          <TechIcon label="Node"></TechIcon>
          <TechIcon label="Express"></TechIcon>
          <TechIcon label="Java"></TechIcon>
          <TechIcon label="JavaScript"></TechIcon>
          <TechIcon label="MongoDB"></TechIcon>
          <TechIcon label="PostgreSQL"></TechIcon>
          <TechIcon label="Socket.Io"></TechIcon>
          <TechIcon label="EJS"></TechIcon>
          <TechIcon label="Framer Motion"></TechIcon>
          <TechIcon label="Git"></TechIcon>
          <TechIcon label="GitHub"></TechIcon>
          <TechIcon label="Postman"></TechIcon>
          <TechIcon label="VS Code"></TechIcon>
        </div>
      </div>

    </div>
  )
}

export default Techskill



function TechIcon({ label }: { label: string }) {
  return (
    <div className="cursor-text w-fit h-fit whitespace-nowrap px-2 py-1 rounded-sm dark:bg-white/90 bg-black/80 dark:text-black text-white text-sm font-medium">
      {label}
    </div>
  );
}
