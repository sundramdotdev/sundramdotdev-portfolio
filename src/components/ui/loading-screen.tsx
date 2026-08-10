"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Image from "next/image";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [imgError, setImgError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Only show loading screen on initial load, short duration for premium feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, prefersReducedMotion ? 0 : 800); // Super fast or instant if reduced motion

    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return null; // Skip splash entirely for reduced motion, or we could just not render the loading screen
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-10%",
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-none"
          style={{ backgroundColor: "#0D0D0F" }}
        >
          {/* Engineering grid detail that fades in quickly */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(#C18A42 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="flex flex-col items-center z-10">
            {/* Logo scaling/fading in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center justify-center relative w-12 h-12 md:w-16 md:h-16 mb-4"
            >
              {/* Subtle breathing animation */}
              <motion.div
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {!imgError ? (
                  <Image
                    src="/logo/logo-icon.png"
                    alt="sundramdotdev"
                    fill
                    sizes="(max-width: 768px) 48px, 64px"
                    priority
                    className="object-contain"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div
                    className="flex items-center justify-center w-full h-full rounded-xl"
                    style={{ backgroundColor: "#C18A42" }}
                  >
                    <span
                      className="text-lg md:text-2xl font-bold"
                      style={{ color: "#0D0D0F" }}
                    >
                      SD
                    </span>
                  </div>
                )}
              </motion.div>
            </motion.div>

            {/* Wordmark sliding up slightly and fading in */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="text-lg md:text-xl font-semibold tracking-[-0.02em]"
                style={{ color: "#F5F5F2" }}
              >
                sundramdotdev
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
