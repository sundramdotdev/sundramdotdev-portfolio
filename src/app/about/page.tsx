import type { Metadata } from "next";
import { TimelineSection } from "@/features/about/timeline-section";
import { SkillsSection } from "@/features/about/skills-section";
import { ValuesSection } from "@/features/about/values-section";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name} (sundramdotdev) — Software Developer & Product Builder specializing in Flutter, mobile apps, React, and digital products.`,
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: `About — ${siteConfig.brand}`,
    description: `Learn about ${siteConfig.name} (sundramdotdev) — Software Developer & Product Builder.`,
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div key="about-page-root" className="contents">
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
              { "@type": "ListItem", position: 2, name: "About", item: `${siteConfig.url}/about` },
            ],
          }),
        }}
      />
      <script
        key="profile-page-schema"
        id="profile-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "@id": `${siteConfig.url}/about#profile`,
            url: `${siteConfig.url}/about`,
            name: `${siteConfig.name} (${siteConfig.brand}) — About & Profile`,
            isPartOf: {
              "@id": `${siteConfig.url}/#website`,
            },
            about: {
              "@id": `${siteConfig.url}/#person`,
            },
            mainEntity: {
              "@id": `${siteConfig.url}/#person`,
            },
          }),
        }}
      />

      {/* Timeline leads — no paragraphs of intro */}
      <TimelineSection />
      <ValuesSection />
      <SkillsSection />
    </div>
  );
}
