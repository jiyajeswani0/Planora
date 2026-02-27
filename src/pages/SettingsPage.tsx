import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const SettingsPage = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-xl font-semibold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your workspace preferences</p>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 card-shadow space-y-6">
        <div>
          <h3 className="text-sm font-semibold text-card-foreground">Workspace</h3>
          <p className="text-xs text-muted-foreground mt-1">Update your workspace information</p>
        </div>
        <Separator />
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label className="text-sm">Workspace Name</Label>
            <Input defaultValue="Projex Team" className="h-9" />
          </div>
          <div className="grid gap-2">
            <Label className="text-sm">Workspace URL</Label>
            <Input defaultValue="projex-team" className="h-9" />
          </div>
        </div>
        <div className="flex justify-end">
          <Button size="sm" className="h-8 text-xs">Save Changes</Button>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 card-shadow space-y-6">
        <div>
          <h3 className="text-sm font-semibold text-card-foreground">Notifications</h3>
          <p className="text-xs text-muted-foreground mt-1">Configure how you receive notifications</p>
        </div>
        <Separator />
        <div className="space-y-3">
          {["Email notifications", "Push notifications", "Weekly digest"].map((label) => (
            <label key={label} className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-card-foreground">{label}</span>
              <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-border text-primary focus:ring-primary/30" />
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-destructive/20 bg-card p-6 card-shadow space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-destructive">Danger Zone</h3>
          <p className="text-xs text-muted-foreground mt-1">Irreversible and destructive actions</p>
        </div>
        <Button variant="destructive" size="sm" className="h-8 text-xs">Delete Workspace</Button>
      </div>
    </div>
  );
};

export default SettingsPage;
