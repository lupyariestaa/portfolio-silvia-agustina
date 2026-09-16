import { useTranslations } from "next-intl";
import { BookOpen, ExternalLink, FileText } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
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

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {publications.map((pub, i) => (
            <Reveal key={pub.title} delay={i * 0.08} y={20}>
              <a
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
              >
                <div>
                  <span className="flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <FileText className="size-5" />
                  </span>

                  <div className="mt-4 flex items-center gap-2">
                    <Badge tone="accent">{pub.year}</Badge>
                    <span className="inline-flex items-center gap-1 text-xs text-muted">
                      <BookOpen className="size-3" />
                      {pub.journal}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-semibold leading-snug transition-colors group-hover:text-accent">
                    {pub.title}
                  </h3>
                </div>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  {t("readPaper")}
                  <ExternalLink className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
