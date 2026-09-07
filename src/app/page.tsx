import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

function Home() {
  return (
    <div className="dark:bg-neutral-900 bg-white overflow-x-hidden">
      <div className="mx-auto w-full max-w-2xl px-6">
        <Navbar />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </div>
    </div>
  );
}

export default Home;
