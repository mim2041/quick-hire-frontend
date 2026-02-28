export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  category: string;
  description: string;
  requirements?: string[];
  salary?: string;
  postedAt: string;
}

export interface JobApplication {
  name: string;
  email: string;
  resumeUrl: string;
  coverNote: string;
}
