"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useAppTransition } from "../providers/AppTransitionProvider";

export default function HeroMedia() {
  const { ready } = useAppTransition();
  return (
   <motion.div
  className="absolute inset-0"
  initial={{
    opacity: 0,
    scale: 1.06,
  }}
  animate={
    ready
      ? {
          opacity: 1,
          scale: 1,
        }
      : {}
  }
  transition={{
    duration: 2.4,
    ease: [0.22, 1, 0.36, 1],
  }}
>

      <Image
        src="/hero.jpg"
        alt="House Eleven Chapter 01 Campaign"
        fill
        priority
        sizes="100vw"
        className="
          object-cover object-[20%_center]
        "
      />

      

      {/* Left gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/70
          via-black/20
          to-transparent
        "
      />

      {/* Bottom gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/65
          via-transparent
          to-black/15
        "
      />
      {/* Section Blend */}

<div
  className="
    absolute
    inset-x-0
    bottom-0
    h-56
    bg-gradient-to-b
    from-transparent
    via-black/40
    to-black
    pointer-events-none
  "
/>

    </motion.div>
  );
}