"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/content";
import { waLink } from "@/lib/whatsapp";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const t = useTranslations("contact");
  const tBooking = useTranslations("booking");
  const [sent, setSent] = useState(false);

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, { message: tBooking("required") }),
        email: z.string().email({ message: tBooking("invalidPhone") }),
        subject: z.string().min(3, { message: tBooking("required") }),
        message: z.string().min(5, { message: tBooking("required") }),
      }),
    [tBooking]
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (values: FormValues) => {
    const msg = [
      "Halo dr. Silvia,",
      "",
      `Nama: ${values.name}`,
      `Email: ${values.email}`,
      `Subjek: ${values.subject}`,
      "",
      values.message,
    ].join("\n");

    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20";
  const labelClass = "mb-1.5 block text-sm font-medium";
  const errorClass = "mt-1.5 text-xs text-red-500";

  const infoItems = [
    { icon: MapPin, label: t("address"), value: site.address },
    { icon: Phone, label: t("phone"), value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { icon: Mail, label: t("email"), value: site.email, href: `mailto:${site.email}` },
    { icon: Clock, label: t("hours"), value: "08:00 – 20:00 WIB" },
  ];

  return (
    <section id="contact" className="section-padding border-t border-border">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Info */}
          <Reveal x={-30}>
            <ul className="flex flex-col gap-6">
              {infoItems.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <item.icon className="size-5" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-muted transition-colors hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm text-muted">{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-border pt-8">
              <h3 className="text-sm font-semibold">{t("followUs")}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} x={30}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-3xl border border-border bg-surface p-7 md:p-9"
            >
              {sent && (
                <div className="mb-6 flex items-center gap-3 rounded-2xl border border-accent/30 bg-accent-soft px-5 py-4 text-sm text-accent">
                  <CheckCircle2 className="size-5 shrink-0" />
                  {tBooking("success")}
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="c-name">
                    {t("formName")}
                  </label>
                  <input
                    id="c-name"
                    {...register("name")}
                    aria-invalid={Boolean(errors.name)}
                    className={inputClass}
                  />
                  {errors.name && (
                    <p className={errorClass}>{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className={labelClass} htmlFor="c-email">
                    {t("formEmail")}
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    {...register("email")}
                    aria-invalid={Boolean(errors.email)}
                    className={inputClass}
                  />
                  {errors.email && (
                    <p className={errorClass}>{errors.email.message}</p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="c-subject">
                    {t("formSubject")}
                  </label>
                  <input
                    id="c-subject"
                    {...register("subject")}
                    aria-invalid={Boolean(errors.subject)}
                    className={inputClass}
                  />
                  {errors.subject && (
                    <p className={errorClass}>{errors.subject.message}</p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="c-message">
                    {t("formMessage")}
                  </label>
                  <textarea
                    id="c-message"
                    rows={4}
                    {...register("message")}
                    aria-invalid={Boolean(errors.message)}
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && (
                    <p className={errorClass}>{errors.message.message}</p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="mt-7 w-full sm:w-auto"
              >
                <Send className="size-4" />
                {t("formSubmit")}
              </Button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
