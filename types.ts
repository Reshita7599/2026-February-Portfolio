
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  outcome: string;
  image: string;
}

export interface Skill {
  name: string;
  category: 'Language' | 'Cloud' | 'AI/ML' | 'Tool';
  level: number;
  icon: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  details: string[];
}
