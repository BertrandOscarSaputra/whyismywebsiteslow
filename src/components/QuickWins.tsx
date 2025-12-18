import { Zap } from "lucide-react";

interface QuickWinsProps {
  recommendations: string[];
}

export default function QuickWins({ recommendations }: QuickWinsProps) {
  if (recommendations.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 border-2 border-purple-200">
      <div className="flex items-center gap-3 mb-6">
        <Zap className="w-8 h-8 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-900">Quick Wins 🚀</h2>
      </div>
      <p className="text-gray-700 mb-4">
        Easy optimizations that can make a big difference:
      </p>
      <div className="space-y-3">
        {recommendations.map((rec, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-4 bg-white rounded-lg border border-purple-200"
          >
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-purple-600 font-bold">{i + 1}</span>
            </div>
            <span className="text-gray-700 font-medium">{rec}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

