import { PROFILE } from "../../data/resume";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "./SocialIcons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t bg-card/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Copyright */}
        <p className="text-xs font-mono text-muted-foreground text-center md:text-left">
          &copy; {currentYear} {PROFILE.fullName}. All rights reserved.
        </p>

        {/* Right: Quick Links */}
        <div className="flex items-center gap-6">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent-brand transition-colors duration-200"
            aria-label="GitHub Profile"
          >
            <Github size={16} />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent-brand transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="text-muted-foreground hover:text-accent-brand transition-colors duration-200"
            aria-label="Email Address"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};
