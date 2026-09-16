"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import BlogCard from "@/components/BlogCard";
import { posts } from "@/lib/content";

export default function BlogList() {
  const t = useTranslations("blog");
  const tPage = useTranslations("blog.page");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(posts.map((p) => p.category)));
    return ["all", ...unique];
  }, []);

  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(
    () =>
      active === "all"
        ? posts
        : posts.filter((p) => p.category === active),
    [active]
  );

  return (
    <section className="pt-36 pb-24 md:pt-44">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={tPage("title")}
            subtitle={tPage("subtitle")}
          />
        </Reveal>

        {/* Filter */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-accent bg-accent text-white"
                      : "border-border text-muted hover:border-accent hover:text-accent"
                  }`}
                >
                  {cat === "all" ? tPage("allCategory") : cat}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
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

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted">{tPage("empty")}</p>
        )}
      </Container>
    </section>
  );
}
