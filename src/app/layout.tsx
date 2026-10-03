import type { Metadata } from "next";
import { geistSans, geistMono, inter, ibmPlexMono } from "@/lib/fonts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ClientProviders } from "@/components/ui/client-providers";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { siteConfig, keywords } from "@/lib/constants";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.brand}`,
  },
  description: siteConfig.description,
  keywords: keywords as unknown as string[],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.brand,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@sundramdevv",
  },
  alternates: {
    canonical: siteConfig.url,
    types: {
      "application/rss+xml": `${siteConfig.url}/feed.xml`,
    },
  },
  icons: {
    icon: "/logo/favicon.png",
    apple: "/logo/logo-icon.png",
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      alternateName: ["sundramdotdev", "Sundram"],
      url: siteConfig.url,
      image: `${siteConfig.url}/og-image.png`,
      jobTitle: "Software Engineer & Product Builder",
      description: siteConfig.description,
      sameAs: [
        "https://github.com/sundramdotdev",
        "https://linkedin.com/in/sundramdotdev",
        "https://www.instagram.com/devsundram_/",
        "https://x.com/sundramdevv",
        "https://youtube.com/@sundramdotdev",
      ],
      knowsAbout: [
        "Software Engineering",
        "Product Engineering",
        "Flutter",
        "Mobile App Development",
        "Dart",
        "React",
        "TypeScript",
        "JavaScript",
        "Next.js",
        "Firebase",
        "PostgreSQL",
        "SQLite",
        "Cross-platform App Development",
        "Full-Stack Development",
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.brand,
      headline: siteConfig.title,
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#profile`,
      url: siteConfig.url,
      name: `${siteConfig.name} (${siteConfig.brand}) — Profile`,
      isPartOf: {
        "@id": `${siteConfig.url}/#website`,
      },
      about: {
        "@id": `${siteConfig.url}/#person`,
      },
      mainEntity: {
        "@id": `${siteConfig.url}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <head>
        {/* Unified Schema.org Graph */}
        <script
          id="schema-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdGraph),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
        <ClientProviders>
          <LoadingScreen />
          <ScrollProgress />
          <Navbar />
          <main className="flex-1 relative z-10" style={{ paddingTop: "var(--nav-height)" }}>
            {children}
          </main>
          <Footer />
        </ClientProviders>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
