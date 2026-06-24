export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  features: string[];
  lessons: string;
  thumbnail: string;
  images: string[];
  technologies: string[];
  category: string;
  github?: string;
  demo?: string;
}
