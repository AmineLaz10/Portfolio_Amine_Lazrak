import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { PortfolioFilter } from "@/components/portfolio/PortfolioFilter";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { projects, type ProjectType, type Domain, type Task } from "@/data/projects";

const Portfolio = () => {
  const [selectedType, setSelectedType] = useState<ProjectType | "all">("all");
  const [selectedDomain, setSelectedDomain] = useState<Domain | "all">("all");
  const [selectedTask, setSelectedTask] = useState<Task | "all">("all");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (selectedType !== "all" && project.type !== selectedType) return false;
      if (selectedDomain !== "all" && project.domain !== selectedDomain) return false;
      if (selectedTask !== "all" && project.task !== selectedTask) return false;
      return true;
    });
  }, [selectedType, selectedDomain, selectedTask]);

  const hasFilters = selectedType !== "all" || selectedDomain !== "all" || selectedTask !== "all";

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-20 pb-16 md:pt-28">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4 hero-animate" style={{ animationDelay: "0.05s" }}>
            <span className="w-8 h-px bg-primary/60" />
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Portfolio</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display mb-4 hero-animate" style={{ animationDelay: "0.15s" }}>Case Studies</h1>
          <p className="text-muted-foreground leading-relaxed hero-animate" style={{ animationDelay: "0.25s" }}>
            A selection of strategic, delivery, and analytics experiences that show how I frame
            data initiatives, align stakeholders, and convert business needs into execution.
          </p>

          {/* Quick stats */}
          <div className="flex gap-6 mt-6 hero-animate" style={{ animationDelay: "0.35s" }}>
            <div className="flex items-baseline gap-2">
              <AnimatedCounter value={String(projects.length)} className="text-2xl font-bold text-primary" duration={1500} />
              <span className="text-xs text-muted-foreground font-mono">case studies</span>
            </div>
            <div className="flex items-baseline gap-2">
              <AnimatedCounter value="5" className="text-2xl font-bold text-primary" duration={1500} />
              <span className="text-xs text-muted-foreground font-mono">industries</span>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          {/* Filters Sidebar */}
          <ScrollReveal>
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-lg border border-border/40 bg-card/40 p-5">
                <h3 className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-5">
                  Filters
                </h3>
                <PortfolioFilter
                  selectedType={selectedType}
                  selectedDomain={selectedDomain}
                  selectedTask={selectedTask}
                  onTypeChange={setSelectedType}
                  onDomainChange={setSelectedDomain}
                  onTaskChange={setSelectedTask}
                />
              </div>
            </aside>
          </ScrollReveal>

          {/* Portfolio Grid */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs text-muted-foreground/70 font-mono">
                {filteredProjects.length} {filteredProjects.length === 1 ? "case study" : "case studies"}
                {hasFilters && " filtered"}
              </p>
              {hasFilters && (
                <button
                  onClick={() => {
                    setSelectedType("all");
                    setSelectedDomain("all");
                    setSelectedTask("all");
                  }}
                  className="text-xs text-primary/70 hover:text-primary transition-colors font-mono"
                >
                  Clear filters
                </button>
              )}
            </div>

            {filteredProjects.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                <p className="text-sm">No case studies match your current filters.</p>
                <button
                  onClick={() => {
                    setSelectedType("all");
                    setSelectedDomain("all");
                    setSelectedTask("all");
                  }}
                  className="text-sm text-primary mt-2 hover:underline"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid gap-5 md:grid-cols-2">
                {filteredProjects.map((project, index) => (
                  <ScrollReveal key={project.id} delay={index * 60}>
                    <ProjectCard project={project} />
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
