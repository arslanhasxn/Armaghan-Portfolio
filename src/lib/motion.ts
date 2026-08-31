export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const VIEWPORT = {
  once: true,
  margin: "-8% 0px -8% 0px" as const,
  amount: 0.2 as const,
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(8px)",
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: EASE_OUT,
      delay,
    },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: EASE_OUT, delay },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.04,
    },
  },
};

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: "blur(8px)",
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.65,
      ease: EASE_OUT,
    },
  },
};

export const wordContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.05,
    },
  },
};

export const wordItem = {
  hidden: {
    y: "110%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: EASE_OUT,
    },
  },
};

export const lineContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const lineItem = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: EASE_OUT,
    },
  },
};
