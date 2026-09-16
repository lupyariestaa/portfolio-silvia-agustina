"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { CalendarHeart, MapPin, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Counter from "@/components/ui/Counter";
import { site, stats } from "@/lib/content";
import { waLink } from "@/lib/whatsapp";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const t = useTranslations("hero");
  const tCommon = useTranslations("common");

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute -right-40 top-20 size-[480px] animate-blob rounded-full bg-accent-soft blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 size-[380px] animate-blob rounded-full bg-accent-soft/70 blur-3xl [animation-delay:4s]" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <Badge tone="accent">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                {t("statusBadge")}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl xl:text-7xl"
            >
              {t("name")}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
              className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              <span className="text-lg font-semibold text-accent">
                {t("role")}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                <MapPin className="size-4" />
                {t("location")}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.3 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              {t("tagline")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <ButtonLink href="/#booking" size="lg">
                <CalendarHeart className="size-4" />
                {tCommon("bookAppointment")}
              </ButtonLink>
              <ButtonLink
                href={waLink(site.whatsappMessage)}
                variant="secondary"
                size="lg"
                external
              >
                {tCommon("chatWhatsApp")}
              </ButtonLink>
            </motion.div>
          </div>

          {/* Right: photo */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-md"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-xl">
              <Image
                src={site.avatar}
                alt={t("photoAlt")}
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover"
                priority
                placeholder="empty"
              />
            </div>

            {/* Floating glass badge with counter */}
            <div className="glass-tint absolute -bottom-5 -left-5 hidden rounded-2xl px-5 py-4 sm:block">
              <p className="text-2xl font-bold text-accent">
                <Counter value="8+" />
              </p>
              <p className="text-xs text-muted">{t("statsExperience")}</p>
            </div>
          </motion.div>
        </div>

        {/* Stats row with counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.key} className="bg-background p-6 text-center md:p-8">
              <p className="text-3xl font-bold text-accent md:text-4xl">
                <Counter value={s.value} />
              </p>
              <p className="mt-2 text-sm text-muted">{t(s.key)}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted">
            <ArrowDown className="size-4 animate-bounce" />
            {t("scroll")}
          </span>
        </motion.div>
      </Container>
    </section>
  );
}
