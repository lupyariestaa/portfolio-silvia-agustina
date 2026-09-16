"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
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
                  className={`relative rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-accent text-white"
                      : "border-border text-muted hover:border-accent hover:text-accent"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10">
                    {cat === "all" ? tPage("allCategory") : cat}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid with layout animation */}
        <motion.div
          layout
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((post) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted">{tPage("empty")}</p>
        )}
      </Container>
    </section>
  );
}
