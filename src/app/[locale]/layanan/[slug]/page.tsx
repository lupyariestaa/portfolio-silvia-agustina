import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import {
  ArrowLeft,
  CalendarHeart,
  CheckCircle2,
  ClipboardList,
  Stethoscope,
  ClipboardCheck,
  Syringe,
  HeartPulse,
  Salad,
  FileText,
  Video,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { services, serviceDetails } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  "clipboard-check": ClipboardCheck,
  syringe: Syringe,
  "heart-pulse": HeartPulse,
  salad: Salad,
  "file-text": FileText,
  video: Video,
  users: Users,
};

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  if (!services.find((s) => s.slug === slug)) return {};
  return {
    title: t(`list.${slug}.title`),
    description: t(`list.${slug}.desc`),
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "services" });
  const detail = serviceDetails[slug];
  const service = services.find((s) => s.slug === slug);

  if (!service || !detail) notFound();

  const Icon = iconMap[service.icon] ?? Stethoscope;

  return (
    <section className="pt-36 pb-24 md:pt-44">
      <Container size="narrow">
        {/* Back */}
        <Reveal>
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent"
          >
            <ArrowLeft className="size-4" />
            {t("detail.backToServices")}
          </Link>
        </Reveal>

        {/* Header */}
        <Reveal delay={0.05}>
          <div className="mt-6 flex items-center gap-4">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-accent-soft text-accent">
              <Icon className="size-7" />
            </span>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t(`list.${slug}.title`)}
            </h1>
          </div>

          <p className="mt-6 text-lg leading-relaxed text-muted">
            {t(`detail.${slug}.longDesc`)}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Includes */}
          <Reveal>
            <div className="rounded-2xl border border-border p-7">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="size-5 text-accent" />
                <h2 className="text-lg font-semibold">{t("detail.includes")}</h2>
              </div>
              <ul className="mt-5 flex flex-col gap-3">
                {detail.includesKeys.map((key) => (
                  <li
                    key={key}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                    {t(`detail.${slug}.${key}`)}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Preparation */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border p-7">
              <div className="flex items-center gap-3">
                <ClipboardList className="size-5 text-accent" />
                <h2 className="text-lg font-semibold">
                  {t("detail.preparation")}
                </h2>
              </div>
              <ul className="mt-5 flex flex-col gap-3">
                {detail.prepKeys.map((key) => (
                  <li
                    key={key}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {t(`detail.${slug}.${key}`)}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <Reveal delay={0.15}>
          <div className="mt-10 rounded-3xl border border-border bg-accent-soft/50 p-7 text-center md:p-9">
            <ButtonLink href="/#booking" size="lg">
              <CalendarHeart className="size-4" />
              {t("detail.bookThis")}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
