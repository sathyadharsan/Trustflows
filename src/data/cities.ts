export interface CityData {
  id: string;
  name: string;
  count: string;
  risk: string;
  commonIssues: string[];
  algorithms: string[];
}

export const cities: CityData[] = [
  { 
    id: 'mumbai',
    name: 'Mumbai', 
    count: '1.2M+', 
    risk: 'High (SRA/CRZ Complexities)',
    commonIssues: ['SRA Transfer Violations', 'CRZ Zone Encroachments', 'Old Cess Buildings Title Gaps'],
    algorithms: ['SRA-Connect v2.1', 'Coastal-Zone-Scan', 'Redevelopment-Risk-Engine']
  },
  { 
    id: 'pune',
    name: 'Pune', 
    count: '850K+', 
    risk: 'Medium (Gunthewari Issues)',
    commonIssues: ['Gunthewari Regularization Status', 'PMRDA vs PMC Jurisdiction Conflicts', 'Ancestral Land Claims'],
    algorithms: ['Gunthewari-Verify', 'Jurisdiction-Map-AI', 'Ancestral-Chain-Scan']
  },
  { 
    id: 'bangalore',
    name: 'Bangalore', 
    count: '980K+', 
    risk: 'High (B-Khata/Encroachments)',
    commonIssues: ['B-Khata Legal Validity', 'Lake Bed Encroachments', 'Rajakaluve (Storm Water Drain) Deviations'],
    algorithms: ['Khata-Authenticator', 'Lake-Bed-Overlay', 'Drain-Encroachment-Scan']
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
  }
];
