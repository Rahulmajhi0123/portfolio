import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/MotionReveal";
import { LinkButton } from "@/components/ui/Button";
import { profile } from "@/content/profile";

const iconFor = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Email: Mail,
  Gmail: Mail,
  Phone: Phone,
} as const;

export function Contact() {
  return (
    <Section id="contact" eyebrow="Let's talk" title="Build something together">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card/60 to-accent/10 p-8 md:p-12 backdrop-blur">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
          />

          <div className="relative max-w-2xl">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              I&apos;m open to roles, collaborations, and interesting engineering
              problems - especially anything involving distributed backends,
              production AI integration, or cloud-native systems. The fastest way to
              reach me is email.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <LinkButton href={`mailto:${profile.email}`} size="lg">
                <Mail className="h-4 w-4" />
                {profile.email}
              </LinkButton>
              <LinkButton
                href={`mailto:${profile.emailSecondary}`}
                size="lg"
                variant="outline"
              >
                <Mail className="h-4 w-4" />
                {profile.emailSecondary}
              </LinkButton>
              <LinkButton
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                size="lg"
                variant="outline"
              >
                <Phone className="h-4 w-4" />
                {profile.phone}
              </LinkButton>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {profile.resumes.map((r, i) => (
                <LinkButton
                  key={r.label}
                  href={r.file}
                  variant={i === 0 ? "ghost" : "ghost"}
                  size="md"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download className="h-4 w-4" />
                  {r.label}
                </LinkButton>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm">
              {profile.socials.map((s) => {
                const Icon = iconFor[s.label as keyof typeof iconFor] ?? Mail;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                    <span>{s.handle}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
