"use client";

import { motion } from "motion/react";
import { ReactNode, CSSProperties } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  y?: number;
  x?: number;
  once?: boolean;
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  duration = 0.8, 
  className = "", 
  style,
  y = 0,
  x = 0,
  once = true 
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-10%" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
