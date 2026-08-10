import type { Metadata } from "next";
import { ProjectGrid } from "@/features/projects/project-grid";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of mobile apps, business software, and SaaS products built with Flutter and modern technologies.",
  alternates: { canonical: `${siteConfig.url}/projects` },
  openGraph: {
    title: `Projects — ${siteConfig.brand}`,
    description: "Mobile apps, business software, and SaaS products.",
    url: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsPage() {
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
            ],
          }),
        }}
      />

      <section className="py-20 md:py-28 mx-auto max-w-[var(--content-max-width)] px-6 md:px-10 lg:px-16">
        <SectionHeader
          label="Portfolio"
          title="Projects I've Built"
          description="A collection of mobile apps, business software, and digital products — each solving a real problem."
          align="left"
        />

        <ProjectGrid />
      </section>
    </>
  );
}
