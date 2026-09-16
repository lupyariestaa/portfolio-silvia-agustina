import { useTranslations } from "next-intl";
import { Clock, MapPin, CalendarClock, ExternalLink, Info } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { schedule, site } from "@/lib/content";

export default function Schedule() {
  const t = useTranslations("schedule");

  return (
    <section id="schedule" className="section-padding border-t border-border">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Schedule table */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border">
              <div className="flex items-center gap-3 border-b border-border bg-surface px-6 py-4">
                <CalendarClock className="size-5 text-accent" />
                <span className="font-semibold">{t("title")}</span>
              </div>

              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-muted">
                    <th className="px-6 py-3 font-medium">{t("day")}</th>
                    <th className="px-6 py-3 font-medium">{t("time")}</th>
                    <th className="hidden px-6 py-3 font-medium sm:table-cell">
                      {t("place")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-border last:border-0 hover:bg-surface"
                    >
                      <td className="px-6 py-4 font-medium">
                        {t(`days.${row.dayKey}`)}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 text-accent">
                          <Clock className="size-3.5" />
                          {row.time}
                        </span>
                      </td>
                      <td className="hidden px-6 py-4 text-muted sm:table-cell">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="size-3.5" />
                          {row.place}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex items-start gap-2.5 border-t border-border bg-accent-soft/40 px-6 py-4 text-xs text-muted">
                <Info className="mt-0.5 size-3.5 shrink-0 text-accent" />
                {t("note")}
              </div>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border">
              <div className="flex items-center justify-between gap-3 border-b border-border bg-surface px-6 py-4">
                <div className="flex items-center gap-3">
                  <MapPin className="size-5 text-accent" />
                  <span className="font-semibold">{t("mapTitle")}</span>
                </div>
                <a
                  href={site.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
                >
                  {t("openMap")}
                  <ExternalLink className="size-3.5" />
                </a>
              </div>

              <div className="relative min-h-[320px] flex-1">
                <iframe
                  title={t("mapTitle")}
                  src={site.mapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 size-full border-0"
                />
              </div>

              <div className="flex items-start gap-2.5 border-t border-border px-6 py-4 text-sm text-muted">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                {site.address}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
