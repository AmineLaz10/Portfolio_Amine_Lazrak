import { cn } from "@/lib/utils";
import type { ProjectType, Domain, Task } from "@/data/projects";
import { typeLabels, domainLabels, taskLabels } from "@/data/projects";

interface PortfolioFilterProps {
  selectedType: ProjectType | "all";
  selectedDomain: Domain | "all";
  selectedTask: Task | "all";
  onTypeChange: (type: ProjectType | "all") => void;
  onDomainChange: (domain: Domain | "all") => void;
  onTaskChange: (task: Task | "all") => void;
}

export function PortfolioFilter({
  selectedType,
  selectedDomain,
  selectedTask,
  onTypeChange,
  onDomainChange,
  onTaskChange,
}: PortfolioFilterProps) {
  const types: (ProjectType | "all")[] = ["all", "strategy", "program", "analytics"];
  const domains: (Domain | "all")[] = ["all", "banking", "compliance", "finance", "transformation", "data"];
  const tasks: (Task | "all")[] = ["all", "governance", "delivery", "analytics", "architecture", "adoption"];

  return (
    <div className="space-y-6">
      <FilterGroup
        label="Type"
        items={types}
        selected={selectedType}
        getLabel={(t) => (t === "all" ? "All" : typeLabels[t as ProjectType])}
        onChange={onTypeChange}
      />
      <FilterGroup
        label="Domain"
        items={domains}
        selected={selectedDomain}
        getLabel={(d) => (d === "all" ? "All" : domainLabels[d as Domain])}
        onChange={onDomainChange}
      />
      <FilterGroup
        label="Task"
        items={tasks}
        selected={selectedTask}
        getLabel={(t) => (t === "all" ? "All" : taskLabels[t as Task])}
        onChange={onTaskChange}
      />
    </div>
  );
}

function FilterGroup<T extends string>({
  label,
  items,
  selected,
  getLabel,
  onChange,
}: {
  label: string;
  items: T[];
  selected: T;
  getLabel: (item: T) => string;
  onChange: (item: T) => void;
}) {
  return (
    <div>
      <h4 className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-2.5">
        {label}
      </h4>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => onChange(item)}
            className={cn(
              "h-7 px-3 text-xs font-medium rounded-full transition-all duration-300",
              selected === item
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-secondary/40 text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
            )}
          >
            {getLabel(item)}
          </button>
        ))}
      </div>
    </div>
  );
}
