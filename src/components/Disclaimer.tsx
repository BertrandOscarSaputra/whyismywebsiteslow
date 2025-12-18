import { Info } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
        <div className="text-sm text-gray-600">
          <p className="font-semibold text-gray-700 mb-2">
            About This Analysis
          </p>
          <p>
            This tool uses Google PageSpeed Insights API with real Lighthouse
            data tested on mobile devices with slow 4G throttling. Results
            represent real-world performance your users experience. Scores may
            vary slightly between tests due to network conditions. All analysis
            happens through Google&apos;s infrastructure - we don&apos;t store
            your data.
          </p>
        </div>
      </div>
    </div>
  );
}

