import Link from "next/link";
import { Mail } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { siteConfig, socialLinks } from "@/lib/constants";

export function ContactOverlay() {
  return (
    <div className="min-h-screen flex items-center py-24 max-w-[var(--content-max-width)] mx-auto px-6 md:px-10 lg:px-16 w-full pointer-events-none">
      <div className="w-full text-center max-w-xl mx-auto pointer-events-auto bg-bg-surface/85 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-border-subtle shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-bronze/10 border border-accent-bronze/20 text-accent-bronze text-xs font-mono uppercase tracking-wider mb-6">
          <span>07 / CONTACT</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-heading font-bold text-text-primary tracking-tight leading-tight">
          LET&apos;S BUILD
          <br />
          <span className="text-gradient-bronze">something meaningful.</span>
        </h2>

        {/* Direct Email Display */}
        <div className="mt-8">
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-mono text-base sm:text-lg text-text-primary hover:text-accent-bronze transition-colors underline decoration-border-strong underline-offset-4"
          >
            {siteConfig.email}
          </a>
        </div>

        {/* Primary Contact CTA */}
        <div className="mt-8 flex justify-center">
          <MagneticButton>
            <Link href="/contact" className="btn-primary">
              <Mail size={16} />
              Start a Conversation
            </Link>
          </MagneticButton>
        </div>

        {/* Social Links Strip */}
        <div className="mt-10 pt-8 border-t border-border-subtle flex flex-wrap justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-text-faint hover:text-accent-bronze transition-colors"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
