"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { studioProjects } from "./data";
import { JourneyProgress } from "./journey-progress";
import { HeroOverlay } from "./overlays/hero-overlay";
import { AboutOverlay } from "./overlays/about-overlay";
import { WorkOverlay } from "./overlays/work-overlay";
import { ClientsOverlay } from "./overlays/clients-overlay";
import { CertificatesOverlay } from "./overlays/certificates-overlay";
import { InsightsOverlay } from "./overlays/insights-overlay";
import { ContactOverlay } from "./overlays/contact-overlay";
import { AeoFaqSection } from "@/features/seo/aeo-faq-section";

// Dynamically import StudioCanvas with SSR disabled
const StudioCanvas = dynamic(
  () => import("./studio-canvas").then((mod) => mod.StudioCanvas),
  { ssr: false }
);

const SECTION_IDS = [
  "hero",
  "about",
  "products",
  "clients",
  "certificates",
  "blog",
  "faq",
  "contact",
];

export function CinematicPortfolio() {
  const router = useRouter();
  const progressRef = useRef(0);
  const [activeSectionId, setActiveSectionId] = useState("hero");
  const [isFallback, setIsFallback] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMounted(true);
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) {
        setIsFallback(true);
      }
    });
    return () => cancelAnimationFrame(id);
  }, []);

  // Update scroll progress & active waypoint index
  const updateScrollProgress = useCallback(() => {
    if (typeof window === "undefined") return;

    const total =
      document.documentElement.scrollHeight - window.innerHeight;
    const current = window.scrollY;
    const p = total > 0 ? Math.min(Math.max(current / total, 0), 1) : 0;
    progressRef.current = p;

    // Determine which section currently occupies viewport center
    const viewportCenter = window.scrollY + window.innerHeight * 0.4;
    let currentId = SECTION_IDS[0];

    for (let i = 0; i < SECTION_IDS.length; i++) {
      const el = document.getElementById(SECTION_IDS[i]);
      if (el) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (viewportCenter >= top && viewportCenter <= bottom) {
          currentId = SECTION_IDS[i];
          break;
        }
      }
    }

    setActiveSectionId(currentId);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    const id = requestAnimationFrame(updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      cancelAnimationFrame(id);
    };
  }, [updateScrollProgress]);

  const navigateToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navHeight = 72;
    const targetY = Math.max(0, el.offsetTop - navHeight);
    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  const handleSelectProject = (slug: string) => {
    router.push(`/projects/${slug}`);
  };

  return (
    <div className="relative w-full min-h-screen bg-bg-primary text-text-primary selection:bg-accent-bronze/20 selection:text-text-primary">
      {/* 3D Fixed Canvas Background Layer */}
      {!isFallback && mounted && (
        <div className="fixed inset-0 z-0 pointer-events-auto">
          <StudioCanvas
            progressRef={progressRef}
            projects={studioProjects}
            onSelectProject={handleSelectProject}
            onWebGLError={() => setIsFallback(true)}
          />
        </div>
      )}

      {/* 2D Atmospheric Fallback if WebGL is unavailable or reduced motion */}
      {isFallback && (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,199,190,0.05)_0%,transparent_70%)]" />
        </div>
      )}

      {/* Subtle vignette & ambient depth */}
      <div className="fixed inset-0 z-1 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(11,12,14,0.75)_100%)]" />

      {/* Journey HUD Progress Indicator */}
      <JourneyProgress
        activeSectionId={activeSectionId}
        onNavigate={navigateToSection}
      />

      {/* Narrative Spatial Sections + FAQ + Contact */}
      <div className="relative z-10 flex flex-col">
        {/* 01 — HERO */}
        <section id="hero" className="relative w-full">
          <HeroOverlay onExploreWork={() => navigateToSection("products")} />
        </section>

        {/* 02 — ABOUT */}
        <section id="about" className="relative w-full">
          <AboutOverlay />
        </section>

        {/* 03 — PRODUCTS */}
        <section id="products" className="relative w-full">
          <WorkOverlay />
        </section>

        {/* 04 — CLIENT WORK */}
        <section id="clients" className="relative w-full">
          <ClientsOverlay />
        </section>

        {/* 05 — CERTIFICATES */}
        <section id="certificates" className="relative w-full">
          <CertificatesOverlay />
        </section>

        {/* 06 — BLOG */}
        <section id="blog" className="relative w-full">
          <InsightsOverlay />
        </section>

        {/* FAQ KNOWLEDGE BASE */}
        <AeoFaqSection />

        {/* 07 — CONTACT */}
        <section id="contact" className="relative w-full">
          <ContactOverlay />
        </section>
      </div>
    </div>
  );
}
