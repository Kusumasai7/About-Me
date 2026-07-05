import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Loader } from "./components/portfolio/Loader";
import { Cursor } from "./components/portfolio/Cursor";
import { ScrollProgress } from "./components/portfolio/ScrollProgress";
import { Navbar } from "./components/portfolio/Navbar";
import { Hero } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/About";
import { Skills } from "./components/portfolio/Skills";
import { Experience } from "./components/portfolio/Experience";
import { Projects } from "./components/portfolio/Projects";
import { Education } from "./components/portfolio/Education";
import { Contact } from "./components/portfolio/Contact";
import { Footer } from "./components/portfolio/Footer";
import { ArrowUp } from "lucide-react";
import "./App.css";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      setShowScroll(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);
    return () => window.removeEventListener("scroll", handleScrollButtonVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <ThemeProvider>
      <div className="App bg-background text-foreground transition-colors duration-300 min-h-screen selection:bg-accent-brand selection:text-accent-brand-text">
        {/* Custom cursor overlay */}
        <Cursor />

        {/* Dynamic page loading overlay */}
        <Loader />

        {/* Scroll reading line */}
        <ScrollProgress />

        {/* Floating Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Scroll To Top Button (Reference Style) */}
        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 h-10 w-10 bg-accent-brand text-accent-brand-text rounded-full shadow-lg flex items-center justify-center hover:opacity-90 active:scale-95 transition-all hover:shadow-[0_0_15px_rgba(204,255,0,0.4)] animate-in fade-in zoom-in duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} strokeWidth={3} />
          </button>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
