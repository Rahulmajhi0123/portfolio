import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <p>
          {"\u00A9"} {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind,
          and attention to detail.
        </p>
        <div className="flex items-center gap-4">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
