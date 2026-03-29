export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Build a Data Roadmap That Business Teams Actually Use",
    excerpt:
      "A practical view of data prioritization: starting from business pain points, translating them into a backlog, and aligning delivery with measurable outcomes.",
    date: "2026-03-01",
    readTime: "6 min read",
    tags: ["Data Product", "Roadmap", "Prioritization"],
    slug: "data-roadmap-business-adoption",
  },
  {
    id: "2",
    title: "Turning Compliance Requests Into a Governed Data Backlog",
    excerpt:
      "What compliance-heavy environments teach us about intake, escalation, KPI design, and cross-functional steering when data demand exceeds delivery capacity.",
    date: "2026-02-18",
    readTime: "5 min read",
    tags: ["Governance", "Compliance", "Stakeholder Management"],
    slug: "compliance-data-backlog-governance",
  },
  {
    id: "3",
    title: "Why Change Management Decides the Success of Data Programs",
    excerpt:
      "New platforms fail when adoption is treated as an afterthought. This piece covers the delivery habits that help transformation programs stick after go-live.",
    date: "2026-01-29",
    readTime: "4 min read",
    tags: ["Change Management", "Transformation", "Adoption"],
    slug: "change-management-data-programs",
  },
  {
    id: "4",
    title: "Product Owner Data: Why Business, UX, and Analytics Need to Meet",
    excerpt:
      "The strongest data products are not just technically sound. They connect user needs, process reality, and decision-making into one delivery approach.",
    date: "2025-12-12",
    readTime: "7 min read",
    tags: ["Product Owner Data", "UX", "Analytics"],
    slug: "product-owner-data-business-ux-analytics",
  },
];
