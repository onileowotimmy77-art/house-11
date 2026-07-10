"use client";

import { motion } from "framer-motion";
import { Display, Eyebrow } from "@/components/ui/typography";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
}

export default function SectionHeader({
  eyebrow,
  title,
}: SectionHeaderProps) {
  return (
    <div className="mb-20 text-center">
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Eyebrow>{eyebrow}</Eyebrow>
      </motion.div>

      {/* Divider */}
      <div className="my-8 flex justify-center">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformOrigin: "center" }}
          className="h-px w-24 bg-white/10"
        />
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          text-[clamp(3rem,6vw,5rem)]
          font-black
          uppercase
          tracking-[-0.05em]
          leading-[0.9]
        "
      >
        {title}
      </motion.h2>
    </div>
  );
}