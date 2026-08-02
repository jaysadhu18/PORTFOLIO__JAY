export type CareerItem = {
  id: string;
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
  tags?: string[];
};

/** Resume + LinkedIn (https://www.linkedin.com/in/jay-sadhu-/) */
export const career: CareerItem[] = [
  {
    id: "digiflux",
    role: "Associate Software Engineer",
    org: "Digiflux Technologies Private Limited",
    location: "Vadodara, Gujarat",
    period: "Dec 2025 – Current",
    bullets: [
      "Develop and maintain full-stack web and mobile apps with React, React Native, Node.js, Express, MongoDB, PostgreSQL, and SQLite.",
      "Built enterprise dashboards (MIXA, DRM, Irada Foundation, Poshan Rath) with REST APIs, RBAC, offline sync, and performance optimization.",
      "Designed data automation: multi-platform scraping, ETL, PostgreSQL→MongoDB migration, AJV validation, and Python scripts.",
      "Applied LangChain, LLMs, Gemini, and AWS Bedrock for intelligent automation, image generation, and data processing.",
      "Integrated AWS S3, Cloudflare R2, Google Apps Script, Shopify, Odoo, Apollo GraphQL, and Docker.",
    ],
    tags: ["Full-Stack", "React Native", "AI", "Cloud"],
  },
  {
    id: "digiflux-intern",
    role: "AI / ML Intern",
    org: "Digiflux Technologies Private Limited",
    location: "Vadodara, Gujarat",
    period: "2025",
    bullets: [
      "Interned on live projects and R&D — contributed to AI/ML and software development before converting to full-time.",
      "Worked with mentors and the Digiflux team on production-facing features and learning culture.",
    ],
    tags: ["AI/ML", "Internship"],
  },
  {
    id: "brainybeam",
    role: "Data Science Intern",
    org: "Brainybeam Info-Tech Pvt. Ltd.",
    location: "Ahmedabad, Gujarat",
    period: "May 2025 – Aug 2025",
    bullets: [
      "Built time-based TSLA stock prediction with Linear Regression, lag features, and technical indicators (MAE, MSE, RMSE, R²).",
      "Extended to Decision Tree and Random Forest with hyperparameter tuning and feature-importance analysis.",
    ],
    tags: ["Machine Learning", "Python", "Regression"],
  },
  {
    id: "odoo-hackathon",
    role: "Team Lead & Full-Stack Developer — Top 50",
    org: "Odoo Hackathon 2025 · GlobeTrotter",
    location: "Gandhinagar, Gujarat",
    period: "Aug 2025",
    bullets: [
      "From ~20,000 participants to Top 350 onsite finals, then Top 50 overall with teammates Dev Patel, Jay Patel, and Prem Trivedi.",
      "Built GlobeTrotter: multi-city itineraries, activity discovery, budget estimation, timelines, and public sharing.",
    ],
    tags: ["Hackathon", "MERN", "Leadership"],
  },
  {
    id: "internpe",
    role: "Python Developer Intern",
    org: "InternPe",
    location: "Remote",
    period: "May 2024 – June 2024",
    bullets: [
      "Built GUI apps and games with Pygame and Tkinter; improved frame handling, events, and modularity.",
    ],
    tags: ["Python", "GUI"],
  },
  {
    id: "charusat",
    role: "B.Tech in Computer Science and Engineering",
    org: "CHARUSAT",
    location: "Anand, Gujarat",
    period: "2022 – 2026",
    bullets: ["CGPA 8.86 / 10 · Focus on software engineering, AI/ML, and full-stack systems"],
    tags: ["Education"],
  },
];
