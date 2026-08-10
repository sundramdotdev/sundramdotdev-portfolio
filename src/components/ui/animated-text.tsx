"use client";

import { motion } from "motion/react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  animation?: "word" | "letter" | "line";
  delay?: number;
}

export function AnimatedText({
  text,
  className,
  as: Tag = "h2",
  animation = "word",
  delay = 0,
}: AnimatedTextProps) {
  const [ref, isInView] = useInView<HTMLDivElement>();

  if (animation === "line") {
    return (
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            delay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Tag className={className}>{text}</Tag>
        </motion.div>
      </div>
    );
  }

  const items = animation === "word" ? text.split(" ") : text.split("");

  return (
    <div ref={ref}>
      <Tag className={cn("flex flex-wrap", className)}>
        {items.map((item, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={
              isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
            }
            transition={{
              duration: 0.4,
              delay: delay + index * (animation === "word" ? 0.06 : 0.02),
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {item}
            {animation === "word" && <span>&nbsp;</span>}
          </motion.span>
        ))}
      </Tag>
    </div>
  );
}
