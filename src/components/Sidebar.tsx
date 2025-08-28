

function Sidebar() {
  return (
    <div className="w-fit my-4 bg-black py-4 rounded-sm max-h-[65vh] overflow-auto">
      <div className="flex flex-col gap-3 mx-3">
        <div className="flex items-center gap-3 cursor-pointer hover:bg-[#DAED6D] hover:text-black rounded-sm px-4 pr-18 py-2">
            <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
            <div className="font-semibold">About</div>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-[#DAED6D] hover:text-black rounded-sm px-4 pr-18 py-2">
            <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
            <div className="font-semibold">Project</div>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-[#DAED6D] hover:text-black rounded-sm px-4 pr-18 py-2">
            <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
            <div className="font-semibold">Tech Skills</div>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-[#DAED6D] hover:text-black rounded-sm px-4 pr-18 py-2">
            <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
            <div className="font-semibold">Resume</div>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-[#DAED6D] hover:text-black rounded-sm px-4 pr-18 py-2">
            <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
            <div className="font-semibold">Education</div>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-[#DAED6D] hover:text-black rounded-sm px-4 pr-18 py-2">
            <div className="rounded-full h-3 w-3 bg-neutral-700"></div>
            <div className="font-semibold">Contact</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar