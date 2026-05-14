export interface OfferingDetail {
  id: string;
  sidebarLabel: string;
  title: string;
  definition: string;
  benefits: string[];
  coverage: { item: string; detail: string }[];
  pricing: { tier: string; cover?: string; premium: string; bestFor?: string }[];
  useCase: { title: string; desc: string };
  exclusions?: string[];
  howItWorks?: { step: string; title: string; desc: string }[];
  marketReality?: string;
  payoutStructure?: { condition: string; timeline: string; method: string }[];
  heroImages?: string[];
}

export interface SegmentData {
  id: string;
  sidebarLabel: string;
  title: string;
  content: {
    who: string[];
    pain: string[];
    solution: { check: string; val: string }[];
    roi: string;
    marketStats?: { label: string; value: string }[];
    checkTable?: { category: string; checks: { check: string; level: 'High' | 'Medium' | 'Low'; desc: string }[] }[];
    deepDive?: string;
    heroImages?: string[];
  };
}

export interface SolutionData {
  id: string;
  title: string;
  definition: string;
  whatItCovers: { risk: string; example: string }[];
  exclusions: string[];
  tiers: { tier: string; cover: string; premium: string; bestFor: string }[];
  useCase: string;
  whoShouldBuy: string[];
  comparison?: { feature: string; local: string; trustflows: string }[];
  faqs?: { q: string; a: string }[];
  heroImages?: string[];
}

export interface StakeholderData {
  id: string;
  title: string;
  role: string;
  needs: string[];
  solutions: string[];
  benefit: string;
  roiDetail?: string;
  process?: { stage: string; action: string }[];
  heroImages?: string[];
}

export interface OutcomeData {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  metrics: { label: string; value: string }[];
  longTermImpact?: string;
  heroImages?: string[];
}
