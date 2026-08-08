export type CaseStudy = {
  problem: string;
  features: string[];
  contribution: string;
};

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
  /** Deeper case-study detail — only set for projects the resume documents in detail */
  caseStudy?: CaseStudy;
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
    caseStudy: {
      problem:
        "Students and early-career job seekers lack one place to explore career paths, get a personalized roadmap, and prep application materials.",
      features: [
        "Interactive career-tree visualization built with React Flow",
        "Adaptive career quizzes and personalized roadmaps",
        "Resume parsing and AI-driven college recommendations",
        "Groq AI + Gemini integration for intelligent career guidance",
        "Secure auth with NextAuth.js and a role-based admin dashboard",
      ],
      contribution:
        "Built full-stack — the Prisma/PostgreSQL data layer and NextAuth.js auth, the React Flow career-tree UI, and the Groq/Gemini integration for AI guidance.",
    },
  },
  {
    id: "ai-agent",
    category: "AI",
    title: "AI Agent Automation System",
    summary:
      "Agentic AI that turns natural language into executable workflows — LangGraph planning, Git/terminal execution, memory, and Telegram reporting.",
    stack: ["Python", "FastAPI", "LangGraph", "Groq", "Telegram", "SQLite"],
    image: "/images/work/ai-agent.webp",
    caseStudy: {
      problem:
        "Turning natural-language instructions into safe, reliable automated actions usually means custom scripting for every task.",
      features: [
        "LangGraph-based planning that converts natural language into executable workflows",
        "Secure automation framework: task planning, Git integration, Python/terminal execution",
        "Persistent memory across runs",
        "Automated reporting back through a Telegram bot interface",
      ],
      contribution:
        "Designed and built the agent end-to-end with FastAPI, LangGraph, and Groq LLMs, including the execution sandboxing and the Telegram reporting layer.",
    },
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
    caseStudy: {
      problem:
        "Real-time communication accessibility for sign-language users needs fast, accurate gesture recognition that works live, not just on static images.",
      features: [
        "Real-time webcam hand-gesture detection with MediaPipe landmark tracking",
        "Random Forest classification across A–Z plus common tokens",
        "Live gesture-to-text conversion",
        "Streamlit UI for accessible, no-install use",
      ],
      contribution:
        "Built the full computer-vision pipeline — MediaPipe landmark extraction, model training/evaluation, and the live Streamlit interface.",
    },
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
  },
  {
    id: "healthcare",
    category: "Mobile",
    title: "Poshan Rath & Swasthya Nagaram",
    summary:
      "Cross-platform healthcare apps with offline-first SQLite sync, multilingual UX, patient management, and resilient REST APIs.",
    stack: ["React Native", "Node.js", "SQLite", "REST"],
    image: "/images/work/healthcare.webp",
    caseStudy: {
      problem:
        "Healthcare workers in low-connectivity areas need patient-management apps that keep working — and stay in sync — when the network doesn't.",
      features: [
        "Offline-first architecture with SQLite-based local storage",
        "Background sync, caching, and pagination once connectivity returns",
        "Multilingual UX for frontline health workers",
        "Secure REST API integration with validation and performance tuning",
      ],
      contribution:
        "Built the React Native apps and the offline-sync layer — SQLite caching/pagination, validation, and REST API integration — across both Poshan Rath and Swasthya Nagaram.",
    },
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
