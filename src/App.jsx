import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects"; // Import Projects
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      {/* Projects Section */}
      <Projects />

      <Contact />

      <Footer />
    </>
  );
}

export default App;