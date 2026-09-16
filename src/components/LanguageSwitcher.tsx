"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const labels: Record<Locale, string> = {
  id: "ID",
  en: "EN",
};

export default function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (next: Locale) => {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  };

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full border border-border bg-background/60 p-0.5 ${className ?? ""}`}
      role="group"
      aria-label="Language switcher"
    >
      {routing.locales.map((loc) => {
        const active = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => switchTo(loc)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
              active
                ? "bg-accent text-white"
                : "text-muted hover:text-foreground"
            }`}
          >
            {labels[loc]}
          </button>
        );
      })}
    </div>
  );
}
