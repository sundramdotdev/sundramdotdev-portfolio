"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Suspense } from "react";

const Hero3DScene = dynamic(() => import("./hero-3d-scene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center opacity-20">
      <div className="w-48 h-72 border border-border-subtle rounded-[18px]" />
    </div>
  ),
});

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

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent-bronze/20"
            initial={{
              x: `${15 + i * 15}%`,
              y: `${20 + (i % 3) * 25}%`,
              opacity: 0,
            }}
            animate={{
              y: [`${20 + (i % 3) * 25}%`, `${10 + (i % 3) * 20}%`],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 3D Scene */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 pointer-events-none opacity-50 lg:opacity-75">
        <Suspense fallback={null}>
          <Hero3DScene />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-[var(--content-max-width)] px-6 md:px-10 lg:px-16 w-full">
        <div className="max-w-2xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-hero font-heading text-text-primary"
          >
            Building Mobile Apps
            <br />
            <span className="text-gradient-bronze">
              That Solve Real Problems.
            </span>
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-text-secondary text-body leading-relaxed max-w-xl"
          >
            I build production-ready mobile apps, business software, and
            scalable digital products for startups, businesses, and ambitious
            founders.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
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
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 text-text-faint"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">
            Scroll
          </span>
          <div className="w-px h-6 bg-gradient-to-b from-text-faint to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
