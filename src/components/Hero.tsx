"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { CalendarHeart, MapPin, ArrowDown, Star, ShieldCheck } from "lucide-react";
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
      {/* Liquid organic blobs with blue and emerald caustics */}
      <div className="pointer-events-none absolute -right-40 top-10 size-[520px] animate-blob rounded-[42%_58%_60%_40%] bg-emerald-100/75 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 size-[440px] animate-blob rounded-[55%_45%_38%_62%] bg-sky-200/55 blur-3xl [animation-delay:5s]" />
      <div className="pointer-events-none absolute right-1/4 top-1/4 size-[280px] animate-blob rounded-[48%_52%_58%_42%] bg-teal-100/60 blur-2xl [animation-delay:3s]" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <Badge tone="liquid" className="animate-glow">
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

          {/* Right: photo showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[420px]"
          >
            {/* Ambient soft glow behind frame */}
            <div className="absolute -inset-2 sm:-inset-3 rounded-[2.5rem] bg-gradient-to-tr from-accent/20 via-sky-100/40 to-emerald-100/30 blur-2xl -z-10" />

            {/* Main Framed Card */}
            <div className="relative rounded-[2.25rem] border border-white/90 bg-white/70 p-2 sm:p-2.5 shadow-2xl backdrop-blur-xl">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] bg-slate-100">
                <Image
                  src={site.avatar}
                  alt={t("photoAlt")}
                  fill
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover"
                  priority
                  placeholder="empty"
                />

                {/* Top-left trust badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-1.5 rounded-full glass px-3 py-1.5 shadow-md border border-white/90">
                  <ShieldCheck className="size-3.5 text-accent" />
                  <span className="text-[11px] sm:text-xs font-semibold text-foreground">
                    SIP Terverifikasi
                  </span>
                </div>

                {/* Top-right rating badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex items-center gap-1.5 rounded-full glass px-3 py-1.5 shadow-md border border-white/90">
                  <Star className="size-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-bold text-foreground">5.0</span>
                  <span className="text-[10px] text-muted">(500+)</span>
                </div>

                {/* Bottom integrated glass info dock */}
                <div className="absolute inset-x-3 bottom-3 sm:inset-x-3.5 sm:bottom-3.5 z-10 rounded-2xl glass p-3.5 sm:p-4 shadow-xl border border-white/95">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-sm sm:text-base font-bold text-foreground leading-tight truncate">
                        {site.name}, S.Ked
                      </p>
                      <p className="text-xs font-medium text-accent mt-0.5 truncate">
                        {t("role")} · FKUI
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold text-accent border border-accent/20 shrink-0">
                      8+ Thn
                    </span>
                  </div>

                  <div className="mt-2.5 flex items-center justify-between border-t border-border/70 pt-2 text-[11px] sm:text-xs text-muted">
                    <span className="flex items-center gap-1.5 truncate">
                      <MapPin className="size-3.5 text-accent shrink-0" />
                      Klinik Sehat Sentosa
                    </span>
                    <span className="font-semibold text-foreground shrink-0">
                      Aktif Praktik
                    </span>
                  </div>
                </div>
              </div>
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
