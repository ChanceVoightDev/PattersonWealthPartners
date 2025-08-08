// components/ScrollParallax.tsx
import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollParallaxProps {
  children: ReactNode;
  className?: string;
  /**
   * Maximum translation in px (positive number).
   * Direction will be opposite (i.e. up = negative Y).
   */
  maxTranslate?: number;
}

export default function ScrollParallax({
  children,
  className = "",
  maxTranslate = 40,
}: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll progress of this element through the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    // When the top of the element hits the bottom of the viewport → 0
    // and when the bottom of the element hits the top of the viewport → 1
    offset: ["start end", "end start"],
  });

  // Map progress [0 → 1] to [0 → -maxTranslate]
  const y = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
