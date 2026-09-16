import { useTranslations } from "next-intl";
import { ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { organizations } from "@/lib/content";

const trustItems = [
  "Ikatan Dokter Indonesia (IDI)",
  "PDUI Cabang Jakarta",
  "Klinik Sehat Sentosa",
  "RS Mitra Husada",
  "Klinik Bunda Medika",
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
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {trustItems.map((item) => (
              <li
                key={item}
                className="flex items-center justify-center rounded-xl border border-border bg-background px-4 py-4 text-center text-xs font-medium text-muted transition-colors hover:border-accent/30 hover:text-foreground md:text-sm"
              >
                {item}
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
