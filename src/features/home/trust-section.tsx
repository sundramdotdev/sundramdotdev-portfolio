import { stats } from "@/lib/constants";
import { TrustStatsClient } from "./trust-stats-client";

export function TrustSection() {
  return (
    <section className="relative py-12 md:py-16 border-y border-border-subtle bg-bg-surface/30">
      <TrustStatsClient stats={stats} />
    </section>
  );
}
