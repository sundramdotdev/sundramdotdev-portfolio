"use client";

import { motion } from "motion/react";
import { useInView } from "@/hooks/use-in-view";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

const values = [
  {
    number: "01",
    title: "Problem First",
    description:
      "Every project starts with understanding the problem. Great software is a solution, not a technology showcase.",
  },
  {
    number: "02",
    title: "Ship & Iterate",
    description:
      "Get working software in front of users quickly, then improve based on real feedback.",
  },
  {
    number: "03",
    title: "Craft & Quality",
    description:
      "Every pixel, every interaction matters. Polished, maintainable software is the standard.",
  },
  {
    number: "04",
    title: "Transparent Communication",
    description:
      "Clear updates, honest timelines, no surprises. Every client relationship is a partnership.",
  },
];

export function ValuesSection() {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <Section className="bg-bg-surface/20">
      <SectionHeader
        label="Principles"
        title="Engineering Philosophy"
        align="left"
      />

      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex gap-4 p-5 rounded-[18px] border border-border-subtle bg-bg-surface"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-[12px] bg-accent-bronze/10 flex items-center justify-center">
              <span className="font-numeric text-xs font-semibold text-accent-bronze">
                {value.number}
              </span>
            </div>
            <div>
              <h3 className="text-caption font-heading font-semibold text-text-primary mb-1">
                {value.title}
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                {value.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
