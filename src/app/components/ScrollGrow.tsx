"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollGrowProps {
  children: ReactNode;
  className?: string;
  maxScale?: number;
}

export default function ScrollGrow({
  children,
  className = "",
  maxScale = 1.2,
}: ScrollGrowProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll tracking — wrapper always has height
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"], // starts scaling near bottom, ends before top leaves
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, maxScale]);

  return (
    <div ref={ref} className={`overflow-visible ${className}`}>
      <motion.div
        style={{ scale }}
        className="overflow-visible will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
