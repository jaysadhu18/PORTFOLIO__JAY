export const about = {
  title: "About",
  headlineAccent: "Building",
  headlineRest: "Is My Craft",
  /**
   * Body with [[accent]] markers for highlighted phrases
   */
  bodyParts: [
    { text: "I'm an ", accent: false },
    { text: "Associate Software Engineer", accent: true },
    {
      text: " at Digiflux and a B.Tech CSE student at CHARUSAT (CGPA 8.86). I ship ",
      accent: false,
    },
    { text: "full-stack, mobile & AI", accent: true },
    {
      text: " products with React, React Native, Node.js, Python, and LangChain — driven by curiosity and real-world impact.",
      accent: false,
    },
  ],
  cta: "Resume",
  photo: "/images/jay.png",
  highlights: [
    "Full-stack & mobile: React, React Native, Node.js, Express, MongoDB, PostgreSQL",
    "AI/ML: LangChain, LLMs, Gemini, AWS Bedrock, computer vision, RAG",
    "Grew from Digiflux AI/ML intern to full-time Associate Software Engineer",
    "Hackathon: Odoo 2025 Top 50 (GlobeTrotter) — team lead & full-stack",
  ],
} as const;
