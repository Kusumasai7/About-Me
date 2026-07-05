import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { PROFILE } from "../../data/resume";
import { Github, Linkedin } from "./SocialIcons";
import { FileText, MapPin, ArrowUpRight, Mail, Sparkles } from "lucide-react";

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [glowStyle, setGlowStyle] = useState({});
  const containerRef = useRef(null);

  const rolesList = ["React.js", "JavaScript", "MUI Engineer", "Frontend Developer"];

  // Rotating typing text
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rolesList.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Track cursor movement for interactive background glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setGlowStyle({
        "--x": `${x}px`,
        "--y": `${y}px`,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
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
    <section
      id="hero"
      ref={containerRef}
      style={glowStyle}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16 px-6 radial-glow"
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 grid-noise opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column - Information */}
        <div className="lg:col-span-7 space-y-6 flex flex-col items-start text-left">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-brand/10 border border-accent-brand/20 text-[10px] font-mono tracking-widest text-accent-brand uppercase font-bold"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-brand animate-pulse"></span>
            Available for Frontend Roles
          </motion.div>

          {/* Big Bold Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7.5xl font-black font-display tracking-tighter leading-[0.9] uppercase"
          >
            Thummuri
            <br />
            Kusuma <span className="text-accent-brand">Sai</span>
          </motion.h1>

          {/* Blinking Subtitle */}
          <div className="h-8 flex items-center font-mono text-sm md:text-base font-bold text-muted-foreground">
            <span className="text-foreground">// &nbsp;</span>
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {rolesList[roleIndex]}
            </motion.span>
            <span className="h-4 w-[2px] bg-accent-brand ml-1 caret" />
          </div>

          {/* Intro Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base leading-relaxed max-w-xl text-pretty"
          >
            Frontend Developer with <span className="text-foreground font-semibold">1+ year</span> of professional experience crafting responsive, scalable web apps at <span className="text-foreground font-semibold">TaraFirst Fintech</span>. I turn complex business workflows into clean, maintainable React interfaces.
          </motion.p>

          {/* Action Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 pt-4 w-full"
          >
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-accent-brand text-accent-brand-text text-xs uppercase tracking-widest font-black rounded-lg hover:shadow-[0_0_20px_rgba(204,255,0,0.4)] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <FileText size={14} />
              Download Resume
            </a>

            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3.5 border glass text-xs uppercase tracking-widest font-black rounded-lg hover:bg-muted active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              View Projects
              <ArrowUpRight size={14} />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3.5 border glass text-xs uppercase tracking-widest font-black rounded-lg hover:bg-muted active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Mail size={14} />
              Contact Me
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3.5 border border-accent-brand text-accent-brand text-xs uppercase tracking-widest font-black rounded-lg hover:bg-accent-brand/10 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles size={14} />
              Hire Me
            </button>
          </motion.div>

          {/* Footer Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="pt-6 flex flex-wrap items-center gap-6 text-xs font-mono text-muted-foreground border-t w-full border-border/40"
          >
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-brand transition-colors flex items-center gap-2"
            >
              <Github size={14} />
              GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-brand transition-colors flex items-center gap-2"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <span className="flex items-center gap-2 select-none">
              <MapPin size={14} />
              {PROFILE.location}
            </span>
          </motion.div>
        </div>

        {/* Right Column - Terminal Mockup & Metric */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Terminal Box */}
          <div className="glass border rounded-xl overflow-hidden shadow-2xl relative">
            {/* Terminal Header */}
            <div className="bg-secondary/40 px-4 py-3 border-b flex items-center justify-between">
              <span className="font-mono text-[10px] text-muted-foreground select-none">/ PROFILE.TSX</span>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-accent-brand/60 animate-pulse" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent-brand" />
              </div>
            </div>

            {/* Terminal Content */}
            <pre className="p-6 text-left font-mono text-xs md:text-sm leading-relaxed overflow-x-auto text-[#f8f8f2] bg-card/10 select-all">
              <code>
                <span className="text-[#ff79c6]">const</span> <span className="text-[#50fa7b]">engineer</span> = &#123;{"\n"}
                &nbsp;&nbsp;name: <span className="text-[#f1fa8c]">"Kusuma Sai"</span>,{"\n"}
                &nbsp;&nbsp;role: <span className="text-[#f1fa8c]">"Frontend Dev"</span>,{"\n"}
                &nbsp;&nbsp;stack: [<span className="text-[#f1fa8c]">"React"</span>, <span className="text-[#f1fa8c]">"MUI"</span>],{"\n"}
                &nbsp;&nbsp;focus: <span className="text-[#f1fa8c]">"UI Systems"</span>,{"\n"}
                &nbsp;&nbsp;shipping: <span className="text-[#8be9fd]">true</span>,{"\n"}
                &#125;;
              </code>
            </pre>

            {/* Terminal Footer Info */}
            <div className="px-6 py-4 border-t flex items-center justify-between select-none">
              <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">Now Shipping</span>
              <span className="font-mono text-[10px] text-accent-brand font-bold">v2026</span>
            </div>
          </div>

          {/* Metric Box */}
          <div className="p-6 glass border rounded-xl flex items-baseline justify-between select-none">
            <div>
              <h2 className="font-display font-black text-6xl tracking-tighter leading-none">
                1+<span className="text-accent-brand">Y</span>
              </h2>
              <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-2">Production Experience</p>
            </div>
            <span className="h-3 w-3 rounded-full bg-accent-brand" />
          </div>

        </motion.div>

      </div>
    </section>
  );
};
