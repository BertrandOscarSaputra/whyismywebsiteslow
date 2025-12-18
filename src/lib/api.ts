import type { PerformanceMetrics, Audits, AuditItem } from "@/types";

export async function analyzeWebsite(url: string): Promise<{
  metrics: PerformanceMetrics;
  audits: Audits;
  performanceScore: number;
}> {
  let fullUrl = url.trim();
  if (!fullUrl.startsWith("http://") && !fullUrl.startsWith("https://")) {
    fullUrl = "https://" + fullUrl;
  }

  const API_KEY = process.env.NEXT_PUBLIC_PAGESPEED_API_KEY || "";
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
    fullUrl
  )}&category=performance&strategy=mobile&key=${API_KEY}`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(
      "Failed to analyze website. Please check the URL and try again."
    );
  }

  const data = await response.json();
  const lighthouseResult = data.lighthouseResult;
  const audits = lighthouseResult.audits;
  const categories = lighthouseResult.categories;

  // Extract comprehensive metrics
  const metrics: PerformanceMetrics = {
    ttfb: audits["server-response-time"]?.numericValue || 0,
    fcp: audits["first-contentful-paint"]?.numericValue || 0,
    lcp: audits["largest-contentful-paint"]?.numericValue || 0,
    cls: audits["cumulative-layout-shift"]?.numericValue || 0,
    tbt: audits["total-blocking-time"]?.numericValue || 0,
    speedIndex: audits["speed-index"]?.numericValue || 0,
    domContentLoaded: audits["interactive"]?.numericValue || 0,
    loadTime: audits["interactive"]?.numericValue || 0,
    resourceCount: audits["network-requests"]?.details?.items?.length || 0,
    totalSize: (audits["total-byte-weight"]?.numericValue || 0) / 1024,
    imageCount:
      audits["uses-optimized-images"]?.details?.items?.length || 0,
    imageSize:
      (audits["uses-optimized-images"]?.details?.items?.reduce(
        (sum: number, item: AuditItem) => sum + (item.wastedBytes || 0),
        0
      ) || 0) / 1024,
    jsCount: audits["unused-javascript"]?.details?.items?.length || 0,
    jsSize:
      (audits["unused-javascript"]?.details?.items?.reduce(
        (sum: number, item: AuditItem) => sum + (item.wastedBytes || 0),
        0
      ) || 0) / 1024,
    cssCount: audits["unused-css-rules"]?.details?.items?.length || 0,
    cssSize:
      (audits["unused-css-rules"]?.details?.items?.reduce(
        (sum: number, item: AuditItem) => sum + (item.wastedBytes || 0),
        0
      ) || 0) / 1024,
  };

  const performanceScore = Math.round(
    (categories.performance?.score || 0) * 100
  );

  return { metrics, audits, performanceScore };
}

