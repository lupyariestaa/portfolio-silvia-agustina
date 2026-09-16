"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  blur?: boolean;
  className?: string;
  /** Stagger children automatically by this interval (ms) */
  stagger?: number;
};

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  x = 0,
  scale = 1,
  blur = false,
  className,
  stagger,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || preference.matches || !("IntersectionObserver" in window) || !element.animate) return;

    const animations: Animation[] = [];

    const targets = stagger
      ? Array.from(element.children) as HTMLElement[]
      : [element];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (preference.matches) return;

        targets.forEach((target, idx) => {
          const totalDelay = delay + (stagger ? idx * stagger : 0);
          const fromTransform = `translateY(${y}px) translateX(${x}px) scale(${scale === 1 ? 0.96 : scale})`;
          const toTransform = "translateY(0) translateX(0) scale(1)";

          const anim = target.animate(
            [
              { opacity: 0, transform: fromTransform, filter: blur ? "blur(8px)" : "blur(0)" },
              { opacity: 1, transform: toTransform, filter: "blur(0)" },
            ],
            {
              duration: 600,
              delay: totalDelay,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              fill: "both",
            }
          );
          animations.push(anim);
        });
      },
      { threshold: 0.1, rootMargin: "-60px" }
    );

    observer.observe(element);

    const cancel = () => animations.forEach((a) => a.cancel());
    preference.addEventListener("change", cancel);

    return () => {
      observer.disconnect();
      animations.forEach((a) => a.cancel());
      preference.removeEventListener("change", cancel);
    };
  }, [delay, y, x, scale, blur, stagger]);

  return <div ref={ref} className={className}>{children}</div>;
}
