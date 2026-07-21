export const MotionDuration = {
  instant: 0.15,
  fast: 0.25,
  normal: 0.45,
  slow: 0.7,
  cinematic: 1.0,
} as const;

export const MotionEase = {
  standard: [0.22, 1, 0.36, 1] as const,
  smooth: [0.25, 0.1, 0.25, 1] as const,
  gentle: [0.4, 0, 0.2, 1] as const,
} as const;

export const MotionDelay = {
  none: 0,
  xs: 0.05,
  sm: 0.08,
  md: 0.12,
  lg: 0.18,
} as const;