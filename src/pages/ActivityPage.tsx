import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const activityItems = [
  { user: "Sarah K.", initials: "SK", action: "completed task", target: "Design System Updates", project: "Design System", time: "2 min ago", type: "task" },
  { user: "Mike R.", initials: "MR", action: "commented on", target: "API Integration", project: "API Integration", time: "15 min ago", type: "comment" },
  { user: "Emily C.", initials: "EC", action: "moved task to Review", target: "Auth Module", project: "Website Redesign", time: "1 hr ago", type: "move" },
  { user: "Alex T.", initials: "AT", action: "created project", target: "Mobile App v2", project: "Mobile App v2", time: "2 hrs ago", type: "create" },
  { user: "Jane D.", initials: "JD", action: "assigned task to Mike R.", target: "Database Migration", project: "Infrastructure", time: "3 hrs ago", type: "assign" },
  { user: "Sarah K.", initials: "SK", action: "uploaded file", target: "design-specs.pdf", project: "Design System", time: "4 hrs ago", type: "upload" },
  { user: "Mike R.", initials: "MR", action: "completed task", target: "Payment Gateway Setup", project: "API Integration", time: "5 hrs ago", type: "task" },
  { user: "Emily C.", initials: "EC", action: "created task", target: "User Testing Plan", project: "Mobile App v2", time: "6 hrs ago", type: "create" },
  { user: "Alex T.", initials: "AT", action: "updated status", target: "CI/CD Pipeline", project: "Infrastructure", time: "Yesterday", type: "move" },
  { user: "Jane D.", initials: "JD", action: "completed task", target: "Sprint Planning", project: "Website Redesign", time: "Yesterday", type: "task" },
];

function typeColor(type: string) {
  const map: Record<string, string> = {
    task: "bg-success/10 text-success",
    comment: "bg-info/10 text-info",
    move: "bg-warning/10 text-warning",
    create: "bg-primary/10 text-primary",
    assign: "bg-primary/10 text-primary",
    upload: "bg-info/10 text-info",
  };
  return map[type] || "bg-muted text-muted-foreground";
}

const ActivityPage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-foreground">Activity</h1>
          <p className="text-sm text-muted-foreground mt-1">Track all actions across your workspace</p>
        </div>
        <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs">
          <Filter className="h-3.5 w-3.5" />
          Filter
        </Button>
      </div>

      <div className="rounded-lg border border-border bg-card card-shadow">
        <div className="divide-y divide-border">
          {activityItems.map((item, i) => (
            <div key={i} className="flex items-start gap-4 px-5 py-4 hover:bg-muted/20 transition-colors animate-fade-in">
              <div className="relative mt-0.5">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className={`text-[10px] font-medium ${typeColor(item.type)}`}>
                    {item.initials}
                  </AvatarFallback>
                </Avatar>
                {i < activityItems.length - 1 && (
                  <div className="absolute left-1/2 top-full h-full w-px -translate-x-1/2 bg-border" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm text-card-foreground">
                  <span className="font-medium">{item.user}</span>{" "}
                  <span className="text-muted-foreground">{item.action}</span>{" "}
                  <span className="font-medium">{item.target}</span>
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="outline" className="text-[10px] px-1.5 py-0 font-normal text-muted-foreground border-border">
                    {item.project}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
