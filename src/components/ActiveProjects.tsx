import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const projects = [
  { name: "Website Redesign", progress: 72, status: "On Track", members: ["SK", "MR", "EC"], dueDate: "Mar 15" },
  { name: "Mobile App v2", progress: 45, status: "At Risk", members: ["AT", "JD"], dueDate: "Apr 2" },
  { name: "API Integration", progress: 88, status: "On Track", members: ["MR", "SK", "AT"], dueDate: "Mar 8" },
  { name: "Analytics Dashboard", progress: 30, status: "Behind", members: ["EC", "JD"], dueDate: "Apr 20" },
];

function statusVariant(status: string) {
  if (status === "On Track") return "bg-success/10 text-success border-success/20";
  if (status === "At Risk") return "bg-warning/10 text-warning border-warning/20";
  return "bg-destructive/10 text-destructive border-destructive/20";
}

export function ActiveProjects() {
  return (
    <div className="rounded-lg border border-border bg-card card-shadow animate-fade-in">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <h3 className="text-sm font-semibold text-card-foreground">Active Projects</h3>
        <button className="text-xs font-medium text-primary hover:underline">View all</button>
      </div>
      <div className="divide-y divide-border">
        {projects.map((p, i) => (
          <div key={i} className="px-5 py-4 hover:bg-muted/30 transition-colors cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="text-sm font-medium text-card-foreground">{p.name}</h4>
                <span className="text-xs text-muted-foreground">Due {p.dueDate}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  {p.members.map((m) => (
                    <Avatar key={m} className="h-6 w-6 border-2 border-card">
                      <AvatarFallback className="bg-primary/10 text-primary text-[9px] font-medium">
                        {m}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <Badge variant="outline" className={`text-[10px] px-2 py-0.5 font-medium ${statusVariant(p.status)}`}>
                  {p.status}
                </Badge>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Progress value={p.progress} className="h-1.5 flex-1" />
              <span className="text-xs font-medium text-muted-foreground w-8 text-right">{p.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
