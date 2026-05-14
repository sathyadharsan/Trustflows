export interface ProblemData {
  id: string;
  title: string;
  segment: string;
  uniqueRisk: string;
  typicalLoss: string;
  detailedAnalysis: string;
  cityContext: {
    city: string;
    specificRisk: string;
  }[];
  mitigationSteps?: string[];
  riskIndicators?: { label: string; value: string }[];
  heroImages?: string[];
}

export const problems: ProblemData[] = [
  {
    id: 'resale-flat',
    segment: 'Resale Flat (Apartment)',
    title: 'Undisclosed Dues & Illegal Alterations',
    uniqueRisk: 'Undisclosed society dues, pending property tax, illegal alterations',
    typicalLoss: '₹2-10 Lakhs',
    detailedAnalysis: 'Homebuyers often inherit massive liabilities from previous owners. Societies may have internal disputes that block transfers, and municipal authorities can impose heavy fines for alterations made years ago.',
    cityContext: [
      { city: 'Mumbai', specificRisk: 'SRA transfer restrictions and pending society maintenance' },
      { city: 'Bangalore', specificRisk: 'A-Khata vs B-Khata confusion and property tax arrears' }
    ],
    riskIndicators: [
      { label: 'Litigation Rate', value: '42%' },
      { label: 'Title Forgery', value: 'High' },
      { label: 'Avg Recovery', value: '3.5 yrs' }
    ],
    mitigationSteps: [
      'Society No-Objection Certificate (NOC) verification',
      'Municipal tax assessment & arrears audit',
      'Architectural sanctioned plan vs actual deviation check'
    ],
    heroImages: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1600',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600'
    ]
  },
  {
    id: 'freehold-plot',
    segment: 'Freehold Plot',
    title: 'Forged Deeds & Ancestral Claims',
    uniqueRisk: 'Fake mother deed, missing inheritance chain, Wakf board claim',
    typicalLoss: '₹15 Lakhs – ₹2 Crores',
    detailedAnalysis: 'Vacant land is the highest risk segment. Forged documents can trace back decades, and a single missing heir in a 50-year chain can void your current ownership entirely.',
    cityContext: [
      { city: 'Hyderabad', specificRisk: 'Historical Wakf board claims and forged Jagir titles' },
      { city: 'Jaipur', specificRisk: 'JDA leasehold complexities and ancestral land disputes' }
    ],
    riskIndicators: [
      { label: 'Deed Forgery', value: '68%' },
      { label: 'Ancestral Claims', value: 'Very High' },
      { label: 'Asset Loss Risk', value: '100%' }
    ],
    mitigationSteps: [
      '50-year Title Chain Audit using AI deep-scan',
      'Public notice in leading vernacular newspapers',
      'Physical site verification & boundary wall audit'
    ],
    heroImages: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600',
      'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=1600',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600'
    ]
  },
  {
    id: 'freehold-layout',
    segment: 'Freehold Layout',
    title: 'Unapproved Plans & Infrastructure Gaps',
    uniqueRisk: 'Unapproved layout plan, missing DC conversion, no completion certificate',
    typicalLoss: '₹25 Lakhs – ₹5 Crores',
    detailedAnalysis: 'Developers often sell plots before obtaining final DC conversion or layout approvals from bodies like DTCP or BMRDA. Buyers end up with land that cannot be legally built upon.',
    cityContext: [
      { city: 'Surat', specificRisk: 'TP scheme deviations and unapproved layout infrastructure' },
      { city: 'Chennai', specificRisk: 'DTCP approval vs local body approval conflicts' }
    ],
    riskIndicators: [
      { label: 'Approval Deficit', value: '55%' },
      { label: 'Infra Arrears', value: 'High' },
      { label: 'Marketability', value: 'Low' }
    ],
    mitigationSteps: [
      'Layout LP Number verification with town planning',
      'DC conversion (Land Use) authenticity check',
      'External infrastructure (Road/Sewage) sanctioned vs actual'
    ],
    heroImages: [
      'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=1600',
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600'
    ]
  },
  {
    id: 'commercial',
    segment: 'Commercial Property',
    title: 'Zoning Violations & Tenancy Risks',
    uniqueRisk: 'Illegal tenancy, pending GST/octroi, title defects affecting business license',
    typicalLoss: '₹50 Lakhs – ₹10 Crores',
    detailedAnalysis: 'Commercial deals involve complex GST liabilities and land-use restrictions. Operating a business on a property with a residential zone status can lead to immediate shutdown.',
    cityContext: [
      { city: 'Delhi', specificRisk: 'Mixed-use zoning violations and sealing risks' },
      { city: 'Kolkata', specificRisk: 'Old tenancy laws and Bargee system complexities' }
    ],
    riskIndicators: [
      { label: 'Zoning Error', value: '38%' },
      { label: 'GST Liabilities', value: 'High' },
      { label: 'License Risk', value: 'Severe' }
    ],
    mitigationSteps: [
      'Commercial Usage Certificate & Zoning audit',
      'Tenant agreement & litigation history check',
      'GST & Property Tax commercial rate clearance'
    ],
    heroImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600'
    ]
  },
  {
    id: 'under-construction',
    segment: 'Developer Flat (Under Construction)',
    title: 'Fund Diversion & RERA Violations',
    uniqueRisk: 'Delayed possession, builder diversion of funds, RERA violation',
    typicalLoss: '₹10-50 Lakhs',
    detailedAnalysis: 'Despite RERA, developers often struggle with fund management. Diversion of buyer advances to other projects is the primary cause of stalled construction in India.',
    cityContext: [
      { city: 'Noida', specificRisk: 'Large-scale stalled projects and land title disputes' },
      { city: 'Gurugram', specificRisk: 'RERA compliance gaps and delivery delays' }
    ],
    riskIndicators: [
      { label: 'Delay Rate', value: '42%' },
      { label: 'Fund Diversion', value: 'High' },
      { label: 'RERA Gaps', value: '30%' }
    ],
    mitigationSteps: [
      'Developer track record & financial health scan',
      'RERA Quarterly Progress Report (QPR) audit',
      'Project land title & loan encumbrance check'
    ],
    heroImages: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600'
    ]
  },
  {
    id: 'independent-house',
    segment: 'Resale Independent House',
    title: 'Deviation from Sanctioned Plans',
    uniqueRisk: 'Unauthorized floors, deviation from sanctioned plan, easement rights disputes',
    typicalLoss: '₹20 Lakhs – ₹1 Crore',
    detailedAnalysis: 'Most independent houses in India have some form of deviation from the sanctioned plan. Extra floors or covered balconies create demolition risks and block bank loans.',
    cityContext: [
      { city: 'Lucknow', specificRisk: 'Easement rights disputes and missing OC for bungalows' },
      { city: 'Pune', specificRisk: 'Gram Panchayat vs PMRDA approval overlaps' }
    ],
    riskIndicators: [
      { label: 'Plan Deviation', value: '75%' },
      { label: 'Demolition Risk', value: 'Med' },
      { label: 'Loan Block', value: 'High' }
    ],
    mitigationSteps: [
      'Sanctioned plan vs site measurement audit',
      'Easement rights & neighbor dispute check',
      'Municipal occupancy certificate (OC) verification'
    ],
    heroImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600'
    ]
  },
  {
    id: 'govt-scheme',
    segment: 'Govt Schemes (DDA/MHADA)',
    title: 'Leasehold Restrictions & Succession Gaps',
    uniqueRisk: 'Long leasehold terms, illegal sub-sales, pending lease rent arrears',
    typicalLoss: '₹10 Lakhs – ₹1.5 Crores',
    detailedAnalysis: 'Government scheme properties often have complex transfer rules. Buyers frequently overlook pending lease rent or fail to verify if the original allottee had valid possession.',
    cityContext: [
      { city: 'Delhi', specificRisk: 'DDA unauthorized colonies and lease-to-freehold conversion gaps' },
      { city: 'Mumbai', specificRisk: 'MHADA leasehold transfer bans and society redevelopment disputes' }
    ],
    riskIndicators: [
      { label: 'Transfer Gap', value: '25%' },
      { label: 'Lease Arrears', value: 'High' },
      { label: 'Eviction Risk', value: 'Low' }
    ],
    mitigationSteps: [
      'Allotment letter & Possession certificate audit',
      'Lease rent & Ground rent arrears clearance',
      'Succession chain & legal heir verification'
    ],
    heroImages: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600',
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1600',
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1600'
    ]
  }
];
