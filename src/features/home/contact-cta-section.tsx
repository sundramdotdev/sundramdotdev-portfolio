"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useInView } from "@/hooks/use-in-view";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight, Mail } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function ContactCtaSection() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(193,138,66,0.04)_0%,transparent_60%)]" />

      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-[var(--content-max-width)] px-6 md:px-10 lg:px-16 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-bronze mb-6"
        >
          Get In Touch
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-section-heading font-heading text-text-primary"
        >
          Let&apos;s build something
          <br />
          <span className="text-gradient-bronze">people remember.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-text-secondary text-body max-w-xl mx-auto leading-relaxed"
        >
          Have a project in mind? Whether you need a mobile app, business
          software, or a product built from scratch — let&apos;s talk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton>
            <Link href="/contact" className="btn-primary">
              <Mail size={16} />
              Start a Conversation
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link href="/projects" className="btn-secondary">
              View Products
              <ArrowRight size={16} />
            </Link>
          </MagneticButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-8 text-xs text-text-faint"
        >
          or email directly at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-accent-bronze hover:text-accent-bronze-hover transition-colors"
          >
            {siteConfig.email}
          </a>
        </motion.p>
      </div>
    </section>
  );
}
