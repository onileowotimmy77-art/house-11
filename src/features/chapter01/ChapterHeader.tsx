"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/ui/FadeUp";
import { Display, Eyebrow } from "@/components/ui/typography";

export default function ChapterHeader() {
  return (
    <div className="mb-24 text-center">

      <FadeUp>
        <Eyebrow>
          Chapter 01
        </Eyebrow>
      </FadeUp>

      <div className="my-8 flex justify-center">
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileInView={{
            width: 96,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            h-px
            bg-white/10
          "
        />
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          delay: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Display>
          Residence
        </Display>
      </motion.div>

    </div>
  );
}