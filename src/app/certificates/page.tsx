import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Award } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Certificates",
  description: "Professional certifications and courses completed in Flutter, UX design, cloud computing, and more.",
  alternates: { canonical: `${siteConfig.url}/certificates` },
};

const certificates = [
  { title: "Flutter Advanced Development", issuer: "Udemy", date: "2024-08", category: "Development", description: "Advanced Flutter concepts including state management, animations, and custom widgets." },
  { title: "Google UX Design Professional Certificate", issuer: "Google / Coursera", date: "2024-06", category: "Design", description: "Comprehensive UX design program covering research, wireframing, prototyping, and usability testing." },
  { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "2024-04", category: "Cloud", description: "Foundational understanding of AWS cloud services, architecture, and deployment." },
  { title: "Dart Programming Fundamentals", issuer: "Udemy", date: "2023-10", category: "Development", description: "Deep dive into Dart language fundamentals, async programming, and OOP principles." },
  { title: "Firebase for Flutter Developers", issuer: "Google / Coursera", date: "2023-08", category: "Development", description: "Firebase integration with Flutter — authentication, Firestore, Cloud Functions, and hosting." },
  { title: "UI/UX Design Fundamentals", issuer: "Google / Coursera", date: "2023-05", category: "Design", description: "Core design principles, typography, color theory, and interface design best practices." },
];

export default function CertificatesPage() {
  return (
    <div key="certificates-page-root" className="contents">
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
              { "@type": "ListItem", position: 2, name: "Certificates", item: `${siteConfig.url}/certificates` },
            ],
          }),
        }}
      />
      <script
        key="itemlist-schema"
        id="itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Certifications earned by Sundram Gupta",
            itemListElement: certificates.map((cert, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "EducationalOccupationalCredential",
                name: cert.title,
                credentialCategory: "Certificate",
                recognizedBy: {
                  "@type": "Organization",
                  name: cert.issuer,
                },
              },
            })),
          }),
        }}
      />
      <Section>
      <SectionHeader
        label="Certificates"
        title="Certifications & Courses"
        description="Committed to continuous learning. Here are some of the certifications I've earned."
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificates.map((cert) => (
          <div
            key={cert.title}
            className="group p-6 rounded-2xl border border-border-subtle bg-bg-surface hover:border-border-default transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent-bronze/10 flex items-center justify-center">
                <Award size={18} className="text-accent-bronze" />
              </div>
              <span className="px-2 py-0.5 text-[10px] font-medium rounded bg-bg-elevated text-text-faint uppercase tracking-wider">
                {cert.category}
              </span>
            </div>

            <h3 className="text-base font-heading font-semibold text-text-primary mb-1.5 line-clamp-2">
              {cert.title}
            </h3>

            <p className="text-xs text-accent-bronze mb-2">{cert.issuer}</p>

            <p className="text-sm text-text-muted leading-relaxed line-clamp-2 mb-4">
              {cert.description}
            </p>

            <div className="pt-3 border-t border-border-subtle">
              <time className="text-xs text-text-faint">
                {new Date(cert.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </time>
            </div>
          </div>
        ))}
      </div>
    </Section>
    </div>
  );
}
