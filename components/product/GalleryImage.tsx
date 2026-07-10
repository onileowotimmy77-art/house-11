"use client";

import Link from "next/link";

interface GalleryImageProps {
  image: string;
  title: string;
  href: string;
  featured?: boolean;
}

export default function GalleryImage({
  image,
  title,
  href,
  featured = false,
}: GalleryImageProps) {
  return (
    <Link href={href}>

      <div
        className={`
          relative
          overflow-hidden
          bg-neutral-900

          ${
            featured
              ? "aspect-[4/5] lg:h-[85vh]"
              : "aspect-[4/5]"
          }
        `}
      >

        <Image 
          src={image}
          alt={title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.04]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-black/15
            transition-opacity
            duration-700
            group-hover:bg-black/5
          "
        />

      </div>

    </Link>
  );
}