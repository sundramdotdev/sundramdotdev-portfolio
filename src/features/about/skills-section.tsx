"use client";

import { motion } from "motion/react";
import { useInView } from "@/hooks/use-in-view";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Dart", "Flutter", "TypeScript", "JavaScript", "React", "Next.js", "Node.js"],
  },
  {
    title: "Mobile Development",
    skills: ["Flutter", "Android", "iOS", "Cross-Platform", "App Store", "Play Store", "Push Notifications"],
  },
  {
    title: "Backend & Database",
    skills: ["Firebase", "Supabase", "PostgreSQL", "MongoDB", "SQLite", "REST APIs", "Cloud Functions"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "Docker", "Postman"],
  },
  {
    title: "Design & UX",
    skills: ["UI Design", "UX Research", "Figma", "Prototyping", "Design Systems", "Responsive Design"],
  },
  {
    title: "Business & Product",
    skills: ["Product Strategy", "User Research", "MVP Development", "Project Management", "Client Communication"],
  },
];

export function SkillsSection() {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <Section>
      <SectionHeader
        label="Skills"
        title="Technologies & Tools"
        align="left"
      />

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: catIndex * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="p-5 rounded-[18px] border border-border-subtle bg-bg-surface"
          >
            <h3 className="text-caption font-heading font-semibold text-text-primary mb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs font-medium rounded-[8px] bg-bg-elevated text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
