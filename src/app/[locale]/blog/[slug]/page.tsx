import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { ArrowLeft, Clock, CalendarDays, CalendarHeart } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
import BlogCard from "@/components/BlogCard";
import { ButtonLink } from "@/components/ui/Button";
import { posts, postBody, site } from "@/lib/content";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: t(`list.${slug}.title`),
    description: t(`list.${slug}.excerpt`),
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "blog" });
  const tPage = await getTranslations({ locale, namespace: "blog.page" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  const post = posts.find((p) => p.slug === slug);
  const body = postBody[slug];

  if (!post || !body) notFound();

  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <article className="pt-36 pb-24 md:pt-44">
      <Container size="narrow">
        {/* Back */}
        <Reveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent"
          >
            <ArrowLeft className="size-4" />
            {tPage("backToBlog")}
          </Link>
        </Reveal>

        {/* Header */}
        <Reveal delay={0.05}>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge tone="accent">{post.category}</Badge>
            <span className="inline-flex items-center gap-1 text-xs text-muted">
              <CalendarDays className="size-3.5" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted">
              <Clock className="size-3.5" />
              {post.readTime} {t("minRead")}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t(`list.${slug}.title`)}
          </h1>
        </Reveal>

        {/* Cover */}
        <Reveal delay={0.1}>
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border">
            <Image
              src={post.image}
              alt={t(`list.${slug}.title`)}
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>

        {/* Body */}
        <div className="mt-10 flex flex-col gap-5">
          {body.map((block) =>
            block.type === "h2" ? (
              <h2
                key={block.key}
                className="mt-4 text-2xl font-semibold tracking-tight"
              >
                {t(`page.detail.${slug}.${block.key}`)}
              </h2>
            ) : (
              <p
                key={block.key}
                className="text-lg leading-relaxed text-muted"
              >
                {t(`page.detail.${slug}.${block.key}`)}
              </p>
            )
          )}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl border border-border bg-accent-soft/50 p-7 md:p-9">
          <h2 className="text-xl font-semibold">{tPage("ctaTitle")}</h2>
          <p className="mt-2 text-muted">{tPage("ctaSubtitle")}</p>
          <ButtonLink href="/#booking" size="lg" className="mt-6">
            <CalendarHeart className="size-4" />
            {tCommon("bookAppointment")}
          </ButtonLink>
        </div>

        {/* Author */}
        <p className="mt-6 text-sm text-muted">— {site.name}</p>
      </Container>

      {/* Related */}
      {related.length > 0 && (
        <Container className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight">
            {tPage("related")}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((rel, i) => (
              <Reveal key={rel.slug} delay={i * 0.06}>
                <BlogCard
                  slug={rel.slug}
                  category={rel.category}
                  date={rel.date}
                  readTime={rel.readTime}
                  image={rel.image}
                  title={t(`list.${rel.slug}.title`)}
                  excerpt={t(`list.${rel.slug}.excerpt`)}
                  readLabel={t("readArticle")}
                  minReadLabel={t("minRead")}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      )}
    </article>
  );
}
