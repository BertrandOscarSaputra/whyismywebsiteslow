import { getScoreColor, getScoreLabel } from "@/lib/utils";
import type { AnalysisResult } from "@/types";

interface ScoreCardsProps {
  result: AnalysisResult;
}

export default function ScoreCards({ result }: ScoreCardsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Main Score Card */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="text-center">
          <div className="mb-4">
            <div
              className={`text-7xl font-black bg-gradient-to-br ${getScoreColor(
                result.performanceScore
              )} bg-clip-text text-transparent mb-2`}
            >
              {result.performanceScore}
            </div>
            <div className="text-xl font-semibold text-gray-700">
              {getScoreLabel(result.performanceScore)}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Google Lighthouse Score
            </p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${getScoreColor(
                result.performanceScore
              )} transition-all duration-1000`}
              style={{ width: `${result.performanceScore}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Simplified Score Card */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Speed Feeling Score</h3>
        <div className="text-6xl font-black mb-3">{result.score}</div>
        <p className="text-blue-100 mb-4">
          This is how fast your website feels to real users, explained
          in simple terms.
        </p>
        <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-sm">
          <p className="text-blue-50">
            {result.score >= 80
              ? "🎉 Your site feels fast to users!"
              : result.score >= 60
              ? "⚡ Room for improvement detected"
              : "🐌 Users likely find your site slow"}
          </p>
        </div>
      </div>
    </div>
  );
}

