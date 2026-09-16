import { useTranslations } from "next-intl";
import { ShieldCheck, Building2, HeartPulse, Award, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { organizations } from "@/lib/content";

const trustItems = [
  { icon: Users, label: "IDI" },
  { icon: Building2, label: "PDUI Jakarta" },
  { icon: HeartPulse, label: "Klinik Sehat Sentosa" },
  { icon: Award, label: "RS Mitra Husada" },
  { icon: ShieldCheck, label: "Klinik Bunda Medika" },
];

export default function TrustBar() {
  const t = useTranslations("trust");

  return (
    <section className="border-y border-border bg-surface py-14">
      <Container>
        <Reveal>
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
              <ShieldCheck className="size-4" />
              {t("title")}
            </span>
            <p className="text-sm text-muted">{t("subtitle")}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {trustItems.map((item) => (
              <li key={item.label}>
                <SpotlightCard className="flex h-full flex-col items-center gap-2.5 rounded-xl border border-border bg-background px-3 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
                  <span className="flex size-10 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <item.icon className="size-5" />
                  </span>
                  <span className="text-xs font-medium text-muted sm:text-sm">
                    {item.label}
                  </span>
                </SpotlightCard>
              </li>
            ))}
          </ul>
        </Reveal>

        {organizations.length > 0 && (
          <p className="sr-only">{organizations.join(", ")}</p>
        )}
      </Container>
    </section>
  );
}
