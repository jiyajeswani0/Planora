import { Plus, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface Task {
  id: string;
  title: string;
  priority: "High" | "Medium" | "Low";
  assignee: string;
  dueDate: string;
  project: string;
}

const initialColumns: Record<string, { label: string; color: string; tasks: Task[] }> = {
  todo: {
    label: "To Do",
    color: "bg-muted-foreground",
    tasks: [
      { id: "1", title: "Set up CI/CD pipeline", priority: "High", assignee: "AT", dueDate: "Mar 10", project: "Infrastructure" },
      { id: "2", title: "Write API documentation", priority: "Medium", assignee: "MR", dueDate: "Mar 12", project: "API Integration" },
      { id: "3", title: "Design onboarding flow", priority: "Low", assignee: "SK", dueDate: "Mar 15", project: "Mobile App v2" },
    ],
  },
  inProgress: {
    label: "In Progress",
    color: "bg-info",
    tasks: [
      { id: "4", title: "Implement auth module", priority: "High", assignee: "JD", dueDate: "Mar 8", project: "Website Redesign" },
      { id: "5", title: "Build notification system", priority: "Medium", assignee: "EC", dueDate: "Mar 11", project: "Mobile App v2" },
    ],
  },
  review: {
    label: "In Review",
    color: "bg-warning",
    tasks: [
      { id: "6", title: "Payment gateway integration", priority: "High", assignee: "MR", dueDate: "Mar 7", project: "API Integration" },
      { id: "7", title: "Dashboard charts component", priority: "Medium", assignee: "SK", dueDate: "Mar 9", project: "Analytics" },
    ],
  },
  done: {
    label: "Completed",
    color: "bg-success",
    tasks: [
      { id: "8", title: "User profile page", priority: "Low", assignee: "EC", dueDate: "Mar 5", project: "Website Redesign" },
      { id: "9", title: "Database schema design", priority: "High", assignee: "AT", dueDate: "Mar 3", project: "Infrastructure" },
    ],
  },
};

function priorityClass(p: string) {
  if (p === "High") return "bg-destructive/10 text-destructive border-destructive/20";
  if (p === "Medium") return "bg-warning/10 text-warning border-warning/20";
  return "bg-muted text-muted-foreground border-border";
}

const TasksPage = () => {
  const [columns] = useState(initialColumns);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  return (
    <div className="max-w-full mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-foreground">Tasks</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage and track all tasks across projects</p>
        </div>
        <Button size="sm" className="h-8 gap-1.5 text-xs font-medium">
          <Plus className="h-3.5 w-3.5" />
          Add Task
        </Button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {Object.entries(columns).map(([key, col]) => (
          <div key={key} className="min-w-[280px] w-[300px] shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <div className={`h-2 w-2 rounded-full ${col.color}`} />
              <h3 className="text-sm font-semibold text-foreground">{col.label}</h3>
              <span className="text-xs text-muted-foreground ml-auto">{col.tasks.length}</span>
            </div>

            <div className="space-y-2.5">
              {col.tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => setSelectedTask(task)}
                  className="group rounded-lg border border-border bg-card p-3.5 card-shadow hover:card-shadow-hover transition-all cursor-pointer animate-fade-in"
                >
                  <div className="flex items-start gap-2">
                    <GripVertical className="h-4 w-4 text-muted-foreground/40 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-card-foreground">{task.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{task.project}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className={`text-[10px] px-1.5 py-0 font-medium ${priorityClass(task.priority)}`}>
                            {task.priority}
                          </Badge>
                          <span className="text-[11px] text-muted-foreground">{task.dueDate}</span>
                        </div>
                        <Avatar className="h-5 w-5">
                          <AvatarFallback className="bg-primary/10 text-primary text-[8px] font-medium">
                            {task.assignee}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <button className="w-full rounded-lg border border-dashed border-border p-2.5 text-xs text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors">
                + Add task
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Task Detail Panel */}
      {selectedTask && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-foreground/20" onClick={() => setSelectedTask(null)} />
          <div className="relative w-full max-w-md bg-card border-l border-border shadow-xl animate-fade-in overflow-y-auto">
            <div className="p-6 space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-card-foreground">{selectedTask.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{selectedTask.project}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setSelectedTask(null)} className="text-muted-foreground">
                  ✕
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Priority</span>
                  <Badge variant="outline" className={`text-xs ${priorityClass(selectedTask.priority)}`}>
                    {selectedTask.priority}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Assignee</span>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-5 w-5">
                      <AvatarFallback className="bg-primary/10 text-primary text-[8px] font-medium">
                        {selectedTask.assignee}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-card-foreground">{selectedTask.assignee}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Due Date</span>
                  <span className="text-card-foreground">{selectedTask.dueDate}</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-card-foreground mb-2">Description</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This task needs to be completed as part of the {selectedTask.project} project. Review the requirements and ensure all acceptance criteria are met.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-card-foreground mb-3">Subtasks</h4>
                <div className="space-y-2">
                  {["Research and planning", "Implementation", "Code review", "Testing"].map((st, i) => (
                    <label key={i} className="flex items-center gap-2.5 text-sm cursor-pointer group">
                      <input
                        type="checkbox"
                        defaultChecked={i < 2}
                        className="h-4 w-4 rounded border-border text-primary focus:ring-primary/30"
                      />
                      <span className={`${i < 2 ? "line-through text-muted-foreground" : "text-card-foreground"}`}>
                        {st}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-card-foreground mb-3">Activity</h4>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Avatar className="h-6 w-6 mt-0.5">
                      <AvatarFallback className="bg-primary/10 text-primary text-[8px]">JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm text-card-foreground">
                        <span className="font-medium">Jane</span>{" "}
                        <span className="text-muted-foreground">assigned this task</span>
                      </p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TasksPage;
