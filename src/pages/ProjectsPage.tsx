import { Plus, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const projects = [
  { name: "Website Redesign", description: "Complete overhaul of the company website", progress: 72, status: "On Track", members: ["SK", "MR", "EC", "AT"], tasks: 24, completed: 17 },
  { name: "Mobile App v2", description: "Second version with new features and UI", progress: 45, status: "At Risk", members: ["AT", "JD"], tasks: 18, completed: 8 },
  { name: "API Integration", description: "Third-party API integrations for payments", progress: 88, status: "On Track", members: ["MR", "SK", "AT"], tasks: 12, completed: 10 },
  { name: "Analytics Dashboard", description: "Real-time analytics and reporting tools", progress: 30, status: "Behind", members: ["EC", "JD"], tasks: 20, completed: 6 },
  { name: "Design System", description: "Unified component library and guidelines", progress: 95, status: "On Track", members: ["SK", "EC"], tasks: 15, completed: 14 },
  { name: "Infrastructure Migration", description: "Cloud infrastructure modernization", progress: 60, status: "On Track", members: ["AT", "MR", "JD"], tasks: 30, completed: 18 },
];

function statusClass(s: string) {
  if (s === "On Track") return "bg-success/10 text-success border-success/20";
  if (s === "At Risk") return "bg-warning/10 text-warning border-warning/20";
  return "bg-destructive/10 text-destructive border-destructive/20";
}

const ProjectsPage = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-foreground">Projects</h1>
          <p className="text-sm text-muted-foreground mt-1">{projects.length} active projects</p>
        </div>
        <Button size="sm" className="h-8 gap-1.5 text-xs font-medium">
          <Plus className="h-3.5 w-3.5" />
          New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((p) => (
          <div
            key={p.name}
            className="rounded-lg border border-border bg-card p-5 card-shadow hover:card-shadow-hover transition-shadow cursor-pointer animate-fade-in"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-sm font-semibold text-card-foreground">{p.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{p.description}</p>
              </div>
              <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground shrink-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className={`text-[10px] px-2 py-0.5 font-medium ${statusClass(p.status)}`}>
                {p.status}
              </Badge>
              <span className="text-xs text-muted-foreground">
                {p.completed}/{p.tasks} tasks
              </span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <Progress value={p.progress} className="h-1.5 flex-1" />
              <span className="text-xs font-medium text-muted-foreground">{p.progress}%</span>
            </div>

            <div className="flex -space-x-1.5">
              {p.members.map((m) => (
                <Avatar key={m} className="h-6 w-6 border-2 border-card">
                  <AvatarFallback className="bg-primary/10 text-primary text-[9px] font-medium">
                    {m}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
