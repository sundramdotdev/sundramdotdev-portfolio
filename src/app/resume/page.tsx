import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { MapPin, Mail, Globe } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { ResumeActions } from "@/features/resume/resume-actions";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${siteConfig.name} — Product Engineer & Software Builder.`,
  alternates: { canonical: `${siteConfig.url}/resume` },
};

export default function ResumePage() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-16">
          <div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-text-primary tracking-tight">
              {siteConfig.name}
            </h1>
            <p className="mt-2 text-lg text-accent-bronze font-medium">
              Product Engineer & Software Builder
            </p>
            <div className="flex flex-wrap items-center gap-5 mt-4 text-sm text-text-secondary">
              <span className="flex items-center gap-2"><MapPin size={14} /> India</span>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-accent-bronze transition-colors">
                <Mail size={14} /> {siteConfig.email}
              </a>
              <a href={siteConfig.url} className="flex items-center gap-2 hover:text-accent-bronze transition-colors">
                <Globe size={14} /> sundram.dev
              </a>
            </div>
          </div>

          <ResumeActions />
        </div>

        {/* Summary */}
        <div className="mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-bronze mb-4">Summary</h2>
          <p className="text-body text-text-secondary leading-relaxed">
            Self-taught product engineer with experience building full-stack applications,
            business software, and digital products. Specializing in cross-platform mobile development,
            inventory management systems, and scalable product architecture. Passionate about solving real business
            problems through clean, maintainable code and premium user experiences.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-faint mb-5">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 rounded-[14px] bg-bg-surface border border-border-subtle">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-text-primary mb-2">Languages & Frameworks</p>
              <p className="text-caption text-text-secondary">Dart, Flutter, TypeScript, JavaScript, React, Next.js, Node.js</p>
            </div>
            <div className="p-4 rounded-[14px] bg-bg-surface border border-border-subtle">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-text-primary mb-2">Backend & Database</p>
              <p className="text-caption text-text-secondary">Firebase, Supabase, PostgreSQL, MongoDB, SQLite, REST APIs</p>
            </div>
            <div className="p-4 rounded-[14px] bg-bg-surface border border-border-subtle">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-text-primary mb-2">Tools & Platforms</p>
              <p className="text-caption text-text-secondary">Git, GitHub, VS Code, Figma, Vercel, Docker, Postman</p>
            </div>
            <div className="p-4 rounded-[14px] bg-bg-surface border border-border-subtle">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-text-primary mb-2">Specializations</p>
              <p className="text-caption text-text-secondary">Cross-platform mobile, offline-first apps, inventory systems, SaaS</p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-faint mb-6">Selected Work</h2>
          <div className="space-y-8">
            {[
              { title: "RetailOS", role: "Product Engineer", period: "2024", desc: "Built comprehensive offline-first retail inventory and billing management system. Deployed to 3 retail locations, reducing stock discrepancies by 40% and billing time by 80%." },
              { title: "SpendWise", role: "Creator", period: "2024", desc: "Designed and developed personal expense tracking app with smart categorization and analytics. Scaled to 500+ downloads with a 4.5-star rating." },
              { title: "School Management System", role: "Lead Engineer", period: "2024", desc: "Developed unified school operations platform managing 500+ students across attendance, grades, and parent communication with real-time sync." },
              { title: "PlayMate", role: "Creator", period: "2023", desc: "Built social sports platform for player matching and match scheduling. Grew active community to 200+ players." },
            ].map((project) => (
              <div key={project.title} className="pb-8 border-b border-border-subtle last:border-0 last:pb-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-text-primary">{project.title}</h3>
                    <p className="text-sm font-medium text-accent-bronze mt-1">{project.role}</p>
                  </div>
                  <span className="font-numeric text-xs font-medium text-text-faint bg-bg-elevated px-2 py-1 rounded-[6px]">{project.period}</span>
                </div>
                <p className="mt-3 text-caption text-text-secondary leading-relaxed">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-faint mb-5">Education & Certifications</h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-[14px] bg-bg-surface border border-border-subtle">
              <div>
                <p className="text-sm font-semibold text-text-primary">Google UX Design Professional Certificate</p>
                <p className="text-xs text-text-secondary mt-1">Google / Coursera</p>
              </div>
              <span className="font-numeric text-xs font-medium text-text-faint mt-2 sm:mt-0">2024</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-[14px] bg-bg-surface border border-border-subtle">
              <div>
                <p className="text-sm font-semibold text-text-primary">Flutter Advanced Development</p>
                <p className="text-xs text-text-secondary mt-1">Udemy</p>
              </div>
              <span className="font-numeric text-xs font-medium text-text-faint mt-2 sm:mt-0">2024</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-[14px] bg-bg-surface border border-border-subtle">
              <div>
                <p className="text-sm font-semibold text-text-primary">AWS Cloud Practitioner</p>
                <p className="text-xs text-text-secondary mt-1">Amazon Web Services</p>
              </div>
              <span className="font-numeric text-xs font-medium text-text-faint mt-2 sm:mt-0">2024</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
