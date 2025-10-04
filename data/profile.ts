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
      title: "Advanced AI Chatbots using No-Code Tools",
      summary: "Designed and deployed advanced AI chatbots leveraging no-code platforms (Flowise, n8n, Langflow). Demonstrated expertise in workflow automation, prompt engineering, and rapid prototyping for business solutions. Skills: No-code AI, workflow design, integration, conversational AI, automation.",
      tags: ["Flowise", "n8n", "Langflow", "No-Code", "Prompt Engineering", "Automation", "Conversational AI"],
      image: "/images/Advanced_chatbots_no_codes.jpeg"
    },
    {
      title: "Automatic DriveTest Route Creation",
      summary: "Built a system for automated DriveTest route generation using FastAPI, Python, and OpenMaps. Demonstrated skills in geospatial data processing, backend API development, and telecom RAN automation. Skills: FastAPI, Python, OpenMaps, DriveTest, RAN, Mobile Network, Geospatial Analysis, API Design.",
      tags: ["FastAPI", "Python", "OpenMaps", "DriveTest", "RAN", "Mobile Network", "Geospatial", "API"],
      image: "/images/AutoDrive_test.jpg"
    },
    {
      title: "EasyOokla: Automated Network Analysis",
      summary: "Developed EasyOokla for automated analysis of Ookla speed test data. Automated data collection, analysis, and reporting for network performance. Skills: Data Analysis, Automation, Network Analysis, Python, Reporting, Ookla.",
      tags: ["Ookla", "Data Analysis", "Automation", "Network Analysis", "Python", "Reporting"],
      image: "/images/EasyOokla.png"
    },
    {
      title: "YOLOv10 Site Manager Image Detection",
      summary: "End-to-end computer vision pipeline for site management and safety compliance. Skills: YOLOv10, Computer Vision, FastAPI, Image Processing, Safety Compliance.",
      tags: ["YOLOv10", "Computer Vision", "FastAPI", "Image Processing", "Safety"],
      image: "/images/Image_detection_site_manager.png"
    },
    {
      title: "Health and Safety AI Detection",
      summary: "AI-powered computer vision system for workplace health and safety compliance. Demonstrated skills in model deployment, safety analytics, and compliance automation. Skills: Computer Vision, YOLOv9, Safety Analytics, Compliance, Model Deployment.",
      tags: ["YOLOv9", "Computer Vision", "Safety", "Analytics", "Compliance"],
      image: "/images/Health_and_safety.jpeg"
    },
    {
      title: "Advanced AI Chatbots with Local LLMs",
      summary: "Built advanced AI chatbots using small local LLM models without finetuning. Demonstrated skills in LLM integration, prompt engineering, and resource-efficient AI deployment. Skills: Local LLM, Prompt Engineering, AI Integration, Edge AI, Resource Optimization.",
      tags: ["Local LLM", "Prompt Engineering", "AI Integration", "Edge AI", "Resource Optimization"],
      image: "/images/Local_LLM_Architecture.png"
    },
    {
      title: "Multi-AI Agents Platform (Telecom)",
      summary: "Enterprise-scale orchestration enabling zero-touch network automation with successful PoC. Skills: Multi-Agent Systems, Telecom Automation, System Integration, Orchestration.",
      tags: ["Multi-Agent", "Telecom", "Automation", "System Integration", "Orchestration"],
      image: "/images/Telecom_multi_ai_agents.png"
    }
  ],
  awards: [
    {
      title: "2 Granted USPTO Patents",
      summary: "USPTO Grant US 12308894 B2: System, method, and medium for blockchain-enabled microwave antennas.\n\nUSPTO Grant US 12328299 B2: System, method and non-transitory computer readable medium for an internet-enabled network radio node.\n\nBoth patents demonstrate innovation in AI, blockchain, and telecommunications technologies. Additional patent applications are currently under review with the USPTO.",
      tags: ["Patent", "AI", "Blockchain", "Telecommunications", "USPTO"],
      image: "/images/patent_banar2.jpeg",
      link: "/patents"
    },
    {
      title: "2nd Place R-Pitch — ZenSpace AI",
      summary: "Achieved 2nd place at R-Pitch for ZenSpace AI, leading all aspects: financial planning, forecasting, pitch presentations, technical architecture, system design, AI product strategy, and market research. Recognized by Rakuten CEO.",
      tags: ["Financial Planning", "Forecasting", "Pitching", "Technical Architecture", "System Design", "AI Product Strategy", "Market Research"],
      image: "/images/ZenSpaceAI_Pitch.png",
      link: "https://bitly.cx/dn46c"
    },
    {
      title: "Tokyo AI Speaker — Multi-AI Agents",
      summary: "Delivered a keynote speech at TokyoAI on the future of Multi-AI Agents. Demonstrated skills in public speaking, AI strategy, and industry thought leadership.",
      tags: ["Public Speaking", "AI Strategy", "Multi-Agent", "Thought Leadership"],
      image: "/images/tokyo_ai_presentation.png"
    },
    {
      title: "Certificate of Achievement for IP Excellence",
      summary: "Recognized by Rakuten's Patent League for outstanding innovation leadership.",
      tags: ["Innovation", "IP Excellence", "Leadership"],
      image: "/images/driving_innovation2.jpg",
      link: "https://bitly.cx/pZxK"
    }
  ]
};
