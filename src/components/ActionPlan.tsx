import { Info } from "lucide-react";

export default function ActionPlan() {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white">
      <h2 className="text-3xl font-bold mb-4">Your Action Plan 📋</h2>
      <div className="space-y-4">
        <div className="bg-white/20 backdrop-blur rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-bold text-lg">Start with the First Issue</h3>
          </div>
          <p className="text-blue-100 ml-11">
            Focus on the top issue in the list above. It will give you the
            biggest performance improvement for your effort.
          </p>
        </div>
        <div className="bg-white/20 backdrop-blur rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-bold text-lg">Test After Each Fix</h3>
          </div>
          <p className="text-blue-100 ml-11">
            Come back and run this analysis again after making changes.
            You&apos;ll see your progress in real-time!
          </p>
        </div>
        <div className="bg-white/20 backdrop-blur rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-bold text-lg">
              Don&apos;t Try to Fix Everything
            </h3>
          </div>
          <p className="text-blue-100 ml-11">
            Fixing 1-2 major issues can improve your score by 20-30 points.
            Perfect is the enemy of good!
          </p>
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-white/20">
        <p className="text-sm text-blue-100 flex items-center gap-2">
          <Info className="w-4 h-4" />
          Pro tip: Core Web Vitals (LCP, CLS, FCP) directly affect your Google
          search rankings.
        </p>
      </div>
    </div>
  );
}

