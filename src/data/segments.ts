export interface SegmentData {
  id: string;
  sidebarLabel: string;
  title: string;
  content: {
    who: string[];
    pain: string[];
    solution: { check: string; val: string }[];
    roi: string;
  };
}

export const segmentData: SegmentData[] = [
  {
    id: 'resale-flat',
    sidebarLabel: 'Resale Flats',
    title: 'Resale Flats & Apartments (Society Built)',
    content: {
      who: ['First-time buyers of 5-20yr flats', 'NRIs buying in parent’s city', 'Investors targeting high rental yield'],
      pain: ['Undisclosed maintenance bills (₹50k-₹5L)', 'Illegal alterations leading to civic fines', 'Disputes over parking and common areas', 'Pending property tax passing to buyer'],
      solution: [
        { check: 'Society NOC check', val: 'Avoid registration rejection' },
        { check: 'Maintenance dues audit', val: 'Save ₹50k-2 Lakhs' },
        { check: 'Property tax clearance', val: 'Avoid penalties & interest' },
        { check: 'Conveyance deed status', val: 'Ensure future redevelopment' },
        { check: 'Illegal construction scan', val: 'Eliminate demolition risk' },
        { check: 'Encumbrance check (30 yrs)', val: 'Uncover hidden claims' }
      ],
      roi: 'Pune Case: Found ₹4.5 Lakhs unpaid tax & parking dispute. Saved buyer ₹6 Lakhs upfront.'
    }
  },
  {
    id: 'house',
    sidebarLabel: 'Resale Houses',
    title: 'Resale Independent Houses & Villas',
    content: {
      who: ['Bungalow buyers in old city', 'Investors in township row houses', 'Buyers of gated community villas'],
      pain: ['Undisclosed easement rights affecting valuation', 'Illegal extra floors causing demolition risk', 'Missing occupancy certificate blocking bank loans', 'Pending municipal betterment and development fees'],
      solution: [
        { check: 'Sanctioned plan vs as-built', val: 'Prevent demolition risks' },
        { check: 'Easement rights search', val: 'Protect property valuation' },
        { check: 'OC/CC verification', val: 'Ensure loan eligibility' },
        { check: 'Betterment charges audit', val: 'Clear municipal liabilities' },
        { check: 'Title chain (50+ yrs)', val: 'Verify original ownership' }
      ],
      roi: 'Lucknow Case: Found 1998 mortgage & missing OC. Buyer avoided ₹2.2 Cr total loss.'
    }
  },
  {
    id: 'plot',
    sidebarLabel: 'Freehold Plots',
    title: 'Freehold Plots (Vacant Land) - HIGHEST RISK',
    content: {
      who: ['Buyers of NA converted land', 'Investors in residential plotted layouts', 'Industrial plot targeters for warehouses'],
      pain: ['Fake mother deeds or forged inheritance', 'Wakf board claims voiding entire title', 'Government acquisition notifications for roads/SEZ', 'B-Khata lacking bank loan eligibility'],
      solution: [
        { check: 'Original mother deed check', val: 'Verify government grants' },
        { check: 'Heirship validation', val: 'Check family tree' },
        { check: 'Wakf board overlap scan', val: 'Scan high-risk districts' },
        { check: 'Acquisition notification search', val: 'Check 30-year records' },
        { check: 'NA order verification', val: 'Confirm Collector conversion' },
        { check: 'Encumbrance search', val: '40-year continuous chain' }
      ],
      roi: 'Hyderabad Case: AI flagged 1987 Wakf claim on Tellapur plot. Saved buyer ₹3.5 Cr.'
    }
  },
  {
    id: 'layout',
    sidebarLabel: 'Freehold Layouts',
    title: 'Freehold Layouts (Developer Plotted)',
    content: {
      who: ['Buyers of DTCP approved layouts', 'Investors in TP approved layouts', 'Purchasers of licensed BMRDA layouts'],
      pain: ['Plot titles unclear despite layout approval', 'Missing land owner consent for layout', 'No completion certificate for internal roads', 'Illegal sale of earmarked open spaces'],
      solution: [
        { check: 'Parent title of land', val: 'Prevent layout defects' },
        { check: 'Layout plan approval', val: 'Verify authenticity deviations' },
        { check: 'Open space earmarking', val: 'Ensure legal usage' },
        { check: 'Infra completion cert', val: 'Verify handed over' },
        { check: 'Plot reconstitution', val: 'Check subdivided numbers' }
      ],
      roi: 'Surat Case: Discovered developer mortgaged land to NBFC. Saved 30 buyers ₹8 Crores.'
    }
  },
  {
    id: 'commercial',
    sidebarLabel: 'Commercial',
    title: 'Commercial Properties (Offices & Shops)',
    content: {
      who: ['IT park office space buyers', 'High street retail shop investors', 'Warehouse and godown purchasers'],
      pain: ['Only allotment letter, no separate title', 'Leasehold land requiring government transfer nod', 'Pending GST or stamp duty liabilities', 'Missing fire and lift occupancy certificates'],
      solution: [
        { check: 'Title for commercial unit', val: 'Ensure resale rights' },
        { check: 'Land use zone check', val: 'Validate business license' },
        { check: 'Pending statutory dues', val: 'Audit GST property tax' },
        { check: 'Leasehold status', val: 'Check transfer costs' },
        { check: 'Tenant rights search', val: 'Find perpetual leases' }
      ],
      roi: 'Chennai Case: Warehouse land was agricultural. Cancelled deal and refunded ₹5 Cr.'
    }
  },
  {
    id: 'dev-flat',
    sidebarLabel: 'Developer Flats',
    title: 'Developer Flats (Under Construction)',
    content: {
      who: ['Buyers of premium Grade A apartments', 'Investors in RERA registered projects', 'Purchasers of luxury condos with amenities'],
      pain: ['Builder fund diversion stalling the project', 'Original project land title being disputed', 'Carpet area cheating leading to litigation', 'Possession delays without compensation payments'],
      solution: [
        { check: 'RERA project verification', val: 'Track registration complaints' },
        { check: 'Builder background check', val: 'Check past litigation' },
        { check: 'Land title of project', val: 'Ensure title insurance' },
        { check: 'Milestone Escrow', val: 'Link payment progress' },
        { check: 'Possession delay insurance', val: 'Payout if delayed' }
      ],
      roi: 'Noida Case: Escrow held ₹40 Lakhs safely. Prevented builder diversion, delivered on time.'
    }
  },
  {
    id: 'resale-comm',
    sidebarLabel: 'Mixed-Use',
    title: 'Resale Commercial & Mixed-Use',
    content: {
      who: ['Buyers of old market resale shops', 'Investors in commercial tower offices', 'Purchasers of mixed-use properties'],
      pain: ['Previous owner’s pending GST or fines', 'Massive unpaid association or society dues', 'Missing original lease agreement breaking chain', 'Unapproved change of property use'],
      solution: [
        { check: 'Past utility bills', val: 'Find hidden dues' },
        { check: 'Association NOC minutes', val: 'Check recorded disputes' },
        { check: 'Lease deed history', val: 'Review tenant rights' },
        { check: 'Trade license validity', val: 'Ensure business continuity' }
      ],
      roi: 'ROI: Protection against massive association dues, unpaid GST, and ₹2 Cr liabilities.'
    }
  },
  {
    id: 'govt',
    sidebarLabel: 'Govt Schemes',
    title: 'Govt Scheme Properties (High Risk)',
    content: {
      who: ['Buyers of DDA flats or plots', 'Purchasers in MHADA or HUDA schemes', 'Investors in Amaravati special risk zones'],
      pain: ['Long leasehold terms with transfer restrictions', 'Original allottee illegal sub-sale issues', 'Disputes between allottee and government agency', 'Pending annual lease rent causing arrears'],
      solution: [
        { check: 'Original allotment validity', val: 'Interface with databases' },
        { check: 'Transfer permission status', val: 'Ensure legal resale' },
        { check: 'Unpaid lease rent audit', val: 'Identify penalty arrears' },
        { check: 'Pending cancellation', val: 'Check government orders' }
      ],
      roi: 'Delhi Case: Buyer paying ₹1.2 Cr for DDA flat. Found succession dispute, cancelled deal.'
    }
  }
];
