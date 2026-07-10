export const ease = [0.22, 1, 0.36, 1] as const;

export const transition = {
  duration: 0.9,
  ease,
};

export const fastTransition = {
  duration: 0.6,
  ease,
};

export const slowTransition = {
  duration: 1.3,
  ease,
};

export const viewport = {
    once: true,
    amount: 0.8,
};