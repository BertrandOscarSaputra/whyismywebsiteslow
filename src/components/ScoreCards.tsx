import { getScoreLabel } from "@/lib/utils";
import type { AnalysisResult } from "@/types";
import { Gauge, Zap, Info } from "lucide-react";

interface ScoreCardsProps {
  result: AnalysisResult;
}

export default function ScoreCards({ result }: ScoreCardsProps) {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Lighthouse Score Card */}
      <div className="lg:col-span-2 bg-card rounded-3xl shadow-xl shadow-primary/5 p-8 border border-border overflow-hidden relative">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <Gauge className="w-32 h-32" />
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative flex-shrink-0">
            <svg className="w-48 h-48 transform -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                className="text-border"
              />
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                strokeDasharray={552.92}
                strokeDashoffset={552.92 * (1 - result.performanceScore / 100)}
                strokeLinecap="round"
                className={`transition-all duration-1000 ease-out ${
                  result.performanceScore >= 90 ? "text-green-500" : 
                  result.performanceScore >= 50 ? "text-yellow-500" : "text-red-500"
                }`}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-display font-black text-foreground">
                {result.performanceScore}
              </span>
              <span className="text-sm font-bold text-secondary uppercase tracking-wider">
                Score
              </span>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">
              Performance Index
            </h3>
            <p className="text-secondary leading-relaxed mb-4">
              This score summarizes how your page performs across multiple audits including speed, accessibility, and best practices.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <span className={`px-4 py-1.5 rounded-full text-sm font-bold border ${
                result.performanceScore >= 90 ? "bg-green-50 text-green-700 border-green-200" : 
                result.performanceScore >= 50 ? "bg-yellow-50 text-yellow-700 border-yellow-200" : "bg-red-50 text-red-700 border-red-200"
              }`}>
                {getScoreLabel(result.performanceScore)}
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-background text-secondary border border-border flex items-center gap-2">
                <Info className="w-4 h-4" />
                Lighthouse v12
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Speed Experience Card */}
      <div className="bg-primary rounded-3xl shadow-xl shadow-primary/20 p-8 text-white relative overflow-hidden">
        <div className="absolute -bottom-6 -right-6 text-white/10 rotate-12 pointer-events-none">
          <Zap className="w-48 h-48" />
        </div>
        
        <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
          <Zap className="w-5 h-5" />
          User Experience
        </h3>
        
        <div className="mb-6">
          <div className="text-6xl font-display font-black mb-1">
            {result.score}
          </div>
          <div className="text-primary-100 font-medium text-sm">
            Experience Score (%)
          </div>
        </div>

        <p className="text-primary-50 text-sm leading-relaxed mb-8 relative z-10">
          {result.score >= 80
            ? "Your website provides a seamless experience. Users are unlikely to bounce due to speed issues."
            : result.score >= 60
            ? "There's noticeable lag in the user journey. Optimizing this could directly improve conversion rates."
            : "Significant performance bottlenecks are hurting your user retention. Immediate action is recommended."}
        </p>

        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 relative z-10">
          <div className="text-xs font-bold text-primary-100 uppercase tracking-widest mb-2">
            Key Takeaway
          </div>
          <p className="text-sm font-medium">
            {result.score >= 80
              ? "Keep maintaining these standards to stay ahead of competition."
              : result.score >= 60
              ? "Focus on 'Quick Wins' below to reach the 80+ elite category."
              : "Prioritize the critical issues to fix the user experience first."}
          </p>
        </div>
      </div>
    </div>
  );
}

