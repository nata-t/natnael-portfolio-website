import Contact from "@/sections/contact";
import About from "@/sections/about";
import Hero from "@/sections/hero";
import Skills from "@/sections/skills";
import Projects from "@/sections/projects";
export default function Home() {
  return (
    <>
      <Hero />
      <div className="mb-28"></div>
      <About />
      <div className="mb-28"></div>
      <Skills />
      <div className="mb-28"></div>
      <Projects />
      <div className="mb-28"></div>
      <Contact />
    </>
  );
}
