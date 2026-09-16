"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const items = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"] as const;

export default function Faq() {
  const t = useTranslations("faq");
  const [open, setOpen] = useState<string | null>("q1");

  return (
    <section id="faq" className="section-padding border-t border-border">
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

        <div className="mt-12 flex flex-col gap-3">
          {items.map((key, i) => {
            const isOpen = open === key;
            return (
              <Reveal key={key} delay={i * 0.03}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isOpen ? "border-accent/40 bg-accent-soft/30" : "border-border"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : key)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-medium">{t(`list.${key}.q`)}</span>
                    <Plus
                      className={`size-5 shrink-0 text-accent transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <p className="px-6 pb-5 text-muted">
                          {t(`list.${key}.a`)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
