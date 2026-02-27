import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
}

export function StatCard({ title, value, change, changeType, icon: Icon }: StatCardProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-5 card-shadow animate-fade-in">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">{title}</span>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/8">
          <Icon className="h-4 w-4 text-primary" />
        </div>
      </div>
      <div className="mt-3">
        <span className="text-2xl font-semibold text-card-foreground">{value}</span>
        <span
          className={`ml-2 text-xs font-medium ${
            changeType === "positive"
              ? "text-success"
              : changeType === "negative"
              ? "text-destructive"
              : "text-muted-foreground"
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  );
}
