"use client";

import { motion } from "framer-motion";
import { ambient } from "@/src/theme/ambient";
import { useAmbientContext } from "./AmbientProvider";

export default function AmbientBackground() {
  const { current } = useAmbientContext();

  return (
    <motion.div
      className="fixed inset-0 -z-0 overflow-hidden pointer-events-none" 
      animate={{
        backgroundColor: ambient[current],
      }}
      transition={{
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Ambient Glow */}
      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-[70vw]
          w-[70vw]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[140px]
        "
        animate={{
          opacity: 0.08,
          scale: 1,
        }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.12), transparent 70%)",
        }}
      />
    </motion.div>
  );
}