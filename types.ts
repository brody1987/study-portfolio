export interface HeroContent {
  title: string;
  subtitle: string;
  tagline: string;
  ctaText: string;
  bgImage: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface FeaturedContent {
  title: string;
  description: string;
  projects: Project[];
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Tool {
  name: string;
  iconUrl: string;
}

export interface AboutContent {
  title: string;
  bio: string;
  profileImage: string;
  skills: Skill[];
  tools: Tool[];
}

export interface AllWorkContent {
  title: string;
  subtitle: string;
  projects: Project[];
}

export interface ContactContent {
  title: string;
  subtitle: string;
  email: string;
}

export interface AppContent {
  hero: HeroContent;
  featured: FeaturedContent;
  about: AboutContent;
  allWork: AllWorkContent;
  contact: ContactContent;
}

export type SectionKey = keyof AppContent;