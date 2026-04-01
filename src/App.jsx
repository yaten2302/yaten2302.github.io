import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import OSSContributions from "./components/OSSContributions";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Talks from "./components/Talks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <Navbar theme={theme} onToggle={toggle} />
      <main>
        <Hero />
        <About />
        <OSSContributions />
        <Projects />
        <Experience />
        <Talks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
