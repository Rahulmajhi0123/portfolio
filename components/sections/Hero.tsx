"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/content/profile";
import { LinkButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const CATCHPHRASE_INTERVAL_MS = 5000;

const socialIcon = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Email: Mail,
  Gmail: Mail,
  Phone: Phone,
} as const;

export function Hero() {
  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    const total = profile.catchphrases.length;
    if (total <= 1) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const interval = reduced ? CATCHPHRASE_INTERVAL_MS * 2 : CATCHPHRASE_INTERVAL_MS;

    const id = window.setInterval(() => {
      setPhraseIdx((i) => (i + 1) % total);
    }, interval);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <div className="container relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for interesting problems
            </div>

            <h1 className="text-fluid-hero font-bold leading-[1.05] tracking-tight">
              Hi, I&apos;m {profile.name.split(" ")[0]}.
              <br />
              <span className="gradient-text">{profile.role}</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base font-mono font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              {profile.roleTagline}
            </p>

            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl"
            >
              <div
                className="relative border-l-2 border-primary/60 pl-4 text-xl md:text-2xl font-medium italic leading-snug text-foreground/90 min-h-[5.5rem] sm:min-h-[4.5rem] md:min-h-[4rem]"
                role="region"
                aria-live="polite"
                aria-label="Rotating catchphrase"
              >
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={phraseIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="block"
                  >
                    &ldquo;{profile.catchphrases[phraseIdx]}&rdquo;
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              <div
                className="mt-4 flex gap-1.5 pl-4"
                aria-hidden
              >
                {profile.catchphrases.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setPhraseIdx(i)}
                    aria-label={`Show catchphrase ${i + 1}`}
                    className={cn(
                      "h-1 rounded-full transition-all duration-500 hover:bg-primary",
                      i === phraseIdx
                        ? "w-8 bg-primary"
                        : "w-2 bg-muted-foreground/40"
                    )}
                  />
                ))}
              </div>
            </motion.div>

            <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              {profile.heroPitch}
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{profile.location}</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <LinkButton href="#projects" size="lg">
                See my work
                <ArrowRight className="h-4 w-4" />
              </LinkButton>

              {profile.resumes.map((r, i) => (
                <LinkButton
                  key={r.label}
                  href={r.file}
                  variant={i === 0 ? "outline" : "ghost"}
                  size="lg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download className="h-4 w-4" />
                  {r.label}
                </LinkButton>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm">
              {profile.socials.map((s) => {
                const Icon = socialIcon[s.label as keyof typeof socialIcon] ?? Mail;
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-2xl"
              />

              <video
                className="robot-video pointer-events-none absolute bottom-0 z-0 h-auto w-[150px] left-[-108px] sm:w-[170px] sm:left-[-122px] md:w-[200px] md:left-[-150px] lg:bottom-12 lg:w-[240px] lg:left-[-160px] xl:bottom-14 xl:w-[260px] xl:left-[-175px]"
                src="/robot.webm"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-hidden
              />

              <div className="relative z-10 aspect-[3/4] w-[240px] sm:w-[300px] md:w-[360px] lg:w-[400px] animate-float">
                <div className="absolute inset-0 rounded-[2rem] p-[2px] bg-gradient-to-br from-primary via-accent to-primary bg-[length:200%_200%] animate-shimmer">
                  <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-card">
                    <Image
                      src={profile.portrait}
                      alt={profile.portraitAlt}
                      fill
                      priority
                      sizes="(max-width: 640px) 240px, (max-width: 1024px) 360px, 400px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
