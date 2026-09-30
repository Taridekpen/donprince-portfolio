import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { ProofStrip } from "./components/ProofStrip";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";

export default function App() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-signal focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to work
      </a>
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <About />
        <Work />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
