export type Resume = {
  label: string;
  file: string;
  description: string;
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export const profile = {
  name: "Rahul Majhi",
  role: "Software Engineer II",
  roleTagline: "Backend · Distributed Systems · Generative AI",
  location: "Pune, India",
  email: "rahul.majhi@outlook.com",
  emailSecondary: "rahulmajhi0123@gmail.com",
  phone: "+91 9676166917",
  portrait: "/portrait.jpg",
  portraitAlt: "Portrait photo of Rahul Majhi",

  catchphrases: [
    "Started as a fresh grad. Now I own the services 150M+ transactions depend on.",
    "Old-school engineering discipline. New-school AI toolkit.",
    "Less latency. More leverage.",
  ],

  heroPitch:
    "Software Engineer II at Amdocs with 2+ years building production-grade distributed systems - and bringing Generative AI into the backend. I ship end-to-end, from Java 17 microservices and Kubernetes infra to RAG pipelines and agent-style automation, with measurable impact and a zero-defect bar.",

  about: [
    "I'm a Software Engineer II at Amdocs with 2+ years building production-grade distributed systems at enterprise scale - and increasingly, the Generative AI layer that sits on top of them. I care about shipping features end-to-end: owning the backend design, the deployment pipeline, and the failure modes, not just the commits.",
    "On the systems side I led a Java 17 / Spring Boot microservices migration for a telecom charging platform (35% throughput gain, 30% downtime reduction) and shipped Kubernetes-deployed automation tooling that is now standard across product management.",
    "On the AI side I shipped the first production GenAI/NLP system on my team - an agent-style pipeline that triages incidents and opens remediation PRs automatically - and I'm building RepoSage, a RAG platform for codebase intelligence on pgvector, Spring AI, and Google Gemini, combining hybrid (vector + BM25) retrieval with AST-aware code chunking.",
  ],

  resumes: [
    {
      label: "Backend Resume",
      file: "/rahul_majhi_resume.pdf",
      description: "Distributed systems, Spring Boot, Kubernetes, AWS",
    },
    {
      label: "AI/ML Resume",
      file: "/rahul_majhi_ai_resume.pdf",
      description: "RAG, LLM integration, NLP, Spring AI, pgvector",
    },
  ] satisfies Resume[],

  socials: [
    {
      label: "LinkedIn",
      href: "https://in.linkedin.com/in/rahul-majhi",
      handle: "rahul-majhi",
    },
    {
      label: "GitHub",
      href: "https://github.com/rahulmajhi0123",
      handle: "rahulmajhi0123",
    },
    {
      label: "Email",
      href: "mailto:rahul.majhi@outlook.com",
      handle: "rahul.majhi@outlook.com",
    },
    {
      label: "Gmail",
      href: "mailto:rahulmajhi0123@gmail.com",
      handle: "rahulmajhi0123@gmail.com",
    },
    {
      label: "Phone",
      href: "tel:+919676166917",
      handle: "+91 96761 66917",
    },
  ] satisfies SocialLink[],
} as const;

export type Profile = typeof profile;
