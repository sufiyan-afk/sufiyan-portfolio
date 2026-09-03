import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AIUsage from "./components/AIUsage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PortfolioAI  from "./components/PortfolioAI";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050713] text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AIUsage />
        <Contact />
      </main>

      <PortfolioAI/>

      <Footer />
    </div>
  );
}

export default App;