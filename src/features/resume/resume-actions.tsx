"use client";

import { Download, Printer } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function ResumeActions() {
  return (
    <div className="flex gap-2">
      <a
        href={siteConfig.resumeUrl}
        download
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-accent-bronze text-bg-primary hover:bg-accent-bronze-light transition-colors"
      >
        <Download size={14} /> Download PDF
      </a>
      <button
        onClick={() => typeof window !== "undefined" && window.print()}
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-border-subtle text-text-muted hover:text-text-primary hover:border-border-default transition-all"
      >
        <Printer size={14} /> Print
      </button>
    </div>
  );
}
