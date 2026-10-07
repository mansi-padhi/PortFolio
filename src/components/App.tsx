"use client";

import { ScrollProvider } from "@/lib/scroll";
import Navigation from "./Navigation";
import Hero from "./hero/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Work from "./sections/Work";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <ScrollProvider>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </ScrollProvider>
  );
}
