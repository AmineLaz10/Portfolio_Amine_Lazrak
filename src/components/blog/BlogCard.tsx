import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group rounded-lg border border-border/60 bg-card/60 p-6 card-hover hover-tilt">
      <div className="flex items-center gap-4 text-[11px] text-muted-foreground/70 mb-4">
        <span className="flex items-center gap-1.5 font-mono">
          <Calendar className="h-3 w-3" />
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
        <span className="flex items-center gap-1.5 font-mono">
          <Clock className="h-3 w-3" />
          {post.readTime}
        </span>
      </div>

      <h3 className="text-lg font-semibold leading-snug tracking-tight group-hover:text-primary transition-colors duration-300 mb-3">
        {post.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-5">
        {post.excerpt}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {post.tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="text-[10px] font-normal bg-secondary/60 text-muted-foreground border-0"
          >
            {tag}
          </Badge>
        ))}
      </div>

    </article>
  );
}
