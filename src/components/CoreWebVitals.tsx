import { TrendingUp } from "lucide-react";
import { getMetricStatus } from "@/lib/utils";
import type { PerformanceMetrics } from "@/types";

interface CoreWebVitalsProps {
  metrics: PerformanceMetrics;
}

export default function CoreWebVitals({ metrics }: CoreWebVitalsProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-100 rounded-lg">
          <TrendingUp className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Core Web Vitals
          </h2>
          <p className="text-sm text-gray-600">
            Key metrics that Google uses for ranking
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* LCP */}
        {(() => {
          const status = getMetricStatus(metrics.lcp, 2500, 4000);
          return (
            <div
              className={`${
                status.bg
              } rounded-xl p-6 border-2 ${status.color.replace(
                "text-",
                "border-"
              )}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-700">
                  Largest Contentful Paint
                </span>
                <div className={status.color}>{status.icon}</div>
              </div>
              <div className={`text-3xl font-bold ${status.color} mb-2`}>
                {(metrics.lcp / 1000).toFixed(2)}s
              </div>
              <p className="text-xs text-gray-600">
                Good: &lt;2.5s | Poor: &gt;4.0s
              </p>
            </div>
          );
        })()}

        {/* CLS */}
        {(() => {
          const status = getMetricStatus(metrics.cls, 0.1, 0.25);
          return (
            <div
              className={`${
                status.bg
              } rounded-xl p-6 border-2 ${status.color.replace(
                "text-",
                "border-"
              )}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-700">
                  Cumulative Layout Shift
                </span>
                <div className={status.color}>{status.icon}</div>
              </div>
              <div className={`text-3xl font-bold ${status.color} mb-2`}>
                {metrics.cls.toFixed(3)}
              </div>
              <p className="text-xs text-gray-600">
                Good: &lt;0.1 | Poor: &gt;0.25
              </p>
            </div>
          );
        })()}

        {/* FCP */}
        {(() => {
          const status = getMetricStatus(metrics.fcp, 1800, 3000);
          return (
            <div
              className={`${
                status.bg
              } rounded-xl p-6 border-2 ${status.color.replace(
                "text-",
                "border-"
              )}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-700">
                  First Contentful Paint
                </span>
                <div className={status.color}>{status.icon}</div>
              </div>
              <div className={`text-3xl font-bold ${status.color} mb-2`}>
                {(metrics.fcp / 1000).toFixed(2)}s
              </div>
              <p className="text-xs text-gray-600">
                Good: &lt;1.8s | Poor: &gt;3.0s
              </p>
            </div>
          );
        })()}
      </div>
    </div>
  );
}

