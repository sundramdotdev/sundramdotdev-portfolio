import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.brand}.`,
  alternates: { canonical: `${siteConfig.url}/terms` },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto prose-custom">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-text-primary tracking-tight mb-8">
          Terms of Service
        </h1>

        <p className="text-sm text-text-faint mb-8">Last updated: January 1, 2025</p>

        <h2 className="text-xl font-heading font-semibold text-text-primary mt-8 mb-3">Agreement</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          By accessing and using {siteConfig.brand}, you agree to be bound by these terms of service. If you do not agree with any part of these terms, please do not use this website.
        </p>

        <h2 className="text-xl font-heading font-semibold text-text-primary mt-8 mb-3">Intellectual Property</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          All content on this website, including text, graphics, logos, code, and design elements, is the intellectual property of {siteConfig.name} unless otherwise stated. You may not reproduce, distribute, or create derivative works without explicit written permission.
        </p>

        <h2 className="text-xl font-heading font-semibold text-text-primary mt-8 mb-3">Use of Content</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Blog articles and educational content may be shared with proper attribution and a link back to the original article. Code snippets shared in blog posts are provided as-is for educational purposes.
        </p>

        <h2 className="text-xl font-heading font-semibold text-text-primary mt-8 mb-3">Services</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Information about services on this website is for informational purposes. Actual project engagements are governed by separate agreements between {siteConfig.name} and the client.
        </p>

        <h2 className="text-xl font-heading font-semibold text-text-primary mt-8 mb-3">Limitation of Liability</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          This website is provided &ldquo;as is&rdquo; without warranties of any kind. {siteConfig.name} shall not be liable for any damages arising from the use of this website.
        </p>

        <h2 className="text-xl font-heading font-semibold text-text-primary mt-8 mb-3">Contact</h2>
        <p className="text-text-muted leading-relaxed">
          For questions about these terms, contact us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-accent-bronze hover:text-accent-bronze-light">
            {siteConfig.email}
          </a>.
        </p>
      </div>
    </Section>
  );
}
