export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Java (8 / 17)", "Python", "TypeScript", "JavaScript", "SQL", "Bash", "C / C++"],
  },
  {
    label: "AI / GenAI Engineering",
    items: [
      "RAG (Retrieval-Augmented Generation)",
      "LLM application engineering",
      "LLM integration (Google Gemini, Spring AI)",
      "Agent-style / automated workflows",
      "Hybrid retrieval (vector + BM25 + RRF)",
      "Embeddings & semantic search (pgvector)",
      "Prompt & context engineering",
      "AST-aware code chunking",
      "NLP",
    ],
  },
  {
    label: "Backend & APIs",
    items: [
      "Spring Boot 3",
      "Spring Cloud",
      "Spring AI",
      "REST API design",
      "Microservices",
      "Event-driven (Apache Kafka)",
      "SSE / streaming",
      "Node.js",
      "Express.js",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS (Lambda, API Gateway, DynamoDB, S3, SAM, CDK)",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "CI/CD",
      "Infrastructure-as-Code",
    ],
  },
  {
    label: "Databases & Vector Stores",
    items: [
      "PostgreSQL + pgvector",
      "Oracle",
      "MongoDB",
      "MySQL",
      "DynamoDB",
      "Schema design",
      "Query optimization",
    ],
  },
  {
    label: "Resilience & Observability",
    items: [
      "Resilience4j",
      "Spring Actuator",
      "Micrometer",
      "Structured logging",
      "Incident management",
      "Root cause analysis",
    ],
  },
  {
    label: "Testing & Quality",
    items: ["JUnit 5", "TestNG", "TDD", "Unit & integration testing", "Code reviews", "SOLID", "Design patterns"],
  },
  {
    label: "Frontend",
    items: ["React.js", "TypeScript", "TanStack Query", "Tailwind CSS", "Next.js"],
  },
  {
    label: "CS Fundamentals",
    items: [
      "Data structures & algorithms",
      "System design",
      "OOP",
      "DBMS",
      "OS",
      "Concurrency",
      "Distributed systems",
    ],
  },
];
