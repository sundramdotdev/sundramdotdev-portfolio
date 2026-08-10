export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  techStack: string[];
  image?: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  featured: boolean;
  status: "completed" | "in-progress" | "planned";
  startDate: string;
  endDate?: string;
  problem?: string;
  research?: string;
  solution?: string;
  architecture?: string;
  challenges?: string;
  results?: string;
}

export interface ClientWork {
  slug: string;
  title: string;
  client: string;
  description: string;
  industry: string;
  techStack: string[];
  image?: string;
  images?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  businessProblem?: string;
  requirements?: string;
  developmentProcess?: string;
  outcome?: string;
  duration: string;
  year: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  category: string;
  tags: string[];
  image?: string;
  readingTime: string;
  published: boolean;
  featured?: boolean;
  author?: string;
}

export interface Certificate {
  slug: string;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  credentialUrl?: string;
  credentialId?: string;
  category: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  noIndex?: boolean;
}
