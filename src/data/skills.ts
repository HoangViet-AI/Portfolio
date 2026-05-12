const ICON_BASE =
  "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons";

function techIcon(name: string) {
  return `${ICON_BASE}/${name}.png`;
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
      { name: "scikit-learn", icon: "📊" },
      { name: "Keras", icon: "🔬" },
      { name: "Hugging Face", icon: "🤗" },
    ],
  },
  {
    name: "Computer Vision",
    slug: "computer-vision",
    skills: [
      { name: "OpenCV", icon: "👁️" },
      { name: "YOLOv8", icon: "🎯" },
      { name: "MediaPipe", icon: "🖐️" },
      { name: "Pillow", icon: "🖼️" },
    ],
  },
  {
    name: "NLP",
    slug: "nlp",
    skills: [
      { name: "spaCy", icon: "📝" },
      { name: "NLTK", icon: "📚" },
      { name: "LangChain", icon: "🔗", iconUrl: techIcon("langchain_icon") },
      { name: "Transformers", icon: "🤖" },
    ],
  },
  {
    name: "Tools & Frameworks",
    slug: "tools-frameworks",
    skills: [
      { name: "Docker", icon: "🐳", iconUrl: techIcon("docker") },
      { name: "Git", icon: "🌿", iconUrl: techIcon("git") },
      { name: "FastAPI", icon: "⚡", iconUrl: techIcon("fastapi") },
      { name: "Next.js", icon: "▲", iconUrl: techIcon("next_js") },
      { name: "PostgreSQL", icon: "🐘", iconUrl: techIcon("postgresql") },
      { name: "MLflow", icon: "📈" },
    ],
  },
  {
    name: "Languages",
    slug: "languages",
    skills: [
      { name: "Python", icon: "🐍", iconUrl: techIcon("python") },
      { name: "TypeScript", icon: "💎", iconUrl: techIcon("typescript") },
      { name: "SQL", icon: "🗃️" },
      { name: "Rust", icon: "🦀", iconUrl: techIcon("rust") },
      { name: "C++", icon: "⚙️", iconUrl: techIcon("c%2B%2B") },
    ],
  },
];
