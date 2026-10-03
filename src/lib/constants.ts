// Site-wide constants
export const siteConfig = {
  name: "Sundram Gupta",
  brand: "sundramdotdev",
  title: "Sundram Gupta — Software Engineer & Product Builder | sundramdotdev",
  description:
    "Sundram Gupta (sundramdotdev) is a Software Engineer and Product Builder specializing in Flutter, mobile app development, React, TypeScript, Firebase, and scalable digital products.",
  url: "https://sundramdotdev.xyz",
  ogImage: "https://sundramdotdev.xyz/og-image.png",
  email: "sundram.devv@gmail.com",
  location: "India",
  role: "Software Engineer & Product Builder",
  resumeUrl: "/resume/sundram-gupta-resume.pdf",
} as const;

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/projects" },
  { label: "Certificates", href: "/certificates" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/sundramdotdev",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sundramdotdev",
    icon: "linkedin",
  },
  {
    label: "X",
    href: "https://x.com/sundramdevv",
    icon: "twitter",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/devsundram_/",
    icon: "instagram",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@sundramdotdev",
    icon: "youtube",
  },
] as const;

export const stats = [
  { label: "Projects Shipped", value: 15, suffix: "+" },
  { label: "Client Engagements", value: 10, suffix: "+" },
  { label: "Products Built", value: 5, suffix: "" },
  { label: "Technologies Used", value: 20, suffix: "+" },
  { label: "Currently Building", value: 2, suffix: "" },
] as const;

export const services = [
  {
    title: "Mobile App Development",
    description:
      "End-to-end mobile application development for iOS and Android with native performance and polished user experiences.",
    icon: "smartphone",
  },
  {
    title: "Flutter Development",
    description:
      "Cross-platform applications built with Flutter for consistent, beautiful experiences across all devices from a single codebase.",
    icon: "layers",
  },
  {
    title: "MVP Development",
    description:
      "Rapid minimum viable product development to validate your idea, test market fit, and get to market faster.",
    icon: "rocket",
  },
  {
    title: "Business Software",
    description:
      "Custom business applications including inventory management, billing systems, and operational tools tailored to your workflow.",
    icon: "briefcase",
  },
  {
    title: "SaaS Product Development",
    description:
      "Full-stack SaaS product development from architecture to deployment, built to scale with your business.",
    icon: "cloud",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Understanding your business, users, and goals through research and strategic conversations.",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "Defining scope, architecture, and roadmap. Setting up milestones and deliverables.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Creating wireframes, prototypes, and polished UI designs that align with your brand.",
  },
  {
    step: "04",
    title: "Development",
    description:
      "Building the product with clean, maintainable code. Regular updates and iterative feedback.",
  },
  {
    step: "05",
    title: "Launch",
    description:
      "Deployment, app store submission, and post-launch support to ensure a smooth rollout.",
  },
] as const;

export const projectCategories = [
  "All",
  "Mobile Apps",
  "Business Software",
  "SaaS",
  "Tools",
  "Open Source",
] as const;

export const blogCategories = [
  "All",
  "Flutter",
  "Mobile Development",
  "App Business",
  "Startup",
  "SaaS",
  "Product Design",
  "Development",
  "SEO",
] as const;

export const keywords = [
  "Sundram Gupta",
  "sundramdotdev",
  "Software Engineer",
  "Product Engineer",
  "Flutter Developer",
  "Mobile App Developer",
  "Web Developer",
  "Full-Stack Developer",
  "React Developer",
  "TypeScript Developer",
  "Firebase Developer",
  "PostgreSQL Developer",
  "Cross-platform App Developer",
  "Software Product Builder",
  "Mobile App Developer India",
  "Flutter App Development",
  "Inventory Management Software",
  "RetailOS",
  "SpendWise",
] as const;
