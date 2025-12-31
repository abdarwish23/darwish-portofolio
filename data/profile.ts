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
      title: "IdeaSketch SaaS Product",
      summary: "Built IdeaSketch, a production-ready SaaS application powered by LangGraph for intelligent workflow orchestration.\n\nDeployed using LangGraph Studio with a modern Vite.js frontend, leveraging Supabase for database management and authentication.\n\nKey skills: LangGraph architecture, SaaS development, Vite.js, Supabase, authentication systems, database design, and full-stack development.",
      tags: ["SaaS", "LangGraph", "Vite.js", "Supabase", "Authentication", "Full-Stack", "AI Workflow"],
      image: "/images/IdeaSketch.jpeg"
    },
    {
      title: "Advanced AI Chatbots using No-Code Tools",
      summary: "Designed and deployed advanced AI chatbots leveraging no-code platforms including Flowise, n8n, and Langflow.\n\nDemonstrated expertise in workflow automation, prompt engineering, and rapid prototyping for business solutions.\n\nKey skills: No-code AI development, workflow design, system integration, conversational AI, and intelligent automation.",
      tags: ["Flowise", "n8n", "Langflow", "No-Code", "Prompt Engineering", "Automation", "Conversational AI"],
      image: "/images/Advanced_chatbots_no_codes.jpeg"
    },
    {
      title: "Advanced AI Chatbots with Local LLMs",
      summary: "Architected and designed advanced AI chatbot systems leveraging small local LLM models for cost-effective and private deployments.\n\nEngineered a strategic system design that optimizes performance through intelligent prompt engineering and resource-efficient architecture, enabling enterprise-grade solutions with constrained models.\n\nKey skills: System architecture design, local LLM deployment strategy, prompt engineering, AI integration, edge AI architecture, resource optimization, and privacy-focused system design.",
      tags: ["System Design", "Architecture", "Local LLM", "Prompt Engineering", "AI Integration", "Edge AI"],
      image: "/images/Local_LLM_Architecture.png"
    },
    {
      title: "Automatic DriveTest Route Creation",
      summary: "Built an automated system for DriveTest route generation using FastAPI, Python, and OpenMaps.\n\nStreamlined geospatial data processing and backend API development for telecom RAN optimization.\n\nKey skills: FastAPI development, Python automation, OpenMaps integration, DriveTest methodology, mobile network optimization, geospatial analysis, and API design.",
      tags: ["FastAPI", "Python", "OpenMaps", "DriveTest", "RAN", "Mobile Network", "Geospatial", "API"],
      image: "/images/AutoDrive_test.jpg"
    },
    {
      title: "YOLOv10 Site Manager Image Detection",
      summary: "Developed an end-to-end computer vision pipeline for site management and safety compliance monitoring.\n\nImplemented real-time object detection and safety violation identification for telecom site operations.\n\nKey skills: YOLOv10 model deployment, computer vision, FastAPI development, image processing, and safety compliance automation.",
      tags: ["YOLOv10", "Computer Vision", "FastAPI", "Image Processing", "Safety"],
      image: "/images/Image_detection_site_manager.png"
    },
    {
      title: "Health and Safety AI Detection",
      summary: "Developed an AI-powered computer vision system for workplace health and safety compliance monitoring.\n\nImplemented automated detection of safety violations and compliance tracking for enhanced workplace security.\n\nKey skills: Computer vision, YOLOv9 implementation, safety analytics, compliance automation, and production model deployment.",
      tags: ["YOLOv9", "Computer Vision", "Safety", "Analytics", "Compliance"],
      image: "/images/Health_and_safety.jpeg"
    },
    {
      title: "Multi-AI Agents Platform (Telecom)",
      summary: "Designed and architected an enterprise-scale multi-AI agent platform enabling zero-touch network automation with successful proof of concept.\n\nLed strategic architecture design and system integration for autonomous telecom operations and intelligent orchestration.\n\nKey skills: Multi-agent system architecture, strategic AI design, telecom automation, system integration, orchestration, and enterprise solution architecture.",
      tags: ["Multi-Agent", "Telecom", "Automation", "System Integration", "Orchestration", "Architecture"],
      image: "/images/Telecom_multi_ai_agents.png"
    },
    {
      title: "EasyOokla: Automated Network Analysis",
      summary: "Developed EasyOokla, a desktop application for automated analysis of Ookla speed test data.\n\nStreamlined data collection, analysis, and reporting for comprehensive network performance insights.\n\nKey skills: Data analysis, automation engineering, network performance analysis, Python development, and reporting systems.",
      tags: ["Ookla", "Data Analysis", "Automation", "Network Analysis", "Python", "Reporting"],
      image: "/images/EasyOokla.png"
    }
  ],
  awards: [
    {
      title: "Passionately Professional Award — Rakuten Mobile CEO",
      summary: "Honored to receive the Quarterly Network Division 'Passionately Professional' Award from Sharad Sriwastawa, Co-CEO of Rakuten Mobile, in Q3 2025.\n\nThis recognition reflects achievements in designing and leading AI Maestro, a multi-agent AI system integrating automated KPI analysis, intelligent document search, and innovative visualizations for location-based insights. Achieved 9,600 annual work hour savings and accelerated troubleshooting & Root Cause Analysis by ~80%, significantly enhancing productivity and delivering substantial business impact.\n\nRecognized for what can be achieved when strong principles meet trust, teamwork, and disciplined execution.",
      tags: ["CEO Award", "Multi-Agent AI", "KPI Analysis", "Productivity", "Business Impact", "Innovation", "Leadership"],
      images: ["/images/passionately_professional_slide.jpg", "/images/passionately_professional_award_ceremony.jpg"],
      link: "https://www.linkedin.com/posts/abdarwish_rakutenmobile-innovation-innovation-activity-7407846854647799808-HdNt"
    },
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
      title: "Certificate of Achievement for IP Excellence",
      summary: "Recognized by Rakuten's Patent League for outstanding innovation leadership.",
      tags: ["Innovation", "IP Excellence", "Leadership"],
      image: "/images/driving_innovation2.jpg",
      link: "https://bitly.cx/pZxK"
    },
    {
      title: "Tokyo AI Speaker — Multi-AI Agents",
      summary: "Delivered a keynote speech at TokyoAI on the future of Multi-AI Agents. Demonstrated skills in public speaking, AI strategy, and industry thought leadership.",
      tags: ["Public Speaking", "AI Strategy", "Multi-Agent", "Thought Leadership"],
      image: "/images/tokyo_ai_presentation.png"
    },
    {
      title: "Rakuten Mobile Innovation Award",
      summary: "Honored to receive the Rakuten Mobile Innovation Award for contributions in the E2E Performance and Capacity Department.\n\nLed the development of Phase 1 of AI Maestro, a pioneering product transforming E2E network performance using AI. Navigated significant privacy and security challenges by exclusively using locally self-hosted LLMs, rigorously testing hundreds of LLMs, frameworks, and tools to deliver real-world AI applications.\n\nBuilt an intelligent root cause analysis engine for critical core KPIs, demonstrating that innovation comes from challenging norms and building what doesn't yet exist.",
      tags: ["Innovation", "AI Product", "Root Cause Analysis", "Privacy", "Security", "Local LLM", "Network Performance"],
      image: "/images/Innovation_award.jpeg"
    }
  ]
};
