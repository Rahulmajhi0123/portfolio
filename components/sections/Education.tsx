import { GraduationCap, CalendarDays, MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/MotionReveal";
import { education } from "@/content/achievements";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where I studied">
      <Reveal>
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card/70 to-accent/10 p-6 md:p-10 backdrop-blur">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
          />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
            <div className="flex h-16 w-16 md:h-20 md:w-20 flex-none items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/25">
              <GraduationCap className="h-8 w-8 md:h-10 md:w-10" />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-2xl md:text-3xl font-bold leading-tight text-foreground">
                {education.degree}
              </h3>

              <p className="mt-3 text-lg md:text-xl font-semibold leading-snug text-foreground/95">
                {education.institution}
              </p>
              {education.shortName && (
                <p className="mt-1 text-xs font-mono uppercase tracking-[0.2em] text-primary/90">
                  {education.shortName}
                </p>
              )}

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {education.duration}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {education.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
