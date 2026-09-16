import Image from "next/image";
import { useTranslations } from "next-intl";
import { Quote, HeartHandshake } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/content";

export default function About() {
  const t = useTranslations("about");
  const bio = t.raw("bio") as string[];

  return (
    <section id="about" className="section-padding">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-lg">
                <Image
                  src={site.aboutImage}
                  alt={t("imageAlt")}
                  fill
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="object-cover"
                />
              </div>

              {/* Floating glass philosophy card */}
              <div className="glass-tint absolute -bottom-6 left-6 right-6 rounded-2xl p-5 md:left-8 md:right-auto md:max-w-xs">
                <div className="flex items-center gap-2 text-accent">
                  <HeartHandshake className="size-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    {t("philosophy")}
                  </span>
                </div>
                <p className="mt-2 text-sm text-foreground/80">
                  {t("philosophyText")}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 flex flex-col gap-5">
                {bio.map((paragraph, i) => (
                  <p key={i} className="text-lg leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex items-start gap-3 border-l-2 border-accent pl-4">
                <Quote className="mt-1 size-5 shrink-0 text-accent" />
                <div>
                  <p className="text-sm italic text-muted">
                    &ldquo;{t("philosophyText")}&rdquo;
                  </p>
                  <p className="mt-3 text-sm font-semibold">
                    {t("signature")}
                    <br />
                    <span className="text-accent">{site.name}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
