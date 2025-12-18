export interface PerformanceMetrics {
  ttfb: number;
  fcp: number;
  lcp: number;
  cls: number;
  tbt: number;
  speedIndex: number;
  domContentLoaded: number;
  loadTime: number;
  resourceCount: number;
  totalSize: number;
  imageCount: number;
  imageSize: number;
  jsCount: number;
  jsSize: number;
  cssCount: number;
  cssSize: number;
}

export interface Issue {
  severity: "critical" | "warning" | "info";
  title: string;
  problem: string;
  why: string;
  fix: string;
  impact: string;
  icon: React.ReactNode;
}

export interface AnalysisResult {
  score: number;
  performanceScore: number;
  metrics: PerformanceMetrics;
  issues: Issue[];
  strengths: string[];
  recommendations: string[];
}

export interface AuditItem {
  wastedBytes?: number;
  [key: string]: unknown;
}

export interface Audits {
  [key: string]:
    | {
        score?: number;
        numericValue?: number;
        details?: {
          items?: AuditItem[];
          overallSavingsBytes?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      }
    | undefined;
}

