import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "outline" | "primary" | "accent";
};

const variants = {
  default: "bg-muted text-foreground",
  outline: "border border-border bg-transparent text-muted-foreground",
  primary: "bg-primary/10 text-primary border border-primary/20",
  accent: "bg-accent/10 text-accent border border-accent/20",
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
