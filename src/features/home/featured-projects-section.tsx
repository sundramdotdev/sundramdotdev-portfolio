"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useInView } from "@/hooks/use-in-view";
import { SectionHeader } from "@/components/ui/section-header";
import { ArrowRight } from "lucide-react";

const featuredProjects = [
  {
    slug: "retailos",
    title: "RetailOS",
    tagline: "Inventory & Billing for Retail",
    description:
      "Complete retail inventory and billing management system that reduced stock discrepancies by 40% and cut billing time from 5 minutes to under 1 minute per transaction.",
    problem: "Small retail businesses managing inventory with spreadsheets and paper logs, leading to stock errors and lost revenue.",
    results: "Deployed to 3 stores. 40% fewer stock discrepancies. Billing time reduced by 80%.",
    tech: ["Flutter", "Dart", "SQLite", "Hive", "Provider"],
    accent: "#C18A42",
    index: "01",
  },
  {
    slug: "spendwise",
    title: "SpendWise",
    tagline: "Personal Finance, Simplified",
    description:
      "Intuitive expense tracking app with smart categorization, budget limits, and visual analytics that helps users understand their spending in the first month.",
    problem: "Existing expense trackers are either too complex for daily use or lack meaningful insights for financial awareness.",
    results: "500+ downloads. 4.5-star rating. Users report 30% better spending awareness within 30 days.",
    tech: ["Flutter", "Firebase", "FL Chart", "Riverpod"],
    accent: "#5C8765",
    index: "02",
  },
  {
    slug: "playmate",
    title: "PlayMate",
    tagline: "Find Players, Book Courts",
    description:
      "Social sports platform with real-time player matching, court availability, match scheduling, and team management for pickup game enthusiasts.",
    problem: "Sports enthusiasts struggle to find players, book courts, and organize regular matches in their area.",
    results: "200+ active players. 15 matches organized per week on average through the platform.",
    tech: ["Flutter", "Node.js", "MongoDB", "Socket.io"],
    accent: "#D79E56",
    index: "03",
  },
  {
    slug: "student-companion",
    title: "Student Companion",
    tagline: "Academic Productivity, Unified",
    description:
      "All-in-one academic companion with class schedules, note-taking, assignment tracking with reminders, and GPA calculator — designed for real student workflows.",
    problem: "Students lack a unified tool for managing schedules, notes, assignments, and grades in one place.",
    results: "Used across 5 colleges. 95% notification delivery rate for assignment deadline reminders.",
    tech: ["Flutter", "SQLite", "Local Notifications", "Provider"],
    accent: "#8A7B63",
    index: "04",
  },
  {
    slug: "school-management-system",
    title: "School Management System",
    tagline: "Unified School Operations",
    description:
      "Comprehensive school management platform with role-based access for teachers, students, parents, and administrators — handling everything from attendance to fee management.",
    problem: "Schools manage attendance, grades, communication, and fees through disconnected systems, causing inefficiency and data silos.",
    results: "2 schools. 500+ students. 60% less admin overhead. 80% improvement in parent communication satisfaction.",
    tech: ["Flutter", "Firebase", "Cloud Functions", "Firestore"],
    accent: "#C88E2D",
    index: "05",
  },
];

export function FeaturedProjectsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 mx-auto max-w-[var(--content-max-width)] px-6 md:px-10 lg:px-16">
      <SectionHeader
        label="Selected Work"
        title="Products We've Built"
        description="Each product started with a real problem. Here's how we solved them."
      />

      <div className="space-y-24 md:space-y-32">
        {featuredProjects.map((project, i) => (
          <ProjectShowcase key={project.slug} project={project} reverse={i % 2 === 1} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-16 text-center"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-caption font-medium text-accent-bronze hover:text-accent-bronze-hover transition-colors"
        >
          View All Products
          <ArrowRight size={14} />
        </Link>
      </motion.div>
    </section>
  );
}

function ProjectShowcase({
  project,
  reverse,
}: {
  project: (typeof featuredProjects)[number];
  reverse: boolean;
}) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <div ref={ref}>
      <Link href={`/projects/${project.slug}`} className="group block">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
            reverse ? "lg:direction-rtl" : ""
          }`}
          style={{ direction: reverse ? "rtl" : "ltr" }}
        >
          {/* Image / Mockup area */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ direction: "ltr" }}
          >
            <div
              className="relative aspect-[4/3] rounded-[18px] border border-border-subtle overflow-hidden group-hover:-translate-y-1 transition-transform duration-500"
              style={{ backgroundColor: `${project.accent}08` }}
            >
              {/* Abstract app representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="text-6xl font-heading font-bold opacity-10"
                    style={{ color: project.accent }}
                  >
                    {project.index}
                  </div>
                  <div
                    className="mt-2 text-lg font-heading font-semibold opacity-30"
                    style={{ color: project.accent }}
                  >
                    {project.title}
                  </div>
                </div>
              </div>
              {/* Grid overlay */}
              <div className="absolute inset-0 bg-grid-dense opacity-20" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ direction: "ltr" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="font-numeric text-xs font-semibold opacity-50"
                style={{ color: project.accent }}
              >
                {project.index}
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-text-faint">
                {project.tagline}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary group-hover:text-accent-bronze transition-colors duration-300 tracking-tight">
              {project.title}
            </h3>

            <p className="mt-4 text-text-secondary text-body leading-relaxed">
              {project.description}
            </p>

            {/* Problem */}
            <div className="mt-6 p-4 rounded-[14px] bg-bg-surface border border-border-subtle">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text-faint mb-2">
                The Problem
              </p>
              <p className="text-caption text-text-secondary leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Results */}
            <div className="mt-4 p-4 rounded-[14px] bg-bg-surface border border-border-subtle">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text-faint mb-2">
                Results
              </p>
              <p className="text-caption text-text-secondary leading-relaxed">
                {project.results}
              </p>
            </div>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-xs font-medium rounded-[10px] bg-bg-elevated text-text-faint"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <span className="inline-flex items-center gap-2 text-caption font-medium text-accent-bronze group-hover:gap-3 transition-all duration-300">
                View Case Study
                <ArrowRight size={14} />
              </span>
            </div>
          </motion.div>
        </div>
      </Link>
    </div>
  );
}
