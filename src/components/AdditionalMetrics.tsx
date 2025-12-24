import { Server, Zap, Clock, TrendingUp, HelpCircle } from "lucide-react";
import type { PerformanceMetrics } from "@/types";

interface AdditionalMetricsProps {
  metrics: PerformanceMetrics;
}

export default function AdditionalMetrics({ metrics }: AdditionalMetricsProps) {
  const items = [
    {
      label: "Server Response",
      sublabel: "TTFB",
      value: (metrics.ttfb / 1000).toFixed(2) + "s",
      icon: <Server className="w-5 h-5 text-blue-600" />,
      desc: "Time to First Byte. Measures server latency."
    },
    {
      label: "Interactivity",
      sublabel: "TBT",
      value: (metrics.tbt / 1000).toFixed(2) + "s",
      icon: <Zap className="w-5 h-5 text-amber-600" />,
      desc: "Total Blocking Time. Affects responsiveness."
    },
    {
      label: "Visual Speed",
      sublabel: "Speed Index",
      value: (metrics.speedIndex / 1000).toFixed(1) + "s",
      icon: <Clock className="w-5 h-5 text-purple-600" />,
      desc: "How quickly content fills the screen."
    },
    {
      label: "Network Load",
      sublabel: "Requests",
      value: metrics.resourceCount.toString(),
      icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
      desc: "Total number of network requests."
    }
  ];

  return (
    <div className="bg-card rounded-3xl shadow-xl shadow-primary/5 p-8 border border-border">
      <div className="flex items-center gap-2 mb-8">
        <h3 className="text-xl font-display font-bold text-foreground">
          Secondary Diagnostics
        </h3>
        <span className="px-2 py-0.5 bg-background border border-border rounded text-[10px] font-bold text-secondary uppercase tracking-tighter">Lab Data</span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div key={i} className="group p-5 bg-background rounded-2xl border border-border hover:border-primary/20 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-white rounded-xl shadow-sm border border-border group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <HelpCircle className="w-4 h-4 text-secondary/30" />
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="text-2xl font-display font-black text-foreground">
                {item.value}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-foreground/80">{item.label}</span>
                <span className="text-[10px] font-medium text-secondary">{item.sublabel}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border/50 hidden md:block">
              <p className="text-[10px] text-secondary leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

