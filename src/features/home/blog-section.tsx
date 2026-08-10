"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useInView } from "@/hooks/use-in-view";
import { SectionHeader } from "@/components/ui/section-header";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";

const latestPosts = [
  {
    slug: "how-i-built-expense-tracker-flutter",
    title: "How I Built an Expense Tracker App in Flutter",
    description:
      "A deep dive into building SpendWise — from architecture decisions to state management and local storage.",
    category: "Flutter",
    readingTime: "8 min read",
    date: "2025-12-15",
  },
  {
    slug: "flutter-architecture-large-applications",
    title: "Flutter Architecture for Large Applications",
    description:
      "Scalable architecture patterns for Flutter apps that grow beyond a simple prototype.",
    category: "Flutter",
    readingTime: "12 min read",
    date: "2025-11-20",
  },
  {
    slug: "building-business-software-people-use",
    title: "Building Business Software That People Actually Use",
    description:
      "Lessons learned from building inventory, billing, and management systems for real businesses.",
    category: "Product Design",
    readingTime: "10 min read",
    date: "2025-10-10",
  },
];

export function BlogSection() {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <section className="py-16 md:py-24 lg:py-32 mx-auto max-w-[var(--content-max-width)] px-6 md:px-10 lg:px-16">
      <SectionHeader
        label="Blog"
        title="Latest Articles"
        description="Thoughts on mobile development, product building, and the business of software."
      />

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {latestPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col h-full p-6 rounded-[18px] border border-border-subtle bg-bg-surface hover:border-border-strong hover:-translate-y-1 transition-all duration-400 card-hover-glow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 text-[11px] font-medium rounded-[8px] bg-accent-bronze/10 text-accent-bronze">
                  {post.category}
                </span>
                <div className="flex items-center gap-1 text-text-faint">
                  <Clock size={11} />
                  <span className="text-[11px]">{post.readingTime}</span>
                </div>
              </div>

              <h3 className="text-base font-heading font-semibold text-text-primary mb-2 group-hover:text-accent-bronze transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-caption text-text-secondary leading-relaxed flex-1 line-clamp-3">
                {post.description}
              </p>

              <div className="mt-4 pt-4 border-t border-border-subtle flex items-center justify-between">
                <time className="text-xs text-text-faint">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <ArrowUpRight
                  size={14}
                  className="text-text-faint group-hover:text-accent-bronze transition-colors"
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
        className="mt-10 text-center"
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-caption font-medium text-accent-bronze hover:text-accent-bronze-hover transition-colors"
        >
          Read All Articles
          <ArrowRight size={14} />
        </Link>
      </motion.div>
    </section>
  );
}
