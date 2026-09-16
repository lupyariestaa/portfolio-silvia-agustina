import type { ComponentType } from "react";
import { Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Container from "./ui/Container";
import { site } from "@/lib/content";

const navItems = [
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "schedule", href: "#schedule" },
  { key: "blog", href: "#blog" },
  { key: "contact", href: "#contact" },
] as const;

const socialIcons: Record<string, ComponentType<{ className?: string }>> = {
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                {site.initials}
              </span>
              <span className="text-sm font-semibold">{site.name}</span>
            </div>
            <p className="mt-4 text-sm text-muted">{site.role}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold">{t("navigation")}</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {tNav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold">{t("contact")}</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-accent" />
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-accent"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-accent" />
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold">{t("social")}</h3>
            <div className="mt-4 flex gap-3">
              {site.socials.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex size-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    {Icon ? <Icon className="size-4" /> : s.label[0]}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 rounded-2xl border border-border bg-accent-soft/50 p-5 text-sm text-muted">
          <strong className="text-foreground">Disclaimer: </strong>
          {t("disclaimer")}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-sm text-muted sm:flex-row">
          <span>
            © {year} {site.name}. {t("rights")}
          </span>
          <Link href="/" className="transition-colors hover:text-accent">
            {site.initials}
          </Link>
        </div>
      </Container>
    </footer>
  );
}
