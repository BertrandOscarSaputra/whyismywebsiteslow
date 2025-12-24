import { Zap, Loader2 } from "lucide-react";

export default function LoadingState() {
  return (
    <div className="bg-card rounded-3xl shadow-2xl shadow-primary/5 p-16 text-center border border-border overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-background overflow-hidden">
        <div className="h-full bg-primary animate-progress origin-left"></div>
      </div>
      
      <div className="relative mb-8">
        <div className="flex items-center justify-center">
          <div className="relative">
            <Loader2 className="w-20 h-20 text-primary/20 animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Zap className="w-10 h-10 text-primary animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-display font-black text-foreground mb-3">
        Comprehensive Analysis in Progress
      </h3>
      <p className="text-secondary font-medium max-w-sm mx-auto leading-relaxed">
        We&apos;re currently simulating a mobile visitor on a 4G network to measure real-world performance.
      </p>

      <div className="mt-10 grid grid-cols-2 max-w-xs mx-auto gap-4">
        <div className="p-3 bg-background rounded-2xl border border-border flex flex-col items-center">
          <div className="w-2 h-2 rounded-full bg-primary animate-ping mb-2" />
          <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Network</span>
        </div>
        <div className="p-3 bg-background rounded-2xl border border-border flex flex-col items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mb-2" />
          <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Audit</span>
        </div>
      </div>
    </div>
  );
}

