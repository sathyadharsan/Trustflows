import type { StakeholderData } from '../types/data';

export const stakeholders: StakeholderData[] = [
  {
    id: 'homebuyer',
    title: 'For First-Time Homebuyers',
    role: 'Ensuring Your Life Savings Are Safe',
    needs: [
      'Verification of clear title for bank loan approval',
      'Audit of hidden society or municipal dues',
      'Protection against fraudulent sellers',
      'Confidence in under-construction project delivery'
    ],
    solutions: [
      'AI Trust Report for Resale Flats',
      'Standard Title Insurance',
      'Milestone-Based Escrow for Peace of Mind'
    ],
    benefit: 'Save up to ₹15 Lakhs in hidden liabilities and avoid lifetime litigation.',
    roiDetail: 'On average, TrustFlows identifies ₹2.4L in hidden dues or compliance gaps per resale flat transaction.',
    process: [
      { stage: 'Audit', action: 'Upload draft deed or survey number for AI scan.' },
      { stage: 'Mitigation', action: 'We clear hidden dues with the seller before you pay.' },
      { stage: 'Closure', action: 'Complete registration with Title Insurance backing.' }
    ],
    heroImages: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600', // Happy home
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600', // Modern apartment
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600'  // Building
    ]
  },
  {
    id: 'nri',
    title: 'For NRIs & Remote Investors',
    role: 'Control Your India Assets From Anywhere',
    needs: [
      'Remote title verification without traveling to India',
      'Protection against squatters or unauthorized occupation',
      'Safe fund transfer via RBI-compliant escrow',
      'Regular geo-tagged physical asset monitoring'
    ],
    solutions: [
      'Digital Owner Insurance',
      'Remote NRI Escrow',
      'Quarterly Physical Verification Reports'
    ],
    benefit: 'Zero travel cost for verification and 100% protection against remote fraud.',
    roiDetail: 'Avoid the typical ₹1.5 Cr loss associated with long-term squatter litigation in metropolitan cities.',
    heroImages: [
      'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1600', // Travel/NRI
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600', // Work from anywhere
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600'  // Global city
    ]
  },
  {
    id: 'developer',
    title: 'For Developers & Real Estate Firms',
    role: 'Build Buyer Confidence & Speed Up Sales',
    needs: [
      'Third-party trust badge for project marketing',
      'Seamless escrow infrastructure for milestone payments',
      'Master title insurance to eliminate individual buyer doubts',
      'Automated RERA compliance tracking'
    ],
    solutions: [
      'Project-Level Title Insurance',
      'Developer Enterprise Escrow',
      'Buyer Confidence Trust Badge'
    ],
    benefit: '40% faster inventory liquidation and 25% lower customer acquisition cost.',
    roiDetail: 'Developer "Trust Score" projects see a 3x higher pre-launch booking rate than non-verified competitors.',
    heroImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600', // Architecture
      'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=1600', // Construction
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600'  // Design
    ]
  },
  {
    id: 'bank',
    title: 'For Banks & Financial Institutions',
    role: 'Lower NPA Risk & Automate Title Audits',
    needs: [
      'Instant collateral risk assessment (0-100 score)',
      '100% guarantee against mortgage loss due to title',
      'Standardized audit reports across 20 cities',
      'Real-time fraud alerts on survey numbers'
    ],
    solutions: [
      'Title Loan Guarantees',
      'Institutional Risk API',
      'Survey Number Fraud Monitor'
    ],
    benefit: 'Zero loss on title foreclosure and 50% faster loan TAT (Turnaround Time).',
    roiDetail: 'Reduction in title-related legal processing costs by ₹15,000 per loan file.',
    heroImages: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600', // Modern bank
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600', // Law/Finance
      'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1600'  // Office
    ]
  },
  {
    id: 'broker',
    title: 'For Real Estate Brokers & Agents',
    role: 'Close Deals Faster With Trust-Backed Property',
    needs: [
      'Third-party verification to resolve buyer doubts',
      'Instant trust score to justify premium pricing',
      'Safe escrow to secure brokerage commission',
      'Protection against title disputes that stall deals'
    ],
    solutions: [
      'Broker Trust Badge',
      'Instant Property Risk API',
      'Commission-Safe Escrow'
    ],
    benefit: 'Close 40% more deals and reduce transaction lifecycle by 15 days.',
    roiDetail: 'Brokers using TrustFlows reports see a 3x higher retention rate and zero post-sale legal friction.',
    process: [
      { stage: 'Listing', action: 'Verify your listing title with AI deep-scan.' },
      { stage: 'Trust', action: 'Showcase the Trust Badge to potential buyers.' },
      { stage: 'Payout', action: 'Close deal with commission secured via escrow.' }
    ],
    heroImages: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600', // Real estate
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600', // Meeting
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600'  // Handshake
    ]
  },
  {
    id: 'investor',
    title: 'For Real Estate Investors & Funds',
    role: 'Maximize ROI With Fully Insured Assets',
    needs: [
      'Institutional-grade title insurance for flip deals',
      'Bulk property risk scanning for portfolio acquisition',
      'Protection against historical litigation in high-value assets',
      'Unified risk reports for cross-city investments'
    ],
    solutions: [
      'Portfolio Risk Monitor',
      'Institutional Title Insurance',
      'Flip Protection Framework'
    ],
    benefit: 'Increase asset liquidity by 30% and eliminate capital-at-risk due to title gaps.',
    roiDetail: 'Investors using TrustFlows see a 12% higher exit valuation due to fully transferable, insured titles.',
    process: [
      { stage: 'Due Diligence', action: 'Scan entire portfolio for title and compliance gaps.' },
      { stage: 'Acquisition', action: 'Insure assets to remove historical litigation risk.' },
      { stage: 'Exit', action: 'Transfer insured, high-trust titles to secondary buyers.' }
    ],
    heroImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600', // Growth
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1600', // Analysis
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600'  // Assets
    ]
  }
];
