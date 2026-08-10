import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/constants";
import { notFound } from "next/navigation";

// Static project data (will be replaced by MDX content system)
const projectsData: Record<string, {
  title: string;
  description: string;
  category: string;
  tech: string[];
  problem: string;
  solution: string;
  architecture: string;
  challenges: string;
  results: string;
}> = {
  retailos: {
    title: "RetailOS",
    description: "Complete retail inventory and billing management system.",
    category: "Business Software",
    tech: ["Flutter", "Dart", "SQLite", "Hive", "Provider"],
    problem: "Small retail businesses were managing inventory manually with spreadsheets and paper logs, leading to stock discrepancies, slow billing, and lost revenue.",
    solution: "Built a comprehensive offline-first retail management system with real-time inventory tracking, POS billing, supplier management, and detailed analytics dashboard.",
    architecture: "Clean architecture with Provider state management. SQLite for relational data, Hive for fast key-value lookups. Modular feature-based folder structure.",
    challenges: "Ensuring reliable offline-first sync, handling complex inventory calculations with batch pricing, and building a responsive UI that works on both phones and tablets.",
    results: "Deployed to 3 retail stores. Reduced stock discrepancies by 40%. Billing time reduced from 5 minutes to under 1 minute per transaction.",
  },
  spendwise: {
    title: "SpendWise",
    description: "Personal expense tracking app with budgets and analytics.",
    category: "Mobile Apps",
    tech: ["Flutter", "Firebase", "FL Chart", "Riverpod"],
    problem: "People struggle to track daily expenses consistently. Existing apps are either too complex or lack meaningful insights.",
    solution: "Created a clean, intuitive expense tracker with smart categorization, budget limits, recurring expense tracking, and visual analytics.",
    architecture: "Feature-first architecture with Riverpod for state management. Firebase for auth and cloud backup. Local SQLite for offline-first data.",
    challenges: "Designing a friction-free expense entry flow, building accurate budget calculations across different time periods, and creating meaningful analytics visualizations.",
    results: "500+ downloads. 4.5-star rating. Users report 30% better awareness of spending habits within the first month.",
  },
  playmate: {
    title: "PlayMate",
    description: "Social sports platform for finding players and organizing matches.",
    category: "Mobile Apps",
    tech: ["Flutter", "Node.js", "MongoDB", "Socket.io"],
    problem: "Sports enthusiasts struggle to find players for pickup games, book courts, and organize regular matches in their area.",
    solution: "Built a social sports platform with player matching, real-time court availability, match scheduling, and team management features.",
    architecture: "Flutter frontend with Node.js/Express backend. MongoDB for flexible data modeling. Socket.io for real-time match updates.",
    challenges: "Building a reliable matching algorithm, handling real-time updates for live matches, and designing an intuitive UX for organizing group activities.",
    results: "Active community of 200+ players. Average of 15 matches organized per week through the platform.",
  },
  "student-companion": {
    title: "Student Companion",
    description: "Academic productivity app for students.",
    category: "Mobile Apps",
    tech: ["Flutter", "SQLite", "Local Notifications", "Provider"],
    problem: "Students lack a unified tool for managing their academic schedule, notes, assignments, and grade tracking in one place.",
    solution: "Built an all-in-one academic companion with class schedule management, note-taking, assignment tracking with reminders, and GPA calculator.",
    architecture: "Simple clean architecture with Provider. SQLite for all local data. Local notifications for reminders and deadlines.",
    challenges: "Designing a non-overwhelming UX for feature-rich functionality, implementing a flexible schedule system, and reliable notification scheduling.",
    results: "Used by students across 5 colleges. Most-used feature: assignment deadline reminders with 95% notification delivery rate.",
  },
  "school-management-system": {
    title: "School Management System",
    description: "Comprehensive school management software.",
    category: "Business Software",
    tech: ["Flutter", "Firebase", "Cloud Functions", "Firestore"],
    problem: "Schools manage attendance, grades, parent communication, and fee management through disconnected systems, leading to inefficiency and data silos.",
    solution: "Developed a unified school management platform with role-based access for teachers, students, parents, and administrators.",
    architecture: "Flutter multi-platform app with Firebase backend. Cloud Functions for automated processes. Firestore for real-time data sync across all user roles.",
    challenges: "Designing a role-based permission system, handling real-time sync for attendance across multiple classrooms, and building an offline-capable grading system.",
    results: "Deployed in 2 schools. Managing 500+ students. Reduced administrative overhead by 60%. Parent satisfaction with communication improved by 80%.",
  },
};

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug];
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `${siteConfig.url}/projects/${slug}` },
    openGraph: {
      title: `${project.title} — ${siteConfig.brand}`,
      description: project.description,
      url: `${siteConfig.url}/projects/${slug}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) notFound();

  const sections = [
    { title: "The Problem", content: project.problem },
    { title: "The Solution", content: project.solution },
    { title: "Architecture", content: project.architecture },
    { title: "Challenges", content: project.challenges },
    { title: "Results", content: project.results },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
              { "@type": "ListItem", position: 2, name: "Projects", item: `${siteConfig.url}/projects` },
              { "@type": "ListItem", position: 3, name: project.title, item: `${siteConfig.url}/projects/${slug}` },
            ],
          }),
        }}
      />

      <Section>
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          All Products
        </Link>

        {/* Header */}
        <div className="mb-16">
          <span className="inline-block px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] rounded-[10px] bg-bg-elevated text-text-faint mb-6">
            {project.category}
          </span>
          <h1 className="text-hero font-heading text-text-primary tracking-tight mb-6">
            {project.title}
          </h1>
          <p className="text-subheading text-text-secondary max-w-2xl leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 text-xs font-medium rounded-[10px] bg-bg-surface border border-border-subtle text-text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Case Study Sections */}
        <div className="max-w-3xl space-y-16">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-section-heading font-heading text-text-primary mb-4">
                {section.title}
              </h2>
              <p className="text-body text-text-secondary leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
