import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { AlertTriangle } from "lucide-react";

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <div className="bg-warning/15 border-b border-warning/30 px-6 py-2 text-xs flex items-center gap-2 text-warning-foreground">
          <AlertTriangle className="size-3.5" />
          <span><strong>Demo AI Mode</strong> · This is a prototype. No real backend, no real evidence storage, no production AI is connected.</span>
        </div>
        <main className="flex-1 px-6 md:px-10 py-8 max-w-[1400px] w-full mx-auto">{children}</main>
      </div>
    </div>
  );
}

export function PageHeader({ eyebrow, title, description, actions }: { eyebrow?: string; title: string; description?: string; actions?: ReactNode }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        {eyebrow && <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2">{eyebrow}</div>}
        <h1 className="font-serif text-3xl text-foreground">{title}</h1>
        {description && <p className="text-sm text-muted-foreground mt-2 max-w-2xl">{description}</p>}
      </div>
      {actions && <div className="flex gap-2">{actions}</div>}
    </div>
  );
}
