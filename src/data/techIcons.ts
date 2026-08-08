import type { IconType } from "react-icons";
import {
  SiApollographql,
  SiC,
  SiCloudflare,
  SiDocker,
  SiExpress,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiLangchain,
  SiMongodb,
  SiNetlify,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiRender,
  SiSelenium,
  SiSqlite,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa6";
import { FiBox, FiCloud, FiCode, FiCpu, FiDatabase } from "react-icons/fi";

/** Exact tech-name → real logo, for names that have one. */
export const techIcons: Record<string, IconType> = {
  Python: SiPython,
  Java: FaJava,
  C: SiC,
  "HTML/CSS": SiHtml5,
  JavaScript: SiJavascript,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  SQLite: SiSqlite,
  "React.js": SiReact,
  "React Native": SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  LangChain: SiLangchain,
  "Apollo GraphQL": SiApollographql,
  Selenium: SiSelenium,
  Redux: SiRedux,
  "AWS S3": FaAws,
  "AWS Bedrock": FaAws,
  "Cloudflare R2": SiCloudflare,
  Docker: SiDocker,
  "Google Cloud Platform (GCP)": SiGooglecloud,
  Netlify: SiNetlify,
  Render: SiRender,
};

/** Per-category glyph for concept items with no real logo (AJV, SQL, NLP, RAG, ...). */
export const techCategoryFallback: Record<string, IconType> = {
  languages: FiCode,
  databases: FiDatabase,
  frameworks: FiBox,
  cloud: FiCloud,
  ai: FiCpu,
};
