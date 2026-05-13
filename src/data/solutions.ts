export interface SolutionData {
  id: string;
  title: string;
  definition: string;
  whatItCovers: { risk: string; example: string }[];
  exclusions: string[];
  tiers: { tier: string; cover: string; premium: string; bestFor: string }[];
  useCase: string;
  whoShouldBuy: string[];
}

export const solutions: SolutionData[] = [
  {
    id: 'title-insurance',
    title: 'Title Insurance (IRDAI Aligned)',
    definition: 'A financial guarantee that protects legal ownership against defects that existed before the policy purchase date. If a third party challenges your ownership due to forgery, missing heirs, or Wakf claims, TrustFlows pays the insured amount + legal costs.',
    whatItCovers: [
      { risk: 'Forgery of signatures', example: 'Previous owner signature faked by an imposter' },
      { risk: 'Missing legal heirs', example: 'Long-lost family member claims share of property' },
      { risk: 'Wakf / Trust claims', example: 'Land declared as religious property by the board' },
      { risk: 'Undisclosed encumbrances', example: 'Existing mortgage hidden during sale' }
    ],
    exclusions: ['Defects created after purchase', 'Known defects ignored before buying', 'Zoning violations'],
    tiers: [
      { tier: 'Essential', cover: '₹25 Lakhs', premium: '0.15%', bestFor: 'Flats under ₹1 Cr' },
      { tier: 'Professional', cover: '₹1 Crore', premium: '0.12%', bestFor: 'Plots, houses up to ₹3 Cr' },
      { tier: 'Premium', cover: '₹5 Crores', premium: '0.10%', bestFor: 'Commercial assets' }
    ],
    useCase: 'Pune Case: Buyer purchased house; 3 years later, an heir sued claiming forgery. TrustFlows fought the case and protected the ₹2 Cr investment.',
    whoShouldBuy: ['Every property buyer', 'Investors', 'Banks']
  },
  {
    id: 'escrow',
    title: 'Digital Property Escrow',
    definition: 'An RBI-compliant trust account where buyer funds are held and released only after predefined conditions (like registration or construction milestones) are met.',
    whatItCovers: [
      { risk: 'Seller absconding', example: 'Seller takes advance but disappears before registration' },
      { risk: 'Fund diversion', example: 'Builder uses your flat payment for other projects' },
      { risk: 'Token fraud', example: 'Losing booking amount due to title defects' }
    ],
    exclusions: ['Transactions outside the platform', 'Direct cash payments'],
    tiers: [
      { tier: 'Resale Escrow', cover: 'Transaction Value', premium: '0.20% - 0.25%', bestFor: 'Secondary market deals' },
      { tier: 'Milestone Escrow', cover: 'Stage Payments', premium: '0.15%', bestFor: 'Under-construction flats' },
      { tier: 'Rental Escrow', cover: 'Security Deposit', premium: 'Fixed Fee', bestFor: 'Lease agreements' }
    ],
    useCase: 'Noida Case: Escrow held ₹40 Lakhs; builder tried to divert funds but failed. Project completed and delivered on time.',
    whoShouldBuy: ['Homebuyers', 'Developers', 'NRIs']
  },
  {
    id: 'digital-owner-insurance',
    title: 'Digital Owner Insurance',
    definition: 'Specialized protection for remote owners (NRIs & Investors) against risks like tenant non-payment, illegal subletting, and unauthorized occupation.',
    whatItCovers: [
      { risk: 'Rent default', example: 'Tenant stops paying rent for up to 12 months' },
      { risk: 'Squatter removal', example: 'Illegal occupants take over vacant property' },
      { risk: 'Document theft', example: 'Identity theft used to mortgage property remotely' }
    ],
    exclusions: ['Normal wear and tear', 'Unregistered rental agreements'],
    tiers: [
      { tier: 'Investor Care', cover: 'Rent + Legal', premium: '0.25%', bestFor: 'NRIs & Absentee landlords' }
    ],
    useCase: 'NRI in USA: Tenant in Gurgaon stopped paying. TrustFlows paid 10 months rent and covered legal eviction costs.',
    whoShouldBuy: ['NRIs', 'Absentee landlords', 'Senior citizens']
  },
  {
    id: 'loan-guarantee',
    title: 'Title Loan Guarantees',
    definition: 'A credit enhancement product that guarantees repayment to banks if the property title fails, allowing for loan approvals even on properties with minor gaps.',
    whatItCovers: [
      { risk: 'Lender mortgage loss', example: 'Bank loses collateral due to title defect' },
      { risk: 'Weak title rejection', example: 'Loans rejected due to minor B-Khata or layout issues' }
    ],
    exclusions: ['Credit defaults unrelated to title', 'Willful defaults'],
    tiers: [
      { tier: 'Lender Tier', cover: 'Outstanding Loan', premium: '0.10%', bestFor: 'Banks & NBFCs' }
    ],
    useCase: 'Bangalore Case: Loan rejected for B-Khata. TrustFlows issued guarantee; bank approved loan immediately.',
    whoShouldBuy: ['Banks', 'NBFCs', 'High-risk borrowers']
  },
  {
    id: 'segment-ai',
    title: 'Segment-Specific AI Models',
    definition: 'Custom-trained algorithms for different property types (Flats, Plots, Commercial, Layouts) to identify segment-specific risks like illegal floors or forged grants.',
    whatItCovers: [
      { risk: 'Illegal alterations', example: 'Flat AI checks sanctioned plan vs actual construction' },
      { risk: 'Fake grants', example: 'Plot AI verifies 1920s-1960s original land records' },
      { risk: 'Zoning violations', example: 'Commercial AI checks business license continuity' }
    ],
    exclusions: ['Subjective aesthetic quality', 'Structural engineering audits'],
    tiers: [
      { tier: 'Basic Report', cover: 'Data Insights', premium: '₹7,999', bestFor: 'Individual buyers' }
    ],
    useCase: 'Surat Case: AI flagged developer mortgaging entire land secretly. Saved 30 buyers ₹8 Crores.',
    whoShouldBuy: ['Homebuyers', 'Developers']
  },
  {
    id: 'city-engines',
    title: 'City-Trained Risk Engines',
    definition: 'Proprietary risk models trained on localized land records and local laws of 20 major Indian cities to catch city-specific frauds like SRA or A/B Khata.',
    whatItCovers: [
      { risk: 'SRA transfer risks', example: 'Mumbai model knows slum rehabilitation restrictions' },
      { risk: 'Khata confusion', example: 'Bangalore model flags B-Khata loan risks' },
      { risk: 'Zamindari abolition', example: 'Kolkata model traces Bargee title systems' }
    ],
    exclusions: ['International jurisdictions', 'Rural areas outside top 20 cities'],
    tiers: [
      { tier: 'City Intelligence', cover: 'Local Data', premium: 'Included', bestFor: 'Every property search' }
    ],
    useCase: 'Mumbai Case: AI found SRA flat being sold illegally within the 10-year lock-in period.',
    whoShouldBuy: ['Homebuyers', 'Banks', 'Brokers']
  },
  {
    id: 'legal-defense',
    title: 'Integrated Legal Defense',
    definition: 'A protection product that covers all your legal expenses if your property ownership is challenged in court after purchase.',
    whatItCovers: [
      { risk: 'Lawyer fees', example: 'Payout for high-court senior advocates' },
      { risk: 'Court filing fees', example: 'Stamp duty and document processing costs' },
      { risk: 'Expert witnesses', example: 'Surveyor and forensic document expert fees' }
    ],
    exclusions: ['Post-purchase illegal activity', 'Non-property related litigation'],
    tiers: [
      { tier: 'Essential Defense', cover: '₹5 Lakhs', premium: '₹3,000/yr', bestFor: 'Individual owners' },
      { tier: 'Enterprise Defense', cover: '₹25 Lakhs', premium: 'Custom', bestFor: 'Commercial buildings' }
    ],
    useCase: 'Lucknow Case: Neighbor filed boundary dispute. TrustFlows assigned lawyer and covered all ₹3.5 Lakh expenses.',
    whoShouldBuy: ['Property owners', 'Absentee landlords', 'NRIs']
  }
];

