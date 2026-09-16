"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import {
  CalendarHeart,
  CheckCircle2,
  Send,
  User,
  Phone,
  Clock,
  Stethoscope,
  MessageSquare,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { services, site } from "@/lib/content";
import { waLink } from "@/lib/whatsapp";

type FormValues = {
  name: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  notes?: string;
};

export default function Booking() {
  const t = useTranslations("booking");
  const tServices = useTranslations("services");
  const [sent, setSent] = useState(false);

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, { message: t("required") }),
        phone: z
          .string()
          .regex(/^[0-9+\-\s()]{8,}$/, { message: t("invalidPhone") }),
        date: z.string().min(1, { message: t("required") }),
        time: z.string().min(1, { message: t("required") }),
        service: z.string().min(1, { message: t("required") }),
        notes: z.string().optional(),
      }),
    [t]
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (values: FormValues) => {
    const serviceLabel = tServices(`list.${values.service}.title`);
    const message = [
      "Halo dr. Silvia, saya ingin membuat janji temu.",
      "",
      `Nama: ${values.name}`,
      `No. WhatsApp: ${values.phone}`,
      `Tanggal: ${values.date}`,
      `Jam: ${values.time}`,
      `Layanan: ${serviceLabel}`,
      values.notes ? `Catatan: ${values.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(waLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20";
  const labelClass = "mb-1.5 block text-sm font-medium";
  const errorClass = "mt-1.5 text-xs text-red-500";

  return (
    <section
      id="booking"
      className="section-padding border-t border-border bg-surface"
    >
      <Container size="narrow">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-12 rounded-3xl border border-border bg-background p-7 md:p-10"
          >
            {sent && (
              <div className="mb-6 flex items-center gap-3 rounded-2xl border border-accent/30 bg-accent-soft px-5 py-4 text-sm text-accent">
                <CheckCircle2 className="size-5 shrink-0" />
                {t("success")}
              </div>
            )}

            <div className="grid gap-5 md:grid-cols-2">
              {/* Name */}
              <div>
                <label className={labelClass} htmlFor="booking-name">
                  <User className="mr-1.5 inline size-4 text-accent" />
                  {t("name")}
                </label>
                <input
                  id="booking-name"
                  {...register("name")}
                  aria-invalid={Boolean(errors.name)}
                  placeholder={t("namePlaceholder")}
                  className={inputClass}
                />
                {errors.name && (
                  <p className={errorClass}>{errors.name.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className={labelClass} htmlFor="booking-phone">
                  <Phone className="mr-1.5 inline size-4 text-accent" />
                  {t("phone")}
                </label>
                <input
                  id="booking-phone"
                  inputMode="tel"
                  {...register("phone")}
                  aria-invalid={Boolean(errors.phone)}
                  placeholder={t("phonePlaceholder")}
                  className={inputClass}
                />
                {errors.phone && (
                  <p className={errorClass}>{errors.phone.message}</p>
                )}
              </div>

              {/* Date */}
              <div>
                <label className={labelClass} htmlFor="booking-date">
                  <CalendarHeart className="mr-1.5 inline size-4 text-accent" />
                  {t("date")}
                </label>
                <input
                  id="booking-date"
                  type="date"
                  {...register("date")}
                  aria-invalid={Boolean(errors.date)}
                  className={inputClass}
                />
                {errors.date && (
                  <p className={errorClass}>{errors.date.message}</p>
                )}
              </div>

              {/* Time */}
              <div>
                <label className={labelClass} htmlFor="booking-time">
                  <Clock className="mr-1.5 inline size-4 text-accent" />
                  {t("time")}
                </label>
                <input
                  id="booking-time"
                  type="time"
                  {...register("time")}
                  aria-invalid={Boolean(errors.time)}
                  placeholder={t("timePlaceholder")}
                  className={inputClass}
                />
                {errors.time && (
                  <p className={errorClass}>{errors.time.message}</p>
                )}
              </div>

              {/* Service */}
              <div className="md:col-span-2">
                <label className={labelClass} htmlFor="booking-service">
                  <Stethoscope className="mr-1.5 inline size-4 text-accent" />
                  {t("service")}
                </label>
                <select
                  id="booking-service"
                  {...register("service")}
                  aria-invalid={Boolean(errors.service)}
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>
                    {t("servicePlaceholder")}
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {tServices(`list.${s.slug}.title`)}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className={errorClass}>{errors.service.message}</p>
                )}
              </div>

              {/* Notes */}
              <div className="md:col-span-2">
                <label className={labelClass} htmlFor="booking-notes">
                  <MessageSquare className="mr-1.5 inline size-4 text-accent" />
                  {t("notes")}
                </label>
                <textarea
                  id="booking-notes"
                  rows={3}
                  {...register("notes")}
                  placeholder={t("notesPlaceholder")}
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <p className="text-xs text-muted">{site.phone}</p>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                <Send className="size-4" />
                {t("submit")}
              </Button>
            </div>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
