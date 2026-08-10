import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.brand}.`,
  alternates: { canonical: `${siteConfig.url}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto prose-custom">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-text-primary tracking-tight mb-8">
          Privacy Policy
        </h1>

        <p className="text-sm text-text-faint mb-8">Last updated: January 1, 2025</p>

        <h2 className="text-xl font-heading font-semibold text-text-primary mt-8 mb-3">Information We Collect</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          When you visit {siteConfig.brand}, we may collect certain information automatically, including your IP address, browser type, operating system, and pages visited. This information is collected through Vercel Analytics and Speed Insights for the sole purpose of improving the website experience.
        </p>

        <h2 className="text-xl font-heading font-semibold text-text-primary mt-8 mb-3">Contact Form</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          When you submit a message through our contact form, we collect your name, email address, and message content. This information is used solely to respond to your inquiry and is not shared with third parties.
        </p>

        <h2 className="text-xl font-heading font-semibold text-text-primary mt-8 mb-3">Cookies</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          This website uses minimal cookies necessary for basic functionality. We do not use tracking cookies or third-party advertising cookies.
        </p>

        <h2 className="text-xl font-heading font-semibold text-text-primary mt-8 mb-3">Analytics</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          We use Vercel Analytics and Speed Insights, which are privacy-focused analytics tools that do not use cookies and do not collect personally identifiable information.
        </p>

        <h2 className="text-xl font-heading font-semibold text-text-primary mt-8 mb-3">Data Retention</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Contact form submissions are retained only as long as necessary to respond to your inquiry. Analytics data is retained according to Vercel&apos;s data retention policies.
        </p>

        <h2 className="text-xl font-heading font-semibold text-text-primary mt-8 mb-3">Your Rights</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          You have the right to request access to, correction of, or deletion of your personal data. Contact us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-accent-bronze hover:text-accent-bronze-light">
            {siteConfig.email}
          </a>{" "}
          for any privacy-related requests.
        </p>

        <h2 className="text-xl font-heading font-semibold text-text-primary mt-8 mb-3">Changes</h2>
        <p className="text-text-muted leading-relaxed">
          This privacy policy may be updated from time to time. Any changes will be posted on this page with an updated revision date.
        </p>
      </div>
    </Section>
  );
}
