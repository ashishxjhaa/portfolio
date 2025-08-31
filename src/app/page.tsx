"use client"

import About from "@/components/About"
import Contact from "@/components/Contact"
import Education from "@/components/Education"
import Footer from "@/components/Footer"
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
    <div className="min-h-screen w-full bg-neutral-900 pt-4">
      <Navbar active={active} setActive={setActive} />
      <div className="mt-20">
          <>
            <section id="about"><About /></section>
            <section id="skills"><Techskill /></section>
            <section id="projects"><Projects /></section>
            <section id="education"><Education /></section>
            <section id="contact"><Contact /></section>
          </>
      </div>
      <Footer />
    </div>
  )
}

export default Home