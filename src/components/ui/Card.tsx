import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  glass?: boolean;
  hover?: boolean;
};

export default function Card({
  children,
  className,
  glass = false,
  hover = true,
}: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border p-6 md:p-8 ${
        glass ? "glass" : "bg-background"
      } ${
        hover
          ? "transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
          : ""
      } ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
