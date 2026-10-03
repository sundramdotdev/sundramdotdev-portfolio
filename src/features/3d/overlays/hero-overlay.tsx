import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { stats } from "@/lib/constants";

interface HeroOverlayProps {
  onExploreWork: () => void;
}

export function HeroOverlay({ onExploreWork }: HeroOverlayProps) {
  return (
    <div className="min-h-screen flex flex-col justify-between py-12 md:py-20 max-w-[var(--content-max-width)] mx-auto px-6 md:px-10 lg:px-16 w-full pointer-events-none">
      {/* Top spacer for navbar */}
      <div className="h-10" />

      {/* Main Hero Header */}
      <div className="max-w-2xl pointer-events-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-bronze/10 border border-accent-bronze/20 text-accent-bronze text-xs font-mono uppercase tracking-wider mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-bronze animate-pulse" />
          <span>01 / DIGITAL STUDIO • SUNDRAMDOTDEV</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-text-primary tracking-tight leading-[1.1]">
          Sundram Gupta
          <span className="block text-gradient-bronze text-2xl sm:text-3xl lg:text-4xl mt-3 font-semibold">
            Software Developer &amp; Product Builder
          </span>
        </h1>

        <p className="mt-6 text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl">
          Building production-ready mobile apps, business software, and scalable
          digital products with Flutter, React, TypeScript, and Firebase.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <MagneticButton>
            <button
              onClick={onExploreWork}
              className="btn-primary cursor-pointer"
            >
              View Products
              <ArrowRight size={16} />
            </button>
          </MagneticButton>

          <MagneticButton>
            <Link href="/contact" className="btn-secondary">
              Work With Me
            </Link>
          </MagneticButton>
        </div>
      </div>

      {/* Live Stats Bar */}
      <div className="pt-8 pointer-events-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4 md:p-6 rounded-2xl bg-bg-surface/60 backdrop-blur-md border border-border-subtle/80 max-w-4xl">
          {stats.map((stat) => (
            <div key={stat.label} className="text-left">
              <div className="font-heading font-bold text-xl md:text-2xl text-text-primary">
                {stat.value}
                <span className="text-accent-bronze">{stat.suffix}</span>
              </div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-text-faint mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex items-center gap-2 text-text-faint text-xs font-mono uppercase tracking-widest mt-6 animate-breathe">
          <ArrowDown size={14} className="text-accent-bronze" />
          <span>Scroll to travel through digital studio</span>
        </div>
      </div>
    </div>
  );
}
