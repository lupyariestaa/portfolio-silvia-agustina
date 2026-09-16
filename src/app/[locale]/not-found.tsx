import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import { HeartPulse, Home } from "lucide-react";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <section className="flex min-h-[80vh] items-center pt-32 pb-24">
      <Container size="narrow" className="text-center">
        <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-accent-soft text-accent">
          <HeartPulse className="size-8" />
        </span>

        <p className="mt-8 text-7xl font-bold tracking-tight text-accent">404</p>

        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted">
          {t("subtitle")}
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          <Home className="size-4" />
          {t("backHome")}
        </Link>
      </Container>
    </section>
  );
}
