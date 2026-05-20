export interface KnowledgeItem {
  keywords: string[];
  response: string;
}

export const chatbotKnowledge: Record<string, KnowledgeItem[]> = {
  greetings: [
    {
      keywords: ['hi', 'hello', 'hey', 'yo', 'greetings', 'vanakkam', 'macha', 'buddy', 'good morning', 'good afternoon', 'good evening'],
      response: "Hello! 🛡️ I'm Trusty, your property safety assistant. How can I help you secure your deal today?"
    },
    {
      keywords: ['thank you', 'thanks', 'great', 'awesome', 'cool', 'ok', 'okay', 'superb'],
      response: "You're welcome! Safety in real estate is our top priority. Let me know if you have any other questions!"
    }
  ],
  escrow: [
    {
      keywords: ['escrow', 'deposit', 'milestone', 'rbi', 'trust account', 'vault', 'buyer fund', 'seller money', 'token money'],
      response: "Trustflows Digital Property Escrow (RBI Compliant) holds buyer funds in a secure trust account and releases them only when predefined milestones (like clear title audit or registration) are completed. This prevents sellers/developers from running away with your advance booking or token money."
    },
    {
      keywords: ['escrow price', 'escrow fee', 'escrow pricing', 'escrow cost'],
      response: "Our Escrow pricing is straightforward: ₹15,000 flat for rental deposits & small tokens; 0.15% - 0.20% of value for resale transactions/plots (₹1Cr - ₹5Cr); and custom pricing for bulk developer launches."
    }
  ],
  titleInsurance: [
    {
      keywords: ['title insurance', 'ownership defense', 'irdai', 'forgery', 'heir', 'missing heirs', 'liens', 'boundary dispute'],
      response: "Universal Title Insurance protects your property ownership forever against prior defects (e.g. signature forgery by past owners, claims from missing heirs, undisclosed government liens, or boundary disputes). If challenged in court, Trustflows covers all lawyer fees and pays the full insured amount if the case is lost."
    },
    {
      keywords: ['title insurance price', 'insurance pricing', 'insurance premium', 'insurance fee', 'insurance cost'],
      response: "Title Insurance requires a one-time premium: 0.15% for Essential cover (₹25 Lakhs, best for flats under ₹1Cr); 0.12% for Professional cover (₹1 Crore, best for villas/plots up to ₹3Cr); and 0.10% for Premium cover (₹5 Crores+)."
    }
  ],
  propertyInsurance: [
    {
      keywords: ['structural', 'property insurance', 'asset protection', 'fire', 'flood', 'earthquake', 'natural calamity', 'theft', 'burglary'],
      response: "Our Structural & Asset Protection covers physical property structure and contents against fire, floods, cyclones, earthquakes, and thefts. Includes a free annual structural audit and rent loss coverage if the house is temporarily uninhabitable."
    },
    {
      keywords: ['property insurance pricing', 'structural pricing', 'calamity cost'],
      response: "Property Structural/Content Insurance starts at: Silver (₹2,500/yr for 1-2 BHK flats structure-only); Gold (₹6,000/yr for 3-4 BHK structure + contents); and Platinum (₹12,000/yr+ for luxury villas)."
    }
  ],
  nriRemote: [
    {
      keywords: ['nri', 'remote', 'squatter', 'tenant dispute', 'rent default', 'illegal occupation', 'vacant plot', 'global shield'],
      response: "The NRI & Remote Owner Shield protects out-of-city/country owners from squatter encroachments, rent default, and forgery of Power of Attorney (POA). It covers eviction legal costs, guarantees up to 12 months rent during disputes, and includes quarterly physical audits with geo-tagged photos."
    },
    {
      keywords: ['nri shield pricing', 'nri price', 'remote pricing'],
      response: "NRI/Remote Shield starts at ₹14,999/yr for vacant plots (Remote Basic), 0.25% of rental value for rented apartments (Investor Plus), and ₹45,000/yr+ for multi-asset protection (NRI Global Shield)."
    }
  ],
  fraudMonitoring: [
    {
      keywords: ['monitoring', 'fraud monitoring', 'track property', 'igr', 'alert', 'sms alert', 'survey number', 'unauthorized registration'],
      response: "24/7 Digital Property Fraud Monitoring tracks state land registries (IGR), court databases, and municipal portals. It sends you instant SMS/Email alerts the second any draft deed, agreement, or litigation mentions your property ID or survey number, preventing double sale or fake mortgage attempts."
    },
    {
      keywords: ['fraud pricing', 'monitoring pricing', 'monitoring cost'],
      response: "Fraud Monitoring is priced annually: Asset Watch at ₹1,999/yr for apartment/flat owners, and Land Watch at ₹4,999/yr for plot/open land owners."
    }
  ],
  trustReport: [
    {
      keywords: ['trust report', 'score', 'audit report', 'legal audit', 'document scan', 'khata', 'mother deed', 'encumbrance certificate', 'ec'],
      response: "The AI Property Trust Report (0-100 Score) is a 45-page comprehensive risk audit of 30+ land/flat documents (Mother deed, Khata, EC, RTC) and court logs. It highlights structural, legal, and compliance gaps. Delivered in 48-72 hours across 20 cities: Quick Scan at ₹7,999 (resale flats) and Deep Audit at ₹19,999+ (plots/bungalows)."
    }
  ],
  cities: [
    {
      keywords: ['city', 'cities', 'supported cities', 'where do you work', 'location', 'bangalore', 'mumbai', 'delhi', 'chennai', 'pune', 'lucknow', 'gurgaon', 'noida', 'hyderabad'],
      response: "We are currently operational in 20 major Indian cities, including Bangalore, Mumbai, Delhi, NCR (Gurgaon, Noida), Hyderabad, Chennai, Pune, and Lucknow. Each city has its own local laws model trained on specific regional fraud signatures (e.g. A/B Khata in Bangalore, MHADA/SRA in Mumbai, Dharani in Hyderabad)."
    }
  ],
  loans: [
    {
      keywords: ['loan', 'bank', 'hfc', 'rejected loan', 'title loan', 'b-khata loan', 'grey-title', 'credit enhancement'],
      response: "Our Loan Guarantees help buyers get loans on 'Grey-Title' properties (like B-Khata or unapproved layouts). If the bank rejects your title, we issue a Title Guarantee Bond to the lender, absorbing 100% foreclosure title risk. This speeds up approvals and lowers interest rates."
    }
  ],
  legalDefense: [
    {
      keywords: ['legal defense', 'lawyer fees', 'court cost', 'litigation', 'civil dispute', 'boundary wall', 'stay order'],
      response: "Integrated Legal Defense Insurance covers 100% of attorney fees (including senior High Court/Supreme Court advocates), court filings, stamp duties, and forensic experts if your title is challenged. Priced at ₹3,000/yr for individuals and ₹15,000/yr+ for commercial spaces."
    }
  ],
  generalPricing: [
    {
      keywords: ['pricing', 'price', 'cost', 'plans', 'fee'],
      response: "Our Trust Report starts at ₹7,999 for resale flats. Full Homebuyer Bundles start at 0.35% of property value (one-time). Escrow is a flat ₹15,000 or 0.15% depending on value. Type 'escrow price' or 'insurance price' for specific details!"
    }
  ],
  contact: [
    {
      keywords: ['contact', 'email', 'support', 'help', 'phone number'],
      response: "You can email us directly at support@trustflow.in or simply type 'agent' to request a callback from our property experts within 15 minutes."
    }
  ],
  features: [
    {
      keywords: ['features', 'services', 'what do you do', 'products', 'offerings'],
      response: "We offer Digital Property Escrow, IRDAI-Aligned Title Insurance, Structural Insurance, NRI/Remote Owner Shields, Fraud Monitoring, AI Trust Reports, and Legal Defense."
    },
    {
      keywords: ['trustflow', 'trustflows', 'who are you', 'about us', 'what is trustflow', 'what is trustflows', 'company', 'about trustflows'],
      response: "Trustflows is India's first complete real estate safety and secure transaction platform. 🛡️ We protect homebuyers from token money fraud, title defects, and document forgery using RBI-compliant digital escrow, IRDAI-aligned Title Insurance, and AI-powered document audits. Our mission is to make property transactions 100% risk-free."
    }
  ],
  propertySegments: [
    {
      keywords: ['flat', 'apartment', 'resale flat', 'plot', 'villa', 'house', 'commercial', 'shop', 'land', 'property', 'freehold plot', 'freehold layout', 'commercial property', 'developer flat', 'under construction', 'independent house', 'govt scheme', 'dda', 'mhada'],
      response: "Whether you're buying a Resale Flat, a Freehold Plot, or Commercial Property, our AI Trust Engines are customized to audit the specific legal risks of each segment. Type 'trust report' to learn how we scan documents or 'pricing' to see the segment-wise costs."
    }
  ],
  safetyAndLegitimacy: [
    {
      keywords: ['safe', 'safety', 'legal', 'certified', 'real', 'scam', 'legit', 'trustable', 'genuine', 'fake', 'secure'],
      response: "Trustflows is 100% legal, regulated, and safe. 🛡️ Our Digital Escrow services are powered by RBI-compliant trustee banks, our Title and Asset Insurance products are backed by A+ rated Indian insurers aligned with IRDAI guidelines, and our legal audits are compiled by licensed property attorneys. Your safety is legally guaranteed."
    }
  ],
  howToStart: [
    {
      keywords: ['how to start', 'get started', 'how it works', 'steps', 'procedure', 'how do i book', 'book now', 'buy now'],
      response: "To get started, simply: 1️⃣ Upload your property details or draft sale agreement. 2️⃣ Our AI engines and legal experts will complete a Trust Report in 48 hours. 3️⃣ Open a secure Escrow account for token money. 4️⃣ Complete registration with optional Title Insurance. Type 'agent' to get started right away!"
    }
  ],
  refunds: [
    {
      keywords: ['refund', 'cancel', 'money back', 'deal cancels', 'deal falls through', 'escrow refund', 'return my money'],
      response: "If a deal falls through or legal title gaps are found, your escrow funds are refunded 100% to the buyer's bank account within 24 hours. No deductions, no hidden charges, and no hassle. Your money remains secure in our trust vault until you approve final release."
    }
  ],
  duration: [
    {
      keywords: ['how long', 'duration', 'how many days', 'time limit', 'fast', 'speed', 'delivery time', 'hours'],
      response: "Our AI Property Trust Report is delivered in under 48-72 hours. Digital Escrow accounts can be set up online in 10-15 minutes, and Title Insurance coverage starts instantly upon premium payment on your registration day."
    }
  ],
  lawyerComparison: [
    {
      keywords: ['lawyer', 'attorney', 'advocate', 'vs lawyer', 'traditional lawyer', 'why not a lawyer', 'legal opinion'],
      response: "Unlike traditional lawyers who only do manual paperwork review (taking 2-3 weeks and charging high fees with zero guarantees if they miss something), Trustflows uses advanced AI to search 50-year title chains and regional court logs in 48 hours, AND our reports make you eligible for IRDAI-aligned Title Insurance, giving you 100% financial protection if a dispute arises later."
    }
  ],
  tokenMoney: [
    {
      keywords: ['token money', 'advance booking', 'booking amount', 'advance payment', 'bayana', 'token amount'],
      response: "Token money (Bayana) is highly vulnerable to advance-payment fraud, where sellers run away with your cash. Trustflows Escrow secures your token money in a designated trust vault. It is released to the seller only when the title audit is clear and both parties sign the agreement, eliminating advance-payment risks completely."
    }
  ],
  loanAssistance: [
    {
      keywords: ['home loan', 'loan eligibility', 'bank loan', 'loan approval', 'sbi loan', 'hdfc loan', 'icici loan', 'loan rejected', 'b-khata loan'],
      response: "Yes, Trustflows actually helps speed up bank loan approvals! 🏦 If a property is B-Khata or has 'Grey-Title' issues where banks reject the loan, we can issue a Title Guarantee Bond to the bank, absorbing 100% foreclosure title risk. This helps you secure loans at lower interest rates."
    }
  ]
};
