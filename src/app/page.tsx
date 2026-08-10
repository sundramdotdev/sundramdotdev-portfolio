import { HeroSection } from "@/features/home/hero-section";
import { TrustSection } from "@/features/home/trust-section";
import { FeaturedProjectsSection } from "@/features/home/featured-projects-section";
import { ClientWorkSection } from "@/features/home/client-work-section";
import { MeetSection } from "@/features/home/meet-section";
import { BlogSection } from "@/features/home/blog-section";
import { ContactCtaSection } from "@/features/home/contact-cta-section";
import { siteConfig } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* JSON-LD: ProfessionalService */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: siteConfig.brand,
            url: siteConfig.url,
            description: siteConfig.description,
            provider: {
              "@type": "Person",
              name: siteConfig.name,
            },
            serviceType: [
              "Mobile App Development",
              "Flutter Development",
              "MVP Development",
              "Business Software Development",
              "SaaS Product Development",
            ],
            areaServed: "Worldwide",
            priceRange: "$$",
          }),
        }}
      />

      {/* 1. Vision — Hero */}
      <HeroSection />

      {/* 2. Live Metrics */}
      <TrustSection />

      {/* 3. Featured Products — Apple-style storytelling */}
      <FeaturedProjectsSection />

      {/* 4. Client Success */}
      <ClientWorkSection />

      {/* 5. Meet Sundram — Trust before personality */}
      <MeetSection />

      {/* 6. Blog */}
      <BlogSection />

      {/* 7. Contact CTA */}
      <ContactCtaSection />
    </>
  );
}
