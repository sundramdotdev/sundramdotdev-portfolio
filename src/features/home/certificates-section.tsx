"use client";

import { motion } from "motion/react";
import { useInView } from "@/hooks/use-in-view";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Flutter Advanced Development",
    issuer: "Udemy",
    date: "2024",
    category: "Development",
  },
  {
    title: "Google UX Design Certificate",
    issuer: "Google / Coursera",
    date: "2024",
    category: "Design",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    category: "Cloud",
  },
];

export function CertificatesSection() {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <Section id="certificates">
      <SectionHeader
        label="Certificates"
        title="Continuous Learning"
        description="Committed to staying current with industry standards and best practices."
      />

      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group p-5 rounded-xl border border-border-subtle bg-bg-surface hover:border-border-default transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-accent-bronze/10 flex items-center justify-center">
                <Award size={16} className="text-accent-bronze" />
              </div>
              <span className="text-xs text-text-faint">{cert.date}</span>
            </div>

            <h3 className="text-sm font-heading font-semibold text-text-primary mb-1">
              {cert.title}
            </h3>

            <p className="text-xs text-text-muted">{cert.issuer}</p>

            <div className="mt-3 pt-3 border-t border-border-subtle">
              <span className="px-2 py-0.5 text-[10px] font-medium rounded bg-bg-elevated text-text-faint uppercase tracking-wider">
                {cert.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
