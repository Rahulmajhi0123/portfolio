import { Section } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/MotionReveal";
import { differentiators } from "@/content/differentiators";

export function Differentiators() {
  return (
    <Section
      id="edge"
      eyebrow="What sets me apart"
      title="Why I stand out"
      subtitle="Every claim below is backed by a number or a named artifact from my real work - no generic fluff, no checkbox buzzwords."
    >
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
        {differentiators.map((d) => {
          const Icon = d.icon;
          return (
            <StaggerItem key={d.title}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur card-hover">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Icon className="h-5 w-5" />
                  </div>

                  {d.stat && (
                    <div className="mb-3 flex items-baseline gap-2">
                      <span className="text-3xl font-bold gradient-text">{d.stat}</span>
                      {d.statLabel && (
                        <span className="text-xs text-muted-foreground">
                          {d.statLabel}
                        </span>
                      )}
                    </div>
                  )}

                  <h3 className="text-lg font-semibold text-foreground">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {d.body}
                  </p>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
