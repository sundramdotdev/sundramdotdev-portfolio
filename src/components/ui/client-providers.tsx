"use client";

import { useEffect, useState } from "react";
import { LenisProvider } from "./lenis-provider";
import { CustomCursor } from "./custom-cursor";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  // We only mount these providers after the initial render to prevent hydration mismatches
  // and keep initial TBT low by deferring heavy systems.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Delay mounting slightly to let critical rendering path finish
    const timer = setTimeout(() => {
      setMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {mounted && (
        <>
          <LenisProvider>{null}</LenisProvider>
          <CustomCursor />
        </>
      )}
      {children}
    </>
  );
}
