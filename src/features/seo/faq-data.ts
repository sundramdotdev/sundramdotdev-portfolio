import { siteConfig } from "@/lib/constants";

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Who is Sundram Gupta?",
    answer:
      "Sundram Gupta is a Software Developer and Product Builder from Ayodhya, Uttar Pradesh, India, associated with Shri Ramswaroop Memorial University (SRMU) and the regional technology ecosystem. Known online as sundramdotdev across GitHub, LinkedIn, Commudle, and Instagram, he builds production-ready mobile applications, business software, and digital products.",
  },
  {
    question: "What is sundramdotdev?",
    answer:
      "sundramdotdev is the personal brand, public developer handle, and online identity used by Sundram Gupta across his portfolio website (sundramdotdev.xyz), code repositories, technical writing, community profiles, and social accounts.",
  },
  {
    question: "Is Sundram Gupta a Flutter developer?",
    answer:
      "Yes. Sundram Gupta specializes in cross-platform mobile application development using Flutter and Dart. He has engineered production mobile apps including RetailOS (an offline-first retail inventory and billing POS system), SpendWise (personal expense analytics), and PlayMate (sports matchmaking).",
  },
  {
    question: "What core technologies and frameworks does Sundram Gupta use?",
    answer:
      "Sundram's primary engineering stack includes Flutter and Dart for cross-platform iOS and Android apps, React, TypeScript, and Next.js for web applications, along with Firebase, PostgreSQL, SQLite, and Node.js for backend data systems.",
  },
  {
    question: "What software products has Sundram Gupta built?",
    answer:
      "Notable products built by Sundram include RetailOS (offline-first retail management POS system), SpendWise (personal expense tracking app), PlayMate (sports venue booking and player discovery app), and an enterprise School Management System.",
  },
  {
    question: "Where can I find Sundram Gupta's official developer profiles?",
    answer:
      `You can find Sundram Gupta's official profiles on GitHub (github.com/sundramdotdev), LinkedIn (linkedin.com/in/sundaramdotdev), Commudle (commudle.com/users/sundramdotdev), Instagram (instagram.com/devsundram_), and reach him directly via email at ${siteConfig.email}.`,
  },
];
