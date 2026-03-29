import { Github, BarChart3, BriefcaseBusiness, Target, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";
import { domainLabels, taskLabels } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const getTypeConfig = () => {
    switch (project.type) {
      case "analytics":
        return {
          icon: BarChart3,
          iconBg: "bg-amber-500/10",
          iconColor: "text-amber-500",
          hoverBorder: "hover:border-amber-500/40",
          hoverText: "group-hover:text-amber-500",
          badgeClass: "bg-amber-500/10 text-amber-500 border-amber-500/20",
          label: "Analytics",
        };
      case "program":
        return {
          icon: BriefcaseBusiness,
          iconBg: "bg-violet-500/10",
          iconColor: "text-violet-500",
          hoverBorder: "hover:border-violet-500/40",
          hoverText: "group-hover:text-violet-500",
          badgeClass: "bg-violet-500/10 text-violet-500 border-violet-500/20",
          label: "Program",
        };
      default:
        return {
          icon: Target,
          iconBg: "bg-primary/10",
          iconColor: "text-primary",
          hoverBorder: "hover:border-primary/40",
          hoverText: "group-hover:text-primary",
          badgeClass: "bg-primary/10 text-primary border-primary/20",
          label: "Strategy",
        };
    }
  };

  const config = getTypeConfig();
  const Icon = config.icon;

  return (
    <article
      className={`group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden card-hover hover-tilt ${config.hoverBorder}`}
    >
      {/* Top accent bar */}
      <div className={`h-0.5 w-full ${config.iconBg} opacity-0 group-hover:opacity-100 transition-opacity`}
        style={{ background: `hsl(var(--primary) / 0.5)` }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${config.iconBg} ${config.iconColor} flex-shrink-0`}>
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex items-center gap-1.5">
            <Badge className={`text-[10px] px-2 py-0.5 border ${config.badgeClass}`}>
              {config.label}
            </Badge>
            {project.githubUrl && (
              <Button variant="ghost" size="icon" asChild className="h-7 w-7 text-muted-foreground hover:text-foreground">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-3.5 w-3.5" />
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-base font-semibold mb-2 transition-colors ${config.hoverText}`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1 mb-5">
          {project.shortDescription}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-4 p-3 rounded-lg bg-muted/40 border border-border/50">
          {Object.entries(project.metrics).slice(0, 3).map(([key, value]) => (
            <div key={key} className="text-center">
              <p className="text-sm font-semibold text-foreground truncate">{value}</p>
              <p className="text-[10px] text-muted-foreground font-mono truncate">{key}</p>
            </div>
          ))}
        </div>

        {/* Footer tags */}
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline" className="text-[11px] border-border/80">
            {domainLabels[project.domain]}
          </Badge>
          <Badge variant="outline" className="text-[11px] border-border/80">
            {taskLabels[project.task]}
          </Badge>
          <div className="flex flex-wrap gap-1.5 ml-auto">
            {project.tools.slice(0, 2).map((tool) => (
              <span key={tool} className="text-[10px] text-muted-foreground font-mono">
                {tool}
              </span>
            ))}
            {project.tools.length > 2 && (
              <span className="text-[10px] text-muted-foreground">+{project.tools.length - 2}</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
