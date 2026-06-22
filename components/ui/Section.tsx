import * as React from "react";
import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  id: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  tight?: boolean;
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  className,
  children,
  tight,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24",
        tight ? "py-16 md:py-20" : "py-20 md:py-28",
        className
      )}
      {...props}
    >
      <div className="container">
        {(eyebrow || title || subtitle) && (
          <div className="mb-10 md:mb-14 max-w-2xl">
            {eyebrow && (
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <span className="h-px w-8 bg-primary/50" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-fluid-h2 font-bold tracking-tight text-foreground">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
