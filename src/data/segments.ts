import type { SegmentData } from '../types/data';

export const segmentData: SegmentData[] = [
  {
    id: 'resale-flat',
    sidebarLabel: 'Resale Flat',
    title: 'Resale Flat (Apartment) Trust Intelligence',
    content: {
      who: ['Homebuyers purchasing from secondary market', 'Investors in old co-operative societies', 'Buyers of SRA or MHADA resale units'],
      pain: [
        'Massive pending maintenance dues (Inherited by buyer)',
        'Illegal internal alterations leading to municipal fines',
        'Incomplete share certificate transfer chain',
        'Hidden bank mortgage from previous owner',
        'Society internal disputes blocking NOC issuance'
      ],
      solution: [
        { check: 'Society Audit', val: 'Verify 3-year maintenance ledger' },
        { check: 'Mutation Check', val: 'Confirm name in municipal tax records' },
        { check: 'Alteration Survey', val: 'Check against sanctioned floor plan' },
        { check: 'Title Insurance', val: 'Lifetime protection for resale assets' }
      ],
      roi: 'Mumbai Case: Buyer found ₹8 Lakhs in hidden maintenance dues during our audit. Negotiated full refund from seller.',
      marketStats: [
        { label: 'Avg Risk Level', value: 'High' },
        { label: 'Litigation Rate', value: '12%' },
        { label: 'Typical Recovery', value: '₹2-5L' }
      ],
      checkTable: [
        {
          category: 'Legal Chain',
          checks: [
            { check: 'Original Share Certificate', level: 'High', desc: 'Must have valid endorsements for all previous transfers.' },
            { check: 'Chain of Sale Deeds', level: 'High', desc: 'Missing intermediate deed breaks ownership link.' }
          ]
        },
        {
          category: 'Municipal',
          checks: [
            { check: 'Property Tax Arrears', level: 'Medium', desc: 'Verification of last 5 years receipts.' },
            { check: 'OC Validity', level: 'High', desc: 'Check if OC was issued for the entire wing.' }
          ]
        }
      ],
      deepDive: 'Resale flats in India often have "Grey Liability". While the title looks clear on the deed, the society records might hold surprises that block you from getting a home loan or selling the unit later.',
      heroImages: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600', // Flat
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1600', // Interior
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600'  // Building
      ]
    }
  },
  {
    id: 'plot',
    sidebarLabel: 'Freehold Plot',
    title: 'Freehold Plot (Vacant Land) Risk Audit',
    content: {
      who: ['Investors in open layouts', 'Purchasers of ancestral land', 'NRIs buying for retirement'],
      pain: [
        'Forged "Mother Deed" or ancestral grant documents',
        'Undisclosed legal heirs claiming rights after sale',
        'Wakf Board or Religious Trust ownership claims',
        'Secret government acquisition notifications',
        'Physical encroachment or boundary shifting'
      ],
      solution: [
        { check: 'Ancestral Audit', val: 'Trace 50-year genealogy of owners' },
        { check: 'Revenue Scan', val: 'RTC/Pahani verification for all 20 cities' },
        { check: 'GIS Mapping', val: 'Satellite check for physical encroachments' },
        { check: 'Title Insurance', val: 'The only way to buy plots with 100% peace' }
      ],
      roi: 'Hyderabad Case: AI flagged a plot as "Wakf" property despite clear local records. Saved buyer ₹1.2 Crores.',
      marketStats: [
        { label: 'Avg Risk Level', value: 'Ultra-High' },
        { label: 'Forgery Rate', value: '28%' },
        { label: 'Typical Recovery', value: '₹50L - ₹2Cr' }
      ],
      checkTable: [
        {
          category: 'Ownership',
          checks: [
            { check: 'Mother Deed Verification', level: 'High', desc: 'Physical audit of the earliest available grant/allotment.' },
            { check: 'Family Tree Scan', level: 'High', desc: 'Identifying all legal heirs to prevent future partition suits.' }
          ]
        }
      ],
      deepDive: 'Vacant land is the highest risk segment in India. Forged documents from the 1960s-80s are extremely common and nearly impossible for a regular lawyer to catch without deep AI audit tools.',
      heroImages: [
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600', // Land
        'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=1600', // Horizon
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600'  // Nature
      ]
    }
  },
  {
    id: 'layout',
    sidebarLabel: 'Freehold Layout',
    title: 'Freehold Layout (Plotted Dev) Verification',
    content: {
      who: ['Buyers in gated community layouts', 'Investors in DTCP/HMDA approved projects'],
      pain: [
        'Missing DC Conversion (Land remains agricultural)',
        'Deviations from sanctioned layout plan',
        'Selling of public open spaces (Parks/Roads) as plots',
        'Lapsed layout approvals (Validity expired)',
        'Infrastructure promises not meeting government standards'
      ],
      solution: [
        { check: 'Plan Audit', val: 'Match sanctioned vs physical layout' },
        { check: 'LP Number Scan', val: 'Verify approval validity in govt database' },
        { check: 'Nala/Buffer Check', val: 'Ensure plot is not on restricted drainage land' }
      ],
      roi: 'Bangalore Case: Layout found built on buffer zone. All 40 buyers saved ₹8 Crores before registration.',
      heroImages: [
        'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=1600', // Construction site
        'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600', // Blueprint
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600'  // Modern build
      ]
    }
  },
  {
    id: 'commercial',
    sidebarLabel: 'Commercial',
    title: 'Commercial Property & Office Space Audit',
    content: {
      who: ['Retail shop buyers', 'Office space investors', 'Warehouse developers'],
      pain: [
        'Illegal commercial use of residential zoned land',
        'Pending business liabilities (GST, Trade Tax)',
        'Unregistered lease agreements with existing tenants',
        'Zoning violations leading to "Sealing" risks',
        'Fire safety and structural NOC gaps'
      ],
      solution: [
        { check: 'Zoning Audit', val: 'Verify land use in city masterplan' },
        { check: 'Liability Scan', val: 'Check GST and utility arrears' },
        { check: 'Tenant Audit', val: 'Verify lease terms and eviction rights' }
      ],
      roi: 'Delhi Case: Commercial shop found in residential zone. Avoided sealing risk and ₹50L investment loss.',
      heroImages: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600', // Skyscrapers
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600', // Office
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600'  // Retail
      ]
    }
  },
  {
    id: 'dev-flat',
    sidebarLabel: 'Developer Flat',
    title: 'Developer Flat (Under-Construction) RERA Audit',
    content: {
      who: ['Buyers of premium Grade A apartments', 'Investors in pre-launch projects'],
      pain: [
        'Builder diversion of funds to other projects',
        'RERA violations leading to registration cancellation',
        'Original land title disputes for the entire project',
        'Super built-up vs carpet area cheating',
        'Possession delays without interest compensation'
      ],
      solution: [
        { check: 'RERA Tracker', val: 'Real-time project compliance monitoring' },
        { check: 'Escrow Setup', val: 'Milestone-based fund release' },
        { check: 'Project Title', val: 'Master title insurance for the whole project' }
      ],
      roi: 'Noida Case: Escrow held ₹40 Lakhs safely. Prevented builder diversion, delivered on time.',
      heroImages: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600', // Modern apartment
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600', // Luxury
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600'  // Real estate
      ]
    }
  },
  {
    id: 'house',
    sidebarLabel: 'Resale House',
    title: 'Resale Independent House & Villa Intelligence',
    content: {
      who: ['Buyers of bungalows and row houses', 'Investors in premium villas'],
      pain: [
        'Unauthorized extra floors (FSI violations)',
        'Easement rights disputes with neighbors',
        'Missing Completion Certificate (CC)',
        'Unauthorized utility connections (Borewell/Power)',
        'Legacy inheritance disputes for the entire land'
      ],
      solution: [
        { check: 'FSI Audit', val: 'Verify built-up area against sanctioned plan' },
        { check: 'Easement Check', val: 'Verify road and light access rights' },
        { check: 'OC/CC Audit', val: 'Ensure structural legality' }
      ],
      roi: 'Lucknow Case: Villa found with ₹15L pending house tax and unauthorized 2nd floor. Negotiated discount.',
      heroImages: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600', // Villa
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600', // Mansion
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600'  // Exterior
      ]
    }
  },
  {
    id: 'govt',
    sidebarLabel: 'Govt Schemes',
    title: 'Govt Scheme Property (DDA/MHADA) Audit',
    content: {
      who: ['Buyers of DDA, MHADA, BDA, or CIDCO flats', 'Allottees in government housing schemes'],
      pain: [
        'Illegal sub-letting or "Power of Attorney" sales',
        'Unpaid premium or leasehold conversion dues',
        'Strict transfer lock-in period violations',
        'Name not updated in government revenue records (Mutation)',
        'Pending structural repair cess or society formation dues'
      ],
      solution: [
        { check: 'Allotment Audit', val: 'Verify original grant and possession chain' },
        { check: 'NOC Check', val: 'Confirm transfer permission from nodal agency' },
        { check: 'Lien Scan', val: 'Verify no government attachment for unpaid dues' }
      ],
      roi: 'Delhi Case: DDA flat found under a 5-year no-sale lock-in. Saved buyer from a legally void transaction and loss of ₹60L.',
      heroImages: [
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600', // High rise
        'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1600', // Residential complex
        'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1600'  // Home
      ]
    }
  },
  {
    id: 'resale-comm',
    sidebarLabel: 'Resale Commercial',
    title: 'Resale Commercial Shop & Office Risk Scan',
    content: {
      who: ['Investors in established market shops', 'Buyers of old commercial office units'],
      pain: [
        'Undisclosed commercial property tax arrears',
        'Illegal mezzanine floor additions (Common in shops)',
        'Trade license and fire safety NOC lapses',
        'Electricity & water connection dues from previous business',
        'Lapsed leasehold tenure for government-owned markets'
      ],
      solution: [
        { check: 'Compliance Scan', val: 'Verify Fire, Health, and Trade licenses' },
        { check: 'Arrears Audit', val: 'Verify all utility and tax receipts for 10 years' },
        { check: 'Tenure Check', val: 'Confirm lease duration and renewal terms' }
      ],
      roi: 'Mumbai Case: Shop in Fort found with ₹4 Lakhs in pending commercial electricity dues. Seller settled before registration.',
      heroImages: [
        'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1600', // Finance office
        'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1600', // Tech center
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600'  // Conference room
      ]
    }
  }
];
