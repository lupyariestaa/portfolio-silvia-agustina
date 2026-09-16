import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Bahasa yang didukung
  locales: ["id", "en"],

  // Bahasa default (Bahasa Indonesia)
  defaultLocale: "id",
});

export type Locale = (typeof routing.locales)[number];
