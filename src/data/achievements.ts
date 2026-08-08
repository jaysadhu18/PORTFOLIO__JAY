export type Achievement = {
  id: string;
  value: string;
  label: string;
  detail: string;
};

/** Grounded in career.ts / about.ts / the resume — no invented figures. */
export const achievements: Achievement[] = [
  {
    id: "cgpa",
    value: "8.86",
    label: "CGPA / 10",
    detail: "B.Tech in Computer Science, CHARUSAT · 2022–2026",
  },
  {
    id: "hackathon",
    value: "Top 50",
    label: "Odoo Hackathon 2025",
    detail: "From ~20,000 participants to Top 50 overall — team lead, GlobeTrotter",
  },
  {
    id: "growth",
    value: "Intern → ASE",
    label: "Career growth",
    detail: "AI/ML Intern to Associate Software Engineer, Digiflux Technologies",
  },
] as const;
