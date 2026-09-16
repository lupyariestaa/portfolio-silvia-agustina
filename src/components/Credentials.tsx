import { useTranslations } from "next-intl";
import { GraduationCap, BadgeCheck, Users, Award } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
import {
  education,
  licenses,
  organizations,
  certifications,
} from "@/lib/content";

export default function Credentials() {
  const t = useTranslations("credentials");

  return (
    <section id="credentials" className="section-padding border-t border-border">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Education */}
          <Reveal>
            <div className="rounded-2xl border border-border p-7 md:p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <GraduationCap className="size-5" />
                </span>
                <h3 className="text-xl font-semibold">{t("education")}</h3>
              </div>
              <ul className="mt-6 flex flex-col gap-5">
                {education.map((edu) => (
                  <li
                    key={edu.degree}
                    className="flex flex-col gap-1 border-l-2 border-border pl-4"
                  >
                    <span className="font-semibold">{edu.degree}</span>
                    <span className="text-sm text-accent">{edu.school}</span>
                    <span className="text-sm text-muted">{edu.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Licenses + Organization */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-8 rounded-2xl border border-border p-7 md:p-8">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <BadgeCheck className="size-5" />
                  </span>
                  <h3 className="text-xl font-semibold">{t("license")}</h3>
                </div>
                <ul className="mt-6 flex flex-col gap-3">
                  {licenses.map((lic) => (
                    <li
                      key={lic.label}
                      className="flex items-center justify-between gap-4 text-sm"
                    >
                      <span className="text-muted">{lic.label}</span>
                      <span className="font-mono text-xs">{lic.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Users className="size-5" />
                  </span>
                  <h3 className="text-xl font-semibold">{t("organization")}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {organizations.map((org) => (
                    <li key={org}>
                      <Badge>{org}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Certifications */}
          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="rounded-2xl border border-border p-7 md:p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Award className="size-5" />
                </span>
                <h3 className="text-xl font-semibold">{t("certifications")}</h3>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 text-sm"
                  >
                    <BadgeCheck className="size-4 shrink-0 text-accent" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
