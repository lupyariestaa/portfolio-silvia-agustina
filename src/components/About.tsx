import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Quote,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  GraduationCap,
  BadgeCheck,
  Award,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/content";

export default function About() {
  const t = useTranslations("about");
  const tHero = useTranslations("hero");
  const bio = t.raw("bio") as string[];

  const pillars = [
    {
      icon: HeartHandshake,
      title: t("pillars.p1.title"),
      desc: t("pillars.p1.desc"),
    },
    {
      icon: ShieldCheck,
      title: t("pillars.p2.title"),
      desc: t("pillars.p2.desc"),
    },
    {
      icon: Stethoscope,
      title: t("pillars.p3.title"),
      desc: t("pillars.p3.desc"),
    },
  ];

  const highlights = [
    { icon: GraduationCap, label: t("highlights.fkui") },
    { icon: BadgeCheck, label: t("highlights.str") },
    { icon: Award, label: t("highlights.exp") },
  ];

  return (
    <section id="about" className="section-padding overflow-hidden">
      <Container>
        {/* Section Header */}
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </Reveal>

        {/* Main Content Grid */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-start">
          {/* Left Column: Visual & Clinical Pillars (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Reveal>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border shadow-md">
                <Image
                  src={site.aboutImage}
                  alt={t("imageAlt")}
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
                {/* Floating Doctor Identity Badge */}
                <div className="absolute inset-x-3 bottom-3 z-10 sm:inset-x-5 sm:bottom-5">
                  <div className="liquid-glass rounded-2xl p-4 sm:p-5 border border-white/90 shadow-xl">
                  <p className="break-words text-base font-semibold leading-snug text-foreground sm:text-lg">
                    {site.name}, S.Ked
                  </p>
                  <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium leading-relaxed text-accent-hover sm:text-sm">
                    <span>{tHero("role")}</span>
                    <span aria-hidden="true">·</span>
                    <span>{t("highlights.fkui")}</span>
                  </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 3 Clinical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
              {pillars.map((pillar, idx) => (
                <Reveal key={pillar.title} delay={0.08 * (idx + 1)}>
                  <div className="flex items-start gap-3.5 rounded-2xl border border-border bg-surface p-4 transition-all hover:border-accent/30 hover:shadow-sm">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <pillar.icon className="size-4.5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">
                        {pillar.title}
                      </h3>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative, Quote & Verification (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Bio Narrative */}
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-4 text-base sm:text-lg leading-relaxed text-muted">
                {bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            {/* Verified Credentials Highlights */}
            <Reveal delay={0.15}>
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                {highlights.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-foreground/85 shadow-2xs"
                  >
                    <item.icon className="size-3.5 text-accent" />
                    {item.label}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Philosophy Quote Card */}
            <Reveal delay={0.2}>
              <div className="liquid-glass-tint relative rounded-2xl border border-accent/25 p-6 sm:p-7">
                <Quote className="size-7 text-accent/80 mb-3" />
                <p className="text-sm sm:text-base italic leading-relaxed text-foreground/90 font-medium">
                  &ldquo;{t("philosophyText")}&rdquo;
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-accent/15 pt-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-muted">{t("signature")}</span>
                    <p className="font-semibold text-accent mt-0.5">
                      {site.name}, S.Ked
                    </p>
                  </div>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-muted/80 bg-background/80 px-2.5 py-1 rounded-full border border-border">
                    {t("philosophy")}
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Actions */}
            <Reveal delay={0.25}>
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <ButtonLink href="/#booking" size="default">
                  {t("cta")}
                  <ArrowRight className="size-4" />
                </ButtonLink>
                <ButtonLink href="/#credentials" variant="secondary" size="default">
                  {t("viewCredentials")}
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
