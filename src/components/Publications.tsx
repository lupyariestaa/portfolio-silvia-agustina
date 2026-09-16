import { useTranslations } from "next-intl";
import { BookOpen, ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { publications } from "@/lib/content";

export default function Publications() {
  const t = useTranslations("publications");

  return (
    <section
      id="publications"
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

        <div className="mt-14 flex flex-col">
          {publications.map((pub, i) => (
            <Reveal key={pub.title} delay={i * 0.06}>
              <a
                href={pub.href}
                className="group grid grid-cols-1 gap-4 border-t border-border py-7 transition-colors hover:bg-background md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8 md:px-4"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <BookOpen className="size-5" />
                </span>

                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-accent">
                    {pub.title}
                  </h3>
                  <span className="text-sm text-muted">
                    {pub.journal} · {pub.year}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  {t("readPaper")}
                  <ExternalLink className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
          <div className="border-t border-border" />
        </div>
      </Container>
    </section>
  );
}
