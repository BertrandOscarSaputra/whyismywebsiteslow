import { Info, CheckSquare, RefreshCw, Layers, Trophy } from "lucide-react";

export default function ActionPlan() {
  const steps = [
    {
      icon: <CheckSquare className="w-5 h-5" />,
      title: "Identify & Prioritize",
      description: "Focus on the first 'Critical' issue in the report. These high-impact tasks offer the best return on investment for your optimization time."
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Isolated Implementation",
      description: "Apply one major fix at a time (e.g., optimizing images or deferring JS). This allows you to measure the exact impact of each change."
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Verify Metrics",
      description: "Re-run this performance analysis after each deployment. Watch your Core Web Vitals improve and confirm the fix didn't impact other metrics."
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "The 80/20 Goal",
      description: "Don't chase a perfect 100. Reaching the green zone (90+) is excellent, but an 80+ score already puts you ahead of 70% of the web."
    }
  ];

  return (
    <div className="bg-primary rounded-3xl shadow-2xl shadow-primary/20 p-8 md:p-12 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
        <CheckSquare className="w-64 h-64" />
      </div>

      <div className="relative z-10">
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl font-display font-black mb-4">Optimization Roadmap</h2>
          <p className="text-primary-100 text-lg font-medium">
            Follow this professional framework to transform your website performance and boost user retention.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white text-primary rounded-xl flex items-center justify-center font-bold shadow-lg">
                  {i + 1}
                </div>
                <h3 className="text-xl font-display font-bold">{step.title}</h3>
              </div>
              <p className="text-primary-50 text-sm leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="text-sm text-primary-100 flex items-center gap-3 font-medium">
              <Info className="w-5 h-5 text-white" />
              <span>Core Web Vitals directly influence your Search Engine Results Page (SERP) rankings.</span>
            </p>
            <button className="px-6 py-3 bg-white text-primary font-bold rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95 text-sm uppercase tracking-wider">
              Download as PDF Guide (Coming Soon)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

