import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AIUsage from "./components/AIUsage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PortfolioAI from "./components/PortfolioAI";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  useEffect(() => {
    // -------------------------
    // Visitor Tracking
    // -------------------------
    let sessionId = sessionStorage.getItem(
      "portfolio_session_id"
    );

    if (!sessionId) {
      sessionId = crypto.randomUUID();

      sessionStorage.setItem(
        "portfolio_session_id",
        sessionId
      );
    }

    const device =
      window.innerWidth <= 768
        ? "Mobile"
        : "Desktop";

    fetch(`${API_URL}/api/analytics/visitor/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        session_id: sessionId,
        device: device,
      }),
    }).catch(() => {
      // Analytics failure should never affect the portfolio.
    });

    // -------------------------
    // Contact / Link Click Tracking
    // -------------------------
    const trackClick = (linkType) => {
      fetch(`${API_URL}/api/analytics/page-view/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page: linkType,
        }),
      }).catch(() => {
        // Analytics failure should never affect the portfolio.
      });
    };

    const handleClick = (event) => {
      const link = event.target.closest("a");

      if (!link) {
        return;
      }

      const href = link.getAttribute("href");

      if (!href) {
        return;
      }

      if (href.includes("linkedin.com")) {
        trackClick("LinkedIn");
      }

      if (href.includes("github.com")) {
        trackClick("GitHub");
      }

      if (href.startsWith("mailto:")) {
        trackClick("Email");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

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

      <PortfolioAI />

      <Footer />
    </div>
  );
}

export default App;