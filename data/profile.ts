import { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Ahmed Bahaaeldin Darwish",
  title: "AI Strategy Leader | Multi-AI Agents Expert | GenAI Business Strategist",
  email: "abdarwish.ai@gmail.com",
  phone: "+81 70-9048-4429",
  location: "Tokyo, Japan",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abdarwish/" },
    { label: "GitHub", href: "https://github.com/abdarwish23" }
  ],
  summary:
    "Strategic AI Innovation Leader with 16+ years in telecommunications, specializing in enterprise transformation through Generative AI and Multi-AI Agent systems. Proven ability to translate cutting-edge AI into business value, lead cross-functional teams, and deploy large-scale AI solutions.",
  skills: [
    {
      category: "AI Strategy & Leadership",
      items: [
        "GenAI Business Strategy",
        "Multi-Agent Architecture",
        "AI Product Strategy",
        "Team Leadership",
        "AI/ML ROI & Business Cases",
        "Enterprise AI Transformation"
      ]
    },
    {
      category: "Generative AI & Agents",
      items: [
        "LLM Strategy & Implementation",
        "LangGraph / CrewAI / AutoGen",
        "RAG Systems",
        "Prompt Engineering",
        "Fine-tuning Strategy",
        "Ethics & Governance"
      ]
    },
    {
      category: "Technical Strategy",
      items: [
        "AI/ML Infrastructure & Cloud",
        "Production AI System Design",
        "MLOps Strategy",
        "API & Integration Architecture",
        "Data Strategy"
      ]
    }
  ],
  experiences: [
    {
      role: "AI and Innovation Lead for E2E Performance and Capacity",
      company: "Rakuten Mobile",
      location: "Tokyo, Japan",
      start: "Oct 2024",
      end: "Present",
      bullets: [
        "Designed comprehensive AI strategy for E2E Mobile Network Performance",
        "Leading AI initiatives projected to reduce operational costs by 60%",
        "Aligning AI roadmap with business objectives"
      ]
    },
    {
      role: "AI and Innovation Lead for Site Management",
      company: "Rakuten Symphony",
      location: "Tokyo, Japan",
      start: "Aug 2023",
      end: "Oct 2024",
      bullets: [
        "Led cloud migration of Sympulse from monolith to microservices in 3 months",
        "Designed multi-AI agent platform for telecom operations",
        "Developed AI-first product strategy with GenAI and vision capabilities",
        "Built production-ready Advanced SQL Agent using LangGraph",
        "Deployed YOLOv9/YOLOv10 image detection systems"
      ]
    },
    {
      role: "Senior Director, Sympulse Application Section",
      company: "Rakuten Symphony",
      start: "Jan 2023",
      end: "Aug 2023",
      bullets: [
        "Developed product strategy aligned with company vision and market opportunities",
        "Led market analysis and strategic roadmap development",
        "Managed product portfolio with significant revenue impact"
      ]
    },
    {
      role: "Product Owner",
      company: "Rakuten Symphony",
      start: "Jun 2022",
      end: "Dec 2022",
      bullets: [
        "Defined product vision and maintained strategic roadmap for OSS products",
        "Collaborated with legal on patent strategy and infringement analysis",
        "Identified emerging opportunities and technology trends"
      ]
    },
    {
      role: "CEM Expert",
      company: "Huawei",
      location: "Riyadh, Saudi Arabia",
      start: "Jan 2015",
      end: "Jun 2022",
      bullets: [
        "Advanced Ookla Speed Test analysis (4G/5G throughput and latency)",
        "Developed city-level KQIs/KPIs and device analysis",
        "Built EasyOokla desktop application for automation",
        "Produced insights for major events (Hajj, Ramadan, Riyadh Season)"
      ]
    }
  ],
  projects: [
    {
      title: "Advanced SQL Agent (LangGraph)",
      summary: "Production-ready multi-agent SQL assistant with self-correction and hallucination mitigation.",
      tags: ["LangGraph", "Agents", "RAG", "SQL"],
      image: "/images/Sql_agent.png"
    },
    {
      title: "Multi-AI Agents Platform (Telecom)",
      summary: "Enterprise-scale orchestration enabling zero-touch network automation with successful PoC.",
      tags: ["Multi-Agent", "Telecom", "Automation"],
      image: "/images/Telecom_multi_ai_agents.png"
    },
    {
      title: "YOLOv10 Site Manager Image Detection",
      summary: "End-to-end computer vision pipeline for site management and safety compliance.",
      tags: ["YOLOv10", "Computer Vision", "FastAPI"],
      image: "/images/Image_detection_site_manager.png"
    },
    {
      title: "YOLOv9 H&S AI Image Detection",
      summary: "Computer vision system improving workplace safety compliance.",
      tags: ["YOLOv9", "Computer Vision"],
      image: "/images/Image_detection_yolo_models.png"
    }
  ],
  achievements: [
    {
      title: "2 Granted USPTO Patents",
      description: "Patents in AI, blockchain, and telecommunications technologies.",
      link: "/patents"
    },
    {
      title: "2nd Place R-Pitch 2023-2024 — ZenSpace AI",
      description: "Strategic AI product development for interior design using AI.",
      link: "https://bitly.cx/dn46c"
    },
    {
      title: "Certificate of Achievement for IP Excellence",
      description: "Recognized by Rakuten's Patent League for outstanding innovation leadership.",
      link: "https://bitly.cx/pZxK"
    },
    {
      title: "Tokyo AI Speaker — Exploring the Future of Multi-AI Agents",
      description: "Talk on how agentic systems will transform industries."
    }
  ]
};
