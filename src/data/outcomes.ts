import type { OutcomeData } from '../types/data';

export const outcomes: OutcomeData[] = [
  {
    id: 'zero-fraud',
    title: 'Zero Title Fraud Guarantee',
    description: 'We eliminate the possibility of title forgery or fraud by using cross-verified AI audits of historical land records and regional court logs.',
    benefits: [
      '100% protection against faked signatures',
      'Insurance-backed payout if fraud is detected post-purchase',
      'Unified ownership chain verification for 50+ years'
    ],
    metrics: [
      { label: 'Loss Avoided', value: '₹1.5T Annually' },
      { label: 'Fraud Detection', value: '99.1% Accuracy' }
    ],
    longTermImpact: 'A clean title is the only way to ensure your property remains a liquid asset for future resale or inheritance.',
    heroImages: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600', // Property
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600', // Modern apartment
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600'  // Secure contract
    ]
  },
  {
    id: 'legal-clarity',
    title: 'Lifetime Legal Clarity',
    description: 'Your property documents are not just deeds; they are "Court-Proof" records verified by TrustFlows legal intelligence engines.',
    benefits: [
      'Zero risk of future inheritance partition suits',
      'Compliance with 100+ local municipal and zoning laws',
      'Instant access to digital legal audit trail'
    ],
    metrics: [
      { label: 'Litigation Risk', value: '-85% Reduction' },
      { label: 'Doc Verification', value: '30+ Record Types' }
    ],
    longTermImpact: 'Property with "Legal Clarity" status commands a 15-20% higher market premium during resale.',
    heroImages: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600', // Law
      'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1600', // Courtroom
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600'  // Legal docs
    ]
  },
  {
    id: 'safe-transfer',
    title: '100% Safe Fund Transfers',
    description: 'Our RBI-compliant escrow infrastructure ensures your money moves only when the legal title is confirmed.',
    benefits: [
      'Eliminates token money fraud',
      'Secures milestone payments for developers',
      'Full refund in 24 hours if title gaps are found'
    ],
    metrics: [
      { label: 'Payment Success', value: '100.0%' },
      { label: 'Refund Speed', value: 'Under 24 Hours' }
    ],
    heroImages: [
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600', // Finance
      'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1600', // Bank
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600'  // Security
    ]
  },
  {
    id: 'fast-delivery',
    title: '48-Hour Outcome Delivery',
    description: 'The fastest verification engine in India. What takes traditional lawyers 21 days, we deliver in under 48 hours without compromising on depth.',
    benefits: [
      'Real-time automated registry scanning',
      'Parallel processing across 20 cities',
      'Priority delivery for urgent registrations'
    ],
    metrics: [
      { label: 'TAT Improvement', value: '10X Faster' },
      { label: 'Avg Delivery', value: '38.5 Hours' }
    ],
    longTermImpact: 'Speed in property transactions allows you to capture market opportunities before they vanish.',
    heroImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600', // Analytics
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600', // Speed/Growth
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1600'  // Efficient work
    ]
  },
  {
    id: 'trust-score',
    title: 'Universal AI Trust Score',
    description: 'A 0-100 objective score for every property. One number that tells you if a property is a "Buy", "Caution", or "Reject".',
    benefits: [
      'Eliminates subjective bias in legal opinions',
      'Standardized risk benchmark for banks and buyers',
      'Easy-to-understand risk visualization'
    ],
    metrics: [
      { label: 'Score Reliability', value: '98.5%' },
      { label: 'Data Points Scanned', value: '5,000+' }
    ],
    longTermImpact: 'A high TrustFlows score is becoming the gold standard for property bankability across India.',
    heroImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600', // Data
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600', // Scoring
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1600'  // Analysis
    ]
  },
  {
    id: 'irdai-coverage',
    title: 'IRDAI-Backed Asset Protection',
    description: 'Every Title and Property insurance issued through TrustFlows is backed by A+ rated Indian insurers aligned with IRDAI regulations.',
    benefits: [
      'Financial indemnity for historical ownership gaps',
      'Legal defense cost coverage up to Sum Insured',
      'Claims settled by regulated Indian insurance entities'
    ],
    metrics: [
      { label: 'Claim Settlement', value: '98.2%' },
      { label: 'Insurer Rating', value: 'A+ Rated' }
    ],
    longTermImpact: 'Institutional-grade protection ensures your property remains a risk-free collateral for any financial institution.',
    heroImages: [
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600', // Policy
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600', // Protection
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600'  // Shielded asset
    ]
  }
];
