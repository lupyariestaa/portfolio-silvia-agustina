import { useTranslations } from "next-intl";
import { Briefcase } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { career } from "@/lib/content";

export default function CareerPath() {
  const t = useTranslations("career");

  return (
    <section
      id="career"
      className="section-padding border-t border-border bg-surface"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </Reveal>

        <div className="relative mt-14">
          {/* vertical line */}
          <span className="absolute left-3.5 top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

          <ul className="flex flex-col gap-10">
            {career.map((step, i) => {
              const isLast = i === career.length - 1;
              const base = `list.${step.key}`;
              return (
                <li key={step.key}>
                  <Reveal delay={i * 0.06}>
                    <div
                      className={`relative flex gap-6 md:grid md:grid-cols-2 md:gap-12 ${
                        i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                      }`}
                    >
                      {/* Node */}
                      <span
                        className={`absolute left-3.5 top-1.5 z-10 flex size-3 -translate-x-1/2 items-center justify-center rounded-full ring-4 ring-surface md:left-1/2 ${
                          isLast ? "bg-accent" : "bg-border"
                        }`}
                      />

                      {/* content */}
                      <div
                        className={`pl-10 md:pl-0 ${
                          i % 2 === 0
                            ? "md:pr-12 md:text-right"
                            : "md:col-start-2 md:pl-12"
                        }`}
                      >
                        <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                          <Briefcase className="size-3.5" />
                          {step.period}
                        </span>
                        <h3 className="mt-3 text-xl font-semibold">
                          {t(`${base}.title`)}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {t(`${base}.desc`)}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
