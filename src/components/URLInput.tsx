import { Search, Info, Globe } from "lucide-react";

interface URLInputProps {
  url: string;
  setUrl: (url: string) => void;
  onAnalyze: () => void;
  loading: boolean;
  error: string;
}

export default function URLInput({
  url,
  setUrl,
  onAnalyze,
  loading,
  error,
}: URLInputProps) {
  return (
    <div className="bg-card rounded-3xl shadow-2xl shadow-primary/5 p-6 md:p-10 mb-10 border border-border">
      <div className="max-w-3xl mx-auto">

        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Globe className="h-5 w-5 text-secondary group-focus-within:text-primary transition-colors" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && onAnalyze()}
              placeholder="e.g. example.com"
              className="block w-full pl-12 pr-4 py-4 bg-background border border-border rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-lg font-medium placeholder:text-secondary/50 outline-none"
            />
            <button
              onClick={onAnalyze}
              disabled={loading}
              className="sm:w-48 cursor-pointer px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 disabled:bg-secondary/30 transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2 group/btn"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Search className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                  <span>Analyze</span>
                </>
              )}
            </button>
          </div>
        </div>

        {error && (
          <div className="mt-6 p-4 bg-red-500/5 border border-red-500/20 rounded-2xl">
            <p className="text-red-600 text-sm font-semibold">{error}</p>
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-secondary font-medium">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-primary" />
            <span>Mobile-first testing</span>
          </div>
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-primary" />
            <span>Lighthouse v12 Analysis</span>
          </div>
        </div>
      </div>
    </div>
  );
}

