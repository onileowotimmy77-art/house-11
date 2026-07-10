"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCursorContext } from "@/components/cursor/CursorProvider";

interface ProductCardProps {
  name: string;
  subtitle: string;
  price: string;
  image: string;
  href: string;
  featured?: boolean;
}

export default function ProductCard({
  name,
  subtitle,
  price,
  image,
  href,
  featured = false,
}: ProductCardProps) {
  const { setHovering, setLabel } = useCursorContext();

  return (
    <Link href={href}>
      <motion.article
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        onMouseEnter={() => {
          setHovering(true);
          setLabel("VIEW");
        }}
        onMouseLeave={() => {
          setHovering(false);
          setLabel("");
        }}
        className="group"
      >
        {/* Image */}
        <div
          className={`
            relative
            overflow-hidden
            bg-neutral-900
            ${featured ? "h-[85vh]" : "h-[520px]"}
          `}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full w-full"
          >
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Details */}
        <div className="mt-8">

          <h3
            className="
              text-2xl
              font-semibold
              uppercase
              tracking-[-0.03em]
            "
          >
            {name}
          </h3>

          <p
            className="
              mt-2
              text-white/60
            "
          >
            {subtitle}
          </p>

          <div
            className="
              mt-6
              flex
              items-center
              justify-between
            "
          >
            <span className="font-medium">
              {price}
            </span>

            <span
              className="
                transition-opacity
                duration-300
                opacity-60
                group-hover:opacity-100
              "
            >
              View Piece →
            </span>

          </div>

        </div>

      </motion.article>
    </Link>
  );
}