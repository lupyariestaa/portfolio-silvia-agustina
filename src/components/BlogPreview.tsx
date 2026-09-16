import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import BlogCard from "@/components/BlogCard";
import { posts } from "@/lib/content";

export default function BlogPreview() {
  const t = useTranslations("blog");

  return (
    <section id="blog" className="section-padding border-t border-border">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow={t("eyebrow")}
              title={t("title")}
              subtitle={t("subtitle")}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-medium text-accent"
            >
              {t("allArticles")}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <BlogCard
                slug={post.slug}
                category={post.category}
                date={post.date}
                readTime={post.readTime}
                image={post.image}
                title={t(`list.${post.slug}.title`)}
                excerpt={t(`list.${post.slug}.excerpt`)}
                readLabel={t("readArticle")}
                minReadLabel={t("minRead")}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
