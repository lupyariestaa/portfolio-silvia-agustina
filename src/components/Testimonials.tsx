import { useTranslations } from "next-intl";
import { Star, Quote } from "lucide-react";
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

  return (
    <section
      id="testimonials"
      className="section-padding border-t border-border bg-surface"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonialData.map((item, i) => (
            <Reveal key={item.key} delay={i * 0.06}>
              <figure className="relative flex h-full flex-col rounded-2xl border border-border bg-background p-7 md:p-8">
                <Quote className="absolute right-7 top-7 size-8 text-accent-soft" />
                <Stars count={item.rating} />
                <blockquote className="mt-5 flex-1 text-lg leading-relaxed">
                  &ldquo;{t(`list.${item.key}.quote`)}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4 border-t border-border pt-5">
                  <span className="flex size-11 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                    {item.initials}
                  </span>
                  <span className="flex flex-col">
                    <span className="font-medium">
                      {t(`list.${item.key}.name`)}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
