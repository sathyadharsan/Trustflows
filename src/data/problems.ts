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
    ]
  },
  {
    id: 'under-construction',
    segment: 'Developer Flat (Under Construction)',
    title: 'Fund Diversion & RERA Violations',
    uniqueRisk: 'Delayed possession, builder diversion of funds, RERA violation',
    typicalLoss: '₹10-50 Lakhs + mental stress',
    detailedAnalysis: 'Despite RERA, developers often struggle with fund management. Diversion of buyer advances to other projects is the primary cause of stalled construction in India.',
    cityContext: [
      { city: 'Noida', specificRisk: 'Large-scale stalled projects and land title disputes' },
      { city: 'Gurugram', specificRisk: 'RERA compliance gaps and delivery delays' }
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
    ]
  }
];
