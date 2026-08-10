import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";

function XIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/constants";
import { notFound } from "next/navigation";

const blogData: Record<string, {
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
  tags: string[];
  content: string;
}> = {
  "how-i-built-expense-tracker-flutter": {
    title: "How I Built an Expense Tracker App in Flutter",
    description: "A deep dive into building SpendWise — from architecture decisions to state management and local storage.",
    date: "2025-12-15",
    category: "Flutter",
    readingTime: "8 min read",
    tags: ["Flutter", "Mobile Development", "State Management"],
    content: `## Why an Expense Tracker?\n\nTracking expenses is one of those universal problems that everyone faces. Yet most apps either overcomplicate it or lack meaningful insights. I wanted to build something that was dead simple to use daily while providing real value through analytics.\n\n## Architecture Decisions\n\nI chose a feature-first architecture with Riverpod for state management. The key insight was keeping the expense entry flow to under 3 taps — that's the difference between an app people use daily and one they abandon.\n\n### State Management with Riverpod\n\nRiverpod was the clear choice for its testability and provider scoping. Each feature has its own set of providers, keeping concerns separated and the codebase maintainable.\n\n## Local-First Data\n\nSQLite handles all expense data locally, ensuring the app works without internet. Firebase is used only for optional cloud backup, keeping the core experience fast and reliable.\n\n## Key Takeaways\n\n1. **Friction kills daily apps** — minimize the steps to complete the primary action\n2. **Local-first is non-negotiable** for personal data apps\n3. **Charts need to tell a story**, not just display numbers\n4. **Start with the core loop**, add features based on real usage data`,
  },
  "flutter-architecture-large-applications": {
    title: "Flutter Architecture for Large Applications",
    description: "Scalable architecture patterns for Flutter apps that grow beyond a simple prototype.",
    date: "2025-11-20",
    category: "Flutter",
    readingTime: "12 min read",
    tags: ["Flutter", "Architecture", "Best Practices"],
    content: `## The Problem with "Just Start Coding"\n\nEvery Flutter project starts simple. But without architectural guardrails, codebases quickly become tangled. Here's what I've learned about building Flutter apps that scale.\n\n## Feature-First Architecture\n\nInstead of grouping by type (all screens in one folder, all models in another), group by feature. Each feature is self-contained with its own models, providers, and widgets.\n\n## State Management at Scale\n\nFor large apps, I recommend Riverpod for its:\n- Compile-time safety\n- Easy testing\n- Provider scoping\n- No BuildContext dependency in business logic\n\n## The Dependency Rule\n\nFeatures can depend on shared utilities and core modules, but never on each other directly. Cross-feature communication happens through well-defined interfaces.\n\n## Practical Tips\n\n1. Keep widgets under 100 lines\n2. Extract business logic into separate classes\n3. Use code generation for boilerplate (freezed, json_serializable)\n4. Write tests for business logic first, then UI`,
  },
  "building-school-management-software": {
    title: "Building School Management Software",
    description: "Lessons and technical insights from building a comprehensive school management platform.",
    date: "2025-10-28",
    category: "Development",
    readingTime: "10 min read",
    tags: ["Flutter", "Firebase", "Business Software"],
    content: `## Understanding the Domain\n\nSchool management is deceptively complex. Attendance, grading, scheduling, parent communication, fee management — each subsystem has its own rules and edge cases.\n\n## The Role-Based Challenge\n\nThe biggest architectural challenge was building a single app that serves four distinct user types: teachers, students, parents, and administrators. Each sees different data and has different permissions.\n\n## Real-Time with Firebase\n\nFirestore's real-time listeners were essential for features like live attendance marking. When a teacher marks attendance, parents see it immediately.\n\n## Lessons Learned\n\n1. **Talk to every user type** before designing\n2. **Role-based access** is harder than it looks\n3. **Offline support** is critical in schools with unreliable internet\n4. **Pilot with one class** before rolling out school-wide`,
  },
  "lessons-from-client-projects": {
    title: "Lessons From Client Projects",
    description: "Key takeaways from working with clients — communication, scope, and delivering value.",
    date: "2025-09-15",
    category: "App Business",
    readingTime: "7 min read",
    tags: ["Freelancing", "Client Work", "Business"],
    content: `## Communication Is Everything\n\nThe technical implementation is rarely what makes or breaks a client project. It's the communication. Clear, regular updates build trust and prevent scope-related surprises.\n\n## Scope Management\n\nEvery client project will face scope creep. The key is not to prevent it entirely (that's unrealistic), but to have a clear process for evaluating and pricing changes.\n\n## Under-Promise, Over-Deliver\n\nGive yourself buffer in timelines. Delivering early feels great for everyone. Delivering late erodes trust, even if the work is excellent.\n\n## Key Takeaways\n\n1. **Weekly demos** build trust better than status emails\n2. **Define "done"** before starting any feature\n3. **Say no** to features that don't serve the core problem\n4. **Document decisions** — memories fade, docs don't`,
  },
  "flutter-performance-optimization": {
    title: "Flutter Performance Optimization",
    description: "Practical tips for optimizing Flutter app performance.",
    date: "2025-08-22",
    category: "Flutter",
    readingTime: "15 min read",
    tags: ["Flutter", "Performance", "Optimization"],
    content: `## Measuring Before Optimizing\n\nDon't optimize blindly. Use Flutter DevTools to identify actual bottlenecks: jank frames, excessive rebuilds, and memory leaks.\n\n## Widget Rebuild Optimization\n\nThe most impactful optimization: reduce unnecessary widget rebuilds. Use const constructors, extract widgets, and use selective state management.\n\n## Image Optimization\n\nImages are often the biggest performance drain. Use cached_network_image, proper sizing, and lazy loading for lists.\n\n## Build and Startup Time\n\nReduce startup time by deferring non-essential initialization. Use deferred imports for features that aren't needed immediately.\n\n## Checklist\n\n1. Profile with DevTools before optimizing\n2. Use const constructors everywhere possible\n3. Cache expensive computations\n4. Lazy-load images and heavy widgets\n5. Minimize main isolate work`,
  },
  "how-to-validate-saas-ideas": {
    title: "How to Validate SaaS Ideas",
    description: "A practical framework for validating SaaS product ideas.",
    date: "2025-07-10",
    category: "Startup",
    readingTime: "9 min read",
    tags: ["SaaS", "Startup", "Product"],
    content: `## Most SaaS Ideas Fail Because of Validation\n\nBuilding the wrong thing is the most expensive mistake in software. Here's a framework for validating ideas before investing months of development.\n\n## The 4-Step Framework\n\n### 1. Problem Validation\nTalk to at least 10 potential users. Don't pitch your solution — understand their problem. If they're not actively trying to solve it, it's not a real problem.\n\n### 2. Solution Validation\nBuild a landing page describing your solution. Drive traffic to it. Measure interest through email signups or waitlist conversions.\n\n### 3. Willingness to Pay\nPrice before building. If people won't commit to even a small payment for your solution, reconsider.\n\n### 4. MVP Validation\nBuild the smallest possible version that solves the core problem. Get it in front of paying users within weeks, not months.`,
  },
  "building-business-software-people-use": {
    title: "Building Business Software That People Actually Use",
    description: "Why most business software fails and how to build tools people genuinely want to use.",
    date: "2025-06-05",
    category: "Product Design",
    readingTime: "10 min read",
    tags: ["Business Software", "Product Design", "UX"],
    content: `## The Adoption Problem\n\nMost business software is built to satisfy a buyer's checklist, not a user's workflow. This creates tools that are purchased but never truly adopted.\n\n## Design for the Daily User\n\nThe person signing the check and the person using the software daily are usually different people. Build for the daily user.\n\n## Simplicity Over Features\n\nEvery feature you add makes the product harder to learn. Be ruthless about what makes the cut. If it doesn't serve the core workflow, it shouldn't be in V1.\n\n## Key Principles\n\n1. **Observe real workflows** before designing\n2. **Start with the daily task**, not the admin dashboard\n3. **Speed is a feature** — nobody likes slow software\n4. **Progressive disclosure** — show complexity only when needed\n5. **Train through the product**, not through documentation`,
  },
};

