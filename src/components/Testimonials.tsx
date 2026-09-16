"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { testimonialData } from "@/lib/content";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} / 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${
            i < count ? "fill-accent text-accent" : "text-border"
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonialData.length;

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next, isPaused]);

  // Keyboard navigation
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <section
      id="testimonials"
      className="section-padding border-t border-border bg-surface"
    >
      <Container size="narrow">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="relative mt-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onKeyDown={onKeyDown}
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
          >
            {/* Carousel viewport */}
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {testimonialData.map((item) => (
                  <figure
                    key={item.key}
                    className="w-full shrink-0 px-4"
                    aria-hidden={testimonialData.indexOf(item) !== index}
                  >
                    <div className="relative flex flex-col items-center rounded-2xl border border-border bg-background p-8 text-center md:p-12">
                      <Quote className="size-10 text-accent/20" />
                      <Stars count={item.rating} />
                      <blockquote className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/90 md:text-xl">
                        &ldquo;{t(`list.${item.key}.quote`)}&rdquo;
                      </blockquote>
                      <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                        <span className="flex size-12 items-center justify-center rounded-full bg-accent text-base font-semibold text-white">
                          {item.initials}
                        </span>
                        <span className="font-medium text-sm">
                          {t(`list.${item.key}.name`)}
                        </span>
                      </figcaption>
                    </div>
                  </figure>
                ))}
              </div>
            </div>

            {/* Nav buttons */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background shadow-md transition-colors hover:border-accent hover:text-accent md:left-2"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background shadow-md transition-colors hover:border-accent hover:text-accent md:right-2"
            >
              <ChevronRight className="size-5" />
            </button>

            {/* Dots */}
            <div className="mt-6 flex justify-center gap-2">
              {testimonialData.map((item, i) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-8 bg-accent"
                      : "w-2 bg-border hover:bg-accent/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
