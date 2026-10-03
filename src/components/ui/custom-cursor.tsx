"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

type CursorVariant = "default" | "button" | "image" | "link" | "hidden";

export function CustomCursor() {
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean | null>(null);

  useEffect(() => {
    // Detect touch devices
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    const id = requestAnimationFrame(() => {
      setIsTouchDevice(isTouch || prefersReducedMotion);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 28, mass: 0.5 };
  const dotX = useSpring(cursorX, springConfig);
  const dotY = useSpring(cursorY, springConfig);

  const ringSpring = { stiffness: 180, damping: 25, mass: 0.8 };
  const ringX = useSpring(cursorX, ringSpring);
  const ringY = useSpring(cursorY, ringSpring);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (document.hidden) return;
      
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    },
    [cursorX, cursorY, isVisible]
  );

  const handleMouseLeave = useCallback(() => setIsVisible(false), []);
  const handleMouseEnter = useCallback(() => setIsVisible(true), []);

  const setupHoverListeners = useCallback(() => {
    // Buttons
    document.querySelectorAll("button, .btn-primary, .btn-secondary").forEach((el) => {
      el.removeEventListener("mouseenter", () => setVariant("button"));
      el.removeEventListener("mouseleave", () => setVariant("default"));
      
      el.addEventListener("mouseenter", () => setVariant("button"), { passive: true });
      el.addEventListener("mouseleave", () => setVariant("default"), { passive: true });
    });

    // Links (not buttons)
    document.querySelectorAll("a:not(button)").forEach((el) => {
      el.removeEventListener("mouseenter", () => setVariant("link"));
      el.removeEventListener("mouseleave", () => setVariant("default"));
      
      el.addEventListener("mouseenter", () => setVariant("link"), { passive: true });
      el.addEventListener("mouseleave", () => setVariant("default"), { passive: true });
    });

    // Images
    document.querySelectorAll("img, video, canvas").forEach((el) => {
      el.removeEventListener("mouseenter", () => setVariant("image"));
      el.removeEventListener("mouseleave", () => setVariant("default"));

      el.addEventListener("mouseenter", () => setVariant("image"), { passive: true });
      el.addEventListener("mouseleave", () => setVariant("default"), { passive: true });
    });

    // Inputs — hide custom cursor
    document.querySelectorAll("input, textarea, select, [contenteditable]").forEach((el) => {
      el.removeEventListener("mouseenter", () => setVariant("hidden"));
      el.removeEventListener("mouseleave", () => setVariant("default"));

      el.addEventListener("mouseenter", () => setVariant("hidden"), { passive: true });
      el.addEventListener("mouseleave", () => setVariant("default"), { passive: true });
    });
  }, []);

  useEffect(() => {
    if (isTouchDevice === null || isTouchDevice) return;

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter, { passive: true });

    // Observe interactive elements for variant changes
    let timeoutId: NodeJS.Timeout;
    const observer = new MutationObserver(() => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(setupHoverListeners, 100);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    setupHoverListeners();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [isTouchDevice, handleMouseMove, handleMouseLeave, handleMouseEnter, setupHoverListeners]);

  // If still checking or is touch device, do not render heavy motion components
  if (isTouchDevice === null || isTouchDevice) return null;

  const ringSize =
    variant === "button" ? 46 : variant === "image" ? 40 : variant === "link" ? 0 : 22;
  const ringRadius = variant === "image" ? 8 : ringSize / 2;

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        input, textarea, select, [contenteditable] {
          cursor: text !important;
        }
      `}</style>

      {/* Center Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible && variant !== "hidden" ? 1 : 0,
          scale: variant === "button" ? 0.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <div
          className="rounded-full bg-accent-bronze"
          style={{ width: 6, height: 6 }}
        />
      </motion.div>

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: variant === "link" ? 0 : ringSize,
          height: variant === "link" ? 0 : ringSize,
          borderRadius: ringRadius,
          opacity: isVisible && variant !== "hidden" && variant !== "link" ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 22 }}
      >
        <motion.div
          className="w-full h-full border border-accent-bronze/50 rounded-inherit"
          style={{ borderRadius: "inherit" }}
          animate={
            variant === "default"
              ? { scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }
              : { scale: 1, opacity: 0.6 }
          }
          transition={
            variant === "default"
              ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.2 }
          }
        />
      </motion.div>
    </>
  );
}
