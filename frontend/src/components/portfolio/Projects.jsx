import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../../data/resume";
import { Github } from "./SocialIcons";
import { ExternalLink, X, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto border-t">
      {/* Title */}
      <div className="flex flex-col mb-16">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-brand mb-3 select-none">
          04 — Projects
        </span>
        <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight uppercase">
          Selected <span className="text-accent-brand">work</span> & experiments.
        </h2>
        <p className="text-muted-foreground text-sm mt-3 max-w-2xl">
          Real projects built with production practices — reusable components, API integration, and responsive design.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((proj, idx) => (
          <motion.div
            key={idx}
            layoutId={`project-card-${idx}`}
            onClick={() => setSelectedProject({ ...proj, index: idx })}
            className="group glass border rounded-xl overflow-hidden cursor-pointer flex flex-col hover:border-accent-brand/40 hover:shadow-[0_0_20px_rgba(204,255,0,0.05)] transition-all duration-300 shadow-md"
          >
            {/* Project Image */}
            <div className="h-48 overflow-hidden relative select-none">
              <img
                src={proj.image}
                alt={proj.name}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/10 to-transparent" />
              <span className="absolute top-4 left-4 font-mono text-[9px] tracking-widest uppercase bg-accent-brand text-accent-brand-text px-2 py-0.5 rounded font-bold">
                {proj.tag}
              </span>
            </div>

            {/* Project Info */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-lg group-hover:text-accent-brand transition-colors">
                    {proj.name}
                  </h3>
                  <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-accent-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-sm text-muted-foreground mt-2.5 line-clamp-3 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              {/* Project Tech stack footer */}
              <div className="flex flex-wrap gap-1.5 mt-6">
                {proj.tech.slice(0, 4).map((t, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-mono bg-secondary/50 text-muted-foreground px-2.5 py-0.5 rounded border border-border/40">
                    {t}
                  </span>
                ))}
                {proj.tech.length > 4 && (
                  <span className="text-[10px] font-mono bg-secondary/50 text-muted-foreground px-2 py-0.5 rounded border border-border/40">
                    +{proj.tech.length - 4}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Detail Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              layoutId={`project-card-${selectedProject.index}`}
              className="glass border rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full glass border hover:bg-muted text-foreground z-10 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Image banner */}
              <div className="h-60 overflow-hidden relative select-none">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                <span className="absolute bottom-4 left-6 font-mono text-[9px] tracking-widest uppercase bg-accent-brand text-accent-brand-text px-2 py-0.5 rounded font-bold">
                  {selectedProject.tag}
                </span>
              </div>

              {/* Detailed info */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="font-display font-black text-3xl uppercase leading-none">{selectedProject.name}</h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Tech Chips */}
                <div>
                  <h4 className="font-mono text-[10px] uppercase text-accent-brand tracking-widest mb-2 font-bold">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, tIdx) => (
                      <span key={tIdx} className="text-xs font-mono bg-secondary border px-2.5 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-mono text-[10px] uppercase text-accent-brand tracking-widest mb-3 font-bold">Key Features</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {selectedProject.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-accent-brand shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contribution */}
                <div className="p-4 rounded-lg bg-secondary/40 border text-sm">
                  <span className="font-semibold text-foreground">Role/Contribution: </span>
                  <span className="text-muted-foreground leading-relaxed">{selectedProject.contributions}</span>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-4 pt-4 border-t">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 glass border rounded-lg hover:bg-muted font-semibold text-center text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                    View Repository
                  </a>
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 bg-accent-brand text-accent-brand-text rounded-lg hover:shadow-[0_0_15px_rgba(204,255,0,0.3)] font-semibold text-center text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live Preview
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
