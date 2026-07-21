"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { stagger } from "@/lib/animations";
import { MotionViewport } from "@/lib/motion";

interface StaggerProps {
  children: ReactNode;
  className?: string;
}

export default function Stagger({
  children,
  className = "",
}: StaggerProps) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: MotionViewport.once,
        amount: MotionViewport.amount,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}