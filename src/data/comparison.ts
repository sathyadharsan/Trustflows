export interface ComparisonTier {
  feature: string;
  lawyer: { text: string; status: 'positive' | 'neutral' | 'negative' };
  proptech: { text: string; status: 'positive' | 'neutral' | 'negative' };
  trustflows: { text: string; status: 'positive' | 'neutral' | 'negative' };
}

export const comparisonData: ComparisonTier[] = [
  {
    feature: 'Coverage & Depth',
    lawyer: { text: 'Only localized expertise', status: 'neutral' },
    proptech: { text: 'Pan-India but shallow data', status: 'neutral' },
    trustflows: { text: '20 cities, deep local risk engines', status: 'positive' }
  },
  {
    feature: 'Segment Expertise',
    lawyer: { text: 'General legal knowledge', status: 'neutral' },
    proptech: { text: 'Primarily residential focus', status: 'neutral' },
    trustflows: { text: 'Specialized for all 8+ segments', status: 'positive' }
  },
  {
    feature: 'Speed of Delivery',
    lawyer: { text: '15-30 days', status: 'negative' },
    proptech: { text: '2-5 days', status: 'neutral' },
    trustflows: { text: '48-72 hours', status: 'positive' }
  },
  {
    feature: 'Title Insurance',
    lawyer: { text: 'Not available', status: 'negative' },
    proptech: { text: 'Rare / limited availability', status: 'negative' },
    trustflows: { text: 'Integrated in all segments', status: 'positive' }
  },
  {
    feature: 'Escrow Infrastructure',
    lawyer: { text: 'Manual / risky handling', status: 'negative' },
    proptech: { text: 'Basic / non-integrated', status: 'neutral' },
    trustflows: { text: 'RBI-compliant, fully digital', status: 'positive' }
  },
  {
    feature: 'Cost Efficiency',
    lawyer: { text: '₹50k - ₹2L (Unpredictable)', status: 'negative' },
    proptech: { text: '₹15k - ₹50k', status: 'neutral' },
    trustflows: { text: '₹5k - ₹75k (Transparent)', status: 'positive' }
  },
  {
    feature: 'Risk Coverage',
    lawyer: { text: 'Opinion only (No liability)', status: 'negative' },
    proptech: { text: 'Data insights only', status: 'neutral' },
    trustflows: { text: 'Data + Insurance + Escrow', status: 'positive' }
  }
];
