export interface OutcomeData {
  id: string;
  title: string;
  description: string;
  metric: string;
  benefit: string;
  detailedAnalysis: string;
}

export const outcomes: OutcomeData[] = [
  {
    id: 'zero-fraud',
    title: 'Zero Title Fraud Risk',
    description: 'Eliminate 100% of risks from forged deeds and missing heirs.',
    metric: '₹1.5 Lakh Cr+ protected annually',
    benefit: 'Insurance-backed certainty',
    detailedAnalysis: 'Our AI models scan 50+ years of title chains to identify even the most subtle forgeries or missing inheritance links, backed by IRDAI-aligned insurance.'
  },
  {
    id: 'legal-clarity',
    title: 'Legal Clarity',
    description: 'Court-proof documentation and AI litigation intelligence.',
    metric: '10,000+ courts scanned',
    benefit: 'Litigation-free ownership',
    detailedAnalysis: 'We provide deep litigation intelligence across civil, criminal, and revenue courts, ensuring your property is free from all pending legal disputes.'
  },
  {
    id: 'safe-transfer',
    title: 'Safe Fund Transfer',
    description: 'RBI-compliant escrow secures your payments.',
    metric: '100% fund safety',
    benefit: 'Milestone-based release',
    detailedAnalysis: 'Money is only released to the seller after successful registration or construction milestone verification, preventing builder fund diversion and seller fraud.'
  },
  {
    id: 'fast-delivery',
    title: '48hr Delivery',
    description: 'India’s fastest end-to-end property verification.',
    metric: '48-72 hours TAT',
    benefit: 'Speed without compromise',
    detailedAnalysis: 'Leveraging direct API connections to state land records and AI-powered document analysis, we deliver a comprehensive trust report in just 48 hours.'
  },
  {
    id: 'trust-score',
    title: 'AI Trust Score',
    description: 'A 0-100 rating for every property type.',
    metric: '99.1% Accuracy',
    benefit: 'Standardized trust metric',
    detailedAnalysis: 'Our Unified Property Trust Score provides an instant, data-driven rating for any flat, plot, or commercial unit, making property trust as easy as a credit score.'
  }
];
