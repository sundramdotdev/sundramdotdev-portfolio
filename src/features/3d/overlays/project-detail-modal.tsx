"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, ExternalLink } from "lucide-react";
import { StudioProjectItem } from "../types";

interface ProjectDetailModalProps {
  project: StudioProjectItem | null;
  onClose: () => void;
}

export function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-primary/90 backdrop-blur-2xl p-4 md:p-8 animate-fade-in pointer-events-auto"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-bg-surface border border-border-subtle rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-border-subtle mb-6">
          <div className="flex items-center gap-2">
            <span
              className="font-mono text-xs font-semibold px-2 py-0.5 rounded"
              style={{
                color: project.accent,
                backgroundColor: `${project.accent}15`,
              }}
            >
              {project.index}
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-text-faint">
              {project.tagline}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
            {project.title}
          </h3>

          <p className="mt-3 text-text-secondary text-sm md:text-base leading-relaxed">
            {project.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="p-4 rounded-xl bg-bg-primary border border-border-subtle">
              <span className="font-mono text-[10px] text-text-faint uppercase tracking-wider block mb-1">
                The Problem
              </span>
              <p className="text-xs text-text-secondary leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-bg-primary border border-border-subtle">
              <span className="font-mono text-[10px] text-accent-bronze uppercase tracking-wider block mb-1">
                Outcome &amp; Results
              </span>
              <p className="text-xs text-text-secondary leading-relaxed">
                {project.results}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <span className="font-mono text-[10px] text-text-faint uppercase tracking-wider block mb-2">
              Technology Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-bg-elevated border border-border-subtle text-text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 pt-6 border-t border-border-subtle flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-bronze hover:text-accent-bronze-hover transition-colors"
          >
            Open Dedicated Case Study
            <ExternalLink size={14} />
          </Link>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-bg-elevated hover:bg-border-subtle text-xs font-mono text-text-secondary transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
