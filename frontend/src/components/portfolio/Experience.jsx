import { EXPERIENCE } from "../../data/resume";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto border-t">
      {/* Title */}
      <div className="flex flex-col mb-16">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-brand mb-3 select-none">
          03 — Experience
        </span>
        <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight uppercase">
          Where I've <span className="text-accent-brand">shipped</span> code.
        </h2>
      </div>

      {/* Experience Timeline */}
      <div className="relative pl-8 border-l border-border/80 space-y-16 max-w-4xl select-none">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Node Icon - Solid Neon Circle */}
            <span className="absolute -left-[41px] top-1.5 p-1.5 rounded-full bg-accent-brand text-accent-brand-text shadow-[0_0_10px_rgba(204,255,0,0.5)] z-10">
              <Briefcase size={13} />
            </span>

            {/* Header info */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-mono text-[9px] font-bold uppercase tracking-wider bg-accent-brand/10 border border-accent-brand/20 text-accent-brand px-2.5 py-1 rounded">
                  {exp.period}
                </span>
                {exp.current && (
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider bg-accent-brand text-accent-brand-text px-2.5 py-1 rounded flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-brand-text animate-pulse" />
                    Current
                  </span>
                )}
              </div>
              
              <div>
                <h3 className="font-display font-black text-2xl text-foreground">
                  {exp.role}
                </h3>
                <p className="font-semibold text-muted-foreground text-sm mt-0.5">
                  {exp.company}
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {exp.tech.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 text-[10px] font-mono rounded bg-secondary/60 border text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Highlights List */}
            <ul className="space-y-3.5 text-muted-foreground text-sm max-w-3xl">
              {exp.highlights.map((hl, hlIdx) => (
                <li key={hlIdx} className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full border border-accent-brand mt-2 shrink-0" />
                  <span className="leading-relaxed">{hl}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
