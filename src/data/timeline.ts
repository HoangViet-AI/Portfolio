export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  illustration?: string;
}

export const timelineEntries: TimelineEntry[] = [
  {
    year: "2022",
    title: "Bachelor of Machine Learning",
    description:
      "Began studying Machine Learning at HCMC University of Technology. Dove deep into algorithms, neural networks, and computer vision fundamentals.",
  },
  {
    year: "2023",
    title: "Python Instructor & Outstanding Graduate",
    description:
      "Taught basic and advanced Python to high school students while earning Outstanding Graduate of the Class of 2023. Developed strong communication skills by breaking complex technical topics into clear lessons.",
  },
  {
    year: "2024",
    title: "Hackathon Champion",
    description:
      "Won the PieoneDream Hackathon AI x Blockchain. Built VietStoryLens — an AI-powered landmark recognition app that became the LotusHackathon MVP. Active as Google Developer Group facilitator at DevFest.",
  },
  {
    year: "2025 Q1",
    title: "AI Engineer Intern — ThinkWare",
    description:
      "Executed high-precision data annotation for autonomous driving, including Object Detection and classification of thousands of objects in complex road scenes.",
  },
  {
    year: "2025 Q2",
    title: "RAG Specialist — TURING",
    description:
      "Designed and executed RAG evaluation pipelines measuring Retrieval Quality (Hit Rate, MRR) and Grounding Accuracy. Curated instruction-tuning datasets to improve Tool Calling reliability for internal LLM agents.",
  },
  {
    year: "2025 Q3",
    title: "AI Engineer — Mebisoft",
    description:
      "Current role designing high-performance Object Detection models (YOLO/RTMDet) and building an Intelligent Data Assistant (Text-to-SQL) for smart manufacturing. Reduced inference latency from 45s to <15s.",
  },
];
