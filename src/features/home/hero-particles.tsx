"use client";

import { motion } from "motion/react";

export function HeroParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-accent-bronze/20"
          initial={{
            x: `${15 + i * 15}%`,
            y: `${20 + (i % 3) * 25}%`,
            opacity: 0,
          }}
          animate={{
            y: [`${20 + (i % 3) * 25}%`, `${10 + (i % 3) * 20}%`],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
