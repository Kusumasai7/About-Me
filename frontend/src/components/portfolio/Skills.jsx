import { motion } from "framer-motion";
import { SKILLS, SOFT_SKILLS } from "../../data/resume";

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto border-t">
      {/* Title */}
      <div className="flex flex-col mb-16">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-brand mb-3 select-none">
          02 — Skills
        </span>
        <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight uppercase">
          The <span className="text-accent-brand">toolkit</span> I ship with.
        </h2>
        <p className="text-muted-foreground text-sm mt-3 max-w-2xl">
          A snapshot of the languages, frameworks, and tools I use daily to build production interfaces.
        </p>
      </div>

      {/* Skills Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILLS.map((cat, idx) => (
          <div key={idx} className="p-8 glass border rounded-2xl relative overflow-hidden group">
            <h3 className="font-display font-black text-xl mb-8 flex items-center justify-between">
              <span>{cat.category}</span>
              <span className="font-mono text-[10px] text-muted-foreground select-none">0{idx + 1}</span>
            </h3>

            <div className="space-y-6">
              {cat.items.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-foreground/90">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-[2px] bg-border rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent-brand"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills Section */}
      <div className="mt-8 p-8 glass border rounded-2xl relative overflow-hidden">
        <h3 className="font-display font-black text-xl mb-6 flex items-center justify-between">
          <span>Soft Skills</span>
          <span className="font-mono text-[10px] text-muted-foreground select-none">05</span>
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {SOFT_SKILLS.map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-2 text-xs font-mono rounded bg-secondary/50 border text-foreground/80 hover:border-accent-brand/40 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
