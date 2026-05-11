export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  illustration?: string;
}

export const timelineEntries: TimelineEntry[] = [
  {
    year: "2018",
    title: "Computer Science Degree",
    description:
      "Graduated with a B.S. in Computer Science, specializing in algorithms and data structures. First exposure to machine learning through a capstone project on image classification.",
  },
  {
    year: "2019",
    title: "ML Research Internship",
    description:
      "Joined a university lab as a research intern, working on natural language processing and text summarization. Published first paper on abstractive summarization using seq2seq models.",
  },
  {
    year: "2020",
    title: "Computer Vision Engineer",
    description:
      "First industry role building real-time object detection pipelines for manufacturing quality control. Deployed YOLO-based models that reduced defect escape rate by 45%.",
  },
  {
    year: "2022",
    title: "NLP & Conversational AI",
    description:
      "Transitioned to an NLP-focused team, developing conversational agents and sentiment analysis systems. Led the migration from rule-based to transformer-based architectures.",
  },
  {
    year: "2023",
    title: "AI Engineer — LLM Applications",
    description:
      "Current role designing and building production LLM applications, including RAG systems, AI-powered code review tools, and multimodal content generation pipelines.",
  },
  {
    year: "2024",
    title: "Open Source Contributions",
    description:
      "Active contributor to open-source ML tooling. Maintaining a popular fine-tuning toolkit and publishing research on efficient inference optimization techniques.",
  },
];
