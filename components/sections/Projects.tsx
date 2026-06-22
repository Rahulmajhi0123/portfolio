"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { projects, projectTags, type ProjectTag } from "@/content/projects";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectTag;

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.tags.includes(filter)),
    [filter]
  );

  const filters: Filter[] = ["All", ...projectTags];

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects"
      subtitle="A mix of production systems at Amdocs and personal projects spanning distributed systems, Generative AI, and cloud-native architecture."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => {
          const active = filter === f;
          const count =
            f === "All"
              ? projects.length
              : projects.filter((p) => p.tags.includes(f)).length;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs md:text-sm font-medium transition-all",
                active
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground backdrop-blur"
              )}
            >
              {f}
              <span
                className={cn(
                  "inline-flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[10px]",
                  active ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.article
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-2xl border bg-card/60 p-6 backdrop-blur card-hover",
                p.highlight ? "border-primary/30" : "border-border"
              )}
            >
              {p.highlight && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
                />
              )}
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      {p.highlight && (
                        <Sparkles className="h-4 w-4 text-primary" />
                      )}
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">
                        {p.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                  </div>
                  {p.status && (
                    <Badge variant={p.status === "Production" ? "primary" : "outline"}>
                      {p.status}
                    </Badge>
                  )}
                </div>

                <div className="mt-4 space-y-2 text-sm text-foreground/85 leading-relaxed">
                  {p.description.map((d, i) => (
                    <p key={i}>{d}</p>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <Badge key={s} variant="outline">
                      {s}
                    </Badge>
                  ))}
                </div>

                {(p.github || p.link) && (
                  <div className="mt-5 flex gap-3 text-sm">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Github className="h-4 w-4" /> Code
                      </a>
                    )}
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ExternalLink className="h-4 w-4" /> Live
                      </a>
                    )}
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
