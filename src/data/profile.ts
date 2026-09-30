export const profile = {
  name: "Don-Prince C. Emmanuel",
  shortName: "Don-Prince",
  title: "Data Analyst",
  disciplines: ["SQL", "Power BI", "Excel", "Python"],
  location: "Port Harcourt, Rivers State, Nigeria",
  email: "donprinceemmanuel33@gmail.com",
  phone: "08076341597",
  phoneHref: "tel:+2348076341597",
  linkedin: "https://linkedin.com/in/don-prince-emmanuel-563855346",
  linkedinLabel: "linkedin.com/in/don-prince-emmanuel-563855346",
  availability: "EST 9AM–5PM",
  language: "Fluent English",
  portrait: "/images/profile.jpeg",
  summary:
    "Detail-oriented data analyst with a B.Sc. in Accounting and hands-on work in Python (NumPy, Pandas, and Matplotlib), PostgreSQL, Power BI, and Excel for data cleaning, analysis, visualization, and reporting.",
  skills: [
    {
      group: "SQL",
      items: [
        "PostgreSQL",
        "pgAdmin",
        "JOINs",
        "CTEs",
        "Window functions",
        "Data import and export",
        "Query optimization",
      ],
    },
    {
      group: "BI",
      items: ["Power BI", "DAX", "Power Query", "Data modeling"],
    },
    {
      group: "Excel",
      items: ["Advanced Excel", "PivotTables", "Power Query"],
    },
    {
      group: "Python",
      items: ["NumPy", "Pandas", "Matplotlib"],
    },
    {
      group: "Analytics",
      items: [
        "Data cleaning",
        "KPI development",
        "Dashboard design",
        "Business storytelling",
      ],
    },
  ],
  experience: {
    role: "Volunteer Data Analyst",
    org: "Loctech IT Training Institute",
    place: "Port Harcourt",
    dates: "Jan 2026 – Jun 2026",
    points: [
      "Analyzed enrollment and revenue data to identify top-performing courses and marketing channels.",
      "Built interactive Excel dashboards tracking enrollment, revenue, and performance trends.",
      "Presented data-driven pricing and promotional recommendations to management.",
      "Cleaned and transformed raw CSV data using SQL and Excel for reporting.",
    ],
  },
  education: [
    {
      title: "B.Sc. Accounting",
      org: "Federal University Otuoke, Bayelsa State",
      dates: "2020–2024",
    },
    {
      title: "Certified Business Intelligence Analyst (Power BI)",
      org: "",
      dates: "March 2026",
    },
    {
      title: "Diploma in Data Analysis (Excel & Power BI)",
      org: "Loctech IT Training Institute",
      dates: "",
    },
    {
      title: "SQL for Data Analysis — Diploma",
      org: "",
      dates: "",
    },
  ],
  proof: [
    { value: 300, prefix: "", suffix: "", label: "Applications analyzed" },
    { value: 27, prefix: "", suffix: "K", label: "Policies reviewed" },
    { value: 208, prefix: "₦", suffix: "M", label: "Revenue tracked" },
  ],
} as const;
