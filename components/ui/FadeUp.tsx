"use client";

import { motion } from "framer-motion";
import { transition } from "@/src/lib/motion"; 

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
}

export default function FadeUp({
  children,
  delay = 0,
}: FadeUpProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        ...transition,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}