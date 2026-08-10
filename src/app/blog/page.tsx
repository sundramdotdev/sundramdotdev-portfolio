import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Clock, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on Flutter development, mobile app building, SaaS, and the business of software.",
  alternates: { canonical: `${siteConfig.url}/blog` },
};

const blogPosts = [
  { slug: "how-i-built-expense-tracker-flutter", title: "How I Built an Expense Tracker App in Flutter", description: "A deep dive into building SpendWise — from architecture decisions to state management and local storage.", category: "Flutter", readingTime: "8 min read", date: "2025-12-15" },
  { slug: "flutter-architecture-large-applications", title: "Flutter Architecture for Large Applications", description: "Scalable architecture patterns for Flutter apps that grow beyond a simple prototype.", category: "Flutter", readingTime: "12 min read", date: "2025-11-20" },
  { slug: "building-school-management-software", title: "Building School Management Software", description: "Lessons and technical insights from building a comprehensive school management platform.", category: "Development", readingTime: "10 min read", date: "2025-10-28" },
  { slug: "lessons-from-client-projects", title: "Lessons From Client Projects", description: "Key takeaways from working with clients — communication, scope, and delivering value.", category: "App Business", readingTime: "7 min read", date: "2025-09-15" },
  { slug: "flutter-performance-optimization", title: "Flutter Performance Optimization", description: "Practical tips for optimizing Flutter app performance — rendering, memory, and startup time.", category: "Flutter", readingTime: "15 min read", date: "2025-08-22" },
  { slug: "how-to-validate-saas-ideas", title: "How to Validate SaaS Ideas", description: "A practical framework for validating SaaS product ideas before investing months of development.", category: "Startup", readingTime: "9 min read", date: "2025-07-10" },
  { slug: "building-business-software-people-use", title: "Building Business Software That People Actually Use", description: "Why most business software fails and how to build tools people genuinely want to use.", category: "Product Design", readingTime: "10 min read", date: "2025-06-05" },
];

export default function BlogPage() {
  return (
    <Section>
      <SectionHeader
        label="Blog"
        title="Articles & Insights"
        description="Thoughts on Flutter development, product building, and the business of software."
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col h-full p-6 rounded-[18px] border border-border-subtle bg-bg-surface hover:border-border-strong hover:-translate-y-1 transition-all duration-400 card-hover-glow"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="px-2.5 py-1 text-[11px] font-medium rounded-[8px] bg-accent-bronze/10 text-accent-bronze">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 text-text-faint">
                <Clock size={12} />
                <span className="font-numeric text-[11px] font-medium">{post.readingTime}</span>
              </div>
            </div>

            <h2 className="text-lg font-heading font-semibold text-text-primary mb-3 group-hover:text-accent-bronze transition-colors line-clamp-2">
              {post.title}
            </h2>

            <p className="text-caption text-text-secondary leading-relaxed flex-1 line-clamp-3">
              {post.description}
            </p>

            <div className="mt-6 pt-5 border-t border-border-subtle flex items-center justify-between">
              <time className="font-numeric text-xs font-medium text-text-faint">
                {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </time>
              <ArrowUpRight size={16} className="text-text-faint group-hover:text-accent-bronze transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
