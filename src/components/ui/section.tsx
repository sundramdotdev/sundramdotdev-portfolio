"use client";

import { motion } from "motion/react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
  noPadding?: boolean;
}

export function Section({
  children,
  className,
  id,
  fullWidth = false,
  noPadding = false,
}: SectionProps) {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.05 });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        !noPadding && "py-16 md:py-24 lg:py-32",
        !fullWidth && "mx-auto max-w-[var(--content-max-width)] px-6 md:px-10 lg:px-16",
        className
      )}
    >
      {children}
    </motion.section>
  );
}
