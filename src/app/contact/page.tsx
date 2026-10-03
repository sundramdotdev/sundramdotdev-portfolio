import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ContactForm } from "@/features/contact/contact-form";
import { Mail, MapPin, Clock } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to discuss your project. I build mobile apps, business software, and digital products.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <div key="contact-page-root" className="contents">
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
              { "@type": "ListItem", position: 2, name: "Contact", item: `${siteConfig.url}/contact` },
            ],
          }),
        }}
      />
      <script
        key="contact-schema"
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: `Contact ${siteConfig.name}`,
            description: "Get in touch with Sundram Gupta for product engineering, mobile app development, or inquiries.",
            url: `${siteConfig.url}/contact`,
            mainEntity: {
              "@type": "Person",
              "@id": `${siteConfig.url}/#person`,
              name: siteConfig.name,
              email: siteConfig.email,
            },
          }),
        }}
      />
      <Section>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        {/* Left Column — Info */}
        <div className="lg:col-span-2">
          <SectionHeader
            label="Contact"
            title="Let's Talk"
            description="Have a project in mind? I'd love to hear about it. Fill out the form or reach out directly."
            align="left"
          />

          <div className="space-y-6 mt-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[12px] bg-bg-surface border border-border-subtle flex items-center justify-center flex-shrink-0">
                <Mail size={16} className="text-accent-bronze" />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-text-secondary hover:text-accent-bronze transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[12px] bg-bg-surface border border-border-subtle flex items-center justify-center flex-shrink-0">
                <MapPin size={16} className="text-accent-bronze" />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">Location</p>
                <p className="text-sm text-text-secondary">India (IST, UTC+5:30)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[12px] bg-bg-surface border border-border-subtle flex items-center justify-center flex-shrink-0">
                <Clock size={16} className="text-accent-bronze" />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">Response Time</p>
                <p className="text-sm text-text-secondary">Usually within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-10 pt-8 border-t border-border-subtle">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text-faint mb-4">
              Find me on
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-medium rounded-[10px] bg-bg-surface border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-strong transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column — Form */}
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </Section>
    </div>
  );
}
