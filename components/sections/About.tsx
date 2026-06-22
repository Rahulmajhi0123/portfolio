import { Section } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/MotionReveal";
import { profile } from "@/content/profile";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="The short version">
      <Stagger className="max-w-3xl space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
        {profile.about.map((para, i) => (
          <StaggerItem key={i}>
            <p>{para}</p>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-10" delay={0.1}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-3xl">
          {[
            { value: "2+", label: "years @ Amdocs" },
            { value: "35%", label: "throughput gain" },
            { value: "80%", label: "manual effort cut" },
            { value: "650+", label: "LeetCode solved" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card/60 p-4 backdrop-blur"
            >
              <div className="text-2xl md:text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
