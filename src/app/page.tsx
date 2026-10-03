import { CinematicPortfolio } from "@/features/3d/cinematic-portfolio";
import { siteConfig } from "@/lib/constants";
import { faqItems } from "@/features/seo/faq-data";

export default function HomePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#service`,
    name: `${siteConfig.name} — ${siteConfig.brand}`,
    url: siteConfig.url,
    description: siteConfig.description,
    provider: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    serviceType: [
      "Mobile App Development",
      "Flutter Development",
      "MVP Development",
      "Business Software Development",
      "Full-Stack Web Development",
      "SaaS Product Development",
    ],
    areaServed: "Worldwide",
    priceRange: "$$",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div key="homepage-root" className="contents">
      {/* JSON-LD: ProfessionalService */}
      <script
        key="jsonld-service"
        id="jsonld-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* JSON-LD: FAQPage */}
      <script
        key="jsonld-faq"
        id="jsonld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Cinematic Interactive 3D Portfolio Journey */}
      <CinematicPortfolio key="cinematic-portfolio" />
    </div>
  );
}
