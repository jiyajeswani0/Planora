import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const activities = [
  { user: "Sarah K.", initials: "SK", action: "completed task", target: "Design System Updates", time: "2 min ago", color: "bg-success/10 text-success" },
  { user: "Mike R.", initials: "MR", action: "commented on", target: "API Integration", time: "15 min ago", color: "bg-info/10 text-info" },
  { user: "Emily C.", initials: "EC", action: "moved task to Review", target: "Auth Module", time: "1 hr ago", color: "bg-warning/10 text-warning" },
  { user: "Alex T.", initials: "AT", action: "created project", target: "Mobile App v2", time: "2 hrs ago", color: "bg-primary/10 text-primary" },
  { user: "Jane D.", initials: "JD", action: "assigned task to Mike", target: "Database Migration", time: "3 hrs ago", color: "bg-primary/10 text-primary" },
];

export function ActivityFeed() {
  return (
    <div className="rounded-lg border border-border bg-card card-shadow animate-fade-in">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <h3 className="text-sm font-semibold text-card-foreground">Recent Activity</h3>
        <button className="text-xs font-medium text-primary hover:underline">View all</button>
      </div>
      <div className="divide-y divide-border">
        {activities.map((a, i) => (
          <div key={i} className="flex items-start gap-3 px-5 py-3.5">
            <Avatar className="h-7 w-7 mt-0.5">
              <AvatarFallback className={`text-[10px] font-medium ${a.color}`}>
                {a.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-card-foreground">
                <span className="font-medium">{a.user}</span>{" "}
                <span className="text-muted-foreground">{a.action}</span>{" "}
                <span className="font-medium">{a.target}</span>
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{a.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
