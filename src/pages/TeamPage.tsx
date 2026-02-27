import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Mail } from "lucide-react";

const members = [
  { name: "Jane Doe", initials: "JD", role: "Admin", email: "jane@projex.io", tasks: 8, projects: 4, status: "Online" },
  { name: "Sarah Kim", initials: "SK", role: "Designer", email: "sarah@projex.io", tasks: 12, projects: 3, status: "Online" },
  { name: "Mike Roberts", initials: "MR", role: "Developer", email: "mike@projex.io", tasks: 10, projects: 5, status: "Away" },
  { name: "Emily Chen", initials: "EC", role: "Developer", email: "emily@projex.io", tasks: 6, projects: 2, status: "Online" },
  { name: "Alex Torres", initials: "AT", role: "DevOps", email: "alex@projex.io", tasks: 9, projects: 3, status: "Offline" },
];

function statusDot(s: string) {
  if (s === "Online") return "bg-success";
  if (s === "Away") return "bg-warning";
  return "bg-muted-foreground/40";
}

const TeamPage = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-foreground">Team</h1>
          <p className="text-sm text-muted-foreground mt-1">{members.length} members</p>
        </div>
        <Button size="sm" className="h-8 gap-1.5 text-xs font-medium">
          <Plus className="h-3.5 w-3.5" />
          Invite Member
        </Button>
      </div>

      <div className="rounded-lg border border-border bg-card card-shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Member</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Role</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Tasks</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Projects</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Status</th>
              <th className="text-right text-xs font-medium text-muted-foreground px-5 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {members.map((m) => (
              <tr key={m.name} className="hover:bg-muted/20 transition-colors animate-fade-in">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/10 text-primary text-xs font-medium">
                          {m.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-card ${statusDot(m.status)}`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-card-foreground">{m.name}</p>
                      <p className="text-xs text-muted-foreground">{m.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5">
                  <Badge variant="outline" className="text-xs font-normal">{m.role}</Badge>
                </td>
                <td className="px-5 py-3.5 text-sm text-card-foreground">{m.tasks}</td>
                <td className="px-5 py-3.5 text-sm text-card-foreground">{m.projects}</td>
                <td className="px-5 py-3.5">
                  <span className="text-xs text-muted-foreground">{m.status}</span>
                </td>
                <td className="px-5 py-3.5 text-right">
                  <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground">
                    <Mail className="h-3.5 w-3.5" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamPage;
