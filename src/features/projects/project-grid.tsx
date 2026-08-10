"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { projectCategories } from "@/lib/constants";

const allProjects = [
  {
    slug: "retailos",
    title: "RetailOS",
    description: "Complete retail inventory and billing management system for small businesses.",
    category: "Business Software",
    tech: ["Flutter", "Dart", "SQLite", "Hive"],
    status: "completed" as const,
  },
  {
    slug: "spendwise",
    title: "SpendWise",
    description: "Personal expense tracking app with budgets, analytics, and smart categorization.",
    category: "Mobile Apps",
    tech: ["Flutter", "Firebase", "Charts"],
    status: "completed" as const,
  },
  {
    slug: "playmate",
    title: "PlayMate",
    description: "Social sports platform for finding players, booking courts, and organizing matches.",
    category: "Mobile Apps",
    tech: ["Flutter", "Node.js", "MongoDB"],
    status: "completed" as const,
  },
  {
    slug: "student-companion",
    title: "Student Companion",
    description: "Academic productivity app for students with schedules, notes, and grade tracking.",
    category: "Mobile Apps",
    tech: ["Flutter", "SQLite", "Notifications"],
    status: "completed" as const,
  },
  {
    slug: "school-management-system",
    title: "School Management System",
    description: "Comprehensive school management software for attendance, grades, and administration.",
    category: "Business Software",
    tech: ["Flutter", "Firebase", "Cloud Functions"],
    status: "completed" as const,
  },
];

export function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
              activeCategory === category
                ? "bg-accent-bronze text-bg-primary"
                : "bg-bg-surface text-text-muted hover:text-text-primary border border-border-subtle hover:border-border-default"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block h-full p-6 md:p-8 rounded-2xl border border-border-subtle bg-bg-surface hover:border-border-default transition-all duration-300 card-hover-glow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-bg-elevated text-text-faint">
                      {project.category}
                    </span>
                    <span className={cn(
                      "px-2 py-0.5 text-[10px] font-medium rounded-full uppercase tracking-wider",
                      project.status === "completed"
                        ? "bg-success/10 text-success"
                        : "bg-warning/10 text-warning"
                    )}>
                      {project.status}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-text-faint group-hover:text-accent-bronze transition-colors"
                  />
                </div>

                <h3 className="text-xl font-heading font-semibold text-text-primary mb-2 group-hover:text-accent-bronze transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-text-muted leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-medium rounded bg-bg-elevated text-text-faint"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-text-muted">
          <p>No projects in this category yet.</p>
        </div>
      )}
    </div>
  );
}
