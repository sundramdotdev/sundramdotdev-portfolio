import { siteConfig } from "@/lib/constants";

const blogPosts = [
  { slug: "how-i-built-expense-tracker-flutter", title: "How I Built an Expense Tracker App in Flutter", description: "A deep dive into building SpendWise.", date: "2025-12-15" },
  { slug: "flutter-architecture-large-applications", title: "Flutter Architecture for Large Applications", description: "Scalable architecture patterns for Flutter.", date: "2025-11-20" },
  { slug: "building-school-management-software", title: "Building School Management Software", description: "Lessons from building a school management platform.", date: "2025-10-28" },
  { slug: "lessons-from-client-projects", title: "Lessons From Client Projects", description: "Key takeaways from client work.", date: "2025-09-15" },
  { slug: "flutter-performance-optimization", title: "Flutter Performance Optimization", description: "Practical performance optimization tips.", date: "2025-08-22" },
  { slug: "how-to-validate-saas-ideas", title: "How to Validate SaaS Ideas", description: "A framework for validating SaaS ideas.", date: "2025-07-10" },
  { slug: "building-business-software-people-use", title: "Building Business Software That People Actually Use", description: "Why most business software fails.", date: "2025-06-05" },
];

export async function GET() {
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.brand} Blog</title>
    <link>${siteConfig.url}</link>
    <description>${siteConfig.description}</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml"/>
    ${blogPosts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteConfig.url}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteConfig.url}/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${siteConfig.email} (${siteConfig.name})</author>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
