import { Link } from "react-router-dom";
import { ArrowRight, BriefcaseBusiness, Database, LineChart, Workflow } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { BlogCard } from "@/components/blog/BlogCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { TypeWriter } from "@/components/animations/TypeWriter";
import { ParticleField } from "@/components/animations/ParticleField";
import { MorphingBlob } from "@/components/animations/MorphingBlob";
import { TextReveal } from "@/components/animations/TextReveal";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";

const skills = [
  {
    icon: BriefcaseBusiness,
    title: "Data Product Strategy",
    description: "Turn business priorities into clear roadmaps, scoped use cases, and value-focused delivery plans.",
    stat: "15+",
    statLabel: "projects",
  },
  {
    icon: Database,
    title: "Governance & Prioritization",
    description: "Structure committees, backlogs, and decision rituals so cross-functional teams can move faster.",
    stat: "10+",
    statLabel: "dashboards",
  },
  {
    icon: LineChart,
    title: "Analytics & KPI Design",
    description: "Build dashboards and reporting frameworks that support decisions, steering, and adoption.",
    stat: "400M",
    statLabel: "MAD budget",
  },
  {
    icon: Workflow,
    title: "Transformation Delivery",
    description: "Bridge business, IT, and data during banking, SaaS, and operating-model transformations.",
    stat: "9",
    statLabel: "years exp.",
  },
];

const heroStats = [
  { value: "9", label: "Years experience" },
  { value: "15+", label: "Projects delivered" },
  { value: "10+", label: "Dashboards automated" },
  { value: "400M", label: "MAD IT budget managed" },
];

const typewriterWords = [
  "data",
  "governance",
  "analytics",
  "transformation",
];

const Home = () => {
  const featuredProjects = projects.slice(0, 3);
  const recentPosts = blogPosts.slice(0, 2);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center pt-16">
        {/* Background layers */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <ParticleField className="opacity-60" particleCount={40} />
        <MorphingBlob
          className="absolute top-1/4 right-[-10%]"
          size="600px"
          color="hsl(214 84% 56% / 0.07)"
        />
        <MorphingBlob
          className="absolute bottom-[-10%] left-[10%]"
          size="400px"
          color="hsl(199 90% 52% / 0.05)"
        />

        {/* Floating decorative elements */}
        <div className="absolute top-[20%] right-[15%] w-3 h-3 rounded-full bg-primary/20 float-slow pointer-events-none" />
        <div className="absolute top-[60%] right-[25%] w-2 h-2 rounded-full bg-primary/15 float-medium pointer-events-none" />
        <div className="absolute top-[40%] left-[8%] w-2.5 h-2.5 rounded-full bg-cyan-400/15 float-slow pointer-events-none" style={{ animationDelay: "2s" }} />

        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl">
            {/* Label */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-6 hero-animate glow-pulse"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Available for Product Owner Data roles
            </div>

            {/* Heading */}
            <h1
              className="font-display text-5xl md:text-7xl font-normal leading-[1.08] tracking-tight hero-animate"
              style={{ animationDelay: "0.15s" }}
            >
              Bridging business,{" "}
              <span className="text-gradient-shimmer italic">
                <TypeWriter words={typewriterWords} typingSpeed={90} deletingSpeed={50} pauseDuration={2500} />
              </span>
              <br />
              and transformation delivery
            </h1>

            {/* Sub-headline */}
            <p
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed hero-animate"
              style={{ animationDelay: "0.25s" }}
            >
              I am{" "}
              <span className="text-foreground font-medium">Amine Lazrak</span>, a finance and IT
              transformation professional with 9 years of experience across banking, compliance,
              analytics, and SaaS delivery. I translate strategic intent into governed, measurable
              data initiatives.
            </p>

            {/* CTAs */}
            <div
              className="mt-8 flex flex-wrap gap-4 hero-animate"
              style={{ animationDelay: "0.35s" }}
            >
              <Button asChild size="lg" className="rounded-full gap-2 group">
                <Link to="/portfolio">
                  View Case Studies <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full hover-tilt">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>

            {/* Stat bar with animated counters */}
            <div
              className="mt-14 pt-10 border-t border-border/50 grid grid-cols-2 md:grid-cols-4 gap-6 hero-animate"
              style={{ animationDelay: "0.45s" }}
            >
              {heroStats.map((s) => (
                <div key={s.label} className="group">
                  <AnimatedCounter
                    value={s.value}
                    className="text-3xl font-bold text-foreground block group-hover:text-primary transition-colors"
                    duration={2200}
                  />
                  <p className="text-sm text-muted-foreground mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="mb-14">
            <p className="text-primary font-mono text-xs uppercase tracking-widest mb-3">What I bring</p>
            <TextReveal as="h2" className="font-display text-3xl md:text-4xl font-normal">
              Areas of Expertise
            </TextReveal>
            <div className="mt-4 w-12 h-0.5 bg-primary line-grow" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <ScrollReveal key={skill.title} delay={index * 80}>
              <div
                className="group p-6 rounded-xl border border-border bg-card card-hover hover:border-primary/40 h-full hover-tilt"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-right">
                    <AnimatedCounter
                      value={skill.stat}
                      className="text-2xl font-bold text-foreground leading-none block"
                      duration={1800}
                    />
                    <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider mt-0.5">{skill.statLabel}</p>
                  </div>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{skill.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-primary font-mono text-xs uppercase tracking-widest mb-3">Work</p>
              <TextReveal as="h2" className="font-display text-3xl md:text-4xl font-normal">
                Selected Case Studies
              </TextReveal>
              <div className="mt-4 w-12 h-0.5 bg-primary line-grow" />
            </div>
            <Button asChild variant="ghost" className="hidden md:flex items-center gap-2 text-primary group">
              <Link to="/portfolio">
                View all <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 100}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-8 flex md:hidden">
            <Button asChild variant="ghost" className="text-primary">
              <Link to="/portfolio">
                View all case studies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-primary font-mono text-xs uppercase tracking-widest mb-3">Writing</p>
              <TextReveal as="h2" className="font-display text-3xl md:text-4xl font-normal">
                Insights and Positioning
              </TextReveal>
              <div className="mt-4 w-12 h-0.5 bg-primary line-grow" />
            </div>
            <Button asChild variant="ghost" className="hidden md:flex items-center gap-2 text-primary group">
              <Link to="/blog">
                View all <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-3xl">
            {recentPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 100}>
                <BlogCard post={post} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <ScrollReveal>
          <div className="relative rounded-2xl border border-border bg-card overflow-hidden p-10 md:p-16 text-center">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/8 rounded-full blur-[80px]" />
            <MorphingBlob
              className="absolute top-[-20%] left-[30%]"
              size="300px"
              color="hsl(214 84% 56% / 0.06)"
            />
            <div className="relative">
              <p className="text-primary font-mono text-xs uppercase tracking-widest mb-4">Open to opportunities</p>
              <h2 className="font-display text-3xl md:text-5xl font-normal mb-5">
                Open to Product Owner Data{" "}
                <span className="text-gradient-shimmer italic">opportunities</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                I am available immediately for full-time roles or transformation missions where data,
                governance, and business alignment need to work together.
              </p>
              <Button asChild size="lg" className="rounded-full gap-2 group">
                <Link to="/contact">
                  Start a Conversation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
