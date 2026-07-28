"use client";

import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

function Home() {
  return (
    <div className="dark:bg-neutral-900 bg-white pt-4 overflow-x-hidden">
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Education />
    </div>
  );
}

export default Home;
