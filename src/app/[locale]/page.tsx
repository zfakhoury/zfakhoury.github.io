import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Background } from "@/components/sections/Background";
import { Languages } from "@/components/sections/Languages";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Background />
      <Languages />
      <Contact />
    </>
  );
}
