export type Role = {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    title: "Software Engineer II",
    company: "Amdocs",
    companyUrl: "https://www.amdocs.com",
    location: "Pune, Maharashtra",
    start: "Jan 2026",
    end: "Present",
    current: true,
    summary:
      "Leading backend modernization and Generative-AI tooling for a large-scale telecom charging platform.",
    bullets: [
      "Led microservices migration of a large-scale telecom charging platform - re-architected monolithic Java 8 modules to Java 17 with Spring Boot and Spring Cloud, improving system throughput by 35% and reducing production downtime by 30%.",
      "Independently designed and shipped the Auto Rolldown automation tool - now standard across Amdocs Product Management, eliminating 80% of recurring manual effort and saving 5+ hours weekly with zero post-launch reliability incidents.",
      "Built and shipped a production GenAI/NLP incident-response system that classifies log severity, surfaces anomalies, and autonomously opens GitHub remediation PRs - an agent-style workflow that significantly reduced MTTR across Kubernetes-based services.",
      "Architected a Dockerized test automation microservice on Kubernetes, exposed via REST APIs and integrated into Jenkins CI/CD - enabling self-serve triggering across distributed teams.",
      "Conducted code reviews, mentored junior engineers on Java best practices and distributed systems design, and collaborated with product and QA across the full delivery lifecycle.",
    ],
    stack: [
      "Java 17",
      "Spring Boot",
      "Spring Cloud",
      "Kafka",
      "Kubernetes",
      "Docker",
      "Jenkins",
      "GenAI / NLP",
      "Python",
    ],
  },
  {
    title: "Software Engineer",
    company: "Amdocs",
    companyUrl: "https://www.amdocs.com",
    location: "Pune, Maharashtra",
    start: "Jun 2024",
    end: "Dec 2025",
    summary:
      "Production support, CI/CD automation, and the first AI/NLP production system on the team.",
    bullets: [
      "Provided Level 3 on-call production support for Kubernetes-based enterprise systems - resolved high-priority escalations, performed RCAs, and maintained SLA commitments across a globally distributed environment.",
      "Built end-to-end Jenkins CI/CD pipeline automation for Linux-based environments - converted fragile manual workflows into reliable, auditable processes, reducing deployment errors significantly.",
      "Developed and deployed a cloud-based encryption/decryption job on AWS, securing sensitive resource values across distributed integration layers in production.",
      "Applied NLP and ML techniques to build an intelligent log-analysis system - the first production AI system on my team, establishing the reference pattern for Generative AI adoption in backend operations.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Kubernetes",
      "Jenkins",
      "AWS",
      "Linux",
      "Bash",
      "Python",
    ],
  },
];
