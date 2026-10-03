import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Quote } from "lucide-react";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/constants";
import { notFound } from "next/navigation";

const clientData: Record<string, {
  title: string;
  client: string;
  industry: string;
  duration: string;
  year: string;
  description: string;
  businessProblem: string;
  requirements: string;
  developmentProcess: string;
  outcome: string;
  testimonial: { quote: string; author: string; role: string };
  tech: string[];
}> = {
  "retail-inventory-system": {
    title: "Retail Inventory Management System",
    client: "Local Retail Chain",
    industry: "Retail",
    duration: "3 months",
    year: "2024",
    description: "Complete inventory and billing management system for multi-location retail operations.",
    businessProblem: "The client operated multiple retail stores and managed inventory through spreadsheets and paper logs. This led to frequent stock discrepancies, slow billing processes, and difficulty tracking profitability across locations.",
    requirements: "Offline-first system that works without internet. Real-time inventory sync between locations. Fast POS billing. Supplier management. Daily/weekly/monthly reports. Works on phones and tablets.",
    developmentProcess: "Started with a 2-week discovery phase — visiting stores, observing workflows, and interviewing staff. Designed wireframes and got approval before writing code. Built the core inventory and billing modules first, then added reporting and supplier features. Weekly demos with the client for feedback.",
    outcome: "Reduced stock discrepancies by 40%. Billing time dropped from 5 minutes to under 1 minute. Store managers can now see real-time stock levels across all locations. Monthly reporting that used to take a full day now takes 10 minutes.",
    testimonial: {
      quote: "The system transformed how we manage our inventory. What used to take hours now takes minutes. Sundram really understood our workflow.",
      author: "Store Owner",
      role: "Business Owner",
    },
    tech: ["Flutter", "Dart", "SQLite", "Hive", "Provider", "PDF Generation"],
  },
  "education-platform": {
    title: "Education Management Platform",
    client: "Educational Institution",
    industry: "Education",
    duration: "4 months",
    year: "2024",
    description: "Unified school management platform for attendance, grades, parent communication, and fee management.",
    businessProblem: "The school was using separate systems for attendance, grading, parent communication, and fee management. Data was siloed, parents had no visibility into their child's progress, and administrative staff spent excessive time on manual data entry.",
    requirements: "Role-based access for teachers, students, parents, and admins. Real-time attendance marking. Grade management with report cards. Parent notification system. Fee tracking and payment history. Works on mobile devices.",
    developmentProcess: "Conducted requirements workshops with teachers, administrators, and parents. Built role-specific prototypes for each user type. Developed in 2-week sprints with demo sessions after each. Piloted with one class before school-wide rollout.",
    outcome: "Deployed across the entire school managing 500+ students. Administrative overhead reduced by 60%. Parent satisfaction with school communication improved by 80%. Teachers save an average of 2 hours per week on attendance and grading.",
    testimonial: {
      quote: "Finally, a system that actually understands how schools work. The team delivered exactly what we needed, and the parents love it.",
      author: "School Administrator",
      role: "Principal",
    },
    tech: ["Flutter", "Firebase", "Cloud Functions", "Firestore", "Firebase Auth", "FCM"],
  },
};

export async function generateStaticParams() {
  return Object.keys(clientData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = clientData[slug];
  if (!project) return {};

  return {
    title: `${project.title} — Client Work`,
    description: project.description,
    alternates: { canonical: `${siteConfig.url}/client-work/${slug}` },
  };
}

export default async function ClientWorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = clientData[slug];

  if (!project) notFound();

  return (
    <div key="client-work-detail-root" className="contents">
      <script
        key="breadcrumb-schema"
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
              { "@type": "ListItem", position: 2, name: "Client Work", item: `${siteConfig.url}/client-work` },
              { "@type": "ListItem", position: 3, name: project.title, item: `${siteConfig.url}/client-work/${slug}` },
            ],
          }),
        }}
      />
      <script
        key="article-schema"
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: project.title,
            description: project.description,
            author: {
              "@type": "Person",
              "@id": `${siteConfig.url}/#person`,
              name: siteConfig.name,
              url: siteConfig.url,
            },
            publisher: {
              "@type": "Person",
              "@id": `${siteConfig.url}/#person`,
              name: siteConfig.name,
            },
            mainEntityOfPage: `${siteConfig.url}/client-work/${slug}`,
          }),
        }}
      />
      <Section>
        <Link
          href="/client-work"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          All Client Work
        </Link>

      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-3 py-1.5 text-xs font-medium rounded-[10px] bg-bg-elevated text-text-faint">
            {project.industry}
          </span>
          <span className="font-numeric text-xs font-semibold text-text-faint">
            {project.year}
          </span>
          <span className="text-xs text-text-faint uppercase tracking-[0.1em] font-medium">
            {project.duration}
          </span>
        </div>

        <h1 className="text-hero font-heading text-text-primary mb-6">
          {project.title}
        </h1>
        
        <p className="text-subheading text-text-secondary leading-relaxed max-w-2xl">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-8">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1.5 text-xs font-medium rounded-[10px] bg-bg-surface border border-border-subtle text-text-muted">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-3xl space-y-16 mt-16">
        <div>
          <h2 className="text-section-heading font-heading text-text-primary mb-4">Business Problem</h2>
          <p className="text-body text-text-secondary leading-relaxed">{project.businessProblem}</p>
        </div>
        <div>
          <h2 className="text-section-heading font-heading text-text-primary mb-4">Requirements</h2>
          <p className="text-body text-text-secondary leading-relaxed">{project.requirements}</p>
        </div>
        <div>
          <h2 className="text-section-heading font-heading text-text-primary mb-4">Development Process</h2>
          <p className="text-body text-text-secondary leading-relaxed">{project.developmentProcess}</p>
        </div>
        <div>
          <h2 className="text-section-heading font-heading text-text-primary mb-4">Outcome</h2>
          <p className="text-body text-text-secondary leading-relaxed">{project.outcome}</p>
        </div>

        {/* Testimonial */}
        <div className="p-8 md:p-10 rounded-[18px] border border-border-subtle bg-bg-surface">
          <Quote size={24} className="text-accent-bronze/40 mb-6" />
          <p className="text-lg md:text-xl font-heading text-text-primary italic leading-relaxed mb-6">
            &ldquo;{project.testimonial.quote}&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[10px] bg-bg-elevated flex items-center justify-center">
              <span className="font-heading font-semibold text-text-secondary">
                {project.testimonial.author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-text-primary">
                {project.testimonial.author}
              </p>
              <p className="text-xs text-text-faint uppercase tracking-[0.1em] font-medium mt-0.5">
                {project.testimonial.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
    </div>
  );
}
