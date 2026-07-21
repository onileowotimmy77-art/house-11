"use client";

import Image from "next/image";

interface GalleryImageProps {
  image: string;
  alt: string;
  aspect?: "landscape" | "portrait" | "square";
}

export default function GalleryImage({
  image,
  alt,
  aspect = "landscape",
}: GalleryImageProps) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        bg-neutral-900

        ${
          aspect === "landscape"
            ? "aspect-[16/10]"
            : aspect === "portrait"
            ? "aspect-[4/5]"
            : "aspect-square"
        }
      `}
    >
      <Image
        src={image}
        alt={alt}
        fill
        quality={90}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="
          object-cover
          will-change-transform
          transition-transform
          duration-700
        "
      />

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-gradient-to-t
          from-black/12
          via-transparent
          to-transparent
        "
      />
    </div>
  );
}