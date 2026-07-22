"use client";

import clsx from "clsx";

interface CheckboxFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  className?: string;
}

export default function CheckboxField({
  label,
  className,
  ...props
}: CheckboxFieldProps) {
  return (
    <label
      className={clsx(
        `
        flex
        cursor-pointer
        items-start
        gap-5
        `,
        className
      )}
    >
      <input
        {...props}
        type="checkbox"
        className="
          mt-1
          h-5
          w-5

          appearance-none

          border
          border-white/20

          bg-transparent

          transition-colors
          duration-300

          checked:border-white
          checked:bg-white

          hover:border-white/40

          focus:outline-none
          focus:border-white
        "
      />

      <span
        className="
          text-base
          leading-7
          text-white/75
        "
      >
        {label}
      </span>
    </label>
  );
}