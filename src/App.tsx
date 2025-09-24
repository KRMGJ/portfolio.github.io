import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import WebDevFocus from "@/components/WebDevFocus";
import Projects from "@/components/Projects";
import Experiences from "@/components/Experiences";
import HowIWork from "@/components/HowIWork";
import Contact from "@/components/Contact";
import Line from "@/components/Line";


export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Line />
      <Education />
      <Certificates />
      <Skills />
      <WebDevFocus />
      <Line />
      <Projects />
      <Experiences />
      <HowIWork />
      <Line />
      <Contact />
    </div>
  );
}