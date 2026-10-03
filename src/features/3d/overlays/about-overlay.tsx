import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { siteConfig } from "@/lib/constants";

const skills = [
  "Flutter",
  "React",
  "TypeScript",
  "Firebase",
  "PostgreSQL",
  "Cloud",
];

const tags = [
  "PRODUCT ENGINEER",
  "SOFTWARE BUILDER",
  "OPEN SOURCE",
];

export function AboutOverlay() {
  return (
    <div className="min-h-screen flex items-center py-20 max-w-[var(--content-max-width)] mx-auto px-6 md:px-10 lg:px-16 w-full pointer-events-none">
      <div className="max-w-xl pointer-events-auto bg-bg-surface/85 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-border-subtle shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-bronze/10 border border-accent-bronze/20 text-accent-bronze text-xs font-mono uppercase tracking-wider mb-6">
          <span>02 / ABOUT • SUNDRAMDOTDEV</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary tracking-tight">
          Engineering &amp; Systems Craft
        </h2>

        <p className="mt-4 text-text-secondary text-lg sm:text-xl font-heading leading-snug">
          Sundram Gupta is a Software Engineer and Product Builder delivering cross-platform mobile apps, business software, and scalable digital systems.
        </p>

        <p className="mt-2 text-text-faint font-mono text-xs uppercase tracking-wider">
          Based in {siteConfig.location} • Available Worldwide
        </p>

        {/* Core Stack Pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-lg bg-bg-elevated border border-border-subtle text-xs font-mono text-text-primary"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Roles Strip */}
        <div className="mt-6 pt-6 border-t border-border-subtle flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-mono text-text-faint uppercase tracking-wider">
          {tags.map((tag, idx) => (
            <span key={tag} className="flex items-center gap-2">
              {idx > 0 && <span className="opacity-30">•</span>}
              <span>{tag}</span>
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="mt-8 flex items-center gap-6">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-bronze hover:text-accent-bronze-hover transition-colors"
          >
            Read Story
            <ArrowRight size={15} />
          </Link>

          <Link
            href="/resume"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            <FileText size={15} />
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
