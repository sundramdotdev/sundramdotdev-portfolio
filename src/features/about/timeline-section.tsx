"use client";

import { motion } from "motion/react";
import { useInView } from "@/hooks/use-in-view";
import { Section } from "@/components/ui/section";

const timeline = [
  {
    year: "2021",
    title: "Started Learning Programming",
    phase: "Foundation",
    description:
      "Began with curiosity about how apps work. Explored web development fundamentals and discovered the world of software engineering.",
  },
  {
    year: "2022",
    title: "Discovered Flutter",
    phase: "Mobile Development",
    description:
      "Found Flutter and its approach to cross-platform development. Built first apps, learned Dart, and started contributing to the community.",
  },
  {
    year: "2023",
    title: "First Client Projects",
    phase: "Professional Work",
    description:
      "First freelance client engagements building business software. Learned the craft of understanding requirements and delivering production-grade solutions.",
  },
  {
    year: "2024",
    title: "RetailOS & SpendWise",
    phase: "Product Building",
    description:
      "Built RetailOS for retail businesses and launched SpendWise as a personal product. Shifted from developer to product builder mindset.",
  },
  {
    year: "2024",
    title: "School Management System",
    phase: "Enterprise Software",
    description:
      "Developed a comprehensive school management platform managing 500+ students. First enterprise-scale application with role-based access and real-time sync.",
  },
  {
    year: "2025–Now",
    title: "Building Scalable Products",
    phase: "Current",
    description:
      "Expanding into SaaS products and complex business software. Working toward establishing sundramdotdev as a premium product engineering brand.",
    current: true,
  },
];

export function TimelineSection() {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <Section>
      <div className="mb-12 md:mb-16">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-bronze mb-4"
        >
          Journey
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-section-heading font-heading text-text-primary"
        >
          The Story So Far
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-text-secondary text-body leading-relaxed max-w-2xl"
        >
          From curiosity to craft — a journey of building software that solves real problems.
        </motion.p>
      </div>

      <div ref={ref} className="relative ml-4 md:ml-8">
        {/* Vertical Line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-border-subtle" />

        <div className="flex flex-col gap-10">
          {timeline.map((item, index) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative pl-8"
            >
              {/* Dot */}
              <div
                className={`absolute left-0 top-2 w-2.5 h-2.5 rounded-full -translate-x-[5px] ${
                  item.current
                    ? "bg-accent-bronze ring-4 ring-accent-bronze/20"
                    : "bg-accent-bronze/60"
                }`}
              />

              <div className="flex items-center gap-3 mb-2">
                <span className="font-numeric text-xs font-semibold text-accent-bronze">
                  {item.year}
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-[8px] bg-bg-elevated text-text-faint uppercase tracking-[0.1em] font-medium">
                  {item.phase}
                </span>
                {item.current && (
                  <span className="flex items-center gap-1.5 text-[10px] text-success font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                    Active
                  </span>
                )}
              </div>

              <h3 className="text-lg font-heading font-semibold text-text-primary mb-1.5">
                {item.title}
              </h3>

              <p className="text-caption text-text-secondary leading-relaxed max-w-lg">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
