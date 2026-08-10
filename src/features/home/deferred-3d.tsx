"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Hero3DScene = dynamic(() => import("./hero-3d-scene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center opacity-20">
      <div className="w-48 h-72 border border-border-subtle rounded-[18px]" />
    </div>
  ),
});

export function Deferred3D() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Wait until the main thread is idle, or fallback to a timeout
    // This ensures critical text renders long before heavy 3D assets load
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(() => setShouldRender(true), { timeout: 2000 });
    } else {
      const timer = setTimeout(() => setShouldRender(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!shouldRender) {
    return (
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-48 h-72 border border-border-subtle rounded-[18px]" />
      </div>
    );
  }

  return <Hero3DScene />;
}
