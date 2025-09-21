"use client"

import About from "@/components/About"
import Contact from "@/components/Contact"
import Education from "@/components/Education"
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
      <Education />
      <Contact />
    </div>
  )
}

export default Home