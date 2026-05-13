export interface StakeholderData {
  id: string;
  role: string;
  unaddressedNeed: string;
  trustflowsValue: string;
  bestFitSegment: string;
  detailedBenefits: string[];
}

export const stakeholders: StakeholderData[] = [
  {
    id: 'homebuyer',
    role: 'Homebuyer',
    unaddressedNeed: 'No title insurance – entire life savings at risk',
    trustflowsValue: 'Trust score + hidden dues check + insurance',
    bestFitSegment: 'Resale flats & plots',
    detailedBenefits: [
      'Verified Trust Score before paying advance',
      'Protection against hidden society and tax dues',
      'Legal defense coverage for future disputes',
      'Safe escrow for secure fund transfer'
    ]
  },
  {
    id: 'nri',
    role: 'NRI (Non-Resident Indian)',
    unaddressedNeed: 'No digital owner insurance for remote ownership',
    trustflowsValue: 'Remote verification + escrow + fraud monitoring',
    bestFitSegment: 'Any resale or plot',
    detailedBenefits: [
      'Remote property verification without physical travel',
      'Ongoing fraud monitoring for vacant properties',
      'Digital escrow for cross-border transactions',
      'Rent default insurance for managed assets'
    ]
  },
  {
    id: 'developer',
    role: 'Developer / Builder',
    unaddressedNeed: 'No escrow that buyers trust; slow sales',
    trustflowsValue: 'Buyer confidence + faster sales + title guarantee',
    bestFitSegment: 'Under-construction projects',
    detailedBenefits: [
      'Enhanced buyer trust with certified projects',
      'Faster loan sanctions for allottees',
      'Milestone-linked escrow for transparent funding',
      'Project-level title insurance'
    ]
  },
  {
    id: 'bank',
    role: 'Bank / Lender',
    unaddressedNeed: 'No loan guarantee against title fraud; high NPA risk',
    trustflowsValue: 'Automated collateral risk score + loan guarantee',
    bestFitSegment: 'All secured loans',
    detailedBenefits: [
      'Reduced NPA risk from title-related litigation',
      'Automated collateral risk scoring for faster processing',
      'Lender-specific title guarantees',
      'Real-time fraud alerts on mortgaged properties'
    ]
  },
  {
    id: 'broker',
    role: 'Real Estate Broker',
    unaddressedNeed: 'Deals falling through due to trust gaps',
    trustflowsValue: 'Verified listings + 40% higher conversion',
    bestFitSegment: 'Premium resale & land',
    detailedBenefits: [
      'Verified listings that sell 40% faster',
      'Reduced time-to-close with ready diligence',
      'Higher credibility with clients',
      'Access to digital escrow for fee protection'
    ]
  }
];
