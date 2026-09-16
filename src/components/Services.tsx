import { useTranslations } from "next-intl";
import {
  Stethoscope,
  ClipboardCheck,
  Syringe,
  HeartPulse,
  Salad,
  FileText,
  Video,
  Users,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Card from "@/components/ui/Card";
import { services } from "@/lib/content";

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

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="section-padding border-t border-border">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Stethoscope;
            const base = `list.${service.slug}`;
            return (
              <Reveal key={service.slug} delay={i * 0.05}>
                <Link href={`/layanan/${service.slug}`} className="block h-full">
                  <Card className="group flex h-full flex-col">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">
                      {t(`${base}.title`)}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {t(`${base}.desc`)}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                      {t("learnMore")}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Card>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
