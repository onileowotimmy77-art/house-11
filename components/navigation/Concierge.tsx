"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";


import { useMenu } from "./MenuProvider";

import ConciergeHeader from "./ConciergeHeader";
import ConciergeNavigation from "./ConciergeNavigation";
import ConciergeFooter from "./ConciergeFooter";

const overlay = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],

      when: "beforeChildren",
    },
  },

  exit: {
    opacity: 0,

    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],

      when: "afterChildren",
    },
  },
};

export default function Concierge() {
  const { isMenuOpen, closeMenu } = useMenu();


  useEffect(() => {
  if (!isMenuOpen) return;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [isMenuOpen, closeMenu]);

  

  return (
    <AnimatePresence mode="wait">
      {isMenuOpen && (
        <motion.aside
          variants={overlay}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="
            fixed
            inset-0
            z-[200]
            overflow-hidden
            bg-black
            text-white
          "
        >
         <div
  className="
    h-dvh
    overflow-hidden

    px-6
    md:px-8
    lg:px-12
    xl:px-16
    2xl:px-20
  "
><div
  className="
    mx-auto
    flex
    h-full
    w-full
    max-w-7xl
    flex-col
  "
>
  <ConciergeHeader />

  <main
    className="
      flex-1
      flex
      items-center
      py-8
    "
  >
    <ConciergeNavigation />
  </main>

  <footer className="pb-10">
    <ConciergeFooter />
  </footer>
</div>
</div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}