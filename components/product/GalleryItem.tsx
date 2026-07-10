"use client";

import GalleryImage from "./GalleryImage";
import GalleryInfo from "./GalleryInfo";

interface GalleryItemProps {
  title: string;
  description: string;
  price: string;
  image: string;
  href: string;

  featured?: boolean;

  availableColours?: number;
  availableFits?: string[];
}

export default function GalleryItem({
  title,
  description,
  price,
  image,
  href,
  featured = false,
  availableColours,
  availableFits,
}: GalleryItemProps) {
  return (
    <article className="group">

      <GalleryImage
        image={image}
        title={title}
        href={href}
        featured={featured}
      />

      <GalleryInfo
        title={title}
        description={description}
        price={price}
        href={href}
        availableColours={availableColours}
        availableFits={availableFits}
      />

    </article>
  );
}