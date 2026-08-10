import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ArrowUpRight, Quote } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Client Work",
  description: "Case studies from real client engagements — business software, mobile apps, and digital products.",
  alternates: { canonical: `${siteConfig.url}/client-work` },
};

const clientProjects = [
  {
    slug: "retail-inventory-system",
    title: "Retail Inventory Management System",
    client: "Local Retail Chain",
    industry: "Retail",
    duration: "3 months",
    year: "2024",
    description: "Built a comprehensive inventory and billing system that reduced stock discrepancies by 40%.",
    testimonial: "The system transformed how we manage our inventory. What used to take hours now takes minutes.",
  },
  {
    slug: "education-platform",
    title: "Education Management Platform",
    client: "Educational Institution",
    industry: "Education",
    duration: "4 months",
    year: "2024",
    description: "Developed a complete school management platform handling attendance, grades, and parent communication.",
    testimonial: "Finally, a system that actually understands how schools work.",
  },
];

export default function ClientWorkPage() {
  return (
    <Section>
      <SectionHeader
        label="Client Work"
        title="Case Studies"
        description="Detailed case studies from client engagements, showing the problems solved and results delivered."
        align="left"
      />

      <div className="grid grid-cols-1 gap-6">
        {clientProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/client-work/${project.slug}`}
            className="group block p-6 md:p-8 rounded-2xl border border-border-subtle bg-bg-surface hover:border-border-default transition-all duration-300 card-hover-glow"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 text-[11px] font-medium rounded-full bg-bg-elevated text-text-faint">
                    {project.industry}
                  </span>
                  <span className="text-xs text-text-faint">{project.year} · {project.duration}</span>
                </div>

                <h2 className="text-xl md:text-2xl font-heading font-semibold text-text-primary mb-2 group-hover:text-accent-bronze transition-colors">
                  {project.title}
                </h2>

                <p className="text-sm text-text-muted leading-relaxed mb-4 max-w-lg">
                  {project.description}
                </p>

                <div className="flex items-start gap-2 pt-4 border-t border-border-subtle">
                  <Quote size={12} className="text-accent-bronze/40 mt-1 flex-shrink-0" />
                  <p className="text-sm text-text-muted italic">&ldquo;{project.testimonial}&rdquo;</p>
                </div>
              </div>

              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-xl border border-border-subtle flex items-center justify-center text-text-faint group-hover:border-accent-bronze group-hover:text-accent-bronze transition-all">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
