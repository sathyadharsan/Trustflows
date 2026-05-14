import type { SolutionData } from '../types/data';

export const solutions: SolutionData[] = [
  {
    id: 'segment-ai',
    title: 'Segment-Specific AI Models',
    definition: 'We don\'t use a "one-size-fits-all" approach. Every property segment in India — from SRA flats to Freehold Plots — has its own AI model trained on unique risk signatures.',
    whatItCovers: [
      { risk: 'Flat AI', example: 'Detects society internal dues and illegal alterations.' },
      { risk: 'Plot AI', example: 'Verifies 50-year mother deed chain and genealogy.' },
      { risk: 'Commercial AI', example: 'Audit of zoning masterplans and business liabilities.' },
      { risk: 'Layout AI', example: 'Checks DTCP/TP approvals and public space encroachment.' }
    ],
    exclusions: ['Subjective quality of construction', 'Internal décor and furniture valuation'],
    tiers: [
      { tier: 'Quick Scan', cover: 'Limited Audit', premium: '₹7,999', bestFor: 'Resale Flats' },
      { tier: 'Deep Audit', cover: 'Full History', premium: '₹19,999+', bestFor: 'Plots & Villas' }
    ],
    useCase: 'Bangalore Case: Plot AI flagged a "Gift Deed" from 1984 as suspicious. Manual audit confirmed forgery. Saved ₹2 Crores.',
    whoShouldBuy: ['Homebuyers', 'Investors', 'Banks'],
    comparison: [
      { feature: 'Search Depth', local: 'Only registry records', trustflows: 'Court logs + RERA + Revenue records' },
      { feature: 'Turnaround', local: '15-20 Days', trustflows: '48-72 Hours' }
    ],
    faqs: [
      { q: 'How is your AI different from a lawyer?', a: 'Lawyers check only current deeds. Our AI checks the entire 50-year history and cross-references court cases instantly.' },
      { q: 'Which cities do you cover?', a: 'Currently live in 20 major Indian cities with city-trained models.' }
    ],
    heroImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1600'
    ]
  },
  {
    id: 'city-engines',
    title: 'City-Trained Risk Engines',
    definition: 'Every city in India has its own "land DNA". Our models are trained on the specific laws and frauds of 20 major Indian cities.',
    whatItCovers: [
      { risk: 'Mumbai Engine', example: 'SRA transfer rules and MHADA leasehold audits.' },
      { risk: 'Bangalore Engine', example: 'A/B Khata confusion and BDA layout authenticities.' },
      { risk: 'Hyderabad Engine', example: 'Dharani portal checks and Wakf board claims.' },
      { risk: 'Delhi Engine', example: 'DDA unauthorized colonies and lease-to-freehold conversion.' }
    ],
    exclusions: ['Cities outside the top 20', 'Rural agricultural land far from urban limits'],
    tiers: [
      { tier: 'Standard', cover: 'Full City Access', premium: 'Included in Report', bestFor: 'Every property' }
    ],
    useCase: 'Mumbai Case: AI found SRA flat being sold illegally within the 10-year lock-in period. Buyer avoided police case.',
    whoShouldBuy: ['Homebuyers', 'Banks', 'Brokers'],
    heroImages: [
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1600',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600'
    ]
  },
  {
    id: 'title-insurance',
    title: 'Universal Title Insurance',
    definition: 'Integrated protection that shields your ownership for a lifetime. If a pre-existing defect arises, we fight the case and pay you if you lose.',
    whatItCovers: [
      { risk: 'Forgery', example: 'Faked signatures in the chain of ownership.' },
      { risk: 'Missing Heirs', example: 'Claims from family members not in the original deed.' },
      { risk: 'Government Claims', example: 'Undisclosed acquisition or tax liens.' }
    ],
    exclusions: ['Post-purchase illegal acts', 'Environmental changes'],
    tiers: [
      { tier: 'Standard', cover: '₹25L to ₹5Cr+', premium: '0.10% to 0.15%', bestFor: 'All buyers' }
    ],
    useCase: 'Pune Case: 20-year old claim surfaced. TrustFlows paid ₹3.5L legal costs and won the case.',
    whoShouldBuy: ['Homebuyers', 'Investors', 'NRIs'],
    heroImages: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600',
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600'
    ]
  },
  {
    id: 'escrow',
    title: 'Digital Milestone Escrow',
    definition: 'An RBI-compliant financial trust layer that holds buyer funds and releases them to sellers or developers only when pre-defined legal or construction milestones are verified by our AI.',
    whatItCovers: [
      { risk: 'Token Protection', example: 'Booking amount is held until preliminary title report is green-lit.' },
      { risk: 'Milestone Payouts', example: 'Construction funds released only after RERA stage verification.' },
      { risk: 'Registration Security', example: 'Final payout triggered only after IGR portal confirms deed registration.' }
    ],
    exclusions: ['Direct cash transactions outside the system', 'Interest on held funds'],
    tiers: [
      { tier: 'Standard', cover: 'Full Transaction', premium: '0.15% - 0.25%', bestFor: 'Resale & Primary Purchases' }
    ],
    useCase: 'Noida Case: Developer tried to divert funds to a different project. Escrow blocked the transfer as the milestone was not met. Saved ₹40 Lakhs.',
    whoShouldBuy: ['Homebuyers', 'Developers', 'Banks'],
    heroImages: [
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600',
      'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1600',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600'
    ]
  },
  {
    id: 'legal-defense',
    title: 'Integrated Legal Defense',
    definition: 'A comprehensive legal protection suite that covers 100% of lawyer fees, court costs, and expert witness expenses if your property ownership is ever challenged.',
    whatItCovers: [
      { risk: 'Civil Disputes', example: 'Missing heir or boundary wall litigation in civil courts.' },
      { risk: 'Administrative Appeals', example: 'Challenges to municipal approvals or zoning changes.' },
      { risk: 'Forensic Experts', example: 'Costs for handwriting and document authentication experts.' }
    ],
    exclusions: ['Pre-existing litigation known before policy purchase', 'Criminal acts by the owner'],
    tiers: [
      { tier: 'Defense Shield', cover: 'Unlimited Legal Costs', premium: '₹3,000/yr onwards', bestFor: 'All Asset Owners' }
    ],
    useCase: 'Lucknow Case: A neighbor filed a stay order based on a fake 1990 partition deed. Our empanelled High Court lawyer vacated the stay in 14 days.',
    whoShouldBuy: ['Homebuyers', 'Plot Owners', 'Commercial Investors'],
    heroImages: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600',
      'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1600',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600'
    ]
  }
];
