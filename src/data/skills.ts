export interface Skill {
  name: string;
  icon: string;
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
      { name: "TensorFlow", icon: "🧠" },
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
      { name: "LangChain", icon: "🔗" },
      { name: "Transformers", icon: "🤖" },
    ],
  },
  {
    name: "Tools & Frameworks",
    slug: "tools-frameworks",
    skills: [
      { name: "Docker", icon: "🐳" },
      { name: "Git", icon: "🌿" },
      { name: "FastAPI", icon: "⚡" },
      { name: "Next.js", icon: "▲" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MLflow", icon: "📈" },
    ],
  },
  {
    name: "Languages",
    slug: "languages",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "TypeScript", icon: "💎" },
      { name: "SQL", icon: "🗃️" },
      { name: "Rust", icon: "🦀" },
      { name: "C++", icon: "⚙️" },
    ],
  },
];
