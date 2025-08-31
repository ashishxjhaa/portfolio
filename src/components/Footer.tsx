import Marquee from "react-fast-marquee"


function Footer() {
  
  return (
    <div className="fixed bottom-0 w-full h-15 mb-1 bg-[#DDFE9C] text-black overflow-hidden z-50">
        <div className="flex flex-row font-bold py-4 whitespace-nowrap">
            <Marquee autoFill>
            <div className="inline-flex items-center gap-5 mx-4">
                <div className="rounded-full h-2 w-2 bg-neutral-700"></div>
                <div>Based on Darbhanga, India</div>
            </div>
            <div className="inline-flex items-center gap-5 mx-4">
                <div className="rounded-full h-2 w-2 bg-neutral-700"></div>
                <div>1+ years of experience</div>
            </div>
            <div className="inline-flex items-center gap-5 mx-4">
                <div className="rounded-full h-2 w-2 bg-neutral-700"></div>
                <div>Open for full-time</div>
            </div>
            <div className="inline-flex items-center gap-5 mx-4">
                <div className="rounded-full h-2 w-2 bg-neutral-700"></div>
                <div>Pursuing my BCA 1st year</div>
            </div>
            <div className="inline-flex items-center gap-5 mx-4">
                <div className="rounded-full h-2 w-2 bg-neutral-700"></div>
                <div>Full Stack Developer</div>
            </div>
            <div className="inline-flex items-center gap-5 mx-4">
                <div className="rounded-full h-2 w-2 bg-neutral-700"></div>
                <div>Designed & Developed by Ashish</div>
            </div>
            </Marquee>
        </div>
    </div>
  )
}

export default Footer