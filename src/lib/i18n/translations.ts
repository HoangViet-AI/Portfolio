export type Locale = "en" | "vi";

export const translations = {
  en: {
    nav: {
      projects: "Projects",
      skills: "Skills",
      about: "About",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      title: "AI Engineer",
      tagline:
        "Building intelligent systems with Computer Vision, Agentic RAG & production ML",
    },
    projects: {
      heading: "Projects",
      subtitle:
        "A collection of AI and machine learning projects that showcase practical applications of modern deep learning techniques.",
      github: "GitHub",
      liveDemo: "Live Demo",
      backToPortfolio: "Back to Portfolio",
      architecture: "Architecture",
    },
    skills: {
      heading: "Skills",
      subtitle:
        "Technologies and tools I work with across the AI and software engineering landscape.",
    },
    about: {
      heading: "About Me",
      bio: "AI Engineer with 1+ year of experience in Smart Manufacturing and Agentic Workflows. Winner of AI Hackathons, 4th place at Olympic AI HCMC 2025, and passionate about building production ML systems that make real impact — from Computer Vision pipelines to intelligent RAG-powered assistants.",
      timeline: [
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
            "Current role designing AI-powered Shrimp Detection & Sizing systems (YOLO/RTMDet) for aquaculture and building an Intelligent Data Assistant (Text-to-SQL) for smart manufacturing. Reduced inference latency from 45s to <15s.",
        },
      ],
    },
    contact: {
      heading: "Get in Touch",
      subtitle: "Let's create something wonderful together",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      resume: "Resume",
      sendEmail: "Send email",
      visitGithub: "Visit GitHub profile",
      visitLinkedin: "Visit LinkedIn profile",
      downloadResume: "Download resume",
    },
    footer: {
      copyright: "Hoang Viet Portfolio",
      tagline: "Built with a Ghibli spirit",
    },
  },
  vi: {
    nav: {
      projects: "Dự án",
      skills: "Kỹ năng",
      about: "Về tôi",
      contact: "Liên hệ",
      openMenu: "Mở menu",
      closeMenu: "Đóng menu",
    },
    hero: {
      title: "Kỹ sư AI",
      tagline:
        "Xây dựng hệ thống thông minh với Thị giác Máy tính, Agentic RAG & ML sản xuất",
    },
    projects: {
      heading: "Dự án",
      subtitle:
        "Tuyển tập các dự án AI và Machine Learning thể hiện ứng dụng thực tế của các kỹ thuật deep learning hiện đại.",
      github: "GitHub",
      liveDemo: "Demo",
      backToPortfolio: "Quay lại Portfolio",
      architecture: "Kiến trúc",
    },
    skills: {
      heading: "Kỹ năng",
      subtitle:
        "Các công nghệ và công cụ tôi sử dụng trong lĩnh vực AI và kỹ thuật phần mềm.",
    },
    about: {
      heading: "Về Tôi",
      bio: "Kỹ sư AI với hơn 1 năm kinh nghiệm trong Sản xuất Thông minh và Agentic Workflows. Quán quân AI Hackathon, giải 4 Olympic AI HCMC 2025, đam mê xây dựng hệ thống ML sản xuất tạo tác động thực tế — từ pipeline Thị giác Máy tính đến trợ lý thông minh RAG.",
      timeline: [
        {
          year: "2022",
          title: "Cử nhân Machine Learning",
          description:
            "Bắt đầu học Machine Learning tại Đại học Bách khoa TP.HCM. Đào sâu vào thuật toán, mạng neural và nền tảng thị giác máy tính.",
        },
        {
          year: "2023",
          title: "Giảng viên Python & Sinh viên xuất sắc",
          description:
            "Giảng dạy Python cơ bản và nâng cao cho học sinh THPT, đồng thời đạt danh hiệu Sinh viên Xuất sắc khóa 2023. Phát triển kỹ năng giao tiếp qua việc giải thích các chủ đề kỹ thuật phức tạp.",
        },
        {
          year: "2024",
          title: "Quán quân Hackathon",
          description:
            "Vô địch PieoneDream Hackathon AI x Blockchain. Xây dựng VietStoryLens — ứng dụng nhận diện địa danh bằng AI, đạt giải MVP tại LotusHackathon. Hoạt động tích cực tại Google Developer Group DevFest.",
        },
        {
          year: "2025 Q1",
          title: "Thực tập sinh AI — ThinkWare",
          description:
            "Thực hiện gán nhãn dữ liệu chính xác cao cho lái xe tự động, bao gồm phát hiện và phân loại hàng nghìn đối tượng trong các cảnh đường phức tạp.",
        },
        {
          year: "2025 Q2",
          title: "Chuyên viên RAG — TURING",
          description:
            "Thiết kế và thực thi pipeline đánh giá RAG đo lường Chất lượng Truy xuất (Hit Rate, MRR) và Độ chính xác Grounding. Tuyển chọn bộ dữ liệu instruction-tuning để cải thiện độ tin cậy Tool Calling cho LLM agents nội bộ.",
        },
        {
          year: "2025 Q3",
          title: "Kỹ sư AI — Mebisoft",
          description:
            "Vị trí hiện tại — thiết kế hệ thống Phát hiện & Đo kích thước Tôm bằng AI (YOLO/RTMDet) cho nuôi trồng thủy sản và xây dựng Trợ lý Dữ liệu Thông minh (Text-to-SQL) cho sản xuất thông minh. Giảm độ trễ suy luận từ 45s xuống <15s.",
        },
      ],
    },
    contact: {
      heading: "Liên Hệ",
      subtitle: "Hãy cùng tạo nên điều tuyệt vời",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      resume: "CV",
      sendEmail: "Gửi email",
      visitGithub: "Xem GitHub",
      visitLinkedin: "Xem LinkedIn",
      downloadResume: "Tải CV",
    },
    footer: {
      copyright: "Hoang Viet Portfolio",
      tagline: "Xây dựng với tinh thần Ghibli",
    },
  },
} as const;

export type Translations = (typeof translations)["en"];

export function getTranslations(locale: Locale): Translations {
  return translations[locale] as unknown as Translations;
}
