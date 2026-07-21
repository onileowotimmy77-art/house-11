"use client";

import { NavItem } from "./navItems";

interface ConciergeEditorialPanelProps {
  item: NavItem;
}

export default function ConciergeEditorialPanel({
  item,
}: ConciergeEditorialPanelProps) {
  return (
    <aside
      className="
        flex
        h-full
        flex-col
        justify-center
        
        pl-12
      "
    >
      <p
        className="
          max-w-md
          text-[17px]
          leading-8
          text-white/60
        "
      >
        {item.description}
      </p>

      
    </aside>
  );
}