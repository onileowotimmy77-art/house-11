import { ReactNode } from "react";

interface ArchiveFrameProps {
  children: ReactNode;
  className?: string;
}

export default function ArchiveFrame({
  children,
  className = "",
}: ArchiveFrameProps) {
  return (
    <div
      className={`mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-16 ${className}`}
    >
      {children}
    </div>
  );
}