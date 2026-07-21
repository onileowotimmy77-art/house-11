"use client";

import Link from "next/link";


import useCursorTarget from "@/components/cursor/useCursorTarget";

import { NavItem } from "./navItems";
import { useMenu } from "./MenuProvider";

interface ConciergeLinkProps {
  item: NavItem;
  active: boolean;
  onHover: () => void;
}

export default function ConciergeLink({
  item,
  active,
  onHover,
}: ConciergeLinkProps) {
  const cursor = useCursorTarget(item.cursor);
  

  const { closeMenu } = useMenu();

  return (
   
      <Link
  href={item.href}
  onClick={closeMenu}
  onMouseEnter={() => {
    cursor.onMouseEnter();
    onHover();
  }}
  onMouseLeave={cursor.onMouseLeave}
  className="
    group
    flex
    items-center
    justify-between
    border-b
    border-white/10
    py-5
    transition-opacity
    duration-500
  "
>
        <h2
          className={`
            text-[clamp(2rem,4vw,4.5rem)]
            font-semibold
            tracking-[-0.05em]
            leading-[0.9]
            transition-all
            duration-500

            ${
              active
                ? "text-white"
                : "text-white/30 group-hover:text-white/80"
            }
          `}
        >
          {item.label}
        </h2>

      </Link>
 
  );
}