import { ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/MotionReveal";
import { Badge } from "@/components/ui/Badge";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've shipped"
      subtitle="2+ years of production engineering at Amdocs - from Kubernetes-based distributed systems to the first production GenAI/NLP system on my team."
    >
      <Stagger className="relative" stagger={0.12}>
        <div
          className="absolute left-4 md:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent"
          aria-hidden
        />

        <div className="space-y-10">
          {experience.map((role, idx) => (
            <StaggerItem key={idx}>
              <div className="relative pl-12 md:pl-16">
                <div
                  className="absolute left-0 top-1 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full border border-primary/30 bg-card shadow-sm"
                  aria-hidden
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-primary shadow-glow" />
                </div>

                <div className="rounded-2xl border border-border bg-card/60 p-5 md:p-7 backdrop-blur card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                        {role.title}
                        <span className="text-muted-foreground"> at </span>
                        {role.companyUrl ? (
                          <a
                            href={role.companyUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                          >
                            {role.company}
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ) : (
                          <span className="text-primary">{role.company}</span>
                        )}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {role.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={role.current ? "primary" : "outline"}>
                        {role.start} {"\u2013"} {role.end}
                      </Badge>
                    </div>
                  </div>

                  <p className="mt-4 text-sm md:text-base text-muted-foreground italic">
                    {role.summary}
                  </p>

                  <ul className="mt-5 space-y-3 text-sm md:text-base">
                    {role.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary"
                          aria-hidden
                        />
                        <span className="text-foreground/90 leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {role.stack.map((s) => (
                      <Badge key={s} variant="outline">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>
      </Stagger>
    </Section>
  );
}
