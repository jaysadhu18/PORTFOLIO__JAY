export type TechGroup = {
  id: string;
  label: string;
  items: string[];
};

/** Exact Technical Skills from resume — five sections */
export const techGroups: TechGroup[] = [
  {
    id: "languages",
    label: "Languages",
    items: ["Python", "Java", "C", "HTML/CSS", "JavaScript", "SQL"],
  },
  {
    id: "databases",
    label: "Databases",
    items: ["MongoDB", "PostgreSQL", "SQLite"],
  },
  {
    id: "frameworks",
    label: "Frameworks / Libraries",
    items: [
      "React.js",
      "React Native",
      "Node.js",
      "Express.js",
      "LangChain",
      "Apollo GraphQL",
      "AJV",
      "Selenium",
      "Redux",
    ],
  },
  {
    id: "cloud",
    label: "Cloud / DevOps",
    items: [
      "AWS S3",
      "AWS Bedrock",
      "Cloudflare R2",
      "Docker",
      "Google Cloud Platform (GCP)",
      "Netlify",
      "Render",
    ],
  },
  {
    id: "ai",
    label: "AI / ML",
    items: [
      "Agentic AI",
      "Deep Learning",
      "Generative AI",
      "LLMs",
      "LangChain",
      "AI Automation",
      "NLP",
      "Prompt Engineering",
      "RAG",
    ],
  },
];

/** Flat list kept for any simple consumers */
export const techStack = techGroups.flatMap((g) =>
  g.items.map((name) => ({
    name,
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    color: "#ebe4df",
  })),
);
