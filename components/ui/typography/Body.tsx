import clsx from "clsx";

interface BodyProps {
  children: React.ReactNode;
  className?: string;
}

export default function Body({
  children,
  className,
}: BodyProps) {
  return (
    <p
      className={clsx(
        `
        text-lg
        leading-relaxed
        text-white/70
        `,
        className
      )}
    >
      {children}
    </p>
  );
}