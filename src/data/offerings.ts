import type { OfferingDetail } from '../types/data';

export const offeringData: OfferingDetail[] = [
  {
    id: 'title-insurance',
    sidebarLabel: 'Title Insurance',
    title: 'Title Insurance (IRDAI Aligned Protection)',
    definition: 'A financial guarantee that protects legal ownership against defects that existed before the policy purchase date. If a third party challenges your ownership due to forgery, missing heirs, or Wakf claims, TrustFlows pays the insured amount + legal costs.',
    benefits: [
      'Protects against forgery of signatures by previous owners',
      'Covers undisclosed heirs claiming inheritance rights',
      'Shields against historical Wakf or religious trust claims',
      'Protects against undisclosed mortgages or liens',
      'Covers errors in official land records or registration'
    ],
    coverage: [
      { item: 'Forgery & Fraud', detail: 'Signature forgery, impersonation, or fake mother deeds used in previous transactions.' },
      { item: 'Missing Heirs', detail: 'Claims from long-lost family members or undisclosed legal heirs of previous owners.' },
      { item: 'Statutory Liens', detail: 'Undisclosed government dues, tax arrears, or court attachments on the property.' },
      { item: 'Boundary Disputes', detail: 'Legal defense costs if neighbors challenge property boundaries post-purchase.' }
    ],
    pricing: [
      { tier: 'Essential', cover: '₹25 Lakhs', premium: '0.15% (One-time)', bestFor: 'Resale Flats under ₹1 Cr' },
      { tier: 'Professional', cover: '₹1 Crore', premium: '0.12% (One-time)', bestFor: 'Plots, houses up to ₹3 Cr' },
      { tier: 'Premium', cover: '₹5 Crores+', premium: '0.10% (One-time)', bestFor: 'Commercial buildings & large portfolios' }
    ],
    useCase: {
      title: 'The Pune Forgery Case',
      desc: 'A buyer purchased a house in 2021. In 2024, a person claiming to be the son of a 1980s owner sued, alleging his father\'s signature was forged. TrustFlows assigned a high-court lawyer and protected the ₹2 Cr investment.'
    },
    exclusions: [
      'Defects created after the policy purchase date',
      'Known defects disclosed to the buyer before purchase',
      'Zoning and land-use law changes post-purchase',
      'Environmental liabilities unrelated to title'
    ],
    howItWorks: [
      { step: '01', title: 'Deep Audit', desc: 'Our AI engines scan 50+ years of land record history and local court logs.' },
      { step: '02', title: 'Risk Grading', desc: 'The property is assigned a Trust Score. Gaps are identified for mitigation.' },
      { step: '03', title: 'Policy Issuance', desc: 'Title Insurance is issued, backed by India\'s leading A+ rated insurers.' },
      { step: '04', title: 'Active Defense', desc: 'If any claim arises, TrustFlows manages the entire legal defense and payout.' }
    ],
    marketReality: 'In India, 66% of all civil cases are related to land title disputes. Without insurance, a single missing heir in a 50-year chain can wipe out your life savings.',
    payoutStructure: [
      { condition: 'Court Challenge', timeline: 'Immediate', method: 'Legal defense cost coverage up to SI' },
      { condition: 'Total Title Loss', timeline: '90-120 Days', method: '100% of sum insured paid to the owner' },
      { condition: 'Partial Loss/Encroachment', timeline: '45-60 Days', method: 'Value loss compensation based on survey' }
    ],
    heroImages: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600', // Court/Law
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600', // Documents
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600'  // Property
    ]
  },
  {
    id: 'escrow',
    sidebarLabel: 'Digital Escrow',
    title: 'Digital Property Escrow (RBI Compliant)',
    definition: 'An RBI-compliant trust account infrastructure where buyer funds are held securely and released to the seller or developer only after predefined milestones or registration is verified.',
    benefits: [
      'Prevents seller from absconding with advance token money',
      'Ensures builder uses funds only for specific project milestones',
      'Transparent ledger for all stakeholders (Buyer, Seller, Bank)',
      '100% refund of escrow amount if title is found defective',
      'Fully digital, paperless setup in under 24 hours'
    ],
    coverage: [
      { item: 'Token Protection', detail: 'Holds the booking amount until preliminary title verification is clear.' },
      { item: 'Registration Escrow', detail: 'Releases final balance only after the sub-registrar portal confirms deed execution.' },
      { item: 'Milestone Payouts', detail: 'Ideal for under-construction flats — funds released as per RERA certificates.' }
    ],
    pricing: [
      { tier: 'Basic Escrow', premium: '₹15,000 (Fixed)', bestFor: 'Rental deposits & small token amounts' },
      { tier: 'Standard Transaction', premium: '0.15% - 0.20%', bestFor: 'Resale flats & plots (₹1Cr - ₹5Cr)' },
      { tier: 'Bulk/Enterprise', premium: 'Custom Pricing', bestFor: 'Developer launches & commercial deals' }
    ],
    useCase: {
      title: 'The Noida "Double Sale" Prevention',
      desc: 'A seller tried to take token money from three different buyers simultaneously. Our Escrow system blocked the transfer after the AI engine flagged multiple "agreement to sell" drafts for the same unit.'
    },
    howItWorks: [
      { step: '01', title: 'Agreement Setup', desc: 'Buyer and Seller sign a digital tripartite escrow agreement.' },
      { step: '02', title: 'Fund Loading', desc: 'Buyer loads funds into the secure trust account managed by partner banks.' },
      { step: '03', title: 'Condition Monitor', desc: 'TrustFlows AI monitors sub-registrar and RERA portals for status updates.' },
      { step: '04', title: 'Automated Payout', desc: 'Funds move to the seller instantly upon verification of deed or milestone.' }
    ],
    payoutStructure: [
      { condition: 'Successful Registration', timeline: 'Instant', method: 'Transfer to seller bank account' },
      { condition: 'Title Defect Found', timeline: '24 Hours', method: 'Full refund to the buyer account' },
      { condition: 'Mutual Termination', timeline: '48 Hours', method: 'Split as per termination clause' }
    ],
    heroImages: [
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600', // Finance
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600', // Digital contract
      'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1600'  // Bank
    ]
  },
  {
    id: 'prop-insurance',
    sidebarLabel: 'Property Insurance',
    title: 'Structural & Asset Protection',
    definition: 'Comprehensive insurance for the physical structure and contents of your property against fire, natural disasters, theft, and accidental damage.',
    benefits: [
      'Covers earthquake, flood, and fire damage to structure',
      'Protects interior contents (furniture, electronics, valuables)',
      'Rent loss coverage if property becomes uninhabitable',
      '7-15 day claim settlement guarantee',
      'Free annual structural health audit included'
    ],
    coverage: [
      { item: 'Standard Fire & Perils', detail: 'Fire, lightning, explosion, aircraft damage, riots, and strikes.' },
      { item: 'Natural Calamities', detail: 'Earthquake, storm, cyclone, flood, and inundation coverage.' },
      { item: 'Theft & Burglary', detail: 'Loss of contents due to housebreaking or forced entry.' }
    ],
    pricing: [
      { tier: 'Silver', premium: '₹2,500/yr', bestFor: '1-2 BHK Flats (Structure only)' },
      { tier: 'Gold', premium: '₹6,000/yr', bestFor: '3-4 BHK Flats (Structure + Contents)' },
      { tier: 'Platinum', premium: '₹12,000/yr+', bestFor: 'Villas & Luxury Apartments' }
    ],
    useCase: {
      title: 'Chennai Flood Recovery',
      desc: 'During the 2023 floods, 12 TrustFlows insured homes were damaged. We processed structural repairs and content loss payouts within 10 days, totaling ₹45 Lakhs.'
    },
    howItWorks: [
      { step: '01', title: 'Photo Audit', desc: 'Upload property photos and content inventory via the app.' },
      { step: '02', title: 'Quote Generation', desc: 'Instant premium based on property age and area risk (flood/seismic zone).' },
      { step: '03', title: 'One-Click Buy', desc: 'Policy issued instantly with no physical inspection for most flats.' }
    ],
    heroImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600', // Luxury home
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600', // Modern architecture
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600'  // Interior
    ]
  },
  {
    id: 'digital-owner',
    sidebarLabel: 'Digital Owner Insurance',
    title: 'The Ultimate NRI & Remote Owner Shield',
    definition: 'A specialized protection product for property owners living in different cities or countries, covering risks related to illegal occupation, rent defaults, and remote identity theft.',
    benefits: [
      'Covers legal costs for eviction of squatters or non-paying tenants',
      'Payout for up to 12 months of unpaid rent during disputes',
      'Identity theft protection for property documents',
      'Quarterly physical verification + geo-tagged photo reports',
      'Dedicated legal manager for remote property management'
    ],
    coverage: [
      { item: 'Squatter Removal', detail: 'Coverage for lawyer fees and court costs to remove unauthorized occupants.' },
      { item: 'Rent Default', detail: 'Guarantees monthly rent payout if the tenant fails to pay for 3+ months.' },
      { item: 'Remote Fraud', detail: 'Protection against forged POAs used to mortgage or sell your property remotely.' }
    ],
    pricing: [
      { tier: 'Remote Basic', premium: '₹14,999/yr', bestFor: 'Vacant land / plots in home city' },
      { tier: 'Investor Plus', premium: '0.25% of Rental Value', bestFor: 'Rented apartments and offices' },
      { tier: 'NRI Global Shield', premium: '₹45,000/yr+', bestFor: 'Multiple assets across India' }
    ],
    useCase: {
      title: 'NRI Squatter Eviction',
      desc: 'An NRI in Canada found their Bangalore flat occupied by a "relative" who refused to leave. TrustFlows legal team initiated proceedings and cleared the property in 8 months, paying the owner rent throughout.'
    },
    howItWorks: [
      { step: '01', title: 'Remote Onboarding', desc: 'Upload ownership docs and current tenant details (if any).' },
      { step: '02', title: 'Smart Monitoring', desc: 'We install digital locks or sensors (optional) and perform physical audits.' },
      { step: '03', title: 'Legal Trigger', desc: 'At the first sign of dispute or default, our legal engine takes over.' }
    ],
    heroImages: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600', // Remote work
      'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1600', // Global travel
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600'  // City view
    ]
  },
  {
    id: 'loan-guarantee',
    sidebarLabel: 'Loan Guarantees',
    title: 'Title Loan Guarantees (For Banks & HFCs)',
    definition: 'A credit enhancement product that guarantees repayment to lenders if the property title fails, enabling faster loan approvals for "Grey-Title" properties like B-Khata or Unapproved Layouts.',
    benefits: [
      'Converts "Rejected" properties into "Bankable" assets',
      'Zero liability for banks in case of title-related foreclosure issues',
      'Reduced interest rates for borrowers with TrustFlows guarantee',
      'Speed up loan disbursement from 21 days to 72 hours',
      'Integrated with all major NBFCs and HFCs'
    ],
    coverage: [
      { item: 'Lender Protection', detail: 'Total outstanding loan amount paid to the bank if title is voided by court.' },
      { item: 'Minor Gaps', detail: 'Covers missing links in ownership chain that usually stop bank funding.' }
    ],
    pricing: [
      { tier: 'Standard Guarantee', premium: '0.10% - 0.15% (Lump sum)', bestFor: 'Home loan borrowers' },
      { tier: 'Portfolio Guarantee', premium: 'Custom', bestFor: 'Institutional lenders' }
    ],
    useCase: {
      title: 'B-Khata Loan Approval',
      desc: 'A buyer in Bangalore was rejected by 4 banks for a B-Khata house. TrustFlows issued a Title Guarantee, and a leading NBFC approved the loan at 8.7% ROI within 4 days.'
    },
    howItWorks: [
      { step: '01', title: 'Lender Audit', desc: 'Bank submits property collateral details for AI risk grading.' },
      { step: '02', title: 'Risk Underwriting', desc: 'TrustFlows underwrites the technical title risk gaps.' },
      { step: '03', title: 'Guarantee Issued', desc: 'A formal credit enhancement bond is issued to the bank.' }
    ],
    payoutStructure: [
      { condition: 'Title Foreclosure', timeline: '30 Days', method: 'Direct payment of principal to Lender' }
    ],
    heroImages: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600', // Modern bank
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600', // Contract
      'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1600'  // Office
    ]
  },

  {
    id: 'legal-defense',
    sidebarLabel: 'Legal Defense',
    title: 'Integrated Legal Defense Insurance',
    definition: 'A dedicated insurance product that covers 100% of your legal expenses if your property ownership is challenged in court at any point after purchase.',
    benefits: [
      'Covers senior advocate fees (High Court & Supreme Court)',
      'Includes court filing fees, stamp duties, and processing costs',
      'Payout for expert witnesses (Forensic experts, surveyors)',
      'Zero out-of-pocket expense for property litigation',
      'Works even if you don\'t have full Title Insurance'
    ],
    coverage: [
      { item: 'Lawyer Payout', detail: 'Direct payment to empanelled top-tier property lawyers in 20 cities.' },
      { item: 'Document Costs', detail: 'Costs of obtaining certified copies, old revenue records, and maps.' }
    ],
    pricing: [
      { tier: 'Individual Defense', premium: '₹3,000/yr', bestFor: 'Single property owners' },
      { tier: 'Commercial Defense', premium: '₹15,000/yr+', bestFor: 'Retail shops and office spaces' }
    ],
    useCase: {
      title: 'Boundary Wall Dispute',
      desc: 'A neighbor in Lucknow filed a stay order against a buyer\'s new construction. TrustFlows assigned a lawyer, vacated the stay in 3 weeks, and covered all ₹1.8L expenses.'
    },
    howItWorks: [
      { step: '01', title: 'Dispute Alert', desc: 'Owner uploads court notice or stay order to the platform.' },
      { step: '02', title: 'Legal Strategy', desc: 'Empanelled High Court lawyer reviews files and drafts response.' },
      { step: '03', title: 'Direct Defense', desc: 'TrustFlows pays lawyer fees and court costs directly.' }
    ],
    payoutStructure: [
      { condition: 'Legal Expense', timeline: 'Real-time', method: 'Direct payment to empanelled lawyer' }
    ],
    heroImages: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600', // Justice
      'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1600', // Law books
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600'  // Handshake
    ]
  },

  {
    id: 'fraud-monitoring',
    sidebarLabel: 'Fraud Monitoring',
    title: '24/7 Digital Property Fraud Monitoring',
    definition: 'A subscription service that monitors state land registries, court logs, and sub-registrar portals for any activity related to your property ID or survey number.',
    benefits: [
      'Instant SMS/Email alerts for any "Agreement to Sell" or "Sale Deed" draft',
      'Alerts for new litigation or stay orders filed against your survey number',
      'Monitoring of property tax name change requests',
      'Quarterly digital audit report of your asset health',
      'Prevention of "Double Sale" or fake mortgage attempts'
    ],
    coverage: [
      { item: 'Registry Monitor', detail: 'Tracks IGR (Inspector General of Registration) logs for your property ID.' },
      { item: 'Court Log Monitor', detail: 'Scans e-Court databases for any case mentioning your survey number.' }
    ],
    pricing: [
      { tier: 'Asset Watch', premium: '₹1,999/yr', bestFor: 'Flat owners' },
      { tier: 'Land Watch', premium: '₹4,999/yr', bestFor: 'Open land and plot owners' }
    ],
    useCase: {
      title: 'Impersonation Alert',
      desc: 'An owner in Mumbai received an alert that someone was trying to register a rental agreement using their property ID. They blocked the fraudulent registration within 2 hours.'
    },
    howItWorks: [
      { step: '01', title: 'Asset Link', desc: 'Owner links their Property ID and Survey Number to the monitor.' },
      { step: '02', title: 'Digital Scan', desc: 'System performs 24/7 scans of registrar and court databases.' },
      { step: '03', title: 'Smart Alert', desc: 'SMS/Email sent instantly for any unauthorized activity.' }
    ],
    payoutStructure: [
      { condition: 'Fraud Detected', timeline: 'Instant', method: 'Emergency legal helpdesk activation' }
    ],
    heroImages: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600', // Digital security
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600', // Cybersecurity
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600'  // Tech
    ]
  },

  {
    id: 'trust-report',
    sidebarLabel: 'AI Trust Report',
    title: 'The AI Property Trust Report (0-100 Score)',
    definition: 'A comprehensive 45-page property risk audit report generated by our segment-specific AI engines, covering legal, municipal, and regional risk factors.',
    benefits: [
      'Unified Trust Score (0-100) for instant decision making',
      'Deep scan of 30+ document types (Mother deed, Khata, EC, RTC)',
      'Verification of survey maps and physical encroachments',
      'Municipal dues and pending tax audit',
      'Delivered in 48-72 hours across 20 cities'
    ],
    coverage: [
      { item: 'Title Chain Audit', detail: 'Verification of ownership links for the past 13 to 30 years.' },
      { item: 'Compliance Check', detail: 'RERA, OC, CC, and Sanctioned Plan deviation checks.' },
      { item: 'Regional Risks', detail: 'Specific checks for SRA (Mumbai), B-Khata (Bangalore), Dharani (Hyderabad).' }
    ],
    pricing: [
      { tier: 'Quick Scan', premium: '₹7,999', bestFor: 'Resale flats' },
      { tier: 'Deep Audit', premium: '₹19,999+', bestFor: 'Freehold plots and bungalows' }
    ],
    useCase: {
      title: 'Hidden Society Dues',
      desc: 'A buyer in Gurgaon was told "all dues clear". Our AI Trust Report found ₹12 Lakhs in pending maintenance and civil fines. Buyer negotiated the price down instantly.'
    },
    howItWorks: [
      { step: '01', title: 'Data Ingestion', desc: 'Buyer uploads survey number or property draft deed.' },
      { step: '02', title: 'AI Synthesis', desc: 'Our engines scan 30+ municipal and legal databases simultaneously.' },
      { step: '03', title: 'Report Delivery', desc: 'A 45-page comprehensive risk audit is delivered in 48-72 hours.' }
    ],
    payoutStructure: [
      { condition: 'Service Delivery', timeline: '48-72 Hours', method: 'Digital report delivery to dashboard' }
    ],
    heroImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600', // Analytics
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600', // Charts
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1600'  // Research
    ]
  }
];
