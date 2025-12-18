import { Server, Zap, Clock, TrendingUp } from "lucide-react";
import type { PerformanceMetrics } from "@/types";

interface AdditionalMetricsProps {
  metrics: PerformanceMetrics;
}

export default function AdditionalMetrics({ metrics }: AdditionalMetricsProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Additional Performance Metrics
      </h3>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="text-center p-4 bg-gray-50 rounded-xl">
          <Server className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">
            {(metrics.ttfb / 1000).toFixed(2)}s
          </div>
          <div className="text-xs text-gray-600 mt-1">
            Server Response (TTFB)
          </div>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-xl">
          <Zap className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">
            {(metrics.tbt / 1000).toFixed(2)}s
          </div>
          <div className="text-xs text-gray-600 mt-1">
            Total Blocking Time
          </div>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-xl">
          <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">
            {(metrics.speedIndex / 1000).toFixed(1)}s
          </div>
          <div className="text-xs text-gray-600 mt-1">Speed Index</div>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-xl">
          <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">
            {metrics.resourceCount}
          </div>
          <div className="text-xs text-gray-600 mt-1">
            Total Requests
          </div>
        </div>
      </div>
    </div>
  );
}

