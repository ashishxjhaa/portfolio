"use client"

import About from "@/components/About"
import Contact from "@/components/Contact"
import Experience from "@/components/Experience"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import Techskill from "@/components/Techskill"
import { useEffect, useState } from "react"

function Home() {
  const [active, setActive] = useState("")

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <div className="bg-neutral-900 dark:bg-white pt-4 overflow-x-hidden">
      <Navbar active={active} setActive={setActive} />
      <div>
        <section id="about"><About /></section>
        <section id="skills"><Techskill /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  )
}

export default Home