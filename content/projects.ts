export type ProjectTag = "Backend" | "AI" | "Cloud" | "Full-Stack" | "ML";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string[];
  tags: ProjectTag[];
  stack: string[];
  link?: string;
  github?: string;
  highlight?: boolean;
  status?: "Shipped" | "In Development" | "Production";
};

export const projects: Project[] = [
  {
    slug: "reposage",
    title: "RepoSage",
    tagline: "Generative-AI repository intelligence (RAG)",
    status: "In Development",
    highlight: true,
    tags: ["AI", "Backend", "Full-Stack"],
    description: [
      "RAG-based system that ingests any public GitHub repository and enables natural-language Q&A, service-flow mapping, change-impact analysis, and code-improvement suggestions - powered by Google Gemini via Spring AI.",
      "Hybrid retrieval combining pgvector similarity search and BM25 keyword search with Reciprocal Rank Fusion. Handles Java generics, lambdas, annotations, and nested classes reliably via JavaParser AST-based chunking.",
      "Spring Boot 3 backend with SSE streaming for real-time LLM responses, Resilience4j circuit breakers, Caffeine caching, PostgreSQL + pgvector storage, React + TanStack Query frontend. Deployed on AWS and Vercel.",
      "Applies Strategy (chunking), Visitor (AST traversal), Builder (prompt assembly), Chain of Responsibility (impact analysis), and Producer-Consumer (async ingestion) patterns throughout.",
    ],
    stack: [
      "Spring Boot 3",
      "Spring AI",
      "Google Gemini",
      "pgvector",
      "PostgreSQL",
      "React",
      "TanStack Query",
      "Resilience4j",
      "SSE",
      "AWS",
    ],
  },
  {
    slug: "ai-log-analysis",
    title: "AI Log Analysis & Automated Incident Response",
    tagline: "Agent-style incident response at Amdocs",
    status: "Production",
    highlight: true,
    tags: ["AI", "Backend", "Cloud"],
    description: [
      "Production GenAI/NLP pipeline that classifies log severity, rates log quality, and autonomously opens remediation PRs for anomalies - an agent-style workflow integrated into Kubernetes-based CI/CD serving enterprise telecom clients.",
      "First production AI system on the team at Amdocs - established the reference pattern for Gen AI adoption in backend operations.",
      "Reduced MTTR by surfacing anomalies in real time and auto-generating remediation pull requests.",
    ],
    stack: ["Python", "NLP", "Kubernetes", "GitHub Actions", "Java"],
  },
  {
    slug: "payment-gateway",
    title: "Payment Gateway System",
    tagline: "Event-driven microservices for inter-bank transfers",
    status: "Shipped",
    tags: ["Backend", "Full-Stack"],
    description: [
      "Microservices-based payment gateway supporting multiple banks and inter-bank fund transfers with event-driven transaction processing using Apache Kafka for real-time audit log streaming.",
      "JWT-based authentication with an API Gateway for user and profile management. Data persisted in MongoDB with service reliability enforced via JUnit5 and TestNG coverage.",
      "All services deployed on Kubernetes for scalable orchestration and service management.",
    ],
    stack: [
      "Spring Boot",
      "Apache Kafka",
      "MongoDB",
      "JWT",
      "JUnit5",
      "TestNG",
      "Kubernetes",
      "Docker",
    ],
  },
  {
    slug: "ticket-booking",
    title: "Ticket Booking System",
    tagline: "Secure REST APIs with role-based workflows",
    status: "Shipped",
    tags: ["Backend", "Full-Stack"],
    description: [
      "Secure REST APIs with JWT authentication and role-based access control (admin / customer) for end-to-end ticket booking workflows using Spring Boot and JPA.",
      "MySQL for structured data, MongoDB for event logs. Implemented seat selection, availability checks, admin analytics dashboard, and Swagger API documentation.",
      "Containerized and deployed on Kubernetes.",
    ],
    stack: [
      "Spring Boot",
      "JPA",
      "MySQL",
      "MongoDB",
      "JWT",
      "Swagger",
      "Kubernetes",
      "Docker",
    ],
  },
  {
    slug: "serverless-api",
    title: "Serverless REST API",
    tagline: "AWS Lambda + API Gateway + DynamoDB, IaC end-to-end",
    status: "Shipped",
    tags: ["Cloud", "Backend"],
    description: [
      "Serverless backend API on AWS Lambda, API Gateway, and DynamoDB with infrastructure-as-code via AWS SAM and CDK, plus automated CI/CD for staging environments.",
      "Demonstrates end-to-end cloud-native engineering - from IaC definition to deployment pipeline.",
    ],
    stack: ["AWS Lambda", "API Gateway", "DynamoDB", "AWS SAM", "AWS CDK", "CI/CD"],
  },
  {
    slug: "stock-price-prediction",
    title: "Stock Price Prediction",
    tagline: "Random Forest on historical market data",
    status: "Shipped",
    tags: ["ML"],
    description: [
      "Random Forest model to forecast stock prices from historical market data and technical indicators - backtested across multiple time windows to validate robustness and reduce overfitting.",
      "Engineered statistical and technical features to improve signal quality. Visualized prediction trends and performance metrics using Matplotlib and Seaborn.",
    ],
    stack: ["Python", "scikit-learn", "pandas", "Matplotlib", "Seaborn"],
  },
  {
    slug: "institution-portfolio",
    title: "Institution Portfolio Platform",
    tagline: "Full-stack platform serving real users at NIT Trichy",
    status: "Shipped",
    tags: ["Full-Stack", "Backend"],
    description: [
      "Full-stack platform (Node.js, Express.js, React.js) with JWT-based authentication - end-to-end ownership from backend API design to frontend delivery, serving real users at NIT Tiruchirappalli.",
    ],
    stack: ["Node.js", "Express.js", "React.js", "JWT", "MongoDB"],
  },
];

export const projectTags: ProjectTag[] = [
  "Backend",
  "AI",
  "Cloud",
  "Full-Stack",
  "ML",
];
