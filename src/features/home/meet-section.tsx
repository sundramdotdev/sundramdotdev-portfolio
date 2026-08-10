"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useInView } from "@/hooks/use-in-view";
import { ArrowRight } from "lucide-react";

const principles = [
  {
    title: "Problem First",
    description: "Great software is a solution, not a technology showcase.",
  },
  {
    title: "Ship & Iterate",
    description: "Working software in front of users, then improve with real feedback.",
  },
  {
    title: "Craft & Quality",
    description: "Every pixel, every interaction matters. Polish is non-negotiable.",
  },
  {
    title: "Transparent Communication",
    description: "Clear updates, honest timelines, no surprises.",
  },
];

export function MeetSection() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="py-16 md:py-24 lg:py-32 mx-auto max-w-[var(--content-max-width)] px-6 md:px-10 lg:px-16">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left — Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-bronze mb-4">
            About
          </span>

          <h2 className="text-section-heading font-heading text-text-primary">
            Meet Sundram.
          </h2>

          <p className="mt-6 text-text-secondary text-body leading-relaxed">
            Self-taught product engineer building software that solves real
            problems for real businesses. I started with curiosity about how
            apps work — and turned it into a craft focused on production-grade
            mobile applications and business software.
          </p>

          <p className="mt-4 text-text-secondary text-body leading-relaxed">
            Every project starts with listening — understanding the business,
            the users, and the real challenges before writing a single line of
            code.
          </p>

          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-caption font-medium text-accent-bronze hover:text-accent-bronze-hover transition-colors"
            >
              Read the full story
              <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* Right — Principles */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-text-faint mb-6">
            Engineering Principles
          </span>

          <div className="space-y-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, x: 16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex gap-4 p-4 rounded-[14px] border border-border-subtle bg-bg-surface/50"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-[10px] bg-accent-bronze/10 flex items-center justify-center">
                  <span className="font-numeric text-xs font-semibold text-accent-bronze">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="text-caption font-heading font-semibold text-text-primary">
                    {principle.title}
                  </h3>
                  <p className="mt-1 text-xs text-text-secondary leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
