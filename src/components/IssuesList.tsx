import { AlertCircle, HelpCircle, CheckCircle2, ChevronRight, Target } from "lucide-react";
import type { Issue } from "@/types";

interface IssuesListProps {
  issues: Issue[];
}

export default function IssuesList({ issues }: IssuesListProps) {
  if (issues.length === 0) return null;

  return (
    <div className="bg-card rounded-3xl shadow-xl shadow-primary/5 p-8 border border-border">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-red-500/10 rounded-2xl">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          <div>
            <h2 className="text-3xl font-display font-black text-foreground">
              Critical Findings
            </h2>
            <p className="text-secondary font-medium mt-1">
              Prioritized by impact on conversions and SEO
            </p>
          </div>
        </div>
        <div className="px-4 py-2 bg-background border border-border rounded-xl text-sm font-bold text-secondary flex items-center gap-2 self-start md:self-center">
          <Target className="w-4 h-4 text-primary" />
          <span>{issues.length} Issues Detected</span>
        </div>
      </div>

      <div className="space-y-8">
        {issues.map((issue, i) => (
          <div
            key={i}
            className="group relative bg-background rounded-3xl border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5"
          >
            {/* Header / Title Section */}
            <div className={`p-6 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4 ${
              issue.severity === "critical" ? "bg-red-500/[0.02]" : 
              issue.severity === "warning" ? "bg-amber-500/[0.02]" : "bg-blue-500/[0.02]"
            }`}>
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-xl shadow-sm ${
                  issue.severity === "critical" ? "bg-red-100 text-red-600" : 
                  issue.severity === "warning" ? "bg-amber-100 text-amber-600" : "bg-blue-100 text-blue-600"
                }`}>
                  {issue.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {issue.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${
                      issue.severity === "critical" ? "bg-red-600 text-white" : 
                      issue.severity === "warning" ? "bg-amber-500 text-white" : "bg-blue-600 text-white"
                    }`}>
                      {issue.severity}
                    </span>
                    <span className="text-xs font-semibold text-secondary flex items-center gap-1">
                      <ChevronRight className="w-3 h-3" />
                      {issue.impact}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <section>
                  <label className="flex items-center gap-2 text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    Current Problem
                  </label>
                  <div className="p-4 bg-red-500/[0.03] border border-red-500/10 rounded-2xl">
                    <p className="text-foreground/80 leading-relaxed font-medium">
                      {issue.problem}
                    </p>
                  </div>
                </section>

                <section>
                  <label className="flex items-center gap-2 text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
                    <HelpCircle className="w-4 h-4 text-amber-500" />
                    Why this matters
                  </label>
                  <p className="text-secondary leading-relaxed pl-6 border-l-2 border-border italic">
                    {issue.why}
                  </p>
                </section>
              </div>

              <div className="space-y-6">
                <section className="h-full flex flex-col">
                  <label className="flex items-center gap-2 text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Resolution Steps
                  </label>
                  <div className="flex-1 p-6 bg-emerald-500/[0.04] border-2 border-emerald-500/20 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                      <CheckCircle2 className="w-24 h-24 text-emerald-600" />
                    </div>
                    <div className="relative z-10">
                      <p className="text-emerald-900 font-bold mb-4">Detailed Fix Instructions:</p>
                      <p className="text-emerald-800 leading-relaxed font-medium">
                        {issue.fix}
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

