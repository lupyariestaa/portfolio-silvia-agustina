import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { posts, services } from "@/lib/content";

const BASE_URL = "https://silviaagustina.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  const staticPaths = ["", "/blog"];

  for (const locale of routing.locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "daily",
        priority: path === "" ? 1 : 0.8,
      });
    }

    for (const post of posts) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }

    for (const service of services) {
      entries.push({
        url: `${BASE_URL}/${locale}/layanan/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
