export interface Social {
  name: string;
  url: string;
  color: string;
  iconPath: string;
}

export interface LinkItem {
  title: string;
  description?: string;
  url: string;
  year?: string;
  company?: string;
  location?: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  description: string;
  details?: string[]; // Added for hover card bullet points
  logo?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export interface SectionData {
  title: string;
  items: LinkItem[];
}

// Interface for items displayed in the Timeline component
export interface TimelineItem {
  age: string | number;
  year: string | number;
  milestone: string;
  detail: string;
  isCurrent?: boolean;
}
export const WORK_EXPERIENCE: WorkExperience[] = [];
export const EDUCATION: Education[] = [];