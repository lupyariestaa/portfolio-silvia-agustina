"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, CalendarHeart } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { site } from "@/lib/content";

const navItems = [
  { key: "about", href: "/#about" },
  { key: "services", href: "/#services" },
  { key: "schedule", href: "/#schedule" },
  { key: "blog", href: "/#blog" },
  { key: "contact", href: "/#contact" },
] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setOpen(false);
    if (isHome && href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${id}`);
      }
    }
  };

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-6">
        <nav
          className={`pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-300 md:px-5 ${
            scrolled ? "liquid-glass" : "border border-transparent bg-transparent"
          }`}
        >
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
              {site.initials}
            </span>
            <span className="hidden text-sm font-semibold sm:inline">
              {site.name}
            </span>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:bg-accent-soft hover:text-accent"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher className="hidden sm:inline-flex" />
            <Link
              href="/#booking"
              onClick={(e) => handleNavClick(e, "/#booking")}
              className="hidden items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover md:inline-flex"
            >
              <CalendarHeart className="size-4" />
              {tCommon("bookAppointment")}
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex size-9 items-center justify-center rounded-full border border-border lg:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col bg-white/90 px-5 pt-24 backdrop-blur-2xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block border-b border-border py-4 text-2xl font-semibold tracking-tight transition-colors hover:text-accent"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4">
              <LanguageSwitcher className="self-start" />
              <Link
                href="/#booking"
                onClick={(e) => handleNavClick(e, "/#booking")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-medium text-white"
              >
                <CalendarHeart className="size-5" />
                {tCommon("bookAppointment")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
