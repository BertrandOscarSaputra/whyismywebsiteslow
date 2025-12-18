"use client";

import { useState } from "react";
import Header from "@/components/Header";
import URLInput from "@/components/URLInput";
import LoadingState from "@/components/LoadingState";
import ScoreCards from "@/components/ScoreCards";
import CoreWebVitals from "@/components/CoreWebVitals";
import AdditionalMetrics from "@/components/AdditionalMetrics";
import Strengths from "@/components/Strengths";
import IssuesList from "@/components/IssuesList";
import QuickWins from "@/components/QuickWins";
import ActionPlan from "@/components/ActionPlan";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import { analyzeWebsite } from "@/lib/api";
import { analyzeMetrics } from "@/lib/utils";
import type { AnalysisResult } from "@/types";

export default function Page() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!url) {
      setError("Please enter a website URL");
      return;
    }

    let fullUrl = url.trim();
    if (!fullUrl.startsWith("http://") && !fullUrl.startsWith("https://")) {
      fullUrl = "https://" + fullUrl;
    }

    try {
      new URL(fullUrl);
    } catch {
      setError("Please enter a valid URL (e.g., example.com)");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const { metrics, audits, performanceScore } = await analyzeWebsite(
        fullUrl
      );
      const analysis = analyzeMetrics(metrics, audits, performanceScore);
      setResult(analysis);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unable to analyze this website.";
      setError(
        errorMessage +
          " The website may be down, unreachable, or blocking analysis."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <URLInput
          url={url}
          setUrl={setUrl}
          onAnalyze={handleAnalyze}
          loading={loading}
          error={error}
        />

        {loading && <LoadingState />}

        {result && (
          <div className="space-y-6">
            <ScoreCards result={result} />
            <CoreWebVitals metrics={result.metrics} />
            <AdditionalMetrics metrics={result.metrics} />
            <Strengths strengths={result.strengths} />
            <IssuesList issues={result.issues} />
            <QuickWins recommendations={result.recommendations} />
            <ActionPlan />
            <Disclaimer />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
