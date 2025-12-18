import { Info } from "lucide-react";

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
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
      <div className="max-w-3xl mx-auto">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Enter Website URL to Analyze
        </label>
        <div className="flex gap-3">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && onAnalyze()}
            placeholder="https://example.com"
            className="flex-1 px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg"
          />
          <button
            onClick={onAnalyze}
            disabled={loading}
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </div>
        {error && (
          <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
            <p className="text-red-800 text-sm font-medium">{error}</p>
          </div>
        )}
        <p className="mt-3 text-xs text-gray-500 flex items-center gap-2">
          <Info className="w-3 h-3" />
          Analysis typically takes 15-30 seconds. We test on mobile devices
          for real-world performance.
        </p>
      </div>
    </div>
  );
}

