export const sectionSpacing = {
  sm: "py-20",
  md: "py-28",
  lg: "py-36",
  xl: "py-48",
} as const;

export const Layout = {
  gutter:
    "px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20",
}  as const;

export const SectionSpacing = {
  sm: "py-24",
  md: "py-32",
  lg: "py-40",
  xl: "py-48",
  hero: "pt-40 pb-28",
} as const;

export type SectionSpacingKey = keyof typeof SectionSpacing;