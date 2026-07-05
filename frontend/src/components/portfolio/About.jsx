import { motion } from "framer-motion";
import { PROFILE } from "../../data/resume";
import { Code, Layers, Zap, Users } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t relative overflow-hidden">
      {/* Title */}
      <div className="flex flex-col mb-12">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-brand mb-3 select-none">
          01 — About
        </span>
        <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-balance leading-tight uppercase">
          Building interfaces with <span className="text-accent-brand">craft</span>, care, and code.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Biography paragraphs */}
        <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed text-base">
          <p>
            Frontend Developer with 1+ year of experience, including professional experience at{" "}
            <strong className="text-foreground">TaraFirst Fintech Private Limited</strong>. Skilled in developing
            responsive and scalable web applications using React.js, JavaScript, HTML, CSS, and Material UI.
          </p>
          <p>
            Experienced in building reusable components, managing application state with React Hooks, integrating
            RESTful APIs, and implementing dynamic routing. Focused on creating high-performance, user-friendly
            interfaces through clean and maintainable code.
          </p>
          <p>
            Currently a <strong className="text-foreground">Junior Frontend Developer at TaraFirst Fintech</strong>, I
            work closely with backend developers, QA teams, and business stakeholders in Agile environments to design and ship consistent design standards across platforms.
          </p>
        </div>

        {/* Right Side: Stats Panel */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 select-none">
          {/* Card 1 */}
          <div className="p-6 glass border rounded-xl flex flex-col justify-between h-44 group hover:border-accent-brand/40 transition-colors duration-300">
            <Code size={20} className="text-accent-brand" />
            <div>
              <h4 className="font-display font-black text-4xl leading-none">1+</h4>
              <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest mt-2">Years of Experience</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 glass border rounded-xl flex flex-col justify-between h-44 group hover:border-accent-brand/40 transition-colors duration-300">
            <Layers size={20} className="text-accent-brand" />
            <div>
              <h4 className="font-display font-black text-4xl leading-none">3+</h4>
              <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest mt-2">Projects Built</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 glass border rounded-xl flex flex-col justify-between h-44 group hover:border-accent-brand/40 transition-colors duration-300">
            <Zap size={20} className="text-accent-brand" />
            <div>
              <h4 className="font-display font-black text-4xl leading-none">4+</h4>
              <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest mt-2">Business Modules</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-6 glass border rounded-xl flex flex-col justify-between h-44 group hover:border-accent-brand/40 transition-colors duration-300">
            <Users size={20} className="text-accent-brand" />
            <div>
              <h4 className="font-display font-black text-4xl leading-none">Multi</h4>
              <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest mt-2">Agile Teams</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
