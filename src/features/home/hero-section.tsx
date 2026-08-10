import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { FadeIn } from "@/components/ui/fade-in";
import { Deferred3D } from "./deferred-3d";
import { HeroParticles } from "./hero-particles";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[calc(100vh-var(--nav-height))] flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Engineering Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(193,138,66,0.03)_0%,transparent_65%)]" />

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg-primary to-transparent z-10" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg-primary to-transparent z-10" />

      {/* Animated particles (Client Component) */}
      <HeroParticles />

      {/* 3D Scene (Client Component, Deferred) */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 pointer-events-none opacity-50 lg:opacity-75 z-0">
        <Deferred3D />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-[var(--content-max-width)] px-6 md:px-10 lg:px-16 w-full">
        <div className="max-w-2xl">
          {/* Headline */}
          <FadeIn delay={0.2} duration={0.8} y={24} className="text-hero font-heading text-text-primary">
            <h1>
              Building Mobile Apps
              <br />
              <span className="text-gradient-bronze">
                That Solve Real Problems.
              </span>
            </h1>
          </FadeIn>

          {/* Supporting copy */}
          <FadeIn delay={0.4} duration={0.8} y={20} className="mt-8 text-text-secondary text-body leading-relaxed max-w-xl">
            <p>
              I build production-ready mobile apps, business software, and
              scalable digital products for startups, businesses, and ambitious
              founders.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.6} duration={0.8} y={20} className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <MagneticButton>
              <Link href="/projects" className="btn-primary">
                View Products
                <ArrowRight size={16} />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link href="/contact" className="btn-secondary">
                Work With Me
              </Link>
            </MagneticButton>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <FadeIn delay={1.5} duration={1} y={0} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-text-faint animate-breathe">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">
            Scroll
          </span>
          <div className="w-px h-6 bg-gradient-to-b from-text-faint to-transparent" />
        </div>
      </FadeIn>
    </section>
  );
}
