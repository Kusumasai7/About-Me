import { EDUCATION, CERTIFICATIONS } from "../../data/resume";
import { GraduationCap, Award, Calendar } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-24 px-6 max-w-7xl mx-auto border-t">
      {/* Title */}
      <div className="flex flex-col mb-16">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-brand mb-3 select-none">
          05 — Education
        </span>
        <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight uppercase">
          Academic & <span className="text-accent-brand">credentials</span>.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 select-none">
        {/* Education Column */}
        <div className="space-y-6">
          <h3 className="font-display font-bold text-xl flex items-center gap-3 mb-6">
            <GraduationCap className="text-accent-brand" size={20} />
            Education
          </h3>

          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="p-8 glass border rounded-2xl relative overflow-hidden group hover:border-accent-brand/35 transition-colors">
              <span className="font-mono text-[9px] text-accent-brand font-bold uppercase tracking-widest bg-accent-brand/10 border border-accent-brand/20 px-2.5 py-1 rounded inline-flex items-center gap-1.5 mb-4">
                <Calendar size={12} />
                {edu.period}
              </span>
              <h4 className="font-display font-black text-2xl leading-snug">{edu.degree}</h4>
              <p className="text-sm font-semibold text-muted-foreground mt-1 mb-4">{edu.institution}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications Column */}
        <div className="space-y-6">
          <h3 className="font-display font-bold text-xl flex items-center gap-3 mb-6">
            <Award className="text-accent-brand" size={20} />
            Certifications
          </h3>

          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="p-6 glass border rounded-2xl relative overflow-hidden group hover:border-accent-brand/35 transition-colors flex items-start gap-4">
                <span className="p-2.5 rounded-full bg-secondary border text-muted-foreground group-hover:text-accent-brand transition-colors shrink-0">
                  <Award size={16} />
                </span>
                <div>
                  <span className="font-mono text-[9px] text-accent-brand font-bold uppercase tracking-widest bg-accent-brand/10 border border-accent-brand/20 px-2.5 py-1 rounded inline-flex items-center gap-1 mb-3">
                    <Calendar size={10} />
                    {cert.period}
                  </span>
                  <h4 className="font-display font-black text-xl leading-snug">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground font-semibold mt-1">{cert.issuer}</p>
                  <span className="inline-block mt-3 text-[9px] font-mono bg-secondary border text-muted-foreground px-2 py-0.5 rounded uppercase tracking-wider">
                    {cert.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
