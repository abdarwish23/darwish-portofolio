export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ahmed Bahaaeldin Darwish",
    "alternateName": "Ahmed B. Darwish",
    "url": "https://www.abdarwish.com",
    "image": "https://www.abdarwish.com/images/ahmed-darwish-photo.png",
    "jobTitle": "AI Strategy Leader",
    "description": "AI Strategy Leader with 16+ years in telecommunications, specializing in Multi-AI Agent systems, GenAI, and enterprise AI transformation.",
    "knowsAbout": [
      "Artificial Intelligence",
      "Multi-AI Agents",
      "Generative AI",
      "LangGraph",
      "Machine Learning",
      "Telecommunications",
      "AI Strategy",
      "Enterprise AI Transformation"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/abdarwish/",
      "https://github.com/abdarwish23"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Electrical and Computer Engineering, Egypt"
    },
    "award": [
      "Rakuten Mobile Innovation Award",
      "2 Granted USPTO Patents",
      "2nd Place R-Pitch — ZenSpace AI",
      "Certificate of Achievement for IP Excellence"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
