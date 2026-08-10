import type { Metadata } from "next";
import { TimelineSection } from "@/features/about/timeline-section";
import { SkillsSection } from "@/features/about/skills-section";
import { ValuesSection } from "@/features/about/values-section";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name} — a product engineer building production-grade mobile apps and business software.`,
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: `About — ${siteConfig.brand}`,
    description: `Learn about ${siteConfig.name} — product engineer and software builder.`,
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
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
              { "@type": "ListItem", position: 2, name: "About", item: `${siteConfig.url}/about` },
            ],
          }),
        }}
      />

      {/* Timeline leads — no paragraphs of intro */}
      <TimelineSection />
      <ValuesSection />
      <SkillsSection />
    </>
  );
}
