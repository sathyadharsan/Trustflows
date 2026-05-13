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
}

export const offeringData: OfferingDetail[] = [
  {
    id: 'title-insurance',
    sidebarLabel: 'Title Insurance',
    title: 'IRDAI-Aligned Title Insurance',
    definition: 'A financial guarantee that protects legal ownership against pre-existing defects. If a third party challenges your ownership due to past forgery, missing heirs, or Wakf claims, TRUSTFLOWS covers the insured amount + legal costs.',
    benefits: [
      'Protects against retrospective risks (pre-purchase defects)',
      'Covers 100% of legal defense costs in court',
      'One-time premium for lifetime protection',
      'Eliminates the need for 100% perfect manual due diligence'
    ],
    coverage: [
      { item: 'Forgery & Fraud', detail: 'Faked signatures or fraudulent impersonation of the true owner.' },
      { item: 'Missing Heirs', detail: 'Undisclosed legal heirs claiming ownership rights years later.' },
      { item: 'Invalid POA', detail: 'Sale deeds based on revoked or forged Power of Attorney.' },
      { item: 'Wakf/Govt Claims', detail: 'Land declared as Wakf or notified for govt acquisition.' }
    ],
    pricing: [
      { tier: 'Essential', cover: '₹25 Lakhs', premium: '0.15%', bestFor: 'Flats under ₹1 Cr' },
      { tier: 'Professional', cover: '₹1 Crore', premium: '0.12%', bestFor: 'Plots, houses up to ₹3 Cr' },
      { tier: 'Enterprise', cover: '₹25 Cr+', premium: 'Custom', bestFor: 'Commercial towers, bulk deals' }
    ],
    useCase: {
      title: 'The Pune Case',
      desc: 'Buyer bought a ₹2 Cr house. 3 years later, an undisclosed heir sued claiming a forged 1990 sale deed. TRUSTFLOWS fought the case and paid the full sum when the title failed.'
    },
    exclusions: ['Defects created after purchase', 'Environmental hazards', 'Market value downturn']
  },
  {
    id: 'escrow',
    sidebarLabel: 'Escrow Services',
    title: 'Digital Property Escrow',
    definition: 'RBI-compliant trust accounts where funds are held and released only after predefined conditions (like registration or construction milestones) are met, eliminating payment fraud.',
    benefits: [
      'Zero fund diversion by builders',
      'Safe payment for resale deals',
      'RBI & RERA compliant infrastructure',
      'Automated release on document verification'
    ],
    coverage: [
      { item: 'Buyer-Seller Escrow', detail: 'Released on registration of sale deed + possession.' },
      { item: 'Milestone Escrow', detail: 'Released on verified construction stages (Under-construction).' },
      { item: 'NRI Remote Escrow', detail: 'Safe cross-border deals with POA verification.' },
      { item: 'Token Advance', detail: 'Refunds if title defect is found during due diligence.' }
    ],
    pricing: [
      { tier: 'Up to ₹50L', premium: '0.25%', bestFor: 'Min ₹5,000' },
      { tier: '₹50L - ₹2 Cr', premium: '0.20%', bestFor: 'Standard residential' },
      { tier: 'Above ₹10 Cr', premium: '0.10%-0.12%', bestFor: 'Institutional/Bulk' }
    ],
    useCase: {
      title: 'Noida Project Protection',
      desc: '100 buyers used escrow. Builder tried to divert funds at 40% construction. Escrow blocked release until milestones were verified. Project finished on time.'
    }
  },
  {
    id: 'prop-insurance',
    sidebarLabel: 'Property Insurance',
    title: 'Structural & Asset Protection',
    definition: 'Traditional property insurance that protects the physical building and its contents from damage due to fire, natural disasters, or theft. Focuses on bricks, mortar, and belongings.',
    benefits: [
      '24x7 WhatsApp claim intimation',
      'Surveyor assigned within 48 hours',
      'Fast settlement (7-15 working days)',
      'Covers structural repair and interior loss'
    ],
    coverage: [
      { item: 'Natural Perils', detail: 'Fire, earthquake, flood, storm, and lightning.' },
      { item: 'Theft & Burglary', detail: 'Loss of furniture, electronics, and valuables.' },
      { item: 'Pipe Bursts', detail: 'Water damage from plumbing or tank leakages.' },
      { item: 'Impact Damage', detail: 'Damage from vehicles crashing into the structure.' }
    ],
    pricing: [
      { tier: 'Basic', premium: '₹2,500/yr', bestFor: 'Structure only (Up to ₹1Cr)' },
      { tier: 'Standard', premium: '₹5,000/yr', bestFor: 'Structure + Contents (Up to ₹3Cr)' },
      { tier: 'Comprehensive', premium: '₹12,000/yr', bestFor: 'All risks (Up to ₹10Cr+)' }
    ],
    useCase: {
      title: 'Chennai Flood Recovery',
      desc: 'Ground floor villa submerged in floods. TRUSTFLOWS processed a ₹8 Lakh claim for structural repair and damaged furniture within 10 days.'
    }
  },
  {
    id: 'digital-owner',
    sidebarLabel: 'Digital Owner Insurance',
    title: 'Digital Owner (NRI Protection)',
    definition: 'Specialized insurance for NRIs and investors to protect against risks of owning property remotely, including tenant issues and unauthorized occupation.',
    benefits: [
      'Protects against rent default',
      'Covers legal fees for squatter eviction',
      'Reimbursement for document recreation',
      'Indemnity against remote identity theft'
    ],
    coverage: [
      { item: 'Rent Default', detail: 'Up to 12 months rent payout if tenant stops paying.' },
      { item: 'Squatter Removal', detail: 'Police + legal assistance to remove illegal occupants.' },
      { item: 'Eviction Costs', detail: 'Covers court fees and lawyer charges for eviction.' },
      { item: 'Broker Fraud', detail: 'Protection against local agents absconding with rent.' }
    ],
    pricing: [
      { tier: 'Standard Plan', premium: '0.25%/year', bestFor: 'Min ₹5,000' }
    ],
    useCase: {
      title: 'Gurgaon NRI Success',
      desc: 'NRI in USA had a tenant who stopped paying. TRUSTFLOWS paid 10 months of lost rent and managed the legal eviction process remotely.'
    }
  },
  {
    id: 'loan-guarantee',
    sidebarLabel: 'Loan Guarantees',
    title: 'Lender & Borrower Guarantees',
    definition: 'A credit enhancement product that guarantees loan repayment if the title fails. It enables banks to lend on properties with minor title gaps or B-Khata issues.',
    benefits: [
      'Lower NPA risk for banks',
      'Enable loans on disputed/weak titles',
      'Faster developer sales through bank tie-ups',
      'Repayment guarantee if project is delayed'
    ],
    coverage: [
      { item: 'Lender Title Guarantee', detail: 'Protects bank\'s mortgage interest against title defects.' },
      { item: 'Buyer Loan Guarantee', detail: 'Guarantees repayment if project is delayed >12 months.' },
      { item: 'B-Khata Lending', detail: 'Enables financing for properties with minor administrative gaps.' },
      { item: 'Default Protection', detail: 'Payout to lender if property is lost to a title dispute.' }
    ],
    pricing: [
      { tier: 'Lender Tier', premium: '0.10%', bestFor: 'One-time on loan amount' }
    ],
    useCase: {
      title: 'Bangalore B-Khata Loan',
      desc: 'Buyer rejected by 3 banks for B-Khata. TRUSTFLOWS issued a title guarantee. Bank approved the loan within 7 days.'
    }
  },
  {
    id: 'legal-defense',
    sidebarLabel: 'Legal Defense',
    title: 'Legal Defense Insurance',
    definition: 'Covers the high cost of defending your ownership in court, regardless of whether the defect is covered by title insurance. Essential for boundary or frivolous claims.',
    benefits: [
      'Covers lawyer fees (up to ₹5 Lakhs)',
      'Covers court fees and stamp duties',
      'Expert witness & surveyor costs included',
      'Counter-suit legal support'
    ],
    coverage: [
      { item: 'Boundary Disputes', detail: 'Defending against neighbor\'s encroachment claims.' },
      { item: 'Frivolous Suits', detail: 'Fighting false claims from previous owners\' heirs.' },
      { item: 'Demolition Notices', detail: 'Challenging unauthorized municipal notices in court.' },
      { item: 'RERA Complaints', detail: 'Legal help to file complaints against developers.' }
    ],
    pricing: [
      { tier: 'Standalone', premium: '₹3,000/yr', bestFor: 'Basic residential' },
      { tier: 'Add-on', premium: '+15%', bestFor: 'Added to Title Insurance' }
    ],
    useCase: {
      title: 'Kolkata Land Dispute',
      desc: 'Neighbor filed a false claim on a common wall. TRUSTFLOWS assigned a senior lawyer and covered ₹1.2 Lakhs in court costs. Dispute settled in 6 months.'
    }
  },
  {
    id: 'fraud-monitoring',
    sidebarLabel: 'Fraud Monitoring',
    title: 'Post-Purchase Monitoring',
    definition: 'Continuous surveillance of land records and court registries to alert you the moment any fraudulent activity is attempted on your property.',
    benefits: [
      'Real-time SMS/Email alerts',
      'Automatic freeze requests to registrars',
      'Early detection of "fake mortgage" attempts',
      'Investigation support by legal team'
    ],
    coverage: [
      { item: 'Registration Alerts', detail: 'If anyone tries to register a sale deed on your survey number.' },
      { item: 'Mortgage Monitor', detail: 'Detection of loans taken using your property as collateral.' },
      { item: 'Tax Record Changes', detail: 'Alerts if ownership name changes in municipal records.' },
      { item: 'Litigation Scan', detail: 'If any new court case mentions your property.' }
    ],
    pricing: [
      { tier: '1st Property', premium: '₹1,999/yr', bestFor: 'Main residence' },
      { tier: 'Additional', premium: '₹999/yr', bestFor: 'Investment units' }
    ],
    useCase: {
      title: 'Jaipur Plot Alert',
      desc: 'Owner received alert that someone tried to update tax records for his vacant plot. TRUSTFLOWS legal team intervened at the municipal office, stopping a fraudulent sale.'
    }
  },
  {
    id: 'trust-report',
    sidebarLabel: 'Risk & Trust Score',
    title: 'AI Risk Intelligence Report',
    definition: 'The foundation of trust — a deep-dive AI report giving a score of 0-100 after analyzing 50 years of title history, encumbrances, and local risks.',
    benefits: [
      '99.1% data accuracy guarantee',
      'Unified property trust score',
      'Detailed 50-year title chain chain',
      'Segment-specific risk algorithms'
    ],
    coverage: [
      { item: 'Title Chain (50yr)', detail: 'Tracing from original govt grant to current seller.' },
      { item: 'Litigation Search', detail: 'Scanning 10,000+ courts for survey-specific cases.' },
      { item: 'Govt DB Connectors', detail: 'Live sync with DILRMP, RERA, and Land Records.' },
      { item: 'Local Risk Scan', detail: 'Wakf, Acquisition, and Zoning overlap checks.' }
    ],
    pricing: [
      { tier: 'Resale Flat', premium: '₹7,999', bestFor: '48hr delivery' },
      { tier: 'Freehold Plot', premium: '₹24,999', bestFor: '72hr delivery' },
      { tier: 'Commercial', premium: '₹49,999', bestFor: '5-day delivery' }
    ],
    useCase: {
      title: 'Tellapur Plot Scan',
      desc: 'AI flagged a 1987 Wakf board claim hidden in old registers. Buyer avoided a ₹3.5 Cr loss on a "clear" plot.'
    }
  }
];
