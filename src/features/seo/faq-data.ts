import { siteConfig } from "@/lib/constants";

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Who is Sundram Gupta (sundramdotdev)?",
    answer:
      "Sundram Gupta is a Software Engineer and Product Builder based in India, known across GitHub, LinkedIn, and social platforms as sundramdotdev. He specializes in building production-ready cross-platform mobile applications, business software, and scalable digital products.",
  },
  {
    question: "What core technologies and programming languages does Sundram Gupta use?",
    answer:
      "Sundram's primary engineering stack includes Flutter and Dart for cross-platform iOS and Android apps, React, TypeScript, and Next.js for high-performance web products, along with Firebase, PostgreSQL, SQLite, and Node.js for backend and database architectures.",
  },
  {
    question: "What software products has Sundram Gupta built?",
    answer:
      "Notable products built by Sundram include RetailOS (an offline-first retail inventory and billing POS system), SpendWise (a personal expense tracker with budget analytics), PlayMate (a social sports matchmaking and venue platform), and a full-featured School Management Platform.",
  },
  {
    question: "Does Sundram Gupta work on client projects and MVP development?",
    answer:
      "Yes. Sundram works with startups, ambitious founders, and businesses on end-to-end product engineering — from rapid MVP development and cross-platform mobile apps to custom operational tools like inventory management and billing systems.",
  },
  {
    question: "How can I contact or connect with Sundram Gupta?",
    answer:
      `You can reach Sundram Gupta directly via email at ${siteConfig.email}, explore his repositories on GitHub (github.com/sundramdotdev), connect on LinkedIn (linkedin.com/in/sundramdotdev), or submit a project inquiry through the contact page.`,
  },
];
