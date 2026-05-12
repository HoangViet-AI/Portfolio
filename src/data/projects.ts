export interface Project {
  slug: string;
  title: string;
  description: string;
  techTags: string[];
  thumbnail: string;
  githubUrl: string;
  liveUrl?: string;
  content: string;
  screenshots: string[];
}

export const projects: Project[] = [
  {
    slug: "vietstorylens",
    title: "VietStoryLens",
    description:
      "AI-Powered Historical Landmark Recognition using an Agentic RAG pipeline with LangGraph. Combines CLIP embeddings, FAISS retrieval, and GPS-based Haversine re-ranking to identify landmarks and generate historically grounded narratives. LotusHackathon MVP winner.",
    techTags: ["LangGraph", "FAISS", "CLIP", "OpenAI", "FastAPI", "MCP"],
    thumbnail:
      "linear-gradient(135deg, #7bae7f 0%, #87ceeb 50%, #f5deb3 100%)",
    githubUrl: "https://github.com/HoangViet-AI/vietstorylens",
    content: `An AI-powered system that identifies Vietnamese historical landmarks and generates historically grounded narratives using a sophisticated Agentic RAG architecture.

Built with LangGraph using a Router-Verifier pattern for intelligent query routing. The retrieval layer combines CLIP embeddings (FAISS) with GPS-based Haversine re-ranking, reducing identification errors by 30%.

Includes a custom MCP-server (Model Context Protocol) exposing Google Places API and internal Historical Knowledge Bases as tools for the LLM agent. Strict Guardrails and citation logic ensure every generated "story" is grounded in landmarks.json, eliminating hallucination in historical dates and facts.

Tech Stack: Python, FastAPI, LangGraph, FAISS, OpenAI, Flutter, MCP.`,
    screenshots: ["/projects/vietstorylens.webp"],
  },
  {
    slug: "fungi-detection",
    title: "AI-Powered Fungi Detection",
    description:
      "Hybrid ConvNeXt + Transformer model achieving 97.7% accuracy in fungal species classification. Led a 4-member team at the Olympic AI HCMC Competition, automating the full data pipeline from ingestion to preprocessing.",
    techTags: ["ConvNeXt", "Transformer", "Python", "PyTorch", "OpenCV"],
    thumbnail:
      "linear-gradient(135deg, #f4a7bb 0%, #87ceeb 50%, #7bae7f 100%)",
    githubUrl: "https://github.com/HoangViet-AI/fungi-detection",
    content: `A hybrid deep learning system for fungal species classification, developed as the lead project for the Olympic AI HCMC Competition where it earned 4th place.

Designed a hybrid ConvNeXt + Transformer model that combines the local feature extraction strength of ConvNeXt with the global attention mechanism of Transformers, achieving 97.7% accuracy in fungal species classification.

Automated the end-to-end pipeline: data ingestion, cleaning, augmentation, and preprocessing. Led a 4-member team, coordinated research direction, and prepared presentation materials for the competition judges.`,
    screenshots: ["/projects/fungi-detection.webp"],
  },
  {
    slug: "shrimp-ai-detection",
    title: "Shrimp AI Detection & Sizing",
    description:
      "AI-powered shrimp health monitoring and length measurement system using YOLO/RTMDet. Detects disease symptoms and measures shrimp body length in real-time for aquaculture quality control, achieving over 95% detection accuracy.",
    techTags: ["YOLO", "RTMDet", "Python", "Docker", "FastAPI", "OpenCV"],
    thumbnail:
      "linear-gradient(135deg, #87ceeb 0%, #f4a7bb 50%, #f5deb3 100%)",
    githubUrl: "https://github.com/HoangViet-AI/shrimp-ai-detection",
    content: `An AI-powered computer vision system for shrimp aquaculture that combines disease detection and body length measurement in a single pipeline.

Built on YOLO and RTMDet architectures to detect and classify shrimp health conditions — identifying disease symptoms such as white spot, black gill, and body deformities. Simultaneously measures shrimp body length with sub-millimeter precision for growth tracking and harvest optimization.

The system processes real-time camera feeds from shrimp ponds, providing farmers with instant health alerts and growth analytics. Optimized inference pipelines reduce latency from 45s to <15s, enabling continuous monitoring across multiple ponds.

Integrated intelligent contextual reasoning to achieve over 95% automation accuracy. Implemented a SQL Guardrail layer for data security and robust multi-tenancy support across farm operations.

Tech Stack: Python, YOLO, RTMDet, FastAPI, Docker, OpenCV.`,
    screenshots: ["/projects/shrimp-detection.webp"],
  },
  {
    slug: "intelligent-data-assistant",
    title: "Intelligent Data Assistant",
    description:
      "Multi-tasking Text-to-SQL Chatbot capable of navigating 62 complex schema tables. Leverages Metadata Enrichment and RAG to convert natural language into precise SQL queries for real-time farm management.",
    techTags: ["LangChain", "RAG", "SQL", "FastAPI", "Python", "Docker"],
    thumbnail:
      "linear-gradient(135deg, #f5deb3 0%, #7bae7f 50%, #87ceeb 100%)",
    githubUrl: "https://github.com/HoangViet-AI/data-assistant",
    content: `An intelligent conversational assistant engineered at Mebisoft that translates natural language questions into precise SQL queries across a complex database schema.

The system navigates 62 complex schema tables using Metadata Enrichment and Retrieval-Augmented Generation (RAG) to understand table relationships and column semantics. This enables non-technical users to query farm management data in real-time without SQL knowledge.

Features include multi-turn conversation support, query validation, and result visualization. The system includes guardrails for SQL injection prevention and ensures data security through a robust multi-tenancy layer.`,
    screenshots: ["/projects/data-assistant.webp"],
  },
];
