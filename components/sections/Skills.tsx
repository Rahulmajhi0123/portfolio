import { Section } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/MotionReveal";
import { skills } from "@/content/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title="Skills & Stack"
      subtitle="What I reach for on any given day - organized by where they fit, not by how cool they sound."
    >
      <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
        {skills.map((group) => (
          <StaggerItem key={group.label}>
            <div className="h-full rounded-2xl border border-border bg-card/60 p-5 backdrop-blur">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-border bg-background/40 px-2.5 py-1 text-xs text-foreground/85"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
