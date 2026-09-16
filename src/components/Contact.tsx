"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/content";
import { waLink } from "@/lib/whatsapp";

export default function Contact() {
  const t = useTranslations("contact");
  const tBooking = useTranslations("booking");
  const [sent, setSent] = useState(false);

  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

  const infoItems = [
    { icon: MapPin, label: t("address"), value: site.address },
    { icon: Phone, label: t("phone"), value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { icon: Mail, label: t("email"), value: site.email, href: `mailto:${site.email}` },
    { icon: Clock, label: t("hours"), value: "08:00 – 20:00" },
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
          <Reveal>
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
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
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
                  <label className="mb-1.5 block text-sm font-medium" htmlFor="c-name">
                    {t("formName")}
                  </label>
                  <input
                    id="c-name"
                    name="name"
                    required
                    value={values.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium" htmlFor="c-email">
                    {t("formEmail")}
                  </label>
                  <input
                    id="c-email"
                    name="email"
                    type="email"
                    required
                    value={values.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium" htmlFor="c-subject">
                    {t("formSubject")}
                  </label>
                  <input
                    id="c-subject"
                    name="subject"
                    required
                    value={values.subject}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium" htmlFor="c-message">
                    {t("formMessage")}
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    rows={4}
                    required
                    value={values.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>

              <Button type="submit" size="lg" className="mt-7 w-full sm:w-auto">
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
