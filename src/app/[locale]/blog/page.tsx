import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import BlogList from "@/components/BlogList";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog.page" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <BlogList />;
}
