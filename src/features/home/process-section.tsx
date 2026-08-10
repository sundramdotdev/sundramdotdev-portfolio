"use client";

import { motion } from "motion/react";
import { useInView } from "@/hooks/use-in-view";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { processSteps } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <Section id="process">
      <SectionHeader
        label="Process"
        title="How I Work"
        description="A structured approach that keeps projects on track and delivers results predictably."
      />

      <div ref={ref} className="relative">
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-8 left-[calc(10%+20px)] right-[calc(10%+20px)] h-px bg-border-subtle" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative text-center lg:text-left"
            >
              {/* Step Number */}
              <div className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-bg-surface border border-border-default text-xs font-bold text-accent-bronze mb-4 z-10">
                {step.step}
              </div>

              <h3 className="text-base font-heading font-semibold text-text-primary mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-text-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
