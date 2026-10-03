"use client";

import { useState, useEffect, Component, ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { StudioScene } from "./studio-scene";
import { StudioProjectItem } from "./types";

// Suppress Three.js r183/r184 upstream Clock deprecation notice emitted internally by @react-three/fiber
if (typeof window !== "undefined") {
  const originalWarn = console.warn;
  console.warn = (...args: unknown[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("THREE.Clock: This module has been deprecated")
    ) {
      return;
    }
    originalWarn.apply(console, args);
  };
}

interface StudioCanvasProps {
  progressRef: React.RefObject<number>;
  projects: StudioProjectItem[];
  onSelectProject?: (slug: string) => void;
  onWebGLError?: () => void;
}

class CanvasErrorBoundary extends Component<
  { children: ReactNode; onError?: () => void },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; onError?: () => void }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.warn("StudioCanvas 3D error, switching to fallback:", error);
    this.props.onError?.();
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

function checkWebGLSupport(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export function StudioCanvas({
  progressRef,
  projects,
  onSelectProject,
  onWebGLError,
}: StudioCanvasProps) {
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    const isSupported = checkWebGLSupport();
    const animId = requestAnimationFrame(() => {
      setSupported(isSupported);
      if (!isSupported) {
        onWebGLError?.();
      }
    });
    return () => cancelAnimationFrame(animId);
  }, [onWebGLError]);

  if (supported === false) {
    return null;
  }

  if (supported === null) {
    return null;
  }

  return (
    <div className="w-full h-full relative">
      <CanvasErrorBoundary onError={onWebGLError}>
        <Canvas
          camera={{ position: [0, 2.6, 9.0], fov: 46 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <StudioScene
            progressRef={progressRef}
            projects={projects}
            onSelectProject={onSelectProject}
          />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
