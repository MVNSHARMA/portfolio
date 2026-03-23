import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Hackathon from "@/components/Hackathon";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <Navbar />
      {/* 
        The ScrollyCanvas provides the 500vh height and rendering logic 
        Overlay acts as a child absolute overlay running concurrently 
      */}
      <div id="home" className="relative w-full">
        <ScrollyCanvas totalFrames={75} />
        <Overlay />
      </div>

      <div className="relative z-20 flex flex-col w-full bg-[#121212]">
        <About />
        <Skills />
        <Experience />
        <Education />
        <Hackathon />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </main>
  );
}
