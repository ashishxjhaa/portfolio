"use client"

function Sidebar({ active, setActive }: { active: string; setActive: (val: string) => void }) {
  return (
    <div className="w-fit my-4 bg-black py-4 rounded-sm h-fit max-h-[65vh] overflow-auto">
      <div className="flex flex-col gap-3 mx-3">
        <div onClick={() => setActive("about")} className={`flex items-center gap-3 cursor-pointer rounded-sm px-4 pr-18 py-2 ${active === "about" ? "bg-[#F5E901] text-black" : "hover:bg-[#DAED6D] hover:text-black"}`}>
          <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
          <div className="font-semibold">About</div>
        </div>
        <div onClick={() => setActive("projects")} className={`flex items-center gap-3 cursor-pointer rounded-sm px-4 pr-18 py-2 ${active === "projects" ? "bg-[#F5E901] text-black" : "hover:bg-[#DAED6D] hover:text-black"}`}>
          <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
          <div className="font-semibold">Projects</div>
        </div>
        <div onClick={() => setActive("techskill")} className={`flex items-center gap-3 cursor-pointer rounded-sm px-4 pr-18 py-2 ${active === "techskill" ? "bg-[#F5E901] text-black" : "hover:bg-[#DAED6D] hover:text-black"}`}>
          <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
          <div className="font-semibold">Tech Skills</div>
        </div>
        <div onClick={() => setActive("resume")} className={`flex items-center gap-3 cursor-pointer rounded-sm px-4 pr-18 py-2 ${active === "resume" ? "bg-[#F5E901] text-black" : "hover:bg-[#DAED6D] hover:text-black"}`}>
          <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
          <div className="font-semibold">Resume</div>
        </div>
        <div onClick={() => setActive("education")} className={`flex items-center gap-3 cursor-pointer rounded-sm px-4 pr-18 py-2 ${active === "education" ? "bg-[#F5E901] text-black" : "hover:bg-[#DAED6D] hover:text-black"}`}>
          <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
          <div className="font-semibold">Education</div>
        </div>
        <div onClick={() => setActive("contact")} className={`flex items-center gap-3 cursor-pointer rounded-sm px-4 pr-18 py-2 ${active === "contact" ? "bg-[#F5E901] text-black" : "hover:bg-[#DAED6D] hover:text-black"}`}>
          <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
          <div className="font-semibold">Contact</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar