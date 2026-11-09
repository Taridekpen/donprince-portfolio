export const profile = {
  name: "Don-Prince C. Emmanuel",
  shortName: "Don-Prince",
  title: "Data Analyst",
  disciplines: ["SQL", "Power BI", "Excel", "Python"],
  location: "Port Harcourt, Rivers State, Nigeria",
  email: "donprinceemmanuel33@gmail.com",
  phone: "+234 807 634 1597",
  phoneHref: "tel:+2348076341597",
  linkedin: "https://linkedin.com/in/don-prince-emmanuel-563855346",
  linkedinLabel: "linkedin.com/in/don-prince-emmanuel-563855346",
  availability: "WAT 9AM–5PM",
  language: "Fluent English",
  portrait: "/images/profile.jpeg",
  summary:
    "Data Analyst with a B.Sc. in Accounting based in Port Harcourt, Nigeria. I use Python, PostgreSQL, Power BI, and Excel to clean, analyze, and visualize data — turning complex datasets into clear insights and reports.",
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
  experience: [
    {
      role: "Independent Data Consultant & Analyst",
      org: "Remote / Contract",
      place: "",
      dates: "Jan 2026 – Present",
      points: [
        "Cleaned and modeled 9,134 insurance customers, ₦4M in claims, and ₦73M in customer lifetime value in Power BI, then built a two-page performance dashboard. The response rate was 14%, and agents were the strongest channel.",
        "Built a PostgreSQL record of 300 applications and found an average expected salary of $94K, with 25.98% of roles remote.",
        "Used Python and Pandas to prepare raw CSV files before they went into reports, so that step was no longer done by hand.",
      ],
    },
    {
      role: "Data Analyst (Volunteer)",
      org: "Loctech IT Training Institute",
      place: "Port Harcourt",
      dates: "Jan 2026 – June 2026",
      points: [
        "Reviewed enrollment records in SQL and Excel to see which courses and marketing channels were bringing students in.",
        "Built Excel dashboards that cut the time the team spent preparing reports.",
        "Turned the findings into pricing and promotion suggestions and presented them to management.",
      ],
    },
  ],
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
      title: "Professional Diploma: Python and SQL for Data Analysis",
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
