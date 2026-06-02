export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  duration: string;
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  imageUrl: string;
  tags: string[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  processSteps: {
    title: string;
    description: string;
  }[];
  stats: {
    label: string;
    value: string;
  };
  highlightColor: string;
  iconName: string; // Lucide icon reference
}

export interface EditorialInsight {
  id: string;
  title: string;
  slug: string;
  category: string;
  subCategory: string;
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  excerpt: string;
  contentMarkdown: string;
  imageUrl: string;
}
