import { Info } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Why Is My Website Slow?
            </h1>
            <p className="text-gray-600 mt-1">
              Professional website speed analysis in plain English
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
            <Info className="w-4 h-4" />
            <span>Powered by Google Lighthouse</span>
          </div>
        </div>
      </div>
    </header>
  );
}

