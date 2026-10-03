import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { studioClients } from "../data";

export function ClientsOverlay() {
  return (
    <div className="min-h-screen flex items-center py-20 max-w-[var(--content-max-width)] mx-auto px-6 md:px-10 lg:px-16 w-full pointer-events-none">
      <div className="w-full pointer-events-auto">
        <div className="max-w-xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-bronze/10 border border-accent-bronze/20 text-accent-bronze text-xs font-mono uppercase tracking-wider mb-4">
            <span>04 / CLIENT WORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary tracking-tight">
            Client Engagements
          </h2>
          <p className="mt-2 text-text-secondary text-base leading-relaxed">
            Tangible operational outcomes engineered for real businesses.
          </p>
        </div>

        {/* Compressed Fast-Scan Client Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {studioClients.map((client, idx) => (
            <div
              key={client.slug}
              className="p-6 md:p-8 rounded-2xl bg-bg-surface/85 backdrop-blur-xl border border-border-subtle hover:border-accent-bronze/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-accent-bronze font-semibold">
                      0{idx + 1}
                    </span>
                    <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-bg-elevated text-text-faint">
                      {client.industry}
                    </span>
                  </div>
                  <Link
                    href={`/client-work/${client.slug}`}
                    className="p-1 rounded text-text-faint hover:text-accent-bronze transition-colors cursor-pointer"
                    aria-label={`Open case study for ${client.title}`}
                  >
                    <ArrowUpRight size={16} />
                  </Link>
                </div>

                <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
                  {client.title}
                </h3>

                <p className="text-sm text-text-secondary leading-normal mb-4">
                  {client.description}
                </p>

                {/* Outcome Pill */}
                <div className="p-3 rounded-xl bg-bg-primary/60 border border-border-subtle/50 text-xs font-mono mb-6">
                  <span className="text-accent-bronze block font-semibold mb-0.5">
                    Impact Metric
                  </span>
                  <span className="text-text-secondary">{client.outcome}</span>
                </div>
              </div>

              {/* Quote */}
              <div className="pt-4 border-t border-border-subtle text-xs">
                <blockquote className="text-text-secondary italic">
                  &ldquo;{client.testimonial.quote}&rdquo;
                </blockquote>
                <p className="text-text-faint font-mono text-[11px] mt-1.5">
                  — {client.testimonial.author}, {client.client}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/client-work"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-bronze hover:text-accent-bronze-hover transition-colors"
          >
            Explore client case studies
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
