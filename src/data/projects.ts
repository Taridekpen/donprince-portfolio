export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  question: string;
  built: string;
  finding: string;
  tools: string[];
  images: ProjectImage[];
  metric: string;
  link?: {
    href: string;
    label: string;
  };
};

export const projects: Project[] = [
  {
    id: "job-market",
    title: "Job market analysis",
    eyebrow: "PostgreSQL",
    summary:
      "300 applications across 8 companies, with an average expected salary of $94K.",
    question:
      "Where are applications concentrated, and what salary should a candidate expect?",
    built:
      "A PostgreSQL analysis in pgAdmin using JOINs and CTEs, presented as an applications dashboard with monthly volume, location mix, status, and salary by company.",
    finding:
      "Of 300 applications, remote roles account for 25.98% of locations. The average expected salary is $94K, with Amazon, Meta, Netflix, Google, and Interswitch clustered between $90K and $101K.",
    tools: ["PostgreSQL", "pgAdmin", "JOINs", "CTEs"],
    images: [
      {
        src: "/images/dashboard-1.jpeg",
        alt: "Job applications analytics dashboard showing volume, location, status, and salary",
        caption: "Applications, location mix, status, and expected salary",
      },
    ],
    metric: "$94K avg salary",
  },
  {
    id: "insurance",
    title: "Insurance customer and claims",
    eyebrow: "Customer analytics",
    summary:
      "27K policies, a 14% response rate, and ₦73M in customer lifetime value.",
    question:
      "Which channels respond, where complaints sit, and how claims relate to customer value?",
    built:
      "Two views of one insurance study: response and complaints, then coverage, claim amount, and lifetime value by state.",
    finding:
      "Agents drive the strongest engagement at a 14% overall response rate. Four-wheel vehicles generate the largest share of open complaints. Claim amounts fall as time since the last claim increases, and Abuja leads customer lifetime value at ₦25M.",
    tools: ["Dashboard design", "KPI development", "Business storytelling", "Power BI"],
    images: [
      {
        src: "/images/dashboard-2.jpeg",
        alt: "Insurance dashboard of response rate, complaints by vehicle class, and claim value",
        caption: "Response rate, open complaints, and claim value",
      },
      {
        src: "/images/dashboard-3.jpeg",
        alt: "Insurance dashboard of coverage, claim amount over time, and lifetime value by state",
        caption: "Coverage, claim recency, and lifetime value by state",
      },
    ],
    metric: "27K policies",
  },
  {
    id: "sales",
    title: "Sales performance",
    eyebrow: "Jan–Apr 2026",
    summary:
      "₦208M revenue, 479 units, and ₦36M profit across payment methods, states, and products.",
    question:
      "Where does profit concentrate across payment methods, people, states, and products?",
    built:
      "A sales dashboard with revenue, quantity, and profit KPIs, a monthly profit timeline, and breakdowns by payment method, salesperson, state, and product.",
    finding:
      "The book shows ₦208M revenue and ₦36M profit on 479 units from January through April 2026. Profit is split across cash, credit, POS, and transfer, with Delta leading state sales.",
    tools: ["Dashboard design", "KPI development", "Excel"],
    images: [
      {
        src: "/images/dashboard-4.jpeg",
        alt: "Sales dashboard with revenue, profit timeline, payment mix, and top products",
        caption: "Revenue, profit, payment mix, and product ranking",
      },
    ],
    metric: "₦36M profit",
  },
  {
    id: "anime",
    title: "Anime dataset analytics",
    eyebrow: "2020–2026",
    summary:
      "114 titles, 70M members, and an average score of 8.21 across 53 studios and 12 genres.",
    question:
      "What do fans actually love, which studios are getting it right, and where is the industry heading?",
    built:
      "An end-to-end study: Python to scrape the dataset, SQL to structure it, Excel for outlier checks and validation, Power BI for the dashboard, and a site to present the work.",
    finding:
      "Action leads with 27M members, Wit Studio leads the studios, and average scores rise from 8.02 in 2024 to 8.43 in 2026. Television accounts for about 95% of members.",
    tools: ["Python", "SQL", "Excel", "Power BI", "HTML, CSS, and JavaScript"],
    images: [
      {
        src: "/images/anime-dashboard.jpg",
        alt: "Anime dataset analytics dashboard with scores, studios, genres, and member counts",
        caption: "Scores, studios, genres, and member counts, 2020–2026",
      },
    ],
    metric: "8.21 avg score",
    link: {
      href: "https://anime-analytics-coral.vercel.app/",
      label: "Open the live study",
    },
  },
];
