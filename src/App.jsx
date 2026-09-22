import { useEffect } from "react";
import AOS from "aos";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, disable: "phone" });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <SpeedInsights />
    </>
  );
}
