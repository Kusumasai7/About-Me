import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { NAV_LINKS } from "../../data/resume";
import { Sun, Moon, Menu, X } from "lucide-react";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Intersection Observer to trace current section
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 flex justify-center pointer-events-none">
      <nav
        className={`w-full max-w-7xl px-6 py-3 rounded-full border glass flex items-center justify-between pointer-events-auto transition-all duration-300 ${
          scrolled ? "shadow-lg border-accent-brand/10" : ""
        }`}
      >
        {/* Branding Logo: Circle T + Text */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2.5 hover:opacity-85 transition-opacity"
        >
          <div className="h-8 w-8 rounded-full bg-accent-brand flex items-center justify-center font-display font-black text-accent-brand-text text-sm">
            T
          </div>
          <span className="font-display font-black text-lg tracking-tight">
            Kusuma Sai<span className="text-accent-brand">.</span>
          </span>
        </button>

        {/* Center Pill Menu (Desktop) */}
        <div className="hidden md:flex items-center gap-1 bg-secondary/45 border p-1 rounded-full">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-wider font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-card text-foreground border shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Right side widgets (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-5 py-2 bg-accent-brand text-accent-brand-text text-xs uppercase tracking-widest font-black rounded-full hover:opacity-90 active:scale-95 transition-all"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground hover:bg-muted rounded-full transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[76px] left-6 right-6 glass border rounded-2xl py-6 px-4 shadow-2xl pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-200">
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg font-mono text-xs uppercase tracking-widest transition-all ${
                      isActive
                        ? "bg-accent-brand text-accent-brand-text font-bold"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
            <li className="pt-3 border-t">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full py-3 bg-accent-brand text-accent-brand-text text-center text-xs uppercase tracking-widest font-black rounded-lg"
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
