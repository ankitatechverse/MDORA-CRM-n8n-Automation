export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  metric: string;
  description: string;
}

export interface StrategyResult {
  analysis: string;
  steps: string[];
  impact: string;
}

export enum SectionId {
  HERO = 'hero',
  SERVICES = 'services',
  ADVISER = 'adviser',
  CONTACT = 'contact',
}