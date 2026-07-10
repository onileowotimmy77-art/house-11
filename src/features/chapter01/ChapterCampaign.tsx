"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ChapterCampaign() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.05,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        overflow-hidden
        
      "
    >
      <div
        className="
          relative
          h-[90vh]
          min-h-[700px]
          w-full
        "
      >
        <Image
          src="/chapter01.jpg"
          alt="House Eleven Residence Campaign"
          fill
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}