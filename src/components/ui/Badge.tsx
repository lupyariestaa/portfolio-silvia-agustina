import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: "default" | "accent" | "glass" | "liquid";
};

const tones = {
  default: "border border-border bg-surface text-muted",
  accent: "bg-accent-soft text-accent border border-accent/20",
  glass: "glass text-foreground",
  liquid: "liquid-glass text-accent border border-white/90 font-semibold shadow-sm",
};

export default function Badge({
  children,
  className,
  tone = "default",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium ${tones[tone]} ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
