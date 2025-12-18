import { CheckCircle } from "lucide-react";

interface StrengthsProps {
  strengths: string[];
}

export default function Strengths({ strengths }: StrengthsProps) {
  if (strengths.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-8 border-2 border-green-200">
      <div className="flex items-center gap-3 mb-6">
        <CheckCircle className="w-8 h-8 text-green-600" />
        <h2 className="text-2xl font-bold text-gray-900">
          What&apos;s Working Well ✨
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {strengths.map((strength, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-4 bg-white rounded-lg"
          >
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{strength}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

