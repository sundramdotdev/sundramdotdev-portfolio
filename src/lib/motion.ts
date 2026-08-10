"use client";

import type { Variants, Transition } from "motion/react";

// --- Base Transitions ---
const smooth: Transition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1], // expo out
};

const snappy: Transition = {
  duration: 0.4,
  ease: [0.25, 1, 0.5, 1], // quart out
};

const spring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 0.5,
};

// --- Fade Variants ---
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: smooth },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: smooth },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: smooth },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: smooth },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: smooth },
};

// --- Scale Variants ---
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: snappy },
};

// --- Slide Variants ---
export const slideInLeft: Variants = {
  hidden: { x: "-100%" },
  visible: { x: 0, transition: smooth },
  exit: { x: "-100%", transition: snappy },
};

export const slideInRight: Variants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: smooth },
  exit: { x: "100%", transition: snappy },
};

// --- Stagger Containers ---
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smooth,
  },
};

// --- Text Stagger ---
export const textContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

export const textLetter: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const textWord: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// --- Page Transitions ---
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// --- Card Hover ---
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    transition: snappy,
  },
  hover: {
    scale: 1.02,
    y: -4,
    transition: spring,
  },
};

// --- Image Reveal ---
export const imageReveal: Variants = {
  hidden: {
    clipPath: "inset(0 0 100% 0)",
    opacity: 0,
  },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// --- Navbar ---
export const navbarVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

// --- Counter Animation Helper ---
export const counterTransition: Transition = {
  duration: 2,
  ease: [0.16, 1, 0.3, 1],
};

// --- Utility: Create custom delay variant ---
export function withDelay(variants: Variants, delay: number): Variants {
  return Object.fromEntries(
    Object.entries(variants).map(([key, value]) => {
      if (typeof value === "object" && value !== null && "transition" in value) {
        return [
          key,
          {
            ...value,
            transition: {
              ...(value as Record<string, unknown>).transition as object,
              delay,
            },
          },
        ];
      }
      return [key, value];
    })
  );
}
