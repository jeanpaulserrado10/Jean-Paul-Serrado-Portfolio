export interface Video {
  id: string;
  title: string;
  isLocal?: boolean;
  isDrive?: boolean;
  thumbnailUrl?: string;
  category?: string;
  tool?: string;
}

export interface Stat {
  label: string;
  value: string;
  desc: string;
}

export interface MetricDetail {
  label: string;
  value: string;
  growth: number; // percentage 0-100 for visual bar
  suffix?: string;
  color: string;
}

export interface CaseStudy {
  challenge: string;
  action: string;
  outcome: string;
}

export interface Referral {
  role: string;
  contact: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  link?: string;
  linkText?: string;
  caseStudy?: CaseStudy;
  detailedMetrics?: MetricDetail[];
  referral?: Referral;
  metrics: {
    icon: 'trending' | 'video' | 'bot' | 'check' | 'globe';
    label: string;
    desc: string;
  }[];
}