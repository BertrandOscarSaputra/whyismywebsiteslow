import { Activity, Info, BarChart3 } from "lucide-react";
import { getMetricStatus } from "@/lib/utils";
import type { PerformanceMetrics } from "@/types";

interface CoreWebVitalsProps {
  metrics: PerformanceMetrics;
}

const metricDetails = {
  lcp: {
    label: "Largest Contentful Paint",
    description: "Measures when the largest text or image is painted. Above-the-fold content completion.",
    impact: "High impact on user retention.",
    good: 2500,
    poor: 4000,
    unit: "s",
    divisor: 1000
  },
  cls: {
    label: "Cumulative Layout Shift",
    description: "Measures visual stability. Do elements jump around as the page loads?",
    impact: "Prevents accidental clicks.",
    good: 0.1,
    poor: 0.25,
    unit: "",
    divisor: 1
  },
  fcp: {
    label: "First Contentful Paint",
    description: "Measures when the first bits of content (text/image) appear on screen.",
    impact: "Affects perceived loading speed.",
    good: 1800,
    poor: 3000,
    unit: "s",
    divisor: 1000
  }
};

export default function CoreWebVitals({ metrics }: CoreWebVitalsProps) {
  return (
    <div className="bg-card rounded-3xl shadow-xl shadow-primary/5 p-8 border border-border">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-2xl">
            <Activity className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h2 className="text-3xl font-display font-black text-foreground">
              Core Web Vitals
            </h2>
            <p className="text-secondary font-medium">
              Google&apos;s primary metrics for page experience
            </p>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-xl text-xs font-bold text-secondary">
          <BarChart3 className="w-4 h-4 text-primary" />
          <span>Live Field Data Alternative</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {(Object.keys(metricDetails) as Array<keyof typeof metricDetails>).map((key) => {
          const detail = metricDetails[key];
          const value = metrics[key];
          const status = getMetricStatus(value, detail.good, detail.poor);
          const displayValue = (value / detail.divisor).toFixed(key === 'cls' ? 3 : 2);
          
          return (
            <div
              key={key}
              className={`relative overflow-hidden group bg-background rounded-3xl p-6 border-2 transition-all duration-300 hover:shadow-lg ${
                status.color === 'text-green-600' ? 'border-green-500/20 hover:border-green-500/40 bg-green-500/[0.02]' : 
                status.color === 'text-yellow-600' ? 'border-amber-500/20 hover:border-amber-500/40 bg-amber-500/[0.02]' : 
                'border-red-500/20 hover:border-red-500/40 bg-red-500/[0.02]'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                  {key.toUpperCase()}
                </span>
                <div className={status.color}>{status.icon}</div>
              </div>

              <div className="mb-4">
                <div className={`text-4xl font-display font-black ${status.color}`}>
                  {displayValue}{detail.unit}
                </div>
                <h3 className="text-sm font-bold text-foreground mt-1">
                  {detail.label}
                </h3>
              </div>

              <div className="space-y-4 pt-4 border-t border-border/50">
                <div className="text-xs leading-relaxed text-secondary font-medium">
                  {detail.description}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[10px] font-bold text-secondary/50 uppercase">Benchmark</span>
                  <span className="text-[10px] font-bold text-secondary">
                    Good: &lt;{detail.good / detail.divisor}{detail.unit}
                  </span>
                </div>
                <div className="w-full bg-border/30 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 ${
                      status.color === 'text-green-600' ? 'bg-green-500' : 
                      status.color === 'text-yellow-600' ? 'bg-amber-500' : 'bg-red-500'
                    }`}
                    style={{ 
                      width: `${Math.min(100, (value / (detail.poor * 1.5)) * 100)}%` 
                    }}
                  />
                </div>
              </div>
              
              {/* Detailed Explanation Tooltip-like area */}
              <div className="mt-4 pt-4 border-t border-border/50 flex items-start gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Info className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-[10px] text-secondary leading-tight italic">
                  {detail.impact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

