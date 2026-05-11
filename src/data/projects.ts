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
    slug: "shrimp-detection",
    title: "Shrimp Detection System",
    description:
      "Real-time shrimp detection and classification system using YOLOv8, capable of identifying species, size estimation, and quality grading in aquaculture environments. Achieves 94% mAP on custom dataset.",
    techTags: ["YOLOv8", "Python", "OpenCV", "TensorFlow", "Docker"],
    thumbnail:
      "linear-gradient(135deg, #7bae7f 0%, #87ceeb 50%, #f5deb3 100%)",
    githubUrl: "https://github.com/username/shrimp-detection",
    content: `An end-to-end computer vision pipeline for the aquaculture industry. The system processes live camera feeds from shrimp ponds, detecting individual shrimp, classifying species, and estimating size using calibrated depth references.

Built on the YOLOv8 architecture with custom anchor tuning for small aquatic objects. The training pipeline leverages a curated dataset of 12,000+ annotated frames captured across varying water clarity conditions and lighting.

Deployed as a containerized service with a FastAPI backend and real-time WebSocket streaming for the monitoring dashboard. Reduced manual inspection time by 60% in pilot deployments.`,
    screenshots: [],
  },
  {
    slug: "sentiment-analyzer",
    title: "NLP Sentiment Analyzer",
    description:
      "Fine-tuned BERT model for multi-label sentiment analysis on product reviews, supporting 8 emotion categories with contextual explanation generation. Deployed as a production REST API.",
    techTags: ["BERT", "PyTorch", "FastAPI", "Transformers", "PostgreSQL"],
    thumbnail:
      "linear-gradient(135deg, #f4a7bb 0%, #87ceeb 50%, #7bae7f 100%)",
    githubUrl: "https://github.com/username/sentiment-analyzer",
    content: `A natural language processing system that goes beyond simple positive/negative classification. The model identifies nuanced emotions including joy, trust, anticipation, surprise, fear, sadness, anger, and disgust using a multi-label approach.

The architecture fine-tunes a pre-trained BERT-base model with a custom classification head. Training data combines the GoEmotions dataset with proprietary product review annotations, achieving 0.82 F1-score across all categories.

The system includes an explanation module using attention visualization and LIME to highlight which parts of the text drove each emotion prediction. Served via FastAPI with async processing and batch inference support.`,
    screenshots: [],
  },
  {
    slug: "style-transfer",
    title: "Neural Style Transfer",
    description:
      "Interactive neural style transfer application that transforms photographs into artwork inspired by various painting styles. Features real-time preview and custom style mixing with adjustable intensity.",
    techTags: ["TensorFlow", "CNN", "Flask", "NumPy", "Pillow"],
    thumbnail:
      "linear-gradient(135deg, #87ceeb 0%, #f4a7bb 50%, #f5deb3 100%)",
    githubUrl: "https://github.com/username/style-transfer",
    content: `An implementation of arbitrary neural style transfer using an adaptive instance normalization approach. Unlike fixed-style models, this system can apply any reference artwork as a style source without retraining.

The encoder-decoder architecture uses a pre-trained VGG-19 backbone for feature extraction with a lightweight style transfer network. A custom style interpolation module allows blending multiple style references with controllable intensity per region.

The Flask web interface provides real-time preview thumbnails during processing and supports batch uploads. Optimized for CPU inference with TensorRT acceleration available for GPU deployments, achieving sub-second processing for 1080p images.`,
    screenshots: [],
  },
  {
    slug: "rag-chatbot",
    title: "RAG Chatbot",
    description:
      "Retrieval-augmented generation chatbot that answers questions about technical documentation with source citations. Uses vector similarity search for context retrieval and GPT-4 for response generation.",
    techTags: ["LangChain", "OpenAI", "Next.js", "Pinecone", "TypeScript"],
    thumbnail:
      "linear-gradient(135deg, #f5deb3 0%, #7bae7f 50%, #87ceeb 100%)",
    githubUrl: "https://github.com/username/rag-chatbot",
    content: `A conversational AI system that grounds its responses in a curated knowledge base of technical documentation. The RAG pipeline chunks documents, generates embeddings, and retrieves the most relevant passages before feeding them as context to the language model.

The retrieval layer uses Pinecone vector database with hybrid search combining dense embeddings and BM25 sparse retrieval. A re-ranking step using a cross-encoder model ensures the top-k passages are maximally relevant to the query.

Built with a Next.js frontend featuring streaming responses, conversation history, and inline source citations that link back to original documentation. The system includes guardrails for hallucination detection and confidence scoring on generated answers.`,
    screenshots: [],
  },
];
