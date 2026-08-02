export type WorkItem = {
  id: string;
  title: string;
  summary: string;
  stack: string[];
  image: string;
  /** Short category label shown on the card (e.g. Web, AI, Mobile) */
  category?: string;
  link?: string;
  demo?: string;
  featured?: boolean;
};

/**
 * Featured + GitHub projects
 * Profile: https://github.com/jaysadhu18
 */
export const work: WorkItem[] = [
  {
    id: "careersense",
    category: "Web · AI",
    title: "CareerSense",
    summary:
      "AI career platform with interactive career trees, dynamic roadmaps, quizzes, job tracking, and Gemini resume/cover-letter tailoring.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Groq", "Gemini", "React Flow"],
    image: "/images/work/careersense.webp",
    link: "https://github.com/jaysadhu18/careersence",
    featured: true,
  },
  {
    id: "ai-agent",
    category: "AI",
    title: "AI Agent Automation System",
    summary:
      "Agentic AI that turns natural language into executable workflows — LangGraph planning, Git/terminal execution, memory, and Telegram reporting.",
    stack: ["Python", "FastAPI", "LangGraph", "Groq", "Telegram", "SQLite"],
    image: "/images/work/ai-agent.webp",
    featured: true,
  },
  {
    id: "sign-language",
    category: "AI · CV",
    title: "Sign Language Detection",
    summary:
      "Real-time webcam sign detection with MediaPipe landmarks and Random Forest classification (A–Z + tokens) in a Streamlit UI.",
    stack: ["Python", "OpenCV", "MediaPipe", "scikit-learn", "Streamlit"],
    image: "/images/work/sign-language.webp",
    link: "https://github.com/jaysadhu18/SIGN-LANGUAGE-DETECTION-",
    featured: true,
  },
  {
    id: "ai-assistant",
    category: "Mobile",
    title: "AI Assistant App",
    summary:
      "Flutter AI assistant with ChatGPT chat, DALL·E image generation, multi-language translation, Hive offline storage, and theme support.",
    stack: ["Flutter", "Dart", "ChatGPT", "DALL·E", "Hive"],
    image: "/images/work/ai-assistant.webp",
    link: "https://github.com/jaysadhu18/AI-ASSISTANT-APP",
    featured: true,
  },
  {
    id: "expense-tracker",
    category: "Web",
    title: "Expense Tracker SaaS",
    summary:
      "Full-stack expense tracker with JWT auth, charts, and a Python engine that generates PDF/CSV reports and can email them on a schedule.",
    stack: ["React", "Node.js", "MongoDB", "Python", "JWT"],
    image: "/images/work/expense.webp",
    link: "https://github.com/jaysadhu18/Expense-Tracker",
    demo: "https://expense-tracker-omega-five-74.vercel.app",
    featured: true,
  },
  {
    id: "globetrotter",
    category: "Web",
    title: "GlobeTrotter Travel Planner",
    summary:
      "Multi-city travel planner from Odoo Hackathon 2025 (Top 50) — itineraries, activities, budgets, timelines, and sharing.",
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind"],
    image: "/images/work/globetrotter.webp",
    link: "https://github.com/PremT0301/Globe-Trotter-",
    featured: true,
  },
  {
    id: "healthcare",
    category: "Mobile",
    title: "Poshan Rath & Swasthya Nagaram",
    summary:
      "Cross-platform healthcare apps with offline-first SQLite sync, multilingual UX, patient management, and resilient REST APIs.",
    stack: ["React Native", "Node.js", "SQLite", "REST"],
    image: "/images/work/healthcare.webp",
    featured: true,
  },
  {
    id: "search-directory",
    category: "Web",
    title: "Search Directory",
    summary:
      "Searchable directory web app deployed on Vercel — fast lookup UX built with JavaScript.",
    stack: ["JavaScript", "Vercel"],
    image: "/images/work/search.webp",
    link: "https://github.com/jaysadhu18/Search-Directory-",
    demo: "https://search-directory.vercel.app",
    featured: true,
  },
  {
    id: "recipe-generator",
    category: "Web",
    title: "Recipe Generator",
    summary:
      "Recipe discovery site with nutrition counts and dynamic API-driven suggestions for cooks.",
    stack: ["React", "APIs", "JavaScript"],
    image: "/images/work/recipe.webp",
    link: "https://github.com/PremT0301/RECIPE-GENERATOR",
    featured: true,
  },
  {
    id: "sign-language-alt",
    category: "AI",
    title: "sign-Language",
    summary:
      "Additional sign-language / CV experiments on GitHub (Python).",
    stack: ["Python"],
    image: "/images/work/sign-language.webp",
    link: "https://github.com/jaysadhu18/sign-Language",
  },
  {
    id: "dlp",
    category: "Systems",
    title: "DLP",
    summary: "Systems / coursework project in C on GitHub.",
    stack: ["C"],
    image: "/images/work/dlp.webp",
    link: "https://github.com/jaysadhu18/DLP",
  },
];

export const githubProfile = "https://github.com/jaysadhu18";
