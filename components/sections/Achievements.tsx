import { Trophy } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/MotionReveal";
import { achievements } from "@/content/achievements";

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Recognition" title="Achievements">
      <Stagger className="grid gap-4 md:grid-cols-2" stagger={0.06}>
        {achievements.map((a) => (
          <StaggerItem key={a.title}>
            <div className="flex h-full gap-4 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur card-hover">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                <Trophy className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-foreground">{a.title}</h3>
                  {a.year && (
                    <span className="text-xs font-mono text-muted-foreground">
                      {a.year}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {a.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
