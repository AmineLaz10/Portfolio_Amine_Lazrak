import { Layout } from "@/components/layout/Layout";
import { BlogCard } from "@/components/blog/BlogCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { blogPosts } from "@/data/blog";

const Blog = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 pt-20 pb-16 md:pt-28">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4 hero-animate" style={{ animationDelay: "0.05s" }}>
            <span className="w-8 h-px bg-primary/60" />
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Writing</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display mb-4 hero-animate" style={{ animationDelay: "0.15s" }}>Insights</h1>
          <p className="text-muted-foreground leading-relaxed hero-animate" style={{ animationDelay: "0.25s" }}>
            Themes I want to be known for: data product framing, governance,
            analytics prioritization, and transformation adoption.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 max-w-4xl">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 80}>
              <BlogCard post={post} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
