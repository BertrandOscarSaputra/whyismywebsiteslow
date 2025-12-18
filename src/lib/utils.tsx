import React from "react";
import type { PerformanceMetrics, Audits, AnalysisResult, Issue } from "@/types";
import {
  AlertCircle,
  Clock,
  Image,
  Code,
  Server,
  Zap,
  TrendingUp,
  TrendingDown,
  Minus,
} from "lucide-react";

export function analyzeMetrics(
  metrics: PerformanceMetrics,
  audits: Audits,
  performanceScore: number
): AnalysisResult {
  const issues: Issue[] = [];
  const strengths: string[] = [];
  const recommendations: string[] = [];
  let score = 100;

  // Core Web Vitals Analysis
  // LCP (Largest Contentful Paint)
  if (metrics.lcp > 4000) {
    score -= 20;
    issues.push({
      severity: "critical",
      title: "Poor Largest Contentful Paint (LCP)",
      problem: `Your largest content takes ${(metrics.lcp / 1000).toFixed(
        1
      )}s to load. Google recommends under 2.5s.`,
      why: "LCP measures when the main content becomes visible. Slow LCP means users stare at a blank or incomplete page, leading to frustration and bounces.",
      fix: "Optimize your largest image or text block. Use lazy loading, preload critical resources, and ensure fast server responses.",
      impact: "High - Core Web Vital affecting SEO and user experience",
      icon: <TrendingDown className="w-6 h-6" />,
    });
  } else if (metrics.lcp < 2500) {
    strengths.push("Excellent LCP - main content loads quickly");
  }

  // CLS (Cumulative Layout Shift)
  if (metrics.cls > 0.25) {
    score -= 18;
    issues.push({
      severity: "critical",
      title: "High Cumulative Layout Shift (CLS)",
      problem: `Your page shifts unexpectedly (${metrics.cls.toFixed(
        3
      )}). Google recommends under 0.1.`,
      why: "CLS measures visual stability. When elements move around as the page loads, users might click the wrong thing or lose their place.",
      fix: "Set explicit width/height on images and videos, avoid inserting content above existing content, and use CSS transforms for animations.",
      impact: "High - Core Web Vital causing user frustration",
      icon: <AlertCircle className="w-6 h-6" />,
    });
  } else if (metrics.cls < 0.1) {
    strengths.push("Great visual stability - no unexpected layout shifts");
  }

  // FCP (First Contentful Paint)
  if (metrics.fcp > 3000) {
    score -= 15;
    issues.push({
      severity: "warning",
      title: "Slow First Contentful Paint (FCP)",
      problem: `Users wait ${(metrics.fcp / 1000).toFixed(
        1
      )}s to see any content. Ideal is under 1.8s.`,
      why: "FCP is the first moment users see anything on screen. Slow FCP makes your site feel broken or unresponsive.",
      fix: "Eliminate render-blocking resources, inline critical CSS, and optimize server response time.",
      impact: "High - First impression matters",
      icon: <Clock className="w-6 h-6" />,
    });
  } else if (metrics.fcp < 1800) {
    strengths.push("Fast first paint - content appears quickly");
  }

  // TBT (Total Blocking Time)
  if (metrics.tbt > 600) {
    score -= 15;
    issues.push({
      severity: "warning",
      title: "High Total Blocking Time (TBT)",
      problem: `Your page is unresponsive for ${(metrics.tbt / 1000).toFixed(
        1
      )}s while JavaScript runs.`,
      why: "During TBT, users can't click, scroll, or interact. The page appears frozen, creating a terrible experience.",
      fix: "Break up long JavaScript tasks, defer non-critical scripts, and use code splitting to load only what's needed.",
      impact: "Medium - Affects interactivity",
      icon: <Code className="w-6 h-6" />,
    });
  } else if (metrics.tbt < 300) {
    strengths.push("Low blocking time - page stays responsive");
  }

  // TTFB (Time to First Byte)
  if (metrics.ttfb > 800) {
    score -= 12;
    issues.push({
      severity: "warning",
      title: "Slow Server Response (TTFB)",
      problem: `Your server takes ${(metrics.ttfb / 1000).toFixed(
        2
      )}s to respond. Aim for under 0.6s.`,
      why: "TTFB is how long the server takes to start sending data. Everything else waits for this, so a slow server delays your entire page.",
      fix: "Upgrade hosting, enable server caching, use a CDN, optimize database queries, and consider static site generation.",
      impact: "High - Affects everything else",
      icon: <Server className="w-6 h-6" />,
    });
  } else if (metrics.ttfb < 600) {
    strengths.push("Fast server response time");
  }

  // Speed Index
  if (metrics.speedIndex > 5800) {
    score -= 10;
    issues.push({
      severity: "info",
      title: "Slow Visual Progress",
      problem: `Your page takes ${(metrics.speedIndex / 1000).toFixed(
        1
      )}s to visually complete loading.`,
      why: "Speed Index measures how quickly content is visually displayed. Slow visual progress makes users feel like nothing is happening.",
      fix: "Prioritize above-the-fold content, optimize critical rendering path, and lazy load below-the-fold content.",
      impact: "Medium - Perceived performance",
      icon: <TrendingDown className="w-6 h-6" />,
    });
  }

  // Image Optimization
  const optimizedImagesAudit = audits["uses-optimized-images"];
  if (
    optimizedImagesAudit &&
    optimizedImagesAudit.score !== undefined &&
    optimizedImagesAudit.score < 0.5
  ) {
    score -= 15;
    const wastedKB =
      (optimizedImagesAudit.details?.overallSavingsBytes || 0) / 1024;
    issues.push({
      severity: "warning",
      title: "Unoptimized Images",
      problem: `You could save ${wastedKB.toFixed(
        0
      )} KB by properly optimizing images.`,
      why: "Images typically account for 50-90% of page weight. Unoptimized images waste bandwidth and slow everything down, especially on mobile.",
      fix: "Compress images with tools like TinyPNG, convert to WebP/AVIF, use responsive images with srcset, and implement lazy loading.",
      impact: "High - Major impact on load time",
      // eslint-disable-next-line jsx-a11y/alt-text
      icon: <Image className="w-6 h-6" aria-hidden="true" />,
    });
    recommendations.push("Use next-gen image formats (WebP, AVIF)");
  } else if (
    optimizedImagesAudit &&
    optimizedImagesAudit.score !== undefined &&
    optimizedImagesAudit.score > 0.9
  ) {
    strengths.push("Well-optimized images");
  }

  // JavaScript
  const unusedJSAudit = audits["unused-javascript"];
  if (
    unusedJSAudit &&
    unusedJSAudit.score !== undefined &&
    unusedJSAudit.score < 0.5
  ) {
    score -= 12;
    const wastedKB = (unusedJSAudit.details?.overallSavingsBytes || 0) / 1024;
    issues.push({
      severity: "warning",
      title: "Excessive Unused JavaScript",
      problem: `${wastedKB.toFixed(
        0
      )} KB of JavaScript isn't being used on this page.`,
      why: "Unused JavaScript wastes bandwidth downloading and CPU time parsing. Every byte of JS must be downloaded, parsed, compiled, and executed.",
      fix: "Remove unused libraries, implement code splitting, use dynamic imports, and tree-shake your dependencies.",
      impact: "Medium-High - CPU and bandwidth waste",
      icon: <Code className="w-6 h-6" />,
    });
    recommendations.push("Implement code splitting and lazy loading");
  }

  // Render-blocking resources
  const renderBlockingAudit = audits["render-blocking-resources"];
  if (
    renderBlockingAudit &&
    renderBlockingAudit.score !== undefined &&
    renderBlockingAudit.score < 0.5
  ) {
    score -= 10;
    issues.push({
      severity: "warning",
      title: "Render-Blocking Resources",
      problem: `CSS and JavaScript files are blocking your page from rendering.`,
      why: "Render-blocking resources force the browser to wait before showing anything. Users see a white screen while these files download.",
      fix: "Inline critical CSS, defer non-critical CSS, add async/defer to scripts, and use resource hints like preconnect.",
      impact: "High - Delays first paint",
      icon: <Zap className="w-6 h-6" />,
    });
    recommendations.push(
      "Inline critical CSS and defer non-critical resources"
    );
  }

  // Modern image formats
  const webpImagesAudit = audits["uses-webp-images"];
  if (
    webpImagesAudit &&
    webpImagesAudit.score !== undefined &&
    webpImagesAudit.score < 0.5
  ) {
    const savings =
      (webpImagesAudit.details?.overallSavingsBytes || 0) / 1024;
    if (savings > 50) {
      score -= 8;
      issues.push({
        severity: "info",
        title: "Not Using Modern Image Formats",
        problem: `Save ${savings.toFixed(
          0
        )} KB by converting images to WebP or AVIF.`,
        why: "Modern formats like WebP are 25-35% smaller than JPEG/PNG with identical quality. This is free performance gain.",
        fix: "Convert images to WebP with fallbacks. Use <picture> element or let your CDN handle automatic format conversion.",
        impact: "Medium - Easy wins",
        // eslint-disable-next-line jsx-a11y/alt-text
        icon: <Image className="w-6 h-6" aria-hidden="true" />,
      });
      recommendations.push("Convert all images to WebP format");
    }
  }

  // Text compression
  const textCompressionAudit = audits["uses-text-compression"];
  if (
    textCompressionAudit &&
    textCompressionAudit.score !== undefined &&
    textCompressionAudit.score < 0.9
  ) {
    score -= 7;
    issues.push({
      severity: "info",
      title: "Missing Text Compression",
      problem: `Text resources aren't being compressed efficiently.`,
      why: "Compression like gzip or brotli can reduce text files by 70-90%. Without it, you're sending 3-10x more data than necessary.",
      fix: "Enable gzip or brotli compression on your server. Most modern hosting providers support this with a simple config change.",
      impact: "Medium - Easy server-side fix",
      icon: <Server className="w-6 h-6" />,
    });
    recommendations.push("Enable gzip or brotli compression");
  }

  // Font optimization
  const fontDisplayAudit = audits["font-display"];
  if (
    fontDisplayAudit &&
    fontDisplayAudit.score !== undefined &&
    fontDisplayAudit.score < 0.5
  ) {
    score -= 5;
    issues.push({
      severity: "info",
      title: "Unoptimized Font Loading",
      problem: `Web fonts are blocking text from being displayed.`,
      why: "Without proper font loading, users see invisible text (FOIT) or system fonts flashing (FOUT). Both create a jarring experience.",
      fix: "Use font-display: swap in @font-face rules, preload critical fonts, and consider using system font stacks.",
      impact: "Low-Medium - UX polish",
      icon: <Code className="w-6 h-6" />,
    });
  }

  score = Math.max(score, 20);

  // Sort issues by severity
  issues.sort((a, b) => {
    const severityOrder = { critical: 0, warning: 1, info: 2 };
    return severityOrder[a.severity] - severityOrder[b.severity];
  });

  return {
    score: Math.round(score),
    performanceScore,
    metrics,
    issues: issues.slice(0, 5),
    strengths,
    recommendations,
  };
}

export function getScoreColor(score: number): string {
  if (score >= 90) return "from-green-500 to-emerald-600";
  if (score >= 50) return "from-yellow-500 to-orange-600";
  return "from-red-500 to-rose-600";
}

export function getScoreLabel(score: number): string {
  if (score >= 90) return "Fast";
  if (score >= 50) return "Average";
  return "Slow";
}

export function getMetricStatus(value: number, good: number, needsWork: number) {
  if (value <= good)
    return {
      icon: <TrendingUp className="w-4 h-4" />,
      color: "text-green-600",
      bg: "bg-green-50",
    };
  if (value <= needsWork)
    return {
      icon: <Minus className="w-4 h-4" />,
      color: "text-yellow-600",
      bg: "bg-yellow-50",
    };
  return {
    icon: <TrendingDown className="w-4 h-4" />,
    color: "text-red-600",
    bg: "bg-red-50",
  };
}

