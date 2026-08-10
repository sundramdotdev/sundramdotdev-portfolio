"use client";

import { motion } from "motion/react";
import { useInView } from "@/hooks/use-in-view";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { services } from "@/lib/constants";
import {
  Smartphone,
  Layers,
  Rocket,
  Briefcase,
  Cloud,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  smartphone: Smartphone,
  layers: Layers,
  rocket: Rocket,
  briefcase: Briefcase,
  cloud: Cloud,
};

export function ServicesSection() {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <Section id="services" className="bg-bg-surface/30">
      <SectionHeader
        label="Services"
        title="What I Can Build For You"
        description="From mobile apps to full business software — I build products that work, scale, and deliver value."
      />

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group p-6 md:p-8 rounded-2xl border border-border-subtle bg-bg-surface hover:border-border-default hover:bg-bg-elevated/50 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-bg-elevated flex items-center justify-center mb-5 group-hover:bg-accent-bronze/10 transition-colors duration-300">
                {Icon && (
                  <Icon
                    size={20}
                    className="text-accent-bronze"
                  />
                )}
              </div>

              <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
