export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  status: 'active' | 'coming-soon' | 'in-development';
  type: 'web' | 'mobile' | 'desktop';
}