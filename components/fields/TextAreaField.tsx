"use client";

import clsx from "clsx";

interface TextAreaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export default function TextAreaField({
  className,
  ...props
}: TextAreaFieldProps) {
  return (
    <textarea
      {...props}
      className={clsx(
        `
        min-h-[140px]
        w-full

        resize-none

        border-b
        border-white/10

        bg-transparent

        px-0
        py-3

        text-lg
        leading-8
        tracking-[-0.02em]
        text-white

        placeholder:text-white/20

        transition-colors
        duration-300

        outline-none

        hover:border-white/20
        focus:border-white

        disabled:cursor-not-allowed
        disabled:border-white/5
        disabled:text-white/25
        `,
        className
      )}
    />
  );
}