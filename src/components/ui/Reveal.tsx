"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || preference.matches || !("IntersectionObserver" in window) || !element.animate) return;
    let animation: Animation | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (preference.matches) return;
      animation = element.animate(
        [{ transform: `translateY(${y}px)` }, { transform: "translateY(0)" }],
        { duration: 600, delay: delay * 1000, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
      );
    });
    const cancel = () => { if (preference.matches) animation?.cancel(); };
    preference.addEventListener("change", cancel);
    observer.observe(element);
    return () => {
      observer.disconnect();
      animation?.cancel();
      preference.removeEventListener("change", cancel);
    };
  }, [delay, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
