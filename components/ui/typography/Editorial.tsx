import { editorial } from "@/app/fonts";
import clsx from "clsx";

interface EditorialProps {
  children: React.ReactNode;
  className?: string;
}

export default function Editorial({
  children,
  className,
}: EditorialProps) {
  return (
    <p
      className={clsx(
        editorial.className,

        `
        text-[clamp(1.45rem,2vw,2rem)]
        font-medium
        leading-[1.5]
        tracking-[0.02em]
        text-white
        `,

        className
      )}
    >
      {children}
    </p>
  );
}