"use client"

import About from "@/components/About"
import Contact from "@/components/Contact"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import Techskill from "@/components/Techskill"

function Home() {

  return (
    <div className="dark:bg-neutral-900 bg-white pt-4 overflow-x-hidden">
      <Navbar />
      <About />
      <Techskill />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home

// const playSound = () => new Audio("/hover.mp3").play();

// <SimpleTooltip content={label}>
//       <div onMouseEnter={playSound} className="cursor-pointer flex items-center justify-center">
//         {children}
//       </div>
//     </SimpleTooltip>
// import { SimpleTooltip } from "@/components/ui/tooltip";