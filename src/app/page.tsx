import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Projects } from "@/components/projects";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Process />
      <Testimonials />
      <Contact />
    </>
  );
}
