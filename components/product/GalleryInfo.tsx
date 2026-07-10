"use client";

import Link from "next/link";

interface GalleryInfoProps {
  title: string;
  description: string;
  price: string;
  href: string;

  availableColours?: number;
  availableFits?: string[];
}

export default function GalleryInfo({
  title,
  description,
  price,
  href,
  availableColours,
  availableFits,
}: GalleryInfoProps) {
  return (
    <div className="mt-8">

      <p
        className="
          text-[11px]
          uppercase
          tracking-[0.35em]
          text-white/35
        "
      >
        Chapter 01
      </p>

      <h3
        className="
          mt-5
          text-3xl
          font-black
          uppercase
          tracking-[-0.04em]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-3
          text-white/60
          leading-7
        "
      >
        {description}
      </p>

      {availableColours && (
        <p className="mt-4 text-white/45">
          Available in {availableColours} colours
        </p>
      )}

      {availableFits && (
        <p className="mt-2 text-white/45">
          {availableFits.join(" • ")}
        </p>
      )}

      <div className="mt-8 flex items-center justify-between">

        <span
          className="
            text-xl
            font-semibold
          "
        >
          {price}
        </span>

        <Link
          href={href}
          className="
            uppercase
            tracking-[0.2em]
            text-sm
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        >
          Discover →
        </Link>

      </div>

    </div>
  );
}