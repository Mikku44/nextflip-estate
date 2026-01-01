export interface CaseStudy {
  slug: string;
  title: string;
  excerpt: string;
  imageAfter: string;
  imageBefore: string;
  beforeDetail : string;
  afterDetail : string;
  images? : string[];
  status: string;
  time: string;
  budget: string;
  result: string;
  category: string; 
  problems: string[];
  strategy: string;
}