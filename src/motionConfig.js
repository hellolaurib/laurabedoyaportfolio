export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export const pageTransitionTiming = { duration: 0.35, ease: [0.22, 1, 0.36, 1] };

export const revealInitial = { opacity: 0, y: 24 };
export const revealAnimate = { opacity: 1, y: 0 };
export const revealViewport = { once: true, margin: '-80px' };
export const revealTiming = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };
