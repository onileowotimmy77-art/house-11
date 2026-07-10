"use client";

import FadeUp from "@/components/ui/FadeUp";
import Body from "@/components/ui/typography/Body";

export default function ManifestoIntro() {
  return (
    <FadeUp>
      <div className="mx-auto mt-6">

        <Body className="text-center leading-[1.9]">
          House Eleven exists for people who believe
          what they wear should say something 
          <>
          <br />
          </>long
          before they speak.
        </Body>

        <div className="mt-10 flex justify-center">
          <div className="h-px w-24 bg-white/10" />
        </div>

      </div>
    </FadeUp>
  );
}