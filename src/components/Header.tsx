import { Zap, Activity } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-xl">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-extrabold tracking-tight text-foreground">
                Why Is My Website <span className="text-primary underline decoration-primary/30 decoration-4 underline-offset-4">Slow?</span>
              </h1>
              <p className="text-secondary text-sm md:text-base font-medium">
                Performance Diagnostics & Action Plan
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-background border border-border rounded-full text-xs font-semibold text-secondary shadow-sm">
              <Activity className="w-3.5 h-3.5" />
              <span>Real-time Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

