"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  /** Target value, e.g. "5.000+" or "8+" or "15" */
  value: string;
  duration?: number;
  className?: string;
};

/** Extract numeric portion from strings like "8+", "5.000+", "15+" */
function parseNumber(raw: string): { num: number; prefix: string; suffix: string } {
  const match = raw.match(/^([^\d]*)([\d.,]+)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: raw };
  const numStr = match[2].replace(/\./g, "").replace(/,/g, "");
  return {
    num: parseInt(numStr, 10) || 0,
    prefix: match[1] || "",
    suffix: match[3] || "",
  };
}

export default function Counter({ value, duration = 1500, className }: CounterProps) {
  const { num, prefix, suffix } = parseNumber(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (preference.matches) {
          setDisplay(num);
          return;
        }

        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          // easeOutExpo
          const eased = progress === 1 ? 1 : Math.pow(2, -10 * progress + 10) * 0.5 + 1;
          setDisplay(Math.round(num * eased));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [num, duration]);

  const formatted =
    num >= 1000
      ? display.toLocaleString("id-ID")
      : String(display);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
