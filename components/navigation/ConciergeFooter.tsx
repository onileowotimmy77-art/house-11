"use client";

import { motion } from "framer-motion";

const footer = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      delay: 0.62,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    y: 12,

    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ConciergeFooter() {
  return (
    <motion.footer
      variants={footer}
      className="
        flex
        items-center
        justify-between

        border-t
        border-white/[0.05]

        pb-5
      "
    >
      <p
        className="
          font-mono
          text-[11px]
          uppercase
          tracking-[0.42em]
          text-white/30
        "
      >
        Edition 001
      </p>

      <p
        className="
          font-mono
          text-[11px]
          uppercase
          tracking-[0.42em]
          text-white/25
          "
        >
          Somewhere. Worn Everywhere.
      </p>
    </motion.footer>
  );
}