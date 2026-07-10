"use client";

import FadeUp from "@/components/ui/FadeUp";
import Editorial from "../ui/typography/Editorial";

export default function ManifestoClosing() {
  return (
    <FadeUp>
      <div className="mb-28 text-center">
        <div className=" flex flex-col items-center">

  <div className="mb-10 h-px w-16 bg-white/10" />

  <Editorial
    className="
      text-center
      text-[clamp(1.5rem,2vw,2rem)]
      font-medium
      tracking-[0.04em]
      text-white/90
    "
  >
    Welcome Home.
  </Editorial>

</div>
      </div>
    </FadeUp>
  );
}