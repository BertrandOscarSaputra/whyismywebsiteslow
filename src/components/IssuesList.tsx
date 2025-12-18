import { AlertCircle } from "lucide-react";
import type { Issue } from "@/types";

interface IssuesListProps {
  issues: Issue[];
}

export default function IssuesList({ issues }: IssuesListProps) {
  if (issues.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-red-100 rounded-lg">
          <AlertCircle className="w-6 h-6 text-red-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Issues to Fix
          </h2>
          <p className="text-sm text-gray-600">
            Prioritized by impact - start with the first one
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {issues.map((issue, i) => (
          <div
            key={i}
            className={`border-l-4 ${
              issue.severity === "critical"
                ? "border-red-500 bg-red-50"
                : issue.severity === "warning"
                ? "border-yellow-500 bg-yellow-50"
                : "border-blue-500 bg-blue-50"
            } rounded-r-xl p-6`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div
                className={`p-3 rounded-lg ${
                  issue.severity === "critical"
                    ? "bg-red-100 text-red-600"
                    : issue.severity === "warning"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                {issue.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {issue.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      issue.severity === "critical"
                        ? "bg-red-200 text-red-800"
                        : issue.severity === "warning"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-blue-200 text-blue-800"
                    }`}
                  >
                    {issue.impact}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 ml-16">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-2 mb-2">
                  <span className="font-semibold text-red-600">❌</span>
                  <div>
                    <span className="font-semibold text-gray-900">
                      Problem:
                    </span>
                    <p className="text-gray-700 mt-1">{issue.problem}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-2 mb-2">
                  <span className="font-semibold text-yellow-600">🤔</span>
                  <div>
                    <span className="font-semibold text-gray-900">
                      Why it matters:
                    </span>
                    <p className="text-gray-700 mt-1">{issue.why}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                <div className="flex items-start gap-2 mb-2">
                  <span className="font-semibold text-green-600">✅</span>
                  <div>
                    <span className="font-semibold text-gray-900">
                      How to fix:
                    </span>
                    <p className="text-gray-700 mt-1">{issue.fix}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

