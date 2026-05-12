const ICON_BASE =
  "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons";

const LOBE_ICON_BASE =
  "https://unpkg.com/@lobehub/icons-static-svg@latest/icons";

function techIcon(name: string) {
  return `${ICON_BASE}/${name}.png`;
}

function lobeIcon(name: string) {
  return `${LOBE_ICON_BASE}/${name}.svg`;
}

export interface Skill {
  name: string;
  icon: string;
  iconUrl?: string;
}

export interface SkillCategory {
  name: string;
  slug: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "ML & Deep Learning",
    slug: "ml-deep-learning",
    skills: [
      { name: "PyTorch", icon: "🔥" },
      { name: "TensorFlow", icon: "🧠", iconUrl: techIcon("tensorflow") },
      { name: "YOLO", icon: "🎯" },
      { name: "ConvNeXt", icon: "🔬" },
      { name: "Hugging Face", icon: "🤗", iconUrl: lobeIcon("huggingface") },
    ],
  },
  {
    name: "Agentic & RAG",
    slug: "agentic-rag",
    skills: [
      { name: "LangGraph", icon: "🕸️", iconUrl: lobeIcon("langgraph") },
      { name: "LangChain", icon: "🔗", iconUrl: lobeIcon("langchain") },
      { name: "FAISS", icon: "🔍" },
      { name: "OpenAI", icon: "🤖", iconUrl: lobeIcon("openai") },
      { name: "MCP", icon: "🔌", iconUrl: lobeIcon("mcp") },
    ],
  },
  {
    name: "Computer Vision",
    slug: "computer-vision",
    skills: [
      { name: "OpenCV", icon: "👁️" },
      { name: "RTMDet", icon: "📦" },
      { name: "CLIP", icon: "🖼️" },
      { name: "Roboflow", icon: "🏷️" },
    ],
  },
  {
    name: "Tools & Frameworks",
    slug: "tools-frameworks",
    skills: [
      { name: "Docker", icon: "🐳", iconUrl: techIcon("docker") },
      { name: "FastAPI", icon: "⚡", iconUrl: techIcon("fastapi") },
      { name: "Git", icon: "🌿", iconUrl: techIcon("git") },
      { name: "Flutter", icon: "📱", iconUrl: techIcon("flutter") },
      { name: "PostgreSQL", icon: "🐘", iconUrl: techIcon("postgresql") },
      { name: "MongoDB", icon: "🍃", iconUrl: techIcon("mongodb") },
    ],
  },
  {
    name: "Languages",
    slug: "languages",
    skills: [
      { name: "Python", icon: "🐍", iconUrl: techIcon("python") },
      { name: "SQL", icon: "🗃️" },
      { name: "TypeScript", icon: "💎", iconUrl: techIcon("typescript") },
    ],
  },
];
