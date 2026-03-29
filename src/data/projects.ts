export type ProjectType = "strategy" | "program" | "analytics";
export type Domain = "banking" | "compliance" | "finance" | "transformation" | "data";
export type Task = "governance" | "delivery" | "analytics" | "architecture" | "adoption";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  type: ProjectType;
  domain: Domain;
  task: Task;
  tools: string[];
  metrics: Record<string, string>;
  githubUrl?: string;
  competitionUrl?: string;
  caseStudySlug?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "CFG Bank CIO Office Setup",
    shortDescription:
      "Structured the CIO Office to improve IT efficiency, align governance across project and product streams, and support execution of the bank's multi-year master plan.",
    type: "strategy",
    domain: "banking",
    task: "governance",
    tools: ["CIO Office", "IT governance", "Budget planning", "Steering committees", "PMO"],
    metrics: { "Budget scope": "400M MAD", "Efficiency target": "+20%", "Context": "Bank-wide" },
    caseStudySlug: "cfg-bank-cio-office",
  },
  {
    id: "2",
    title: "BMCI Data Compliance Dashboards",
    shortDescription:
      "Automated compliance dashboards for KYC, AML, sanctions, and advisory teams, then used weekly governance rituals to prioritize requests and coordinate remediation across departments.",
    type: "analytics",
    domain: "compliance",
    task: "analytics",
    tools: ["Dashboard automation", "KPI design", "Compliance reporting", "Data governance", "Stakeholder management"],
    metrics: { Dashboards: "10+", Committees: "Weekly", "Remediation plans": "5" },
    caseStudySlug: "bmci-data-compliance-dashboards",
  },
  {
    id: "3",
    title: "Core Banking Go-Live Readiness",
    shortDescription:
      "Translated gap-analysis findings into an action plan, facilitated target-solution workshops, and led change management to improve adoption of a new core banking platform before go-live.",
    type: "program",
    domain: "banking",
    task: "adoption",
    tools: ["Core banking", "Change management", "Workshop facilitation", "Gap analysis", "Risk mitigation"],
    metrics: { Duration: "7 months", Focus: "Go-live readiness", Delivery: "Action plan" },
    caseStudySlug: "core-banking-go-live-readiness",
  },
  {
    id: "4",
    title: "L'Oreal Planning Architecture & Reporting",
    shortDescription:
      "Assessed shortlisted integrators, shaped target data architectures with business and IT teams, and strengthened audit reporting with new KPIs for global planning initiatives.",
    type: "program",
    domain: "transformation",
    task: "architecture",
    tools: ["Target architecture", "RFP analysis", "Anaplan", "Audit reporting", "KPI design"],
    metrics: { "RFPs reviewed": "5+", "New KPIs": "10", Scope: "Group IT" },
    caseStudySlug: "loreal-planning-architecture-reporting",
  },
  {
    id: "5",
    title: "Viseo Anaplan Practice Growth",
    shortDescription:
      "Combined delivery leadership and business development to expand the finance practice, sign new clients, and deliver SaaS planning applications using an agile method.",
    type: "strategy",
    domain: "finance",
    task: "delivery",
    tools: ["Anaplan", "Agile delivery", "Pre-sales", "Team enablement", "Client development"],
    metrics: { "New clients": "2", "Practice growth": "+5%", "Apps delivered": "3" },
    caseStudySlug: "viseo-anaplan-practice-growth",
  },
  {
    id: "6",
    title: "Oracle PBCS Agile Delivery",
    shortDescription:
      "Gathered requirements, translated them into technical specifications, and delivered planning applications while framing project economics early to secure client commitment.",
    type: "program",
    domain: "finance",
    task: "delivery",
    tools: ["Oracle PBCS", "Requirements gathering", "Agile delivery", "Cost engineering", "Client steering"],
    metrics: { Apps: "5", "Project framing": "EUR 3M", Prospects: "+25%" },
    caseStudySlug: "oracle-pbcs-agile-delivery",
  },
  {
    id: "7",
    title: "Jedox Pre-sales & Adoption Enablement",
    shortDescription:
      "Supported commercial development with proof-of-concepts, boosted satisfaction through stronger solution design, and trained users to take ownership of their production environments.",
    type: "analytics",
    domain: "finance",
    task: "adoption",
    tools: ["Jedox", "POC design", "Customer training", "Solution consulting", "User enablement"],
    metrics: { POCs: "5+", CSAT: "90%", Market: "France" },
    caseStudySlug: "jedox-presales-adoption",
  },
  {
    id: "8",
    title: "US Oil & Gas Production Analysis",
    shortDescription:
      "Hands-on analytics project exploring production trends from 2008 to 2018, combining cleaning, aggregation, and visualization to surface state-level insights from energy data.",
    type: "analytics",
    domain: "data",
    task: "analytics",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
    metrics: { States: "34+", Period: "2008-2018", Datasets: "2" },
    githubUrl: "https://github.com/AmineLaz10/US-Oil-and-Gas-Production",
    caseStudySlug: "us-oil-gas-production-analysis",
  },
];

export const domainLabels: Record<Domain, string> = {
  banking: "Banking",
  compliance: "Compliance",
  finance: "Finance",
  transformation: "Transformation",
  data: "Data & Analytics",
};

export const taskLabels: Record<Task, string> = {
  governance: "Governance",
  delivery: "Delivery",
  analytics: "Analytics",
  architecture: "Architecture",
  adoption: "Adoption",
};

export const typeLabels: Record<ProjectType, string> = {
  strategy: "Strategy",
  program: "Programs",
  analytics: "Analytics",
};
