import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "default" | "lg";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover shadow-sm hover:shadow-md",
  secondary:
    "border border-border bg-background text-foreground hover:border-accent hover:text-accent",
  ghost: "text-foreground hover:bg-surface",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  default: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

export function Button({
  children,
  variant = "primary",
  size = "default",
  className,
  ...props
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
}

type LinkProps = BaseProps & {
  href: string;
  external?: boolean;
};

export function ButtonLink({
  children,
  href,
  variant = "primary",
  size = "default",
  external = false,
  className,
}: LinkProps) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className ?? ""}`}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
