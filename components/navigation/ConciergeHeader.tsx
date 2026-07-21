"use client";

import { motion } from "framer-motion";

import useCursorTarget from "@/components/cursor/useCursorTarget";
import { CursorLabels } from "@/lib/cursor";

import { useMenu } from "./MenuProvider";

const header = {
  hidden: {
    opacity: 0,
    y: -18,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      delay: 0.08,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    y: -12,

    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ConciergeHeader() {
  const { closeMenu } = useMenu();

  const closeCursor = useCursorTarget(CursorLabels.CLOSE);

  return (
    <motion.header
      variants={header}
      className="
        flex
        h-16
        items-center
        justify-between
        pt-5
      "
    >
      <p
        className="
          text-[11px]
          uppercase
          tracking-[0.45em]
          text-white/30
        "
      >
        HOUSE ELEVEN
      </p>

      <button
        {...closeCursor}
        onClick={closeMenu}
        className="
          flex
          items-center
          gap-3

          text-[11px]
          uppercase
          tracking-[0.42em]

          text-white/40
          transition-colors
          duration-300

          hover:text-white
        "
      >
        <span>CLOSE</span>

        <span
          className="
            font-mono
            text-[10px]
            tracking-[0.25em]
            text-white/25
          "
        >
          ESC
        </span>
      </button>
    </motion.header>
  );
}