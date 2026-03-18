import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Hackathon from "@/components/Hackathon";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      {/* 
        The ScrollyCanvas provides the 500vh height and rendering logic 
        Overlay acts as a child absolute overlay running concurrently 
      */}
      <div className="relative w-full">
        <ScrollyCanvas totalFrames={75} />
        <Overlay />
      </div>

      <div className="relative z-20 flex flex-col w-full bg-[#121212]">
        <About />
        <Skills />
        <Education />
        <Hackathon />
        <Projects />
        <Certifications />
      </div>
    </main>
  );
}
