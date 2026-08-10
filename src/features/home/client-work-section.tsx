import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const clientProjects = [
  {
    slug: "retail-inventory-system",
    title: "Retail Inventory Management System",
    client: "Local Retail Chain",
    industry: "Retail",
    challenge: "Manual inventory tracking causing 40%+ stock discrepancies and slow billing.",
    outcome: "40% reduction in stock errors. Billing time cut from 5 min to under 1 min.",
    description:
      "Built a comprehensive inventory and billing system that transformed daily operations across 3 retail locations.",
    testimonial: {
      quote:
        "The system transformed how we manage our inventory. What used to take hours now takes minutes.",
      author: "Store Owner",
    },
  },
  {
    slug: "education-platform",
    title: "Education Management Platform",
    client: "Educational Institution",
    industry: "Education",
    challenge: "Disconnected systems for attendance, grades, communication, and fee management.",
    outcome: "60% less administrative overhead. 80% improvement in parent satisfaction.",
    description:
      "Developed a unified school management platform serving 500+ students with role-based access for all stakeholders.",
    testimonial: {
      quote:
        "Finally, a system that actually understands how schools work. The team delivered exactly what we needed.",
      author: "School Administrator",
    },
  },
];

export function ClientWorkSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-bg-surface/20">
      <div className="mx-auto max-w-[var(--content-max-width)] px-6 md:px-10 lg:px-16">
        <SectionHeader
          label="Client Success"
          title="Trusted by Businesses"
          description="Real projects solving real business problems. Professional case studies from client engagements."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {clientProjects.map((project, index) => (
            <ScrollReveal
              key={project.slug}
              delay={index * 0.1}
              y={24}
              duration={0.7}
            >
              <Link
                href={`/client-work/${project.slug}`}
                className="group flex flex-col h-full p-6 md:p-8 rounded-[18px] border border-border-subtle bg-bg-surface hover:border-border-strong hover:-translate-y-1 transition-all duration-400 card-hover-glow"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1.5 text-xs font-medium rounded-[10px] bg-bg-elevated text-text-faint">
                    {project.industry}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-text-faint group-hover:text-accent-bronze transition-colors"
                  />
                </div>

                <h3 className="text-xl font-heading font-semibold text-text-primary mb-3 group-hover:text-accent-bronze transition-colors">
                  {project.title}
                </h3>

                <p className="text-caption text-text-secondary leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Challenge & Outcome */}
                <div className="space-y-3 mb-6 flex-1">
                  <div className="p-3 rounded-[10px] bg-bg-primary/50">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text-faint mb-1">
                      Challenge
                    </p>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  <div className="p-3 rounded-[10px] bg-bg-primary/50">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-success mb-1">
                      Outcome
                    </p>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="pt-5 border-t border-border-subtle">
                  <p className="text-caption text-text-secondary italic leading-relaxed">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <p className="mt-2 text-xs text-text-faint">
                    — {project.testimonial.author}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
