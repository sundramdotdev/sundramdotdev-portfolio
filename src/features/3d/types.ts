export interface CameraWaypoint {
  id: string;
  name: string;
  number: string;
  progress: number;
  position: [number, number, number];
  target: [number, number, number];
  fov?: number;
}

export interface StudioProjectItem {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  results: string;
  tech: string[];
  accent: string;
  index: string;
}

export interface StudioClientItem {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  outcome: string;
  description: string;
  testimonial: {
    quote: string;
    author: string;
  };
}

export interface StudioCertificateItem {
  id: number;
  image: string;
  title: string;
  description: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export interface StudioBlogItem {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  date: string;
}
