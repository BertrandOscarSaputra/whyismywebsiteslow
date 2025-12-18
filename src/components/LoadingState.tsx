import { Zap } from "lucide-react";

export default function LoadingState() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-12 text-center border border-gray-100">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-blue-600 mx-auto mb-6"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Zap className="w-6 h-6 text-blue-600 animate-pulse" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Analyzing Performance...
      </h3>
      <p className="text-gray-600">
        Running comprehensive speed tests on mobile network
      </p>
      <div className="mt-6 flex justify-center gap-2">
        <div
          className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
          style={{ animationDelay: "0ms" }}
        ></div>
        <div
          className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
          style={{ animationDelay: "150ms" }}
        ></div>
        <div
          className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
          style={{ animationDelay: "300ms" }}
        ></div>
      </div>
    </div>
  );
}

