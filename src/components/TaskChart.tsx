import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Mon", completed: 8, inProgress: 5, todo: 3 },
  { name: "Tue", completed: 12, inProgress: 4, todo: 6 },
  { name: "Wed", completed: 6, inProgress: 8, todo: 4 },
  { name: "Thu", completed: 10, inProgress: 6, todo: 2 },
  { name: "Fri", completed: 14, inProgress: 3, todo: 5 },
  { name: "Sat", completed: 4, inProgress: 2, todo: 1 },
  { name: "Sun", completed: 2, inProgress: 1, todo: 3 },
];

export function TaskChart() {
  return (
    <div className="rounded-lg border border-border bg-card card-shadow animate-fade-in">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <h3 className="text-sm font-semibold text-card-foreground">Task Overview</h3>
        <span className="text-xs text-muted-foreground">This week</span>
      </div>
      <div className="p-5">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={data} barGap={2} barSize={14}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 14% 90%)" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(220 10% 46%)" }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(220 10% 46%)" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0 0% 100%)",
                border: "1px solid hsl(220 14% 90%)",
                borderRadius: "8px",
                fontSize: "12px",
                boxShadow: "0 4px 12px hsl(220 14% 12% / 0.08)",
              }}
            />
            <Bar dataKey="completed" fill="hsl(238 60% 55%)" radius={[3, 3, 0, 0]} />
            <Bar dataKey="inProgress" fill="hsl(200 80% 50%)" radius={[3, 3, 0, 0]} />
            <Bar dataKey="todo" fill="hsl(220 14% 88%)" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-center gap-6 mt-2">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-sm bg-primary" />
            <span className="text-xs text-muted-foreground">Completed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-sm bg-info" />
            <span className="text-xs text-muted-foreground">In Progress</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-sm bg-muted" />
            <span className="text-xs text-muted-foreground">To Do</span>
          </div>
        </div>
      </div>
    </div>
  );
}
