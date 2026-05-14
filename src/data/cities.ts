export interface CityData {
  id: string;
  name: string;
  count: string;
  risk: string;
  commonIssues: string[];
  algorithms: string[];
  heroImages?: string[];
}

export const cities: CityData[] = [
  { 
    id: 'mumbai',
    name: 'Mumbai', 
    count: '1.2M+', 
    risk: 'High (SRA/CRZ Complexities)',
    commonIssues: ['SRA Transfer Violations', 'CRZ Zone Encroachments', 'Old Cess Buildings Title Gaps'],
    algorithms: ['SRA-Connect v2.1', 'Coastal-Zone-Scan', 'Redevelopment-Risk-Engine'],
    heroImages: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600', // Mumbai Skyline
      'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=1600', // Marine Drive
      'https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&q=80&w=1600'  // Architecture
    ]
  },
  { 
    id: 'pune',
    name: 'Pune', 
    count: '850K+', 
    risk: 'Medium (Gunthewari Issues)',
    commonIssues: ['Gunthewari Regularization Status', 'PMRDA vs PMC Jurisdiction Conflicts', 'Ancestral Land Claims'],
    algorithms: ['Gunthewari-Verify', 'Jurisdiction-Map-AI', 'Ancestral-Chain-Scan'],
    heroImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600', // Pune city
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1600', // Hills
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1600'  // Building
    ]
  },
  { 
    id: 'bangalore',
    name: 'Bangalore', 
    count: '980K+', 
    risk: 'High (B-Khata/Encroachments)',
    commonIssues: ['B-Khata Legal Validity', 'Lake Bed Encroachments', 'Rajakaluve (Storm Water Drain) Deviations'],
    algorithms: ['Khata-Authenticator', 'Lake-Bed-Overlay', 'Drain-Encroachment-Scan'],
    heroImages: [
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=1600', // Bangalore Tech
      'https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&q=80&w=1600', // Garden city
      'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1600'  // Modern
    ]
  },
  { 
    id: 'chennai',
    name: 'Chennai', 
    count: '720K+', 
    risk: 'Medium (Patta/Chitta Gaps)',
    commonIssues: ['Patta/Chitta Record Mismatches', 'Temple Land (Deisvam) Claims', 'Layout Approval Forgery'],
    algorithms: ['Patta-Sync-Pro', 'Temple-Land-Scan', 'DTCP-Approval-Verify']
  },
  { 
    id: 'hyderabad',
    name: 'Hyderabad', 
    count: '640K+', 
    risk: 'High (Dharani/Wakf Issues)',
    commonIssues: ['Dharani Portal Mismatches', 'Wakf Board Notified Lands', 'Government Assigned Land Sales'],
    algorithms: ['Dharani-Records-Sync', 'Wakf-Check-AI', 'Assigned-Land-Scan']
  },
  { 
    id: 'delhi-ncr',
    name: 'Delhi-NCR', 
    count: '1.5M+', 
    risk: 'Very High (Registry Bans)',
    commonIssues: ['Unauthorised Colony Bans', 'Gram Sabha Land Sales', 'Double Allotments in Noida/YEIDA'],
    algorithms: ['Unauthorised-Zone-Scan', 'Gram-Sabha-Verify', 'Allotment-History-AI']
  },
  { 
    id: 'kolkata',
    name: 'Kolkata', 
    count: '510K+', 
    risk: 'High (Thika Tenancy)',
    commonIssues: ['Thika Tenancy Complications', 'Heritage Building Restrictions', 'Mutation Record Gaps'],
    algorithms: ['Thika-Tenancy-Engine', 'Heritage-Zone-Scan', 'Mutation-Verify-Pro']
  },
  { 
    id: 'ahmedabad',
    name: 'Ahmedabad', 
    count: '480K+', 
    risk: 'Medium (TP Scheme Delays)',
    commonIssues: ['Town Planning (TP) Scheme Gaps', 'Disturbed Areas Act Compliance', 'Old City Title Defects'],
    algorithms: ['TP-Scheme-Verify', 'Disturbed-Area-Scan', 'Old-City-Title-AI']
  },
  { 
    id: 'surat',
    name: 'Surat', 
    count: '420K+', 
    risk: 'Medium (SIR Zone Issues)',
    commonIssues: ['TP Approval Gaps', 'SIR Zone Construction Violations', 'Industrial Land Use Conflicts'],
    algorithms: ['TP-Auth-Pro', 'SIR-Zone-Scan', 'Ind-Use-Verify']
  },
  { 
    id: 'jaipur',
    name: 'Jaipur', 
    count: '390K+', 
    risk: 'High (JDA Leasehold)',
    commonIssues: ['JDA Leasehold Restrictions', 'Old Jagir Title Disputes', 'Betterment Charge Arrears'],
    algorithms: ['JDA-Lease-Verify', 'Jagir-Chain-Scan', 'Betterment-Audit-AI']
  },
  { 
    id: 'lucknow',
    name: 'Lucknow', 
    count: '350K+', 
    risk: 'Medium (LDA Schemes)',
    commonIssues: ['LDA Allotment Validity', 'Awadh Zamindari Abolition Records', 'Succession Disputes'],
    algorithms: ['LDA-Auth-Engine', 'Zamindari-Chain-Verify', 'Succession-Risk-Scan']
  },
  { 
    id: 'nagpur',
    name: 'Nagpur', 
    count: '310K+', 
    risk: 'Medium (Metro Acquisition)',
    commonIssues: ['Metro Land Acquisition Notifications', 'Vidarbha Tenancy Law Violations', 'NIT Lease Arrears'],
    algorithms: ['Metro-Acq-Scan', 'Tenancy-Law-Verify', 'NIT-Lease-Audit']
  },
  { 
    id: 'indore',
    name: 'Indore', 
    count: '290K+', 
    risk: 'Medium (IDA Schemes)',
    commonIssues: ['IDA Scheme Gaps', 'Pending Betterment Fees', 'Unauthorized Layout Proliferation'],
    algorithms: ['IDA-Verify-Pro', 'Fee-Audit-AI', 'Layout-Scan-360']
  },
  { 
    id: 'bhopal',
    name: 'Bhopal', 
    count: '270K+', 
    risk: 'High (Waqf Properties)',
    commonIssues: ['Old Waqf Property Overlaps', 'BDA Layout Deviations', 'Colony Regularization Status'],
    algorithms: ['Waqf-Overlay-AI', 'BDA-Plan-Verify', 'Reg-Status-Scan']
  },
  { 
    id: 'visakhapatnam',
    name: 'Visakhapatnam', 
    count: '250K+', 
    risk: 'Medium (Port Land)',
    commonIssues: ['VMRDA Approval Authenticities', 'Port Land Encroachments', 'Coastal Regulation Zone'],
    algorithms: ['VMRDA-Sync-Pro', 'Port-Land-Scan', 'CRZ-Verify-Engine']
  },
  { 
    id: 'patna',
    name: 'Patna', 
    count: '220K+', 
    risk: 'Very High (Zamindari)',
    commonIssues: ['Old Zamindari Record Gaps', 'Bihar Land Reforms Violations', 'Succession Complexities'],
    algorithms: ['Zamindari-Pro-Verify', 'Reforms-Law-Scan', 'Heir-Chain-AI']
  },
  { 
    id: 'vadodara',
    name: 'Vadodara', 
    count: '210K+', 
    risk: 'Medium (VUDA Approvals)',
    commonIssues: ['VUDA Approval Gaps', 'Industrial Land Conversion Defects', 'Old City Heritage Risks'],
    algorithms: ['VUDA-Auth-Scan', 'Ind-Conv-Verify', 'Heritage-Risk-AI']
  },
  { 
    id: 'ludhiana',
    name: 'Ludhiana', 
    count: '190K+', 
    risk: 'High (Lal Lakir)',
    commonIssues: ['PUDA Scheme Arrears', 'Old Lal Lakir Village Properties', 'Encroachment Records'],
    algorithms: ['PUDA-Lease-Audit', 'Lal-Lakir-Verify', 'Encroachment-Scan']
  },
  { 
    id: 'agra',
    name: 'Agra', 
    count: '180K+', 
    risk: 'Medium (TTZ Restrictions)',
    commonIssues: ['Taj Trapezium Zone (TTZ) Violations', 'Old Mughal Grant Title Gaps', 'Zoning Map Mismatches'],
    algorithms: ['TTZ-Zone-Scan', 'Mughal-Grant-Verify', 'Zoning-Sync-AI']
  },
  { 
    id: 'nashik',
    name: 'Nashik', 
    count: '170K+', 
    risk: 'Medium (MIDC Plots)',
    commonIssues: ['MIDC Industrial Plot Restrictions', 'Godavari Riverbed Encroachments', 'Tribal Land Sale Violations'],
    algorithms: ['MIDC-Plot-Verify', 'Riverbed-Scan-AI', 'Tribal-Land-Check']
  }
];

