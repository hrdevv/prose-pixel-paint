import { AnchorStatus, ConfidenceLevel, ReviewStatus, ClaimType } from "@/lib/mock-data";
import { CheckCircle2, AlertTriangle, XCircle, HelpCircle, Hand, ShieldCheck } from "lucide-react";

const base = "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs font-medium border";

export function AnchorBadge({ status }: { status: AnchorStatus }) {
  const map: Record<AnchorStatus, { label: string; cls: string; Icon: typeof CheckCircle2 }> = {
    verified: { label: "Verified Anchor", cls: "bg-success/10 text-success border-success/30", Icon: ShieldCheck },
    manual: { label: "Manually Confirmed", cls: "bg-success/10 text-success border-success/30", Icon: Hand },
    suggested: { label: "Suggested Anchor", cls: "bg-warning/15 text-warning-foreground border-warning/40", Icon: HelpCircle },
    failed: { label: "Failed Anchor", cls: "bg-destructive/10 text-destructive border-destructive/30", Icon: XCircle },
    none: { label: "No Anchor", cls: "bg-destructive/10 text-destructive border-destructive/30", Icon: AlertTriangle },
  };
  const { label, cls, Icon } = map[status];
  return <span className={`${base} ${cls}`}><Icon className="size-3" />{label}</span>;
}

export function ConfidenceBadge({ level }: { level: ConfidenceLevel }) {
  const map: Record<ConfidenceLevel, string> = {
    high: "bg-info/10 text-info border-info/30",
    medium: "bg-warning/15 text-warning-foreground border-warning/40",
    low: "bg-muted text-muted-foreground border-border",
    unsupported: "bg-destructive/10 text-destructive border-destructive/30",
  };
  const label = level === "unsupported" ? "Unsupported" : `${level[0].toUpperCase()}${level.slice(1)} confidence`;
  return <span className={`${base} ${map[level]}`}>{label}</span>;
}

export function ReviewBadge({ status }: { status: ReviewStatus }) {
  const map: Record<ReviewStatus, { label: string; cls: string }> = {
    pending: { label: "Pending review", cls: "bg-muted text-muted-foreground border-border" },
    approved: { label: "Approved", cls: "bg-success/10 text-success border-success/30" },
    rejected: { label: "Rejected", cls: "bg-destructive/10 text-destructive border-destructive/30" },
    uncertain: { label: "Marked uncertain", cls: "bg-warning/15 text-warning-foreground border-warning/40" },
    needs_more_evidence: { label: "Needs more evidence", cls: "bg-warning/15 text-warning-foreground border-warning/40" },
  };
  return <span className={`${base} ${map[status].cls}`}>{map[status].label}</span>;
}

export function ClaimTypeBadge({ type }: { type: ClaimType }) {
  const label = {
    key_statement: "Evidence-linked statement",
    inconsistency_candidate: "Possible inconsistency candidate",
    unsupported_inference: "Unsupported inference",
    follow_up: "Follow-up question",
  }[type];
  return <span className={`${base} bg-secondary text-secondary-foreground border-border`}>{label}</span>;
}

export function AIDraftBadge() {
  return <span className={`${base} bg-primary/10 text-primary border-primary/20`}>AI-assisted draft · Human review required</span>;
}