export async function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData[slug];
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${siteConfig.url}/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${slug}`,
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogData[slug];

  if (!post) notFound();

  // Simple markdown-to-html for static content
  const contentHtml = post.content
    .split("\n")
    .map((line) => {
      if (line.startsWith("### ")) return `<h3 class="text-lg font-heading font-semibold text-text-primary mt-8 mb-3">${line.slice(4)}</h3>`;
      if (line.startsWith("## ")) return `<h2 class="text-xl font-heading font-semibold text-text-primary mt-10 mb-4" style="scroll-margin-top: calc(var(--nav-height) + 24px)">${line.slice(3)}</h2>`;
      if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ") || line.startsWith("4. ") || line.startsWith("5. "))
        return `<li class="text-text-muted leading-relaxed ml-4">${line.slice(3).replace(/\*\*(.*?)\*\*/g, '<strong class="text-text-primary">$1</strong>')}</li>`;
      if (line === "") return "<br/>";
      return `<p class="text-text-muted leading-relaxed">${line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-text-primary">$1</strong>')}</p>`;
    })
    .join("\n");

  return (
    <>
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { "@type": "Person", name: siteConfig.name, url: siteConfig.url },
            publisher: { "@type": "Person", name: siteConfig.name },
            mainEntityOfPage: `${siteConfig.url}/blog/${slug}`,
            keywords: post.tags.join(", "),
          }),
        }}
      />

      <Section>
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            All Articles
          </Link>

          <header className="mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent-bronze/10 text-accent-bronze mb-4">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-4xl font-heading font-bold text-text-primary tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="mt-4 text-lg text-text-muted">{post.description}</p>

            <div className="flex items-center gap-4 mt-6 text-xs text-text-faint">
              <div className="flex items-center gap-1.5">
                <Calendar size={12} />
                <time>
                  {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={12} />
                <span>{post.readingTime}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {post.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-0.5 text-[11px] rounded-md bg-bg-elevated text-text-faint">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <article
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-border-subtle">
            <p className="text-sm font-medium text-text-primary mb-3">Share this article</p>
            <div className="flex gap-2">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${siteConfig.url}/blog/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-bg-surface border border-border-subtle text-text-faint hover:text-text-primary hover:border-border-default transition-all"
                aria-label="Share on X"
              >
                <XIcon size={14} />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`${siteConfig.url}/blog/${slug}`)}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-bg-surface border border-border-subtle text-text-faint hover:text-text-primary hover:border-border-default transition-all"
                aria-label="Share on LinkedIn"
              >
                <LinkedinIcon size={14} />
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
