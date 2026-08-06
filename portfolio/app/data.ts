export interface Stat {
  label: string;
  value: string;
}

export const stats: Stat[] = [
  { label: "Internships completed", value: "5" },
  { label: "Requirements gathered", value: "30" },
  { label: "Smart contracts deployed", value: "6" },
  { label: "RPA / automation workflows", value: "3" },
  { label: "Bugs debugged (UAT)", value: "80" },
  { label: "Countries studied in", value: "2" },
];

export interface ExperienceBlock {
  height: string;
  dateRange: string;
  title: string;
  company: string;
  location: string;
  bullets: string[];
}

export const experience: ExperienceBlock[] = [
  {
    height: "BLOCK #005",
    dateRange: "JAN 2026 – MAY 2026",
    title: "Product & Business Analyst Intern",
    company: "SBI Digital Markets",
    location: "Singapore",
    bullets: [
      "Gathered and documented 30 functional requirements working across product, engineering, and operations teams.",
      "Translated requirements into 5 process flows and PRDs to support feature design.",
      "Authored 15 user stories to implement cash ledger enhancements.",
      "Contributed to product ideation and design for Digital Payment Token (DPT) services.",
    ],
  },
  {
    height: "BLOCK #004",
    dateRange: "MAY 2024 – DEC 2024",
    title: "Information Security Analyst Intern",
    company: "Singapore Exchange",
    location: "Singapore",
    bullets: [
      "Supported data loss prevention rollout across 6 departments using Trellix and Skyhigh Security.",
      "Automated internal workflows with VBA, cutting manual reporting time by 30%.",
      "Built and maintained 5 Power BI dashboards, reducing report compilation from 4 hours to 30 minutes.",
    ],
  },
  {
    height: "BLOCK #003",
    dateRange: "DEC 2023",
    title: "Software Engineer Intern",
    company: "Titipku",
    location: "Indonesia",
    bullets: [
      "Developed 5 end-to-end product features for a full-stack web app using React, Golang (Gin), and MySQL.",
      "Built and validated 10+ RESTful API endpoints using Postman.",
      "Worked in a 4-person agile team to refine feature behavior and usability.",
    ],
  },
  {
    height: "BLOCK #002",
    dateRange: "MAY 2023 – JUL 2023",
    title: "Operation Analyst Intern",
    company: "Sygnum Bank",
    location: "Singapore",
    bullets: [
      "Ran UAT & regression testing across 100 stories, debugging ~80 bugs to improve release quality.",
      "Built 3 Power Automate RPA workflows, cutting report reconciliation from 3 days to 2 hours.",
      "Supported roll-out of DPT and Custody platforms with Tech, Compliance, and PMs.",
    ],
  },
  {
    height: "BLOCK #001",
    dateRange: "JAN 2022 – JUN 2022",
    title: "Project Intern",
    company: "Accenture",
    location: "Singapore",
    bullets: [
      "Reviewed deliverables for compliance with documentation and reporting standards.",
      "Analysed policy document versions to support impact assessment and system design.",
      "Designed templates to collect structured test data across multiple organisations.",
    ],
  },
];

export interface Project {
  kind: "contract" | "service" | "app";
  name: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    kind: "contract",
    name: "Final Year Project - Decentralised Crowdfunding Platform",
    description:
      "Final year project — a decentralised crowdfunding platform where users create campaigns and contribute through trustless smart contracts. 3 Solidity contracts deployed via Hardhat with full unit test coverage, plus a Next.js frontend with RainbowKit wallet integration.",
    tags: ["Solidity", "Hardhat", "Next.js", "RainbowKit"],
  },
  {
    kind: "contract",
    name: "Dutch Auction Platform",
    description:
      "A Dutch auction application with automated price-reduction logic for token sale price discovery. Solidity contracts tested end-to-end for bidding, real-time pricing, and on-chain settlement.",
    tags: ["Solidity", "Hardhat", "Ethereum"],
  },
  {
    kind: "service",
    name: "Liquidity Pool Aggregator",
    description:
      "Backend services in Golang aggregating liquidity pool and token data across 3 Solana DeFi protocols, using Helius RPC for real-time on-chain data with retry logic and rate management.",
    tags: ["Golang", "Solana", "Helius RPC"],
  },
  {
    kind: "app",
    name: "Clinic Registration Platform",
    description:
      "A full-stack patient registration and records system with relational schema design and type-safe CRUD APIs, built for data integrity and query performance.",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
  },
];

export interface SkillGroup {
  title: string;
  variant?: "teal" | "gold";
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["TypeScript", "Solidity", "JavaScript", "Python", "Golang", "HTML/CSS", "PostgreSQL"],
  },
  {
    title: "Frameworks & devtools",
    variant: "teal",
    items: ["React", "Next.js", "Node", "Express", "Flask", "Hardhat", "Git"],
  },
  {
    title: "Product analysis",
    variant: "gold",
    items: ["Jira", "Confluence", "Balsamiq", "Figma"],
  },
  {
    title: "Domain experience",
    items: ["Web3", "Distributed Ledger Tech", "Tokenised RWAs", "FinTech"],
  },
];

export interface Education {
  status: "active" | "confirmed";
  school: string;
  location: string;
  degree: string;
  timeRange: string;
}

export const education: Education[] = [
  {
    status: "confirmed",
    school: "Nanyang Technological University",
    location: "Singapore",
    degree: "Bachelor of Computing with Honours — Computer Science",
    timeRange: "AUG 2022 → MAY 2026",
  },
  {
    status: "confirmed",
    school: "Linköping University",
    location: "Linköping, Sweden",
    degree: "Bachelor of Science — Computer Science (Semester Exchange)",
    timeRange: "JAN 2025 → JUN 2025",
  },
];