"use client";

import FadeUp from "@/components/ui/FadeUp";
import { Display, Eyebrow } from "@/components/ui/typography";
import { residenceCollection } from "@/data/residence";

export default function ResidenceHeader() {
  return (
    <div className="mx-auto mb-24 max-w-3xl text-center">

      <FadeUp>
        <Eyebrow>
          Chapter {residenceCollection.chapter}
        </Eyebrow>
      </FadeUp>

      <FadeUp delay={0.15}>
        <Display className="mt-6">
          {residenceCollection.name}
        </Display>
      </FadeUp>

      <FadeUp delay={0.3}>
        <p
          className="
            mt-6
            text-lg
            uppercase
            tracking-[0.25em]
            text-white/45
          "
        >
          {residenceCollection.tagline}
        </p>
      </FadeUp>

      <FadeUp delay={0.45}>
        <p
          className="
            mx-auto
            mt-10
            max-w-2xl
            text-lg
            leading-9
            text-white/65
          "
        >
          {residenceCollection.introduction}
        </p>
      </FadeUp>

    </div>
  );
}