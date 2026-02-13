import { Variants } from 'framer-motion';

export const pageTransition: Variants = {
  initial: {
    clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
    opacity: 0,
  },
  animate: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

export const honeycombTransition: Variants = {
  initial: {
    scale: 0,
    rotate: -30,
    opacity: 0,
  },
  animate: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96],
      staggerChildren: 0.05,
    },
  },
  exit: {
    scale: 20,
    rotate: 30,
    opacity: 0,
    transition: {
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

export const fadeInUp: Variants = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

export const scaleIn: Variants = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

export const slideInLeft: Variants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

export const slideInRight: Variants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem: Variants = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

export const hexagonReveal: Variants = {
  initial: {
    clipPath: 'polygon(50% 0%, 50% 0%, 50% 50%, 50% 50%, 50% 100%, 50% 100%)',
    opacity: 0,
  },
  animate: {
    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

export const beeFloat = {
  y: [0, -10, 0, 10, 0],
  rotate: [-5, 5, -5, 5, -5],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

export const honeyDrip: Variants = {
  initial: {
    scaleY: 0,
    originY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 1.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

export const glowPulse = {
  boxShadow: [
    '0 0 20px rgba(244, 166, 35, 0.3)',
    '0 0 40px rgba(244, 166, 35, 0.6)',
    '0 0 20px rgba(244, 166, 35, 0.3)',
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};
