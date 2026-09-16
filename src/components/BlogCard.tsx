import Image from "next/image";
import { Clock, CalendarDays, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Badge from "@/components/ui/Badge";

type BlogCardProps = {
  slug: string;
  category: string;
  date: string;
  readTime: number;
  image: string;
  title: string;
  excerpt: string;
  readLabel: string;
  minReadLabel: string;
};

export default function BlogCard({
  slug,
  category,
  date,
  readTime,
  image,
  title,
  excerpt,
  readLabel,
  minReadLabel,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <Badge tone="accent">{category}</Badge>
          <span className="inline-flex items-center gap-1 text-xs text-muted">
            <CalendarDays className="size-3" />
            {date}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-muted">
            <Clock className="size-3" />
            {readTime} {minReadLabel}
          </span>
        </div>

        <h3 className="mt-4 text-lg font-semibold leading-snug transition-colors group-hover:text-accent">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {excerpt}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          {readLabel}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
