import type { LucideIcon } from "lucide-react";
import {
  Target,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Zap,
  Award,
} from "lucide-react";

export type Differentiator = {
  icon: LucideIcon;
  title: string;
  stat?: string;
  statLabel?: string;
  body: string;
};

export const differentiators: Differentiator[] = [
  {
    icon: Target,
    title: "End-to-End Ownership",
    stat: "100%",
    statLabel: "features shipped solo",
    body: "I ship, not just code. From backend API design and schema to frontend delivery and Kubernetes rollout, I own features start to finish - including the Institution Portfolio at NIT Trichy still serving real users today.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Impact",
    stat: "35%",
    statLabel: "throughput gain on prod migration",
    body: "I lead with numbers. 35% throughput gain on a telecom charging platform, 30% production downtime reduction, and 80% of recurring manual effort eliminated by a single tool I built - 5+ hours saved weekly across the team.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Defect Delivery",
    stat: "0",
    statLabel: "post-launch incidents on Auto Rolldown",
    body: "Auto Rolldown rolled out org-wide with zero post-launch reliability incidents. 2+ years on Level 3 production on-call for Kubernetes systems under global SLAs taught me to build for failure modes, not just the happy path.",
  },
  {
    icon: Sparkles,
    title: "Production GenAI, Not Demos",
    stat: "1st",
    statLabel: "production AI system on the team",
    body: "Built the first production GenAI/NLP system on my team at Amdocs - now the reference pattern for AI adoption in backend ops - and I'm shipping RepoSage (RAG on pgvector, Spring AI, and Gemini). Real systems with retrieval, streaming, and failure handling, not notebook demos.",
  },
  {
    icon: Zap,
    title: "Automation Bias",
    stat: "5+ hrs",
    statLabel: "saved weekly by one tool",
    body: "If I touch a manual process more than twice, I script it. Solo-shipped Auto Rolldown while fully on-call and leading a migration - now the standard tool across Amdocs Product Management.",
  },
  {
    icon: Award,
    title: "Recognized Craftsmanship",
    stat: "650+",
    statLabel: "LeetCode solved, 1,300+ overall",
    body: "Innovation Appreciation Certificate at Amdocs. Winner of the Spider Club Hackathon at NIT Trichy. Design patterns (Strategy, Visitor, Chain of Responsibility) applied where they actually fit - engineering with intent, not for show.",
  },
];
