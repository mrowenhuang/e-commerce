import type { Variants } from "motion/react";

export const container = (delay: number) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // ini untuk delay setiap anaknya muncul
      staggerChildren: 1,
      // ini utuk delay di awal
      delayChildren: delay || 5,
    },
  },
});

export const item: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeIn", //  BENAR: Pasang ease di sini untuk mengatur transisi objek fisiknya
      duration: 0.5, // Opsional: tentukan durasi animasinya
    },
  },
};

export const fadeItem: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      ease: "easeIn", //  BENAR: Pasang ease di sini untuk mengatur transisi objek fisiknya
      duration: 0.5, // Opsional: tentukan durasi animasinya
    },
  },
};
