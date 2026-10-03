import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { studioBlog } from "../data";

export function InsightsOverlay() {
  return (
    <div className="min-h-screen flex items-center py-20 max-w-[var(--content-max-width)] mx-auto px-6 md:px-10 lg:px-16 w-full pointer-events-none">
      <div className="w-full pointer-events-auto">
        <div className="max-w-xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-bronze/10 border border-accent-bronze/20 text-accent-bronze text-xs font-mono uppercase tracking-wider mb-4">
            <span>06 / BLOG</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary tracking-tight">
            Writing &amp; Insights
          </h2>
          <p className="mt-2 text-text-secondary text-base leading-relaxed">
            Notes on mobile architecture, Flutter internals, and product engineering.
          </p>
        </div>

        {/* Compressed Editorial Wall */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl">
          {studioBlog.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group p-6 rounded-2xl bg-bg-surface/85 backdrop-blur-xl border border-border-subtle hover:border-accent-bronze/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-text-faint">
                  <span className="px-2 py-0.5 rounded bg-bg-elevated text-accent-bronze">
                    {post.category}
                  </span>
                  <span>{post.readingTime}</span>
                </div>

                <h3 className="font-heading font-semibold text-text-primary text-base group-hover:text-accent-bronze transition-colors line-clamp-2 mb-2">
                  {post.title}
                </h3>

                <p className="text-xs text-text-secondary leading-normal line-clamp-2">
                  {post.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-border-subtle flex items-center justify-between text-xs font-mono">
                <span className="text-text-faint text-[11px]">{post.date}</span>
                <span className="inline-flex items-center gap-1 text-accent-bronze group-hover:translate-x-0.5 transition-transform">
                  Read
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-bronze hover:text-accent-bronze-hover transition-colors"
          >
            Read all journal articles
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
