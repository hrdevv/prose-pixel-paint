import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, Briefcase, ClipboardList, FileCheck, Shield, Users, Scale } from "lucide-react";

const nav = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/cases", label: "Cases", icon: Briefcase },
  { to: "/review", label: "Review Queue", icon: ClipboardList },
  { to: "/reports", label: "Reports", icon: FileCheck },
  { to: "/team", label: "Team", icon: Users },
  { to: "/audit", label: "Audit", icon: Shield },
];

export function Sidebar() {
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside className="hidden md:flex w-64 shrink-0 flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      <div className="px-5 py-5 border-b border-sidebar-border flex items-center gap-2">
        <div className="size-9 rounded-md bg-sidebar-accent flex items-center justify-center">
          <Scale className="size-5" />
        </div>
        <div>
          <div className="font-serif text-base leading-tight">Courtroom</div>
          <div className="text-[11px] uppercase tracking-widest text-sidebar-foreground/60">Intelligence v1.2</div>
        </div>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {nav.map((n) => {
          const active = n.to === "/" ? path === "/" : path.startsWith(n.to);
          const Icon = n.icon;
          return (
            <Link
              key={n.to}
              to={n.to}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50"
              }`}
            >
              <Icon className="size-4" />
              {n.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-3 border-t border-sidebar-border text-[11px] text-sidebar-foreground/60">
        Demo Legal Practice · Prototype
      </div>
    </aside>
  );
}
