import clsx from "clsx";

interface DisplayProps {
  children: React.ReactNode;
  className?: string;
}

export default function Display({
  children,
  className,
}: DisplayProps) {
  return (
    <h2
      className={clsx(
        `
        text-[clamp(3rem,6vw,5rem)]
        font-black
        uppercase
        tracking-[-0.05em]
        leading-[0.9]
        `,
        className
      )}
    >
      {children}
    </h2>
  );
}