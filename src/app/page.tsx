"use client"

import About from "@/components/About"
import Contact from "@/components/Contact"
import Education from "@/components/Education"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import Sidebar from "@/components/Sidebar"
import Techskill from "@/components/Techskill"
import { useState } from "react"

function Home() {
  const [active, setActive] = useState("about")

  return (
    <div className="min-h-screen w-full bg-neutral-900 pt-4">
      <Navbar />
      <div className="flex gap-6 px-6">
        <Sidebar active={active} setActive={setActive} />
        <div className="flex-1">
          {active === "about" && <About />}
          {active === "skill" && <Techskill />}
          {active === "projects" && <Projects />}
          {active === "education" && <Education />}
          {active === "contact" && <Contact />}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home