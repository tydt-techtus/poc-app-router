"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  useReportWebVitals((metric) => {
    if (metric.name === "TTFB") {
      console.log("TTFB = ", metric.value);
    }
  });

  return null;
}
