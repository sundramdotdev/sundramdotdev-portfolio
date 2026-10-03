"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Eye } from "lucide-react";
import { studioProjects } from "../data";
import { StudioProjectItem } from "../types";
import { ProjectDetailModal } from "./project-detail-modal";

export function WorkOverlay() {
  const [activeProject, setActiveProject] = useState<StudioProjectItem | null>(
    null
  );

  return (
    <div className="py-24 max-w-[var(--content-max-width)] mx-auto px-6 md:px-10 lg:px-16 w-full pointer-events-none">
      <div className="pointer-events-auto">
        <div className="max-w-xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-bronze/10 border border-accent-bronze/20 text-accent-bronze text-xs font-mono uppercase tracking-wider mb-4">
            <span>03 / PRODUCTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary tracking-tight">
            Selected Products
          </h2>
          <p className="mt-2 text-text-secondary text-base leading-relaxed">
            Software built for real users, production loads, and immediate utility.
          </p>
        </div>

        {/* Compressed Fast-Scan Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl">
          {studioProjects.map((project) => (
            <div
              key={project.slug}
              className="group p-6 rounded-2xl bg-bg-surface/85 backdrop-blur-xl border border-border-subtle hover:border-accent-bronze/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-mono text-xs font-semibold px-2 py-0.5 rounded"
                    style={{
                      color: project.accent,
                      backgroundColor: `${project.accent}15`,
                    }}
                  >
                    {project.index}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="p-1.5 rounded-lg text-text-faint hover:text-text-primary hover:bg-bg-elevated transition-colors cursor-pointer"
                      aria-label={`Quick view ${project.title}`}
                    >
                      <Eye size={15} />
                    </button>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="p-1.5 rounded-lg text-text-faint hover:text-accent-bronze hover:bg-bg-elevated transition-colors cursor-pointer"
                      aria-label={`Open case study for ${project.title}`}
                    >
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-text-primary group-hover:text-accent-bronze transition-colors">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-text-secondary leading-normal">
                  {project.tagline}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-5">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-bg-elevated text-text-faint"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-1.5 py-0.5 text-[11px] font-mono rounded bg-bg-elevated text-text-faint">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between">
                <button
                  onClick={() => setActiveProject(project)}
                  className="text-xs font-mono text-text-secondary hover:text-text-primary cursor-pointer transition-colors"
                >
                  Quick Specs
                </button>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-accent-bronze hover:text-accent-bronze-hover transition-colors"
                >
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-bronze hover:text-accent-bronze-hover transition-colors"
          >
            Browse entire product archive
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* On-demand Project Detail Modal */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
