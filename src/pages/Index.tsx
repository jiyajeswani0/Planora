import { FolderKanban, CheckSquare, Clock, Users } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { ActivityFeed } from "@/components/ActivityFeed";
import { ActiveProjects } from "@/components/ActiveProjects";
import { TaskChart } from "@/components/TaskChart";

const stats = [
  { title: "Total Projects", value: "24", change: "+3 this month", changeType: "positive" as const, icon: FolderKanban },
  { title: "Tasks Completed", value: "148", change: "+12% vs last week", changeType: "positive" as const, icon: CheckSquare },
  { title: "Pending Tasks", value: "36", change: "5 overdue", changeType: "negative" as const, icon: Clock },
  { title: "Team Members", value: "12", change: "+2 this month", changeType: "neutral" as const, icon: Users },
];

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">Welcome back, Jane. Here's what's happening.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <StatCard key={s.title} {...s} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <ActiveProjects />
          <TaskChart />
        </div>
        <div className="lg:col-span-2">
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
